import { Injectable } from '@angular/core';

export interface DocItem {
  id: string;
  name: string;
  examples?: string[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
}

const DOCS = [
  {
    id: 'survey',
    name: '问卷调查',
    summary: 'survey, editor, renderer',
    items: [
      {id: 'survey-editor', name: '编辑器'},
      {id: 'survey-renderer', name: '生成'}
    ]
  }
];

const ALL_ITEMS = DOCS.reduce((result, category) => result.concat(category.items), []);

@Injectable()
export class SurveyMenu {
  public getItemsInCategories(): DocCategory[] {
    return DOCS;
  }

  public getAllItems(): DocItem[] {
    return ALL_ITEMS;
  }

  public getItemById(id: string): DocItem {
    return ALL_ITEMS.find((i) => i.id === id);
  }

  public getCategoryById(id: string): DocCategory {
    return DOCS.find((c) => c.id === id);
  }
}
