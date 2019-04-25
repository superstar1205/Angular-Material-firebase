import {Component} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';

import {Accordion} from '../shared/components/accordion/accordion.component';

import {AccordionGroup} from
  '../shared/components/accordion/accordion-group.component';

// Import NgFor directive
import {NgFor} from '@angular/common';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
      XLarge,
      Accordion,
      AccordionGroup,
      NgFor
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };

  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  isOpen: boolean = false;

  groups: Array<any> = [
      {
          heading: 'Dynamic 1',
          content: 'I am dynamic!'
      },
      {
          heading: 'Dynamic 2',
          content: 'Dynamic as well'
      }
  ];

  removeDynamic() {
      this.groups.pop();
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
