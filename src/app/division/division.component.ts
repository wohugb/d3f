import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'division',
  styles: [``],
  template: `
    <h1>行政区划</h1>
    <div>
      最新县及县以上行政区划代码 <pre>截止2016年7月31日</pre>
    </div>
    <div>
      <h3>国家统计局设管司 <small>2017-03-10 10:33</small></h3>
    </div>
    <pre>{{ division | json }}</pre>
  `
})
export class DivisionComponent implements OnInit {

  public division: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.division = data.yourData;
      });

    console.log('加载 `行政区划` 组件');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('异步 mockData', json);
          this.division = json;
        });

    });
  }

}
