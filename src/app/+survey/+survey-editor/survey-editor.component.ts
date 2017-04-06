import { Component, OnInit } from '@angular/core';
import * as ko from 'knockout';
import * as SurveyEditor from 'surveyjs-editor';


let zhSurveyStrings = {
  // survey templates
  survey: {
    dropQuestion: '请拖拽问题到这里.',
    copy: '复制',
    addToToolbox: '添加到工具箱',
    deletePanel: '删除面板',
    deleteQuestion: '删除问题'
  }
};
// questionTypes
zhSurveyStrings.qt = {
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
};
// Strings in Editor
zhSurveyStrings.ed = {
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
};
// Properties
zhSurveyStrings.p = {
  addRowText: 'Bouton ajouter une ligne',
  cellType: 'Type de cellule',
  choices: 'Choix',
  choicesByUrl: 'Choix par API',
  choicesOrder: 'Ordre des choix',
  clearInvisibleValues: '清除可见值',
  colCount: 'Nombre de colonnes',
  cols: 'Nombre de cols',
  columnColCount: 'Nombre de colonnes',
  columnMinWidth: 'Largeur minimale des colonnes',
  columns: 'Colonnes',
  commentText: 'Description champ commentaire',
  completeText: 'Texte questionnaire finalisé',
  completedHtml: 'Html questionnaire finalisé',
  cookieName: 'Nom du cookie',
  edit: 'Editer',
  focusFirstQuestionAutomatic: 'Focus sur la première question automatiquement',
  goNextPageAutomatic: 'Aller à la page suivante automatiquement',
  hasComment: 'Champs commentaire ?',
  hasOther: 'Choix autre ?',
  horizontalScroll: 'Scroll horizontal',
  imageHeight: 'Hauteur de l \'image',
  imageWidth: 'Largeur de l\'image',
  indent: 'Indentation',
  inputType: 'Type de champs',
  isAllRowRequired: 'Toutes les lignes sont-elle obligatoires ?',
  isRequired: 'Requis ?',
  itemSize: 'Nombre maximum de caractères',
  items: 'Items',
  locale: 'Langue',
  maxRateDescription: 'Description note maximum',
  maxSize: 'Taille maximum',
  minRateDescription: 'Description note minimum',
  minRowCount: 'Nombre de ligne minimal',
  mode: 'Mode d\'affichage',
  name: 'Nom',
  optionsCaption: 'Texte par défaut',
  otherErrorText: 'Texte Erreur champs autre',
  otherText: { name: 'Text autre', title: 'Champ commentaire ou choix autre' },
  pageNextText: 'Bouton page suivante',
  pagePrevText: 'Bouton page précédente',
  page_title: { name: 'titre', title: 'Titre de la page' },
  placeHolder: 'PlaceHolder (indice dans le champs)',
  questionStartIndex: 'Index de numérotation des question',
  questionTitleLocation: 'Emplacement titre question',
  questionTitleTemplate: { name: 'Template d\'affichage des question', title: 'Exemple: {no}) {title} {require}:' },
  rateValues: 'Barème',
  removeRowText: 'Bouton supprimer une ligne',
  requiredText: 'Texte pour les champs requis',
  rowCount:'Nombre de lignes',
  rows:'Nombre de ligne',
  sendResultOnPageNext: '',
  showCompletedPage: 'Voir la page formulaire complété ?',
  showNavigationButtons: 'Boutons de navigation',
  showPageNumbers: 'Numérotation des pages',
  showPageTitles: 'Titre des pages',
  showPreview: 'Voir la prévisualisation',
  showProgressBar: 'Barre de progression',
  showQuestionNumbers: 'Numérotation des questions',
  showTitle: 'Afficher le titre',
  size: 'Nombre maximum de caractères',
  startWithNewLine: 'Commencer avec une nouvelle ligne',
  storeDataAsText: 'Stocker les données comme du text',
  storeOthersAsComment: 'Sauvegarder choix autre comme commentaire',
  surveyId: 'Id du questionnaire',
  surveyPostId: 'Id POST questionnaire',
  survey_title: { name: 'titre', title: 'Il sera affiché sur chaque page.' },
  title: { name: 'Titre', title: 'Laissez vide, si meme texte que le "Nom"' },
  triggers: '触发',
  validators: 'Validateurs',
  visibleIf: 'Visible si ',
  width: 'Largeur'
};
// Property Editors
zhSurveyStrings.pe = {
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
};

// Operators
zhSurveyStrings.op = {
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
};

// Embed window
zhSurveyStrings.ew = {
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
};

// Properties
zhSurveyStrings.p = {
  name: '名字',
  title: { name: '标题', title: '如果与 \'Name\' 相同,留空.' },
  survey_title: { name: '标题', title: '每页都将显示.' },
  page_title: { name: '标题', title: '页面标题' }
};

SurveyEditor.editorLocalization.locales['zh'] = zhSurveyStrings;
SurveyEditor.editorLocalization.currentLocale = 'zh';


console.log('异步加载组件 `SurveyEditor`');

@Component({
  selector: 'survey-editor',
  template: `<div id='surveyEditorContainer'></div>`,
})
export class SurveyEditorComponent implements OnInit  {
  public editor: SurveyEditor.SurveyEditor;

  public ngOnInit() {
    let editorOptions = {showEmbededSurveyTab: true};
    this.editor = new SurveyEditor.SurveyEditor('surveyEditorContainer', editorOptions);
    this.editor.saveSurveyFunc = this.saveMySurvey;
  }

  private saveMySurvey = () => {
    console.log(JSON.stringify(this.editor.text));
  }
}
