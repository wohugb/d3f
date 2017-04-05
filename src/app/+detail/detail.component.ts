import { Component, OnInit } from '@angular/core';

console.log('`Detail` 异步加载组件');

@Component({
  selector: 'detail',
  template: `
    <h1>子详细页面</h1>
    <span>
      <a [routerLink]=" ['./child-detail'] ">
        子详细
      </a>
    </span>
    <router-outlet></router-outlet>
  `,
})
export class DetailComponent implements OnInit {

  public ngOnInit() {
    console.log('你好 `Detail` 组件');
  }

}
