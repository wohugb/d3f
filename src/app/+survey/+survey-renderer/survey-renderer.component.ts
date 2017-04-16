import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import * as Survey from 'survey-angular';

import { SurveyService, AlertService } from '../../_services';

@Component({
  selector: 'survey-renderer',
  // If you want to show survey, uncomment the line below
  // template: `<h1>Survey</h1><survey [json]="json"></survey>`
  // If you want to show survey editor, uncomment the line below
  templateUrl: 'survey-renderer.component.html',
})
// export class SurveyRendererComponent implements OnInit {
//   @Input() public json: any;

//   public ngOnInit() {
//       let surveyModel = new Survey.ReactSurveyModel(this.json);
//       Survey.SurveyNG.render('surveyElement', { model: surveyModel });
//   }
// }

export class SurveyRendererComponent implements OnInit, OnDestroy {
  private id: any;
  private sub: any;
  private survey: any;
  private loading: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private surveyService: SurveyService
  ) {}

  public ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      //  this.id = params['id'];
       console.log('params', this.id);
       this.getById(params.id);
    });
  }
  public ngOnDestroy() {
    this.sub.unsubscribe();
  }
  private getById(id) {
    this.surveyService.getById(id).subscribe((survey) => {
      let surveyModel = new Survey.ReactSurveyModel(survey);
      Survey.SurveyNG.render('surveyElement', { model: surveyModel, generateValidJSON: true });
      surveyModel.onComplete.add( (s) => {
        // var result = "\nThe results are:\n" + JSON.stringify(survey.data);
        // document.getElementById('survey_result').innerHTML = result;
        // document.getElementById('survey_oncomplete').style.display = '';
        // console.log(surveyModel.data, typeof surveyModel.data);
        this.surveyService.gather(id, surveyModel.data).subscribe(
            (data) => {
                this.router.navigate(['/survey/gather']);
            },
            (error) => {
                this.alertService.error(error);
                this.loading = false;
            });
      });
    });
  }
}
