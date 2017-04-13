import { Component, OnInit } from '@angular/core';
import * as ko from 'knockout';
import * as SurveyEditor from 'surveyjs-editor';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SurveyService } from '../../_services';
import { Survey } from '../../_models/survey';

let zhSurveyStrings = {
  // survey templates
  survey: {
    dropQuestion: '请拖拽问题到这里.',
    copy: '复制',
    addToToolbox: '添加到工具箱',
    deletePanel: '删除面板',
    deleteQuestion: '删除问题'
  },
  // questionTypes
  qt: {
    checkbox: '复选框',
    comment: '注释',
    dropdown: '下拉',
    file: '文件',
    html: 'Html',
    matrix: '矩阵 (单选)',
    matrixdropdown: '矩阵 (多选)',
    matrixdynamic: '矩阵 (动态行)',
    multipletext: '多文本',
    panel: '面板',
    radiogroup: '单选组',
    rating: '评分',
    text: '单输入'
  },
  // Strings in Editor
  ed: {
    addNewPage: '添加新页',
    newPageName: '页面',
    newQuestionName: 'question',
    newPanelName: '面板',
    testSurvey: '测试表单',
    testSurveyAgain: '重新测试表单',
    testSurveyWidth: '表单宽度: ',
    embedSurvey: '内嵌',
    saveSurvey: '保存表单',
    designer: '表单编排',
    jsonEditor: 'JSON 编辑器',
    undo: '撤销',
    redo: '重做',
    options: '选项',
    generateValidJSON: '生成有效的JSON',
    generateReadableJSON: '生成可读的JSON',
    toolbox: '工具箱',
    delSelObject: '删除所选对象',
    correctJSON: '请纠正JSON.',
    surveyResults: '表单结果: '
  },
  // Properties
  p: {
    name: '名字',
    title: { name: '标题', title: '如果与 \'Name\' 相同,留空.' },
    survey_title: { name: '标题', title: '每页都将显示.' },
    page_title: { name: '标题', title: '页面标题' },
    addRowText: '添加行文本',
    cellType: '单元类型',
    choices: '选择',
    choicesByUrl: 'Choix par API',
    choicesOrder: '选择排序',
    clearInvisibleValues: '清除可见值',
    colCount: '列数',
    cols: '列数',
    columnColCount: '列数',
    columnMinWidth: '列最小宽度',
    columns: '列',
    commentText: '注释文本',
    completeText: '结束文本',
    completedHtml: '结束Html',
    cookieName: 'cookie名',
    edit: '编辑',
    focusFirstQuestionAutomatic: '自动聚焦第一个问题',
    goNextPageAutomatic: '自动下一页',
    hasComment: '是否有注释 ?',
    hasOther: '是否有其它 ?',
    horizontalScroll: '水平滚动',
    imageHeight: '图片高度',
    imageWidth: '图片宽度',
    indent: '缩排',
    inputType: '输入类型',
    isAllRowRequired: '是否需要所有行 ?',
    isRequired: '是否必须 ?',
    itemSize: '项目大小',
    items: '项目',
    locale: '语言',
    maxRateDescription: '最大率描述',
    maxSize: '最大值',
    minRateDescription: '最小率描述',
    minRowCount: '最少行数',
    mode: '模型',
    optionsCaption: '选项标题',
    otherErrorText: '其它错误问呢',
    otherText: {
      name: '其它文本',
      title: '其他文本'
    },
    pageNextText: '下一页',
    pagePrevText: '上一页',
    placeHolder: '占位文字',
    questionStartIndex: '问题开始索引',
    questionTitleLocation: '问题标题位置',
    questionTitleTemplate: {
      name: '问题模板',
      title: '例如: {no}) {title} {require}:'
    },
    rateValues: '率值',
    removeRowText: '删除行文本',
    requiredText: '必须文本',
    rowCount: '行数',
    rows: '行',
    sendResultOnPageNext: '发送结果到下一页',
    showCompletedPage: '显示完成页?',
    showNavigationButtons: '展示导航按钮',
    showPageNumbers: '显示页数',
    showPageTitles: '显示页面标题',
    showPreview: '显示预览',
    showProgressBar: '显示进度条',
    showQuestionNumbers: '显示问题数',
    showTitle: '显示标题',
    size: '大小',
    startWithNewLine: '开启新行',
    storeDataAsText: '存储数据为文本',
    storeOthersAsComment: '存储其它为注释',
    surveyId: '表单ID',
    surveyPostId: '表单发布ID',
    triggers: '触发',
    validators: '验证器',
    visible: '可见',
    visibleIf: '显示条件 ',
    width: '宽度'
  },
  // Property Editors
  pe: {
    apply: '应用',
    ok: 'OK',
    cancel: '取消',
    reset: '重置',
    close: '关闭',
    delete: '删除',
    addNew: '添加',
    removeAll: '删除所有',
    edit: '编辑',
    empty: '<empty>',
    fastEntry: '快速入口',
    formEntry: '表单入口',
    testService: '测试服务',
    expressionHelp: '请输入一个布尔表达式. 必须返回 true 保证问题/页面可见.' +
    '例如: {question1} = \'value1\' or ({question2} = 3 and {question3} < 5)',
    propertyIsEmpty: '请输入属性值',
    value: '值',
    text: '文本',
    required: '必须?',
    columnEdit: '编辑列: {0}',
    hasOther: '有其它项目',
    name: '名字',
    title: '标题',
    cellType: '单元类型',
    colCount: '列统计',
    choicesOrder: '排序方式',
    visible: '是否可见?',
    isRequired: '是否必须?',
    startWithNewLine: '需要换行吗?',
    rows: '行数',
    placeHolder: '输入占位文字',
    showPreview: '是否预览图片?',
    storeDataAsText: '以文本形式存储文件内容到 JSON',
    maxSize: '文件最大值单位字节',
    imageHeight: '图片高度',
    imageWidth: '图片宽度',
    rowCount: '行数',
    addRowText: '添加行按钮文本',
    removeRowText: '删除行按钮文本',
    minRateDescription: '最小值描述',
    maxRateDescription: '最大值描述',
    inputType: '输入类型',
    optionsCaption: '选择标题',
    qEditorTitle: '编辑问题: {0}',
    tabs: {
      general: '一般',
      fileOptions: '选项',
      html: 'Html 编辑器',
      columns: '列',
      rows: '行',
      choices: '选项',
      visibleIf: '显示条件',
      rateValues: '率值',
      choicesByUrl: '来自Web选项',
      matrixChoices: '默认选项',
      multipleTextItems: '文本输入'
    },
    editProperty: '编辑属性 \'{0}\'',
    items: '[ 项目: {0} ]',
    enterNewValue: '请, 输入值.',
    noquestions: '表单里没有任何问题.',
    createtrigger: '请创建一个触发器',
    triggerOn: 'On ',
    triggerMakePagesVisible: '使页面可见:',
    triggerMakeQuestionsVisible: '使问题可见:',
    triggerCompleteText: '如果成功完成调查.',
    triggerNotSet: '未设置触发器',
    triggerRunIf: '如果运行',
    triggerSetToName: '改变值为: ',
    triggerSetValue: '到: ',
    triggerIsVariable: '调查结果中不能有变量.',
    verbChangeType: '修改类型 ',
    verbChangePage: '修改页面 '
  },
  // Operators
  op: {
    empty: '空',
    notempty: '非空',
    equal: '等于',
    notequal: '不等于',
    contains: '包含',
    notcontains: '不包含',
    greater: '大于',
    less: '小于',
    greaterorequal: '大于等于',
    lessorequal: '小于等于'
  },
  // Embed window
  ew: {
    angular: 'Angular版',
    jquery: 'jQuery版',
    knockout: 'Knockout版',
    react: 'React版',
    vue: 'Vue版',
    bootstrap: '使用bootstrap样式',
    standard: '不用bootstrap样式',
    showOnPage: '单页面显示',
    showInWindow: '单窗口显示',
    loadFromServer: '从服务器加载表单 JSON 数据',
    titleScript: '脚本和样式',
    titleHtml: 'HTML',
    titleJavaScript: 'JavaScript'
  }
};

SurveyEditor.editorLocalization.locales['zh'] = zhSurveyStrings;
SurveyEditor.editorLocalization.currentLocale = 'zh';

@Component({
  selector: 'd3f-survey-viewer',
  template: `<div id='surveyEditorContainer'></div>`,
  styleUrls: ['survey-editor.component.scss']
})
export class SurveyEditorComponent implements OnInit {
  public editor: SurveyEditor.SurveyEditor;
  public urlPrefix: string;

  constructor(
    private http: Http,
    private surveyService: SurveyService,
    private survey: Survey
  ) {
    this.urlPrefix = 'http://api.d3f.pw/admin';
  }

  public ngOnInit() {
    let editorOptions = { showEmbededSurveyTab: true };
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  private saveMySurvey = () => {
    // this.http.post(this.urlPrefix + '/survey', { a: 'b' })
    //   .map((response: Response) => response.json());
    // let survey = JSON.stringify(this.editor.text);
    // this.survey = this.editor.text;
    this.surveyService.save( this.editor.text ).subscribe((survey) => { this.survey = survey; });
  }
  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ Authorization: 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers });
    }
  }
}
