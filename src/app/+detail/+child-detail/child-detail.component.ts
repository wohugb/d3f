import { Component, OnInit } from '@angular/core';

console.log('异步加载组件 `ChildDetail`');

@Component({
  selector: 'child-detail',
  template: `
    <h1>这里是子组件详情</h1>
  `,
})
export class ChildDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `ChildDetail` component');
  }

}
