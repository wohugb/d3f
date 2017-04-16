import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { SurveyMenu } from './survey.menu';
import { SurveyDemo } from './survey.demo';

const SMALL_WIDTH_BREAKPOINT = 840;

@Component({
  selector: 'app-survey-sidenav',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SurveyComponent implements OnInit {

  @ViewChild(MdSidenav) public sidenav: MdSidenav;

  constructor(public surveyMenu: SurveyMenu,
              public demoData: SurveyDemo,
              private _router: Router) {}

  public ngOnInit() {
    this._router.events.subscribe(() => {
        if (this.isScreenSmall()) {
          this.sidenav.close();
        }
      });
  }
  private isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`).matches;
  }
}
