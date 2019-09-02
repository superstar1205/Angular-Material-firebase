## Angular7 Interview Questions and Answers


|Sl. No  | Angular7 Questions|
|--------|---------------|
|01. |[Angular Commands](#angular-commands)|
|02. |[What is difference between Angular JIT compilation and AOT compilation?](#what-is-difference-between-angular-jit-compilation-and-aot-compilation)|
|03. |[How to optimize loading large data in angular?](#how-to-optimize-loading-large-data-in-angular)|
|04. |[How an Angular application gets started or loaded?](#how-an-angular-application-gets-started-or-loaded)|
|05. |[What is rxjs subject in Angular?](#what-is-rxjs-subject-in-angular)|
|06. |[What is rxjs BehaviorSubject, ReplaySubject and AsyncSubject in angular?](#what-is-rxjs-behaviorsubject--replaysubject-and-asyncsubject-in-angular)|
|07. |[What is difference between BehaviorSubject and Observable?](#what-is-difference-between-behaviorsubject-and-observable)|
|08. |[What is the difference between AngularJS and Angular?](#what-is-the-difference-between-angularjs-and-angular)|
|09. |[What are the key components of Angular?](#what-are-the-key-components-of-angular)|
|10. |[What are directives?](#what-are-directives)|
|11. |[What are components?](#what-are-components)|
|12. |[What are the differences between Component and Directive?](#what-are-the-differences-between-component-and-directive)|
|13. |[What is a template?](#what-is-a-template)|
|14. |[What is a module?](#what-is-a-module)|
|15. |[What are lifecycle hooks available?](#what-are-lifecycle-hooks-available)|
|16. |[What is a data binding?](#what-is-a-data-binding)|
|17. |[What is metadata?](#what-is-metadata)|
|18. |[What is a service worker and its role in Angular?](#what-is-a-service-worker-and-its-role-in-angular)|
|19. |[How to set time for caching in service-worker?](#how-to-set-time-for-caching-in-service-worker)|
|20. |[What is the difference between constructor() and ngOnInit()?](#what-is-the-difference-between-constructor---and-ngoninit-)|
|21. |[What is a service?](#what-is-a-service)|
|22. |[What is dependency injection in Angular?](#what-is-dependency-injection-in-angular)|
|23. |[What is the purpose of async pipe?](#what-is-the-purpose-of-async-pipe)|
|24. |[What is the option to choose between inline and external template file?](#what-is-the-option-to-choose-between-inline-and-external-template-file)|
|25. |[What is the purpose of ngFor directive?](#what-is-the-purpose-of-ngfor-directive)|
|26. |[What is the purpose of ngIf directive?](#what-is-the-purpose-of-ngif-directive)|
|27. |[What happens if you use script tag inside template?](#what-happens-if-you-use-script-tag-inside-template)|
|28. |[What is interpolation?](#what-is-interpolation)|
|29. |[What are template expressions?](#what-are-template-expressions)|
|30. |[What are template statements?](#what-are-template-statements)|
|31. |[How do you categorize data binding types?](#how-do-you-categorize-data-binding-types)|
|32. |[What are pipes?](#what-are-pipes)|
|33. |[What is a parameterized pipe?](#what-is-a-parameterized-pipe)|
|34. |[How do you chain pipes?](#how-do-you-chain-pipes)|
|35. |[What is a custom pipe?](#what-is-a-custom-pipe)|
|36. |[Give an example of custom pipe?](#give-an-example-of-custom-pipe)|
|37. |[What is the difference between pure and impure pipe?](#what-is-the-difference-between-pure-and-impure-pipe)|
|38. |[What is a bootstrapping module?](#what-is-a-bootstrapping-module)|
|39. |[What are observables?](#what-are-observables)|
|40. |[What is HttpClient and its benefits?](#what-is-httpclient-and-its-benefits)|
|41. |[Explain on how to use HttpClient with an example?](#explain-on-how-to-use-httpclient-with-an-example)|
|42. |[How can you read full response?](#how-can-you-read-full-response)|
|43. |[How do you perform Error handling?](#how-do-you-perform-error-handling)|
|44. |[What is RxJS?](#what-is-rxjs)|
|45. |[What is subscribing?](#what-is-subscribing)|
|46. |[What is an observable?](#what-is-an-observable)|
|47. |[What is an observer?](#what-is-an-observer)|
|48. |[What is the difference between promise and observable?](#what-is-the-difference-between-promise-and-observable)|
|49. |[What is multicasting?](#what-is-multicasting)|
|50. |[How do you perform error handling in observables?](#how-do-you-perform-error-handling-in-observables)|
|51. |[What is the short hand notation for subscribe method?](#what-is-the-short-hand-notation-for-subscribe-method)|
|52. |[What are the utility functions provided by RxJS?](#what-are-the-utility-functions-provided-by-rxjs)|
|53. |[What are observable creation functions?](#what-are-observable-creation-functions)|
|54. |[What will happen if you do not supply handler for observer?](#what-will-happen-if-you-do-not-supply-handler-for-observer)|
|55. |[What are angular elements?](#what-are-angular-elements)|
|56. |[What is the browser support of Angular Elements?](#what-is-the-browser-support-of-angular-elements)|
|57. |[What are custom elements?](#what-are-custom-elements)|
|58. |[Do I need to bootstrap custom elements?](#do-i-need-to-bootstrap-custom-elements)|
|59. |[Explain how custom elements works internally?](#explain-how-custom-elements-works-internally)|
|60. |[How to transfer components to custom elements?](#how-to-transfer-components-to-custom-elements)|
|61. |[What are the mapping rules between Angular component and custom element?](#what-are-the-mapping-rules-between-angular-component-and-custom-element)|
|62. |[How do you define typings for custom elements?](#how-do-you-define-typings-for-custom-elements)|
|63. |[What are dynamic components?](#what-are-dynamic-components)|
|64. |[What are the various kinds of directives?](#what-are-the-various-kinds-of-directives)|
|65. |[How do you create directives using CLI?](#how-do-you-create-directives-using-cli)|
|66. |[Give an example for attribute directives?](#give-an-example-for-attribute-directives)|
|67. |[What is Angular Router?](#what-is-angular-router)|
|68. |[What is the purpose of base href tag?](#what-is-the-purpose-of-base-href-tag)|
|69. |[What are the router imports?](#what-are-the-router-imports)|
|70. |[What is router outlet?](#what-is-router-outlet)|
|71. |[What are router links?](#what-are-router-links)|
|72. |[What are active router links?](#what-are-active-router-links)|
|73. |[What is router state?](#what-is-router-state)|
|74. |[What are router events?](#what-are-router-events)|
|75. |[What is activated route?](#what-is-activated-route)|
|76. |[How do you define routes?](#how-do-you-define-routes)|
|77. |[What is the purpose of Wildcard route?](#what-is-the-purpose-of-wildcard-route)|
|78. |[Do I need a Routing Module always?](#do-i-need-a-routing-module-always)|
|79. |[What is Angular Universal?](#what-is-angular-universal)|
|80. |[What are different types of compilation in Angular?](#what-are-different-types-of-compilation-in-angular)|
|81. |[What is JIT?](#what-is-jit)|
|82. |[What is AOT?](#what-is-aot)|
|83. |[Why do we need compilation process?](#why-do-we-need-compilation-process)|
|84. |[What are the advantages with AOT?](#what-are-the-advantages-with-aot)|
|85. |[What are the ways to control AOT compilation?](#what-are-the-ways-to-control-aot-compilation)|
|86. |[What are the restrictions of metadata?](#what-are-the-restrictions-of-metadata)|
|87. |[What are the two phases of AOT?](#what-are-the-two-phases-of-aot)|
|88. |[Can I use arrow functions in AOT?](#can-i-use-arrow-functions-in-aot)|
|89. |[What is the purpose of metadata json files?](#what-is-the-purpose-of-metadata-json-files)|
|90. |[Can I use any javascript feature for expression syntax in AOT?](#can-i-use-any-javascript-feature-for-expression-syntax-in-aot)|
|91. |[What is folding?](#what-is-folding)|
|92. |[What are macros?](#what-are-macros)|
|93. |[Give an example of few metadata errors?](#give-an-example-of-few-metadata-errors)|
|94. |[What is metadata rewriting?](#what-is-metadata-rewriting)|
|95. |[How do you provide configuration inheritance?](#how-do-you-provide-configuration-inheritance)|
|96. |[How do you specify angular template compiler options?](#how-do-you-specify-angular-template-compiler-options)|
|97. |[How do you enable binding expression validation?](#how-do-you-enable-binding-expression-validation)|
|98. |[What is the purpose of any type cast function?](#what-is-the-purpose-of-any-type-cast-function)|
|99. |[What is Non null type assertion operator?](#what-is-non-null-type-assertion-operator)|
|100. |[What is type narrowing?](#what-is-type-narrowing)|
|101. |[How do you describe various dependencies in angular application?](#how-do-you-describe-various-dependencies-in-angular-application)|
|102. |[What is zone?](#what-is-zone)|
|103. |[What is the purpose of common module?](#what-is-the-purpose-of-common-module)|
|104. |[What is codelyzer?](#what-is-codelyzer)|
|105. |[What is angular animation?](#what-is-angular-animation)|
|106. |[What are the steps to use animation module?](#what-are-the-steps-to-use-animation-module)|
|107. |[What is State function?](#what-is-state-function)|
|108. |[What is Style function?](#what-is-style-function)|
|109. |[What is the purpose of animate function?](#what-is-the-purpose-of-animate-function)|
|110. |[What is transition function?](#what-is-transition-function)|
|111. |[How to inject the dynamic script in angular?](#how-to-inject-the-dynamic-script-in-angular)|
|112. |[What is Angular Ivy?](#what-is-angular-ivy)|
|113. |[What are the features included in ivy preview?](#what-are-the-features-included-in-ivy-preview)|
|114. |[Can I use AOT compilation with Ivy?](#can-i-use-aot-compilation-with-ivy)|
|115. |[What is Angular Language Service?](#what-is-angular-language-service)|
|116. |[How do you install angular language service in the project?](#how-do-you-install-angular-language-service-in-the-project)|
|117. |[Is there any editor support for Angular Language Service?](#is-there-any-editor-support-for-angular-language-service)|
|118. |[Explain the features provided by Angular Language Service?](#explain-the-features-provided-by-angular-language-service)|
|119. |[How do you add web workers in your application?](#how-do-you-add-web-workers-in-your-application)|
|120. |[What are the limitations with web workers?](#what-are-the-limitations-with-web-workers)|
|121. |[What is Angular CLI Builder?](#what-is-angular-cli-builder)|
|122. |[What is a builder?](#what-is-a-builder)|
|123. |[How do you invoke a builder?](#how-do-you-invoke-a-builder)|
|124. |[How do you create app shell in Angular?](#how-do-you-create-app-shell-in-angular)|
|125. |[What are the case types in Angular?](#what-are-the-case-types-in-angular)|
|126. |[What are the class decorators in Angular?](#what-are-the-class-decorators-in-angular)|
|127. |[What are class field decorators?](#what-are-class-field-decorators)|
|128. |[What is declarable in Angular?](#what-is-declarable-in-angular)|
|129. |[What are the restrictions on declarable classes?](#what-are-the-restrictions-on-declarable-classes)|
|130. |[What is a DI token?](#what-is-a-di-token)|
|131. |[What is Angular DSL?](#what-is-angular-dsl)|
|132. |[What is Bazel tool?](#what-is-bazel-tool)|
|133. |[What are the advantages of Bazel tool?](#what-are-the-advantages-of-bazel-tool)|
|134. |[How do you use Bazel with Angular CLI?](#how-do-you-use-bazel-with-angular-cli)|
|135. |[How do you run Bazel directly?](#how-do-you-run-bazel-directly)|
|136. |[What is Angular Framework?](#what-is-angular-framework)|
|137. |[What is angular CLI?](#what-is-angular-cli)|
|138. |[What is Ng-Content/Content Projection?](#what-is-ng-content-content-projection)|
|139. |[How can I select an element in a component template?](#how-can-i-select-an-element-in-a-component-template)|
|140. |[What is Redux and how does it relate to an Angular app?](#what-is-redux-and-how-does-it-relate-to-an-angular-app)|
|141. |[How routing works in Angular?](#how-routing-works-in-angular)|
|142. |[Explain local reference variables, @ViewChild()| and @ContentChild()|.](#explain-local-reference-variables---viewchild---and--contentchild)|
|143. |[How to make sure that single instance will be used in an entire application?](#how-to-make-sure-that-single-instance-will-be-used-in-an-entire-application)|
|144. |[How do you reference the host of a component?](#how-do-you-reference-the-host-of-a-component)|
|145. |[Why would you use renderer methods instead of using native element methods? / What is difference between Renderer and ElementRef in angular?](#why-would-you-use-renderer-methods-instead-of-using-native-element-methods----what-is-difference-between-renderer-and-elementref-in-angular)|
|146. |[How would you control size of an element on resize of the window in a component?](#how-would-you-control-size-of-an-element-on-resize-of-the-window-in-a-component)|
|147. |[How to cache an observable data?](#how-to-cache-an-observable-data)|
|148. |[What do you understand by a template variable?](#what-do-you-understand-by-a-template-variable)|
|149. |[What is shadow DOM? How is it helping Angular to perform better?](#what-is-shadow-dom--how-is-it-helping-angular-to-perform-better)|
|150. |[How do you use a JavaScript third party lib in an Angular App?](#how-do-you-use-a-javascript-third-party-lib-in-an-angular-app)|
|151. |[Can we create two Components with the same name in two different .ts files?](#can-we-create-two-components-with-the-same-name-in-two-different-ts-files)|
|152. |[What's the difference between RouterModule.forRoot(ROUTES)| and RouterModule.forChild(ROUTES)|?](#what-s-the-difference-between-routermoduleforroot-routes--and-routermoduleforchild-routes-)|
|153. |[What are the difference between @Inject and @Injectable?](#what-are-the-difference-between--inject-and--injectable)|
|154. |[What are Zones? What is Change Detection? What would be a good use for NgZone service?](#what-are-zones--what-is-change-detection--what-would-be-a-good-use-for-ngzone-service)|
|155. |[What is auxiliary routes in angular?](#what-is-auxiliary-routes-in-angular)|
|156. |[How do you get a reference to a child component?](#how-do-you-get-a-reference-to-a-child-component)|
|157. |[How do you listen for events in a component?](#how-do-you-listen-for-events-in-a-component)|
|158. |[How do you force a change detection cycle?](#how-do-you-force-a-change-detection-cycle)|
|159. |[How would you get a reference to a parent component?](#how-would-you-get-a-reference-to-a-parent-component)|
|160. |[What does forwardRef do?](#what-does-forwardref-do)|
|161. |[What are entryComponents?](#what-are-entrycomponents)|
|162. |[When building custom form components, what interface do they components need to implement to particpate in forms?](#when-building-custom-form-components--what-interface-do-they-components-need-to-implement-to-particpate-in-forms)|
|163. |[What are the best way to unsubscribe from Observables in Angular?](#what-are-the-best-way-to-unsubscribe-from-observables-in-angular)|
|164. |[How Event Emitters works in Angular?](#how-event-emitters-works-in-angular)|
|165. |[How will you intercept http to inject header to each http call?](#how-will-you-intercept-http-to-inject-header-to-each-http-call)|
|166. |[How will you parallelize multiple observable call?](#how-will-you-parallelize-multiple-observable-call)|
|167. |[How will you put one async call before another?](#how-will-you-put-one-async-call-before-another)|
|168. |[How can you cancel a router navigation?](#how-can-you-cancel-a-router-navigation)|
|169. |[How would you animate routing?](#how-would-you-animate-routing)|
|170. |[How would you make sure an api call that needs to be called only once but with multiple conditions?](#how-would-you-make-sure-an-api-call-that-needs-to-be-called-only-once-but-with-multiple-conditions)|
|171. |[If you need to respond to two different Observable/Subject with one callback function, how would you do it? (ex: if you need to change the url through route parameters and with prev/next buttons).](#if-you-need-to-respond-to-two-different-observable-subject-with-one-callback-function--how-would-you-do-it---ex--if-you-need-to-change-the-url-through-route-parameters-and-with-prev-next-buttons)|
|172. |[How can you access validation errors in the template to display error messages?](#how-can-you-access-validation-errors-in-the-template-to-display-error-messages)|
|173. |[How do you unit test a service with a dependency?](#how-do-you-unit-test-a-service-with-a-dependency)|
|174. |[What is the difference between an observable and a promise?](#what-is-the-difference-between-an-observable-and-a-promise)|
|175. |[What is the difference between an observable and a subject?](#what-is-the-difference-between-an-observable-and-a-subject)|
|176. |[What the importance of Dirty Flag, pristine, touched, untouched, valid, invalid?](#what-the-importance-of-dirty-flag--pristine--touched--untouched--valid--invalid)|
|177. |[what is defer in promise?](#what-is-defer-in-promise)|
|178. |[What is the difference between an Annotation and a Decorator in Angular?](#what-is-the-difference-between-an-annotation-and-a-decorator-in-angular)|
|179. |[What is transclusion in angular?](#what-is-transclusion-in-angular)|
|180. |[If your data model is updated outside the ‘Zone’, explain the process how will you the view?](#if-your-data-model-is-updated-outside-the--zone---explain-the-process-how-will-you-the-view)|
|181. |[What is the process of inserting an embedded view from a prepared TemplateRef?](#what-is-the-process-of-inserting-an-embedded-view-from-a-prepared-templateref)|


01. #### Angular Commands

|Commands                             |Description                                                                  |
|-------------------------------------|-----------------------------------------------------------------------------|
|ng new project-name		              | Create an Angular project with Angular CLI                                  |
|ng serve --open                      | Builds and serves app, rebuilding on file changes                           |
|ng test						                  | Running unit tests                                                          |
|ng e2e 						                  | Running end-to-end tests with protractor framwork                           |
|ng generate					                | Generate Angular components                                                 |
|ng lint						                  | prints out linting errors                                                   |
|ng build						                  | Compiles an Angular app into an output directory named dist/ at the given output path. |
|ng build --prod				              | apply uglify and minify to reduce the bundle as well make angular work in production mode which reduces runtime warnings given by angular compiler as well increase performance. The ng build command with the --prod meta-flag (ng build --prod) compiles with AOT by default.                          |
|ng build --dev				                |                                                                             |
|ng get/ng set					              | Set a value in the Angular CLI configuration                                |
|ng doc						                    | Opens a browser window with the keyword as search in Angular documentation. | 
|ng eject						                  | ejects your app and output the proper webpack configuration and scripts     |
|ng xi18n						                  | Extracts i18n messages from the templates.                                  |
|ng test --watch=false --code-coverage| Generate Code Coverage Reports                                              |
|npm run                              | Runs an Architect target with an optional custom builder configuration defined in  project. |
|ng build --aot                       | generally when we serve angular project all the angular files are downloaded on browser and it will compile and execute the application on the browser but in aot entire application delivered to the browser is precompiled hence improves the performance. |
|ng add @angular/pwa                  |Adds support for an external library to project  |
|ng xi18n --output-path src/locale    |Internationalization |
|ng generate web-worker app           |Add a Web Worker to angular app|


#### What is difference between Angular JIT compilation and AOT compilation?

Angular has 2 types of build dev build or prod build :

**Just-in-Time (JIT)**, which compiles app in the browser at runtime.  
**Ahead-of-Time (AOT)**, which compiles app at build time.  
```
ng build or ng build --dev   -  this is for development build
ng build --prod              -  this is for production build
```

|Dev Build	                                |Production build                           |
|-------------------------------------------|-------------------------------------------|
|Source maps(.js.map files) are generated	  |Source maps not generated                  |
|Dev Build is not minified and uglified	    |Production Build is minified and uglified  |
|Dev build is not tree shaked	              |Production build is tree shaked            |
|No AOT compilation	                        |AOT compilation takes place                |


**minification** - process of removing excess whitespace, comments and optinal tokens like curly braces and semi colons
**uglification** - process of transforming code to use short variable and function names  
**tree shaking** -  is the process of removing any code that we are not actually using in our application from the final bundle

#### How to optimize loading large data in angular?
**Load Time Performance**
1. **AOT**: The Angular Ahead-of-Time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code. Compiling your application during the build process provides a faster rendering in the browser.
2. **Tree-shaking**: This is the process of removing unused code resulting in smaller build size. In **angular-cli**, Tree-Shaking is enabled by default.
3. **Uglify**: It is the process where the code size is reduced using various code transformations like mangling, removal of white spaces, removal of comments etc. For webpack use uglify plugin and with angular-cli specify the “prod” flag to perform the uglification process.
4. **Lazy loading**: Lazy loading is the mechanism where instead of loading complete app, we load only the modules which are required at the moment thereby reducing the initial load time. 
5. **Ivy Render Engine**: It results in much smaller bundle size than the current engine with improved debugging experience.
6. **RxJS**: RxJS makes the whole library more tree-shakable thereby reducing the final bundle size. However, it has some breaking changes like operators chaining is not possible instead, pipe() function (helps in better tree shaking) is introduced to add operators. 
7. **Service worker cache**: A service worker is a script that runs in the web browser and manages caching for an application.
8. **defer attribute**: Mentioning defer attribute to script tag will defer the loading of the scripts (sychronous) until the document is not parsed thus making site interactive quicker. 
9. **async attribute**: async delays the loading of scripts until the document is not parsed but without respecting the order of loading of the scripts.
10. **ChangeDetectionStrategy.OnPush**: `ChangeDetectionStrategy.OnPush` tells Angular that the component only depends on his Inputs ( aka pure ) and needs to be checked in only the following cases:  
i). The `Input` reference changes.  
ii). An event occurred from the component or one of his children.  
iii). You run change detection explicitly by calling `detectChanges()/tick()/markForCheck()`  

Example
```typescript
@Component({
  selector: 'my-select',
  template: `
    ...
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
11. **TrackBy**: If we provide a trackBy function, Angular can track which items have been added or removed according to the unique identifier and only create or destroy the things that have changed.

Example:
```typescript
@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let item of collection;trackBy: trackByFn">{{item.id}}</li>
    </ul>
    <button (click)="getItems()">Refresh items</button>
  `,
})
export class App {

  constructor() {
    this.collection = [{id: 1}, {id: 2}, {id: 3}];
  }
  getItems() {
    this.collection = this.getItemsFromServer();
  }
  getItemsFromServer() {
    return [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  }
  trackByFn(index, item) {
    return index; // or item.id
  }
}
```

#### How an Angular application gets started or loaded?
The **main.ts** file, that is the first code which gets executed. The job of main.ts is to bootstrap the application. It loads everything and controls the startup of the application.

**main.ts**
```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

Most importantly here is the line where bootstraps start our angular app by passing app module to the method. AppModule refers to the app.module.ts file.

**app.module.ts**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
When angular starts, it bootstrap array in `@NgModule`. It basically there is a list of all components which should be known to Angular at the point of time it analyzes **index.html** file.

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Angular 8</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root>Loading...</app-root>
  </body>
</html>
```

#### What is rxjs subject in Angular?
An RxJS Subject is a special type of Observable that allows values to be **multicasted** to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

A Subject observable is used to immediately notify subscribers of updated values emitted by it. It does not keep track of old values, i.e. if a Subject observable first emitted a value and was then later subscribed to, then the subscriber will not get that value. A Subject is like an Observable, but can multicast to many Observers. Subjects are like **EventEmitters**: they maintain a registry of many listeners.
``` typescript
import { Subject } from 'rxjs';

const mySubject = new Rx.Subject();

mySubject.next(1); // Data can be pushed into the subject using its next method

const subscription1 = mySubject.subscribe(x => {
  console.log('From subscription 1:', x);
});

mySubject.next(2);

const subscription2 = mySubject.subscribe(x => {
  console.log('From subscription 2:', x);
});

mySubject.next(3);

subscription1.unsubscribe();

mySubject.next(4);
```
Output
```typescript
From subscription 1: 2
From subscription 1: 3
From subscription 2: 3
From subscription 2: 4
```

#### What is rxjs BehaviorSubject, ReplaySubject and AsyncSubject in angular?
1. **The BehaviorSubject**: The BehaviorSubject has the characteristic that it stores the **current** value. This means that we can always directly get the last emitted value from the BehaviorSubject. We can either get the value by accessing the **.value** property on the BehaviorSubject or we can subscribe to it. 
```typescript
import * as Rx from "rxjs";

const subject = new Rx.BehaviorSubject();

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random());
subject.next(Math.random());

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());

console.log(subject.value)

// output
// Subscriber A: 0.24957144215097515
// Subscriber A: 0.8751123892486292
// Subscriber B: 0.8751123892486292
// Subscriber A: 0.1901322109907977
// Subscriber B: 0.1901322109907977
// 0.1901322109907977
```

2. **The ReplaySubject**: The ReplaySubject can send **old** values to new subscribers. It however has the extra characteristic that it can record a part of the observable execution and therefore store multiple old values and **replay** them to new subscribers.

When creating the ReplaySubject we can specify how much values want to store and for how long want to store them.
```typescript
import * as Rx from "rxjs";

const subject = new Rx.ReplaySubject(2);

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random())
subject.next(Math.random())
subject.next(Math.random())

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());

// Subscriber A: 0.3541746356538569
// Subscriber A: 0.12137498878080955
// Subscriber A: 0.531935186034298
// Subscriber B: 0.12137498878080955
// Subscriber B: 0.531935186034298
// Subscriber A: 0.6664809293975393
// Subscriber B: 0.6664809293975393
```

3. **The AsyncSubject**: The AsyncSubject is aSubject variant where only the last value of the Observable execution is sent to its subscribers, and only when the execution completes. 
```typescript
import * as Rx from "rxjs";

const subject = new Rx.AsyncSubject();

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random())
subject.next(Math.random())
subject.next(Math.random())

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());
subject.complete();

// Subscriber A: 0.4447275989704571
// Subscriber B: 0.4447275989704571
```

#### What is difference between BehaviorSubject and Observable?
Behavior Subject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable.   

The unique features of a behavior subject are:

* Behavior subject needs an initial value as it must always return a value on subscription even if it hasn’t received a **next()**
* Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives a onnext
* At any point you can retrieve the last value of the subject in a non-observable code using the **getValue()** method.

The unique features of a subject compared to a observable are:

* It is a observer in addition to being a observable so you can also send values to a subject in addition to subscribing to it.
* In addition you can get a observable from behavior subject using the asobservable() method on behaviour subject.
* Observable is a Generic, and Behavior subject is technically a sub-type of Observable because behavior subject is a observable with specific qualities.
```typescript
// Behavior Subject

// a is a initial value. if there is a subscription 
// after this, it would get "a" value immediately
let bSubject = new BehaviorSubject("a"); 

bSubject.next("b");

bSubject.subscribe((value) => {
  console.log("Subscription got", value); // Subscription got b, 
                                          // ^ This would not happen 
                                          // for a generic observable 
                                          // or generic subject by default
});

bSubject.next("c"); // Subscription got c
bSubject.next("d"); // Subscription got d
```
Example 2: With regular subject
```typescript
// Regular Subject

let subject = new Subject(); 

subject.next("b");

subject.subscribe((value) => {
  console.log("Subscription got", value); // Subscription wont get 
                                          // anything at this point
});

subject.next("c"); // Subscription got c
subject.next("d"); // Subscription got d
```

#### What is the difference between AngularJS and Angular?
Angular is a completely revived component-based framework in which an application is a tree of individual 
components.


| AngularJS                                         | Angular                                             |
|---------------------------------------------------|-----------------------------------------------------|
| It is based on MVC architecture                   | It is component based architecture                  |
| This uses JavaScript to build the application     | Introduced the typescript to write the application  |
| Based on controllers concept                      | This is a component based UI approach               |
| Not a mobile friendly framework                   | Developed considering mobile platform               |
| Difficulty in SEO friendly application development| Ease to create SEO friendly applications            |


#### What are the key components of Angular?
Angular has the below key components,
1. **Modules**: An angular module is set of angular basic building blocks like component, directives, services etc. An application is divided into logical pieces and each piece of code is called as "module" which perform a single task.
1. **Components**: These are the basic building blocks of angular application to control HTML views.
1. **Templates**: This represent the views of an Angular application.
1. **MetaData**: This can be used to add more data to an Angular class.
1. **Data-Binding**:
1. **Directive**:
1. **Services**: It is used to create components which can be shared across the entire application.
1. **Dependency Injection**:


#### What are directives?
Directives add behaviour to an existing DOM element or an existing component instance.
There are four types of directives in Angular
* Components directives
* Structural directives
* Attribute directives
* Custom Directive

Example
```typescript
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

Now this directive extends HTML element behavior with a yellow background as below
```html
<p myHighlight>Highlight me!</p>
```

#### What are components?
Components are the most basic UI building block of an Angular app which formed a tree of Angular components. These components are subset of directives. Unlike directives, components always have a template and only one component can be instantiated per an element in a template.
Let's see a simple example of Angular component
```typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: ` <div>
        <h1>{{title}}</h1>
        <div>Angular components example</div>
    </div> `,
})

export class AppComponent {
    title: string = 'Welcome to Angular world';
}
```

#### What are the differences between Component and Directive?
In a short note, A component(@component) is a directive-with-a-template.

Some of the major differences are mentioned in a tabular form

| Component | Directive |
|---------- |----------
| To register a component we use @Component meta-data annotation  | To register directives we use @Directive meta-data annotation |
| Components are typically used to create UI widgets| Directive is used to add behavior to an existing DOM element |
| Component is used to break up the application into smaller components| Directive is use to design re-usable components|
| Only one component can be present per DOM element | Many directives can be used per DOM element |
| @View decorator or templateurl/template are mandatory | Directive doesn't use View|

#### What is a template?
A template is a HTML view where we can display data by binding controls to properties of an Angular component. We can define it inline using the template property, or we can define the template in a separate HTML file and link to it in the component metadata using the @Component decorator's templateUrl property.
**Using inline template with template syntax,**
```typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{title}}</h1>
            <div>Angular Template Example</div>
        </div>
      `
})

export class AppComponent {
    title: string = 'Hello World';
}
```
**Using separate template file such as app.component.html**
```typescript
import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    title: string = 'Hello World';
}
```

#### What is a module?

Modules are logical boundaries in your application and the application is divided into separate modules to separate the functionality of your application.
Lets take an example of **app.module.ts** root module declared with **@NgModule** decorator as below,
```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule ({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
The NgModule decorator has three options
1. The imports option is used to import other dependent modules. The BrowserModule is required by default for any web based angular application
2. The declarations option is used to define components in the respective module
3. The bootstrap option tells Angular which Component to bootstrap in the application

#### What are lifecycle hooks available?
Angular application goes through an entire set of processes or has a lifecycle right from its initiation to the end of the application.

The description of each lifecycle method is as below,
1. **ngOnChanges:** When the value of a data bound property changes, then this method is called.
1. **ngOnInit:** This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
1. **ngDoCheck:** This is for the detection and to act on changes that Angular can't or won't detect on its own.
1. **ngAfterContentInit:** This is called in response after Angular projects external content into the component's view.
1. **ngAfterContentChecked:** This is called in response after Angular checks the content projected into the component.
1. **ngAfterViewInit:** This is called in response after Angular initializes the component's views and child views.
1. **ngAfterViewChecked:** This is called in response after Angular checks the component's views and child views.
1. **ngOnDestroy:** This is the cleanup phase just before Angular destroys the directive/component.

#### What is a data binding?
Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data. There are four forms of data binding(divided as 3 categories) which differ in the way the data is flowing.
1. **From the Component to the DOM:**
**Interpolation:** {{ value }}: Adds the value of a property from the component
```html
<li>Name: {{ user.name }}</li>
<li>Address: {{ user.address }}</li>
```
**Property binding:** [property]=”value”: The value is passed from the component to the specified property or simple HTML attribute
```html
<input type="email" [value]="user.email">
```
2. **From the DOM to the Component:**
**Event binding: (event)=”function”:** When a specific DOM event happens (eg.: click, change, keyup), call the specified method in the component
```html
<button (click)="logout()"></button>
```
3. **Two-way binding:**
**Two-way data binding:** [(ngModel)]=”value”: Two-way data binding allows to have the data flow both ways. For example, in the below code snippet, both the email DOM input and component email property are in sync
```html
<input type="email" [(ngModel)]="user.email">
```

#### What is metadata?
Metadata is used to decorate a class so that it can configure the expected behavior of the class. The metadata is represented by decorators
1. **Class decorators**, e.g. @Component and @NgModule
```typescript
import { NgModule, Component } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>Class decorator</div>',
})
export class MyComponent {
    constructor() {
    console.log('Hey I am a component!');
    }
}

@NgModule({
    imports: [],
    declarations: [],
})
export class MyModule {
    constructor() {
    console.log('Hey I am a module!');
    }
}
```
2. **Property decorators** Used for properties inside classes, e.g. @Input and @Output
```typescript
import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>Property decorator</div>'
})

export class MyComponent {
    @Input()
    title: string;
}
```
3. **Method decorators** Used for methods inside classes, e.g. @HostListener
```typescript
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'my-component',
    template: '<div>Method decorator</div>'
})
export class MyComponent {
    @HostListener('click', ['$event'])
    onHostClick(event: Event) {
        // clicked, `event` available
    }
}
```
4. **Parameter decorators** Used for parameters inside class constructors, e.g. @Inject
```typescript
import { Component, Inject } from '@angular/core';
import { MyService } from './my-service';

@Component({
    selector: 'my-component',
    template: '<div>Parameter decorator</div>'
})
export class MyComponent {
    constructor(@Inject(MyService) myService) {
        console.log(myService); // MyService
    }
}
```
#### What is a service worker and its role in Angular?
A service worker is a script that runs in the web browser and manages caching for an application. Starting from 5.0.0 version, Angular ships with a service worker implementation. Angular service worker is designed to optimize the end user experience of using an application over a slow or unreliable network connection, while also minimizing the risks of serving outdated content. Adding a service worker to an Angular application is one of the steps for turning an application into a **Progressive Web App** (also known as a `PWA`).

Below are the list of design goals of Angular's service workers,
1. It caches an application just like installing a native application
2. A running application continues to run with the same version of all files without any incompatible files
3. When you refresh the application, it loads the latest fully cached version
4. When changes are published then it immediately updates in the background
5. Service workers saves the bandwidth by downloading the resources only when they changed.

*Syntax:*
```typescript
ng add @angular/pwa --project *project-name*
```
The above command completes the following actions:

1. Adds the @angular/service-worker package to your project.
2. Enables service worker build support in the CLI.
3. Imports and registers the service worker in the app module.
4. Updates the index.html file:
    * Includes a link to add the manifest.json file.
    * Adds meta tags for theme-color.
5. Installs icon files to support the installed Progressive Web App (PWA).
6. Creates the service worker configuration file called ngsw-config.json, which specifies the caching behaviors and other settings.

#### How to set time for caching in service-worker?
**ngsw-config.json**
```typescript
{
    ...
    "dataGroups": [{
            "name": "api-freshness",
            "urls": [
                "/timeline"
            ],
            "cacheConfig": {
                "strategy": "freshness",
                "maxSize": 100,
                "maxAge": "3d",
                "timeout": "10s"
            }
        },
        {
            "name": "api-performance",
            "urls": [
                "/favorites"
            ],
            "cacheConfig": {
                "strategy": "performance",
                "maxSize": 100,
                "maxAge": "3d"
            }
        }
    ]
}
```

#### What is the difference between constructor() and ngOnInit()?
TypeScript classes has a default method called constructor() which is normally used for the initialization purpose. Whereas ngOnInit() method is specific to Angular, especially used to define Angular bindings. Even though constructor() getting called first, it is preferred to move all of your Angular bindings to ngOnInit() method.
In order to use ngOnInit(), you need to implement OnInit interface as below,
```typescript
export class App implements OnInit{
    constructor(){
        //called first time before the ngOnInit()
    }

    ngOnInit(){
        //called after the constructor and called  after the first ngOnChanges()
    }
}
```
#### What is a service?
A service is used when a common functionality needs to be provided to various modules. Services allow for greater separation of concerns for your application and better modularity by allowing you to extract common functionality out of components.
Let's create a repoService which can be used across components,
```typescript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({ // The Injectable decorator is required for dependency injection to work
    // providedIn option registers the service with a specific NgModule
    providedIn: 'root',  // This declares the service with the root app (AppModule)
})
export class RepoService{
    constructor(private http: Http){
    }

    fetchAll(){
    return this.http.get('https://api.github.com/repositories');
    }
}
```
The above service uses Http service as a dependency.

#### What is dependency injection in Angular?
Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on other services throughout your application.


#### What is the purpose of async pipe?
The AsyncPipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.
Let's take a time observable which continuously updates the view for every 2 seconds with the current time.
```typescript
@Component({
    selector: 'async-observable-pipe',
    template: `<div><code>observable|async</code>:
        Time: {{ time | async }}</div>`
})
export class AsyncObservablePipeComponent {
    time = new Observable(observer =>
    setInterval(() => observer.next(new Date().toString()), 2000)
    );
}
```
#### What is the option to choose between inline and external template file?
You can store your component's template in one of two places. You can define it inline using the **template** property, or you can define the template in a separate HTML file and link to it in the component metadata using the **@Component** decorator's **templateUrl** property.
The choice between inline and separate HTML is a matter of taste, circumstances, and organization policy. But normally we use inline template for small portion of code and external template file for bigger views. By default, the Angular CLI generates components with a template file. But you can override that with the below command,
```
ng generate component hero -it
```
#### What is the purpose of ngFor directive?
We use Angular ngFor directive in the template to display each item in the list. For example, here we iterate over list of users,
```html
<li *ngFor="let user of users">
    {{ user }}
</li>
```
The user variable in the ngFor double-quoted instruction is a **template input variable**
#### What is the purpose of ngIf directive?
Sometimes an app needs to display a view or a portion of a view only under specific circumstances. The Angular ngIf directive inserts or removes an element based on a truthy/falsy condition. Let's take an example to display a message if the user age is more than 18,
```html
<p *ngIf="user.age > 18">You are not eligible for student pass!</p>
```
**Note:** Angular isn't showing and hiding the message. It is adding and removing the paragraph element from the DOM. That improves performance, especially in the larger projects with many data bindings.

#### What happens if you use script tag inside template?

Angular recognizes the value as unsafe and automatically sanitizes it, which removes the *<script>* tag but keeps safe content such as the text content of the <script> tag. This way it eliminates the risk of script injection attacks. If you still use it then it will be ignored and a warning appears in the browser console.
Let's take an example of innerHtml property binding which causes XSS vulnerability,
```typescript
export class InnerHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
}
```

#### What is interpolation?

Interpolation is a special syntax that Angular converts into property binding. It’s a convenient alternative to property binding. It is represented by double curly braces({{}}). The text between the braces is often the name of a component property. Angular replaces that name with the string value of the corresponding component property.
Let's take an example,
```html
<h3>
  {{title}}
  <img src="{{url}}" style="height:30px">
</h3>
```
In the example above, Angular evaluates the title and url properties and fills in the blanks, first displaying a bold application title and then a URL.

#### What are template expressions?
A template expression produces a value similar to any Javascript expression. Angular executes the expression and assigns it to a property of a binding target; the target might be an HTML element, a component, or a directive. In the property binding, a template expression appears in quotes to the right of the = symbol as in [property]="expression".
In interpolation syntax, the template expression is surrounded by double curly braces. For example, in the below interpolation, the template expression is {{username}},
```html
<h3>{{username}}, welcome to Angular</h3>
```
The below javascript expressions are prohibited in template expression
1. assignments (=, +=, -=, ...)
2. new
3. chaining expressions with ; or ,
4. increment and decrement operators (++ and -)

#### What are template statements?
A template statement responds to an event raised by a binding target such as an element, component, or directive. The template statements appear in quotes to the right of the = symbol like **(event)="statement"**. Let's take an example of button click event's statement
```html
<button (click)="editProfile()">Edit Profile</button>
```
In the above expression, editProfile is a template statement. The below JavaScript syntax expressions are not allowed.
1. new
2. increment and decrement operators, ++ and --
3. operator assignment, such as += and -=
4. the bitwise operators | and &
5. the template expression operators

#### How do you categorize data binding types?

Binding types can be grouped into three categories distinguished by the direction of data flow. They are listed as below,
1. From the source-to-view
2. From view-to-source
3. View-to-source-to-view

The possible binding syntax can be tabularized as below,

| Data direction | Syntax | Type |
|---- | --------- | ---- |
| From the source-to-view(One-way)  | 1. {{expression}} 2. [target]="expression" 3. bind-target="expression" | Interpolation, Property, Attribute, Class, Style|
| From view-to-source(One-way) | 1. (target)="statement" 2. on-target="statement" | Event |
| View-to-source-to-view(Two-way)| 1. [(target)]="expression" 2. bindon-target="expression"| Two-way |

#### What are pipes?
A pipe takes in data as input and transforms it to a desired output. For example, let us take a pipe to transform a component's birthday property into a human-friendly date using **date** pipe.
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  template: `<p>Birthday is {{ birthday | date }}</p>`
})
export class BirthdayComponent {
  birthday = new Date(1987, 6, 18); // June 18, 1987
}
```
#### What is a parameterized pipe?
A pipe can accept any number of optional parameters to fine-tune its output. The parameterized pipe can be created by declaring the pipe name with a colon ( : ) and then the parameter value. If the pipe accepts multiple parameters, separate the values with colons. Let's take a birthday example with a particular format(dd/mm/yyyy):
```javascript
import { Component } from '@angular/core';

    @Component({
      selector: 'app-birthday',
      template: `<p>Birthday is {{ birthday | date:'dd/mm/yyyy'}}</p>` // 18/06/1987
    })
    export class BirthdayComponent {
      birthday = new Date(1987, 6, 18);
    }
```
**Note:** The parameter value can be any valid template expression, such as a string literal or a component property.
#### How do you chain pipes?
You can chain pipes together in potentially useful combinations as per the needs. Let's take a birthday property which uses date pipe(along with parameter) and uppercase pipes as below
```javascript
import { Component } from '@angular/core';

    @Component({
        selector: 'app-birthday',
        template: `<p>Birthday is {{  birthday | date:'fullDate' | uppercase}} </p>` // THURSDAY, JUNE 18, 1987
    })
    export class BirthdayComponent {
        birthday = new Date(1987, 6, 18);
    }

```
#### What is a custom pipe?
Apart from built-inn pipes, you can write your own custom pipe with the below key characteristics,
1. A pipe is a class decorated with pipe metadata **@Pipe** decorator, which you import from the core Angular library
    For example,
```javascript
    @Pipe({name: 'myCustomPipe'})
```
2. The pipe class implements the **PipeTransform** interface's transform method that accepts an input value followed by optional parameters and returns the transformed value.
    The structure of pipeTransform would be as below,
```javascript
interface PipeTransform {
  transform(value: any, ...args: any[]): any
}
```
3. The @Pipe decorator allows you to define the pipe name that you'll use within template expressions. It must be a valid JavaScript identifier.
```javascript
template: `{{someInputValue | myCustomPipe: someOtherValue}}`
```
#### Give an example of custom pipe?
You can create custom reusable pipes for the transformation of existing value. For example, let us create a custom pipe for finding file size based on an extension,
```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customFileSizePipe'})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB'): string {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}
```
Now you can use the above pipe in template expression as below,
```javascript
  template: `
    <h2>Find the size of a file</h2>
    <p>Size: {{288966 | customFileSizePipe: 'GB'}}</p>
  `
```
#### What is the difference between pure and impure pipe?
A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe. For example, any changes to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object). An impure pipe is called for every change detection cycle no matter whether the value or parameters changes. i.e, An impure pipe is called often, as often as every keystroke or mouse-move.

#### What is a bootstrapping module?
Every application has at least one Angular module, the root module that you bootstrap to launch the application is called as bootstrapping module. It is commonly known as AppModule. The default structure of AppModule generated by AngularCLI would be as follows,
```javascript
/* JavaScript imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
#### What are observables?
Observables are declarative which provide support for passing messages between publishers and subscribers in your application. They are mainly used for event handling, asynchronous programming, and handling multiple values. In this case, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.

#### What is HttpClient and its benefits?
Most of the Front-end applications communicate with backend services over HTTP protocol using either XMLHttpRequest interface or the fetch() API. Angular provides a simplified client HTTP API known as **HttpClient** which is based on top of XMLHttpRequest interface. This client is avaialble from `@angular/common/http` package.
You can import in your root module as below,
```javascript
import { HttpClientModule } from '@angular/common/http';
```

The major advantages of HttpClient can be listed as below,
1. Contains testability features
2. Provides typed request and response objects
3. Intercept request and response
4. Supports Observalbe APIs
5. Supports streamlined error handling

#### Explain on how to use HttpClient with an example?
Below are the steps need to be followed for the usage of HttpClient.
1. Import HttpClient into root module:
```javascript
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  ......
  })
  export class AppModule {}
```
2. Inject the HttpClient into the application:
Let's create a userProfileService(userprofile.service.ts) as an example. It also defines get method of HttpClient
```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const userProfileUrl: string = 'assets/data/profile.json';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get(this.userProfileUrl);
  }
}
```
3. Create a component for subscribing service:
Let's create a component called UserProfileComponent(userprofile.component.ts) which inject UserProfileService and invokes the service method,
```javascript
fetchUserProfile() {
  this.userProfileService.getUserProfile()
    .subscribe((data: User) => this.user = {
        id: data['userId'],
        name: data['firstName'],
        city:  data['city']
    });
}
```
Since the above service method returns an Observable which needs to be subscribed in the component.
#### How can you read full response?
The response body doesn't may not return full response data because sometimes servers also return special headers or status code which which are important for the application workflow. Inorder to get full response, you should use observe option from HttpClient,
```javascript
getUserResponse(): Observable<HttpResponse<User>> {
  return this.http.get<User>(
    this.userUrl, { observe: 'response' });
}
```
Now HttpClient.get() method returns an Observable of typed HttpResponse rather than just the JSON data.
#### How do you perform Error handling?
If the request fails on the server or failed to reach the server due to network issues then HttpClient will return an error object instead of a successful reponse. In this case, you need to handle in the component by passing error object as a second callback to subscribe() method.
Let's see how it can be handled in the component with an example,
```javascript
fetchUser() {
  this.userService.getProfile()
    .subscribe(
      (data: User) => this.userProfile = { ...data }, // success path
      error => this.error = error // error path
    );
}
```
It is always a good idea to give the user some meaningful feedback instead of displaying the raw error object returned from HttpClient.
#### What is RxJS?
RxJS is a library for composing asynchronous and callback-based code in a functional, reactive style using Observables. Many APIs such as  HttpClient produce and consume RxJS Observables and also uses operators for processing observables.
For example, you can import observables and operators for using HttpClient as below,
```javascript
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
```
#### What is subscribing?
An Observable instance begins publishing values only when someone subscribes to it. So you need to subscribe by calling the **subscribe()** method of the instance, passing an observer object to receive the notifications.
Let's take an example of creating and subscribing to a simple observable, with an observer that logs the received message to the console.
```javascript
Creates an observable sequence of 5 integers, starting from 1
const source = range(1, 5);

// Create observer object
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

// Execute with the observer object and Prints out each item
myObservable.subscribe(myObserver);
// => Observer got a next value: 1
// => Observer got a next value: 2
// => Observer got a next value: 3
// => Observer got a next value: 4
// => Observer got a next value: 5
// => Observer got a complete notification
```
#### What is an observable?
An Observable is a unique Object similar to a Promise that can help manage async code. Observables are not part of the JavaScript language so we need to rely on a popular Observable library called RxJS.
The observables are created using new keyword. Let see the simple example of observable,
```javascript
import { Observable } from 'rxjs';

const observable = new Observable(observer => {
  setTimeout(() => {
    observer.next('Hello from a Observable!');
  }, 2000);
});
```

#### What is an observer?
Observer is an interface for a consumer of push-based notifications delivered by an Observable. It has below structure,
```javascript
interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}
```
A handler that implements the Observer interface for receiving observable notifications will be passed as a parameter for observable as below,
```javascript
myObservable.subscribe(myObserver);
```
**Note:** If you don't supply a handler for a notification type, the observer ignores notifications of that type.
#### What is the difference between promise and observable?
Below are the list of differences between promise and observable,

| Observable | Promise |
|---- | --------- |
| Declarative: Computation does not start until subscription so that they can be run whenever you need the result | Execute immediately on creation|
| Provide multiple values over time | Provide only one |
| Subscribe method is used for error handling which makes centralized and predictable error handling| Push errors to the child promises |
| Provides chaining and subscription to handle complex applications | Uses only .then() clause |

#### What is multicasting?
Multi-casting is the practice of broadcasting to a list of multiple subscribers in a single execution. Let's demonstrate the multi-casting feature,
```javascript
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// This is, under the hood, `s
```
#### How do you perform error handling in observables?
You can handle errors by specifying an **error callback** on the observer instead of relying on try/catch which are ineffective in asynchronous environment. For example, you can define error callback as below,
```javascript
myObservable.subscribe({
  next(num) { console.log('Next num: ' + num)},
  error(err) { console.log('Received an errror: ' + err)}
});
```
#### What is the short hand notation for subscribe method?
The subscribe() method can accept callback function definitions in line, for next, error, and complete handlers is known as short hand notation or Subscribe method with positional arguments. For example, you can define subscribe method as below,
```javascript
myObservable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
```
#### What are the utility functions provided by RxJS?
The RxJS library also provides below utility functions for creating and working with observables.
1. Converting existing code for async operations into observables
2. Iterating through the values in a stream
3. Mapping values to different types
4. Filtering streams
5. Composing multiple streams

#### What are observable creation functions?
RxJS provides creation functions for the process of creating observables from things such as promises, events, timers and Ajax requests. Let us explain each of them with an example,
1. Create an observable from a promise
```javascript
import { from } from 'rxjs'; // from function
const data = from(fetch('/api/endpoint')); //Created from Promise
data.subscribe({
  next(response) { console.log(response); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
});
```
2. Create an observable that creates an AJAX request
```javascript
import { ajax } from 'rxjs/ajax'; // ajax function
const apiData = ajax('/api/data'); // Created from AJAX request
// Subscribe to create the request
apiData.subscribe(res => console.log(res.status, res.response));
```
3. Create an observable from a counter
```javascript
import { interval } from 'rxjs'; // interval function
const secondsCounter = interval(1000); // Created from Counter value
secondsCounter.subscribe(n =>
  console.log(`Counter value: ${n}`));
```
4. Create an observable from an event
```javascript
import { fromEvent } from 'rxjs';
const el = document.getElementById('custom-element');
const mouseMoves = fromEvent(el, 'mousemove');
const subscription = mouseMoves.subscribe((e: MouseEvent) => {
  console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
  });
```
#### What will happen if you do not supply handler for observer?
Normally an observer object can define any combination of next, error and complete notification type handlers. If you don't supply a handler for a notification type, the observer just ignores notifications of that type.

#### What are angular elements?
Angular elements are Angular components packaged as **custom elements**(a web standard for defining new HTML elements in a framework-agnostic way). Angular Elements hosts an Angular component, providing a bridge between the data and logic defined in the component and standard DOM APIs, thus, providing a way to use Angular components in `non-Angular environments`.

#### What is the browser support of Angular Elements?
Since Angular elements are packaged as custom elements the browser support of angular elements is same as custom elements support. This feature is is currently supported natively in a number of browsers and pending for other browsers.

| Browser | Angular Element Support |
|---- | --------- |
| Chrome | Natively supported|
| Opera | Natively supported |
| Safari| Natively supported |
| Firefox | Natively supported from 63 version onwards. You need to enable dom.webcomponents.enabled and dom.webcomponents.customelements.enabled in older browsers |
| Edge| Currently it is in progress|

#### What are custom elements?
Custom elements (or Web Components) are a Web Platform feature which extends HTML by allowing you to define a tag whose content is created and controlled by JavaScript code. The browser maintains a `CustomElementRegistry` of defined custom elements, which maps an instantiable JavaScript class to an HTML tag. Currently this feature is supported by Chrome, Firefox, Opera, and Safari, and available in other browsers through polyfills.

#### Do I need to bootstrap custom elements?
No, custom elements bootstrap (or start) automatically when they are added to the DOM, and are automatically destroyed when removed from the DOM. Once a custom element is added to the DOM for any page, it looks and behaves like any other HTML element, and does not require any special knowledge of Angular.

#### Explain how custom elements works internally?
Below are the steps in an order about custom elements functionality,
1. **App registers custom element with browser:** Use the createCustomElement() function to convert a component into a class that can be registered with the browser as a custom element.
2. **App adds custom element to DOM:**  Add custom element just like a built-in HTML element directly into the DOM.
3. **Browser instantiate component based class:** Browser creates an instance of the registered class and adds it to the DOM.
4. **Instance provides content with data binding and change detection:** The content with in template is rendered using the component and DOM data.

#### How to transfer components to custom elements?
Transforming components to custom elements involves **two** major steps,
1. **Build custom element class:** Angular provides the `createCustomElement()` function for converting an Angular component (along with its dependencies) to a custom element. The conversion process implements `NgElementConstructor` interface, and creates a constructor class which is used to produce a self-bootstrapping instance of Angular component.
2. **Register element class with browser:** It uses `customElements.define()` JS function, to register the configured constructor and its associated custom-element tag with the browser's `CustomElementRegistry`. When the browser encounters the tag for the registered element, it uses the constructor to create a custom-element instance.
   
#### What are the mapping rules between Angular component and custom element?
The Component properties and logic maps directly into HTML attributes and the browser's event system. Let us describe them in two steps,
1. The createCustomElement() API parses the component input properties with corresponding attributes for the custom element. For example, component @Input('myInputProp') converted as custom element attribute `my-input-prop`.
2. The Component outputs are dispatched as HTML Custom Events, with the name of the custom event matching the output name. For example, component @Output() valueChanged = new EventEmitter() converted as custom element with dispatch event as "valueChanged".

#### How do you define typings for custom elements?
You can use the `NgElement` and `WithProperties` types exported from @angular/elements. Let's see how it can be applied by comparing with Angular component,
The simple container with input property would be as below,
```javascript
@Component(...)
class MyContainer {
  @Input() message: string;
}
```
After applying types typescript validates input value and their types,
```javascirpt
const container = document.createElement('my-container') as NgElement & WithProperties<{message: string}>;
container.message = 'Welcome to Angular elements!';
container.message = true;  // <-- ERROR: TypeScript knows this should be a string.
container.greet = 'News';  // <-- ERROR: TypeScript knows there is no `greet` property on `container`.
```
#### What are dynamic components?
Dynamic components are the components in which components location in the application is not defined at build time.i.e, They are not used in any angular template. But the component is instantiated and placed in the application at runtime.

#### What are the various kinds of directives?
There are mainly three kinds of directives.
1. **Components** — These are directives with a template.
2. **Structural directives** — These directives change the DOM layout by adding and removing DOM elements.
3. **Attribute directives** — These directives change the appearance or behavior of an element, component, or another directive.

#### How do you create directives using CLI?
You can use CLI command `ng generate directive` to create the directive class file. It creates the source file(src/app/components/directivename.directive.ts), the respective test file(.spec.ts) and declare the directive class file in root module.

#### Give an example for attribute directives?
Let's take simple highlighter behavior as a example directive for DOM element. You can create and apply the attribute directive using below steps,
1. Create HighlightDirective class with the file name `src/app/highlight.directive.ts`. In this file, we need to import **Directive** from core library to apply the metadata and **ElementRef** in the directive's constructor to inject a reference to the host DOM element ,
```javascript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'red';
    }
}
```
2. Apply the attribute directive as an attribute to the host element(for example, <p>)
```javascript
<p appHighlight>Highlight me!</p>
```
3. Run the application to see the highlight behavior on paragraph element
```javascript
ng serve
```
#### What is Angular Router?
Angular Router is a mechanism in which navigation happens from one view to the next as users perform application tasks. It borrows the concepts or model of browser's application navigation.

#### What is the purpose of base href tag?
The routing application should add <base> element to the index.html as the first child in the <head> tag inorder to indicate how to compose navigation URLs. If app folder is the application root then you can set the href value as below
```html
<base href="/">
```
#### What are the router imports?
The Angular Router which represents a particular component view for a given URL is not part of Angular Core. It is available in library named `@angular/router` to import required router components. For example, we import them in app module as below,
```javascript
import { RouterModule, Routes } from '@angular/router';
```
#### What is router outlet?
The RouterOutlet is a directive from the router library and it  acts as a placeholder that marks the spot in the template where the router should display the components for that outlet. Router outlet is used like a component,
```html
<router-outlet></router-outlet>
<!-- Routed components go here -->
```
#### What are router links?
The RouterLink is a directive on the anchor tags give the router control over those elements. Since the navigation paths are fixed, you can assign string values to router-link directive as below,
```html
<h1>Angular Router</h1>
<nav>
  <a routerLink="/todosList" >List of todos</a>
  <a routerLink="/completed" >Completed todos</a>
</nav>
<router-outlet></router-outlet>
```
#### What are active router links?
RouterLinkActive is a directive that toggles css classes for active RouterLink bindings based on the current RouterState. i.e, the Router will add CSS classes when this link is active and and remove when the link is inactive. For example, you can add them to RouterLinks as below
  ```html
<h1>Angular Router</h1>
<nav>
  <a routerLink="/todosList" routerLinkActive="active">List of todos</a>
  <a routerLink="/completed" routerLinkActive="active">Completed todos</a>
</nav>
<router-outlet></router-outlet>
```
#### What is router state?
RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL segments, the extracted parameters, and the resolved data. You can access the current RouterState from anywhere in the application using the `Router service` and the `routerState` property.
```javascript
@Component({templateUrl:'template.html'})
class MyComponent {
  constructor(router: Router) {
    const state: RouterState = router.routerState;
    const root: ActivatedRoute = state.root;
    const child = root.firstChild;
    const id: Observable<string> = child.params.map(p => p.id);
    //...
  }
}
```
#### What are router events?
During each navigation, the Router emits navigation events through the Router.events property allowing you to track the lifecycle of the route. The sequence of router events is as below,
1. NavigationStart,
2. RouteConfigLoadStart,
3. RouteConfigLoadEnd,
4. RoutesRecognized,
5. GuardsCheckStart,
6. ChildActivationStart,
7. ActivationStart,
8. GuardsCheckEnd,
9. ResolveStart,
10. ResolveEnd,
11. ActivationEnd
12. ChildActivationEnd
13. NavigationEnd,
14. NavigationCancel,
15. NavigationError
16. Scroll

#### What is activated route?
ActivatedRoute contains the information about a route associated with a component loaded in an outlet. It can also be used to traverse the router state tree. The ActivatedRoute will be injected as a router service to access the information. In the below example, you can access route path and parameters,
```javascript
@Component({...})
class MyComponent {
  constructor(route: ActivatedRoute) {
    const id: Observable<string> = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d.user));
  }
}
```
#### How do you define routes?
A router must be configured with a list of route definitions. You configures the router with routes via the `RouterModule.forRoot()` method, and adds the result to the AppModule's `imports` array.
  ```javascript
const appRoutes: Routes = [
  { path: 'todo/:id',      component: TodoDetailComponent },
  {
    path: 'todos',
    component: TodosListComponent,
    data: { title: 'Todos List' }
  },
  { path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  ...
})
export class AppModule { }
  ```
#### What is the purpose of Wildcard route?
If the URL doesn't match any predefined routes then it causes the router to throw an error and crash the app. In this case, you can use wildcard route. A wildcard route has a path consisting of two asterisks to match every URL.
For example, you can define PageNotFoundComponent for wildcard route as below
```javascript
{ path: '**', component: PageNotFoundComponent }
```
#### Do I need a Routing Module always?
No, the Routing Module is a design choice. You can skip routing Module (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule). But it is recommended when the configuration is complex and includes specialized guard and resolver services.

#### What is Angular Universal?
Angular Universal is a server-side rendering module for Angular applications in various scenarios. This is a community driven project and available under @angular/platform-server package. Recently Angular Universal is integrated with Angular CLI.

#### What are different types of compilation in Angular?
Angular offers two ways to compile your application,
1. Just-in-Time (JIT)
2. Ahead-of-Time (AOT)

#### What is JIT?
Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands. i.e, the below commands used for JIT compilation,
```javascript
ng build
ng serve
```
#### What is AOT?
Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the `--aot` option with the ng build or ng serve command as below,
```javascript
ng build --aot
ng serve --aot
```
**Note:** The ng build command with the --prod meta-flag (`ng build --prod`) compiles with AOT by default.

#### Why do we need compilation process?
The Angular components and templates cannot be understood by the browser directly. Due to that Angular applications require a compilation process before they can run in a browser. For example, In AOT compilation, both Angular HTML and TypeScript code converted into efficient JavaScript code during the build phase before browser runs it.

#### What are the advantages with AOT?
Below are the list of AOT benefits,
1. **Faster rendering:** The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
2. **Fewer asynchronous requests:** It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
3. **Smaller Angular framework download size:** Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
4. **Detect template errors earlier:** Detects and reports template binding errors during the build step itself
5. **Better security:** It compiles HTML templates and components into JavaScript.  So there won't be any injection attacks.

#### What are the ways to control AOT compilation?
You can control your app compilation in two ways
1. By providing template compiler options in the `tsconfig.json` file
2. By configuring Angular metadata with decorators

#### What are the restrictions of metadata?
In Angular, You must write metadata with the following general constraints,
1. Write expression syntax with in the supported range of javascript features
2. The compiler can only reference symbols which are exported
3. Only call the functions supported by the compiler
4. Decorated and data-bound class members must be public.

#### What are the two phases of AOT?
The AOT compiler works in three phases,
1. **Code Analysis:** The compiler records a representation of the source
2. **Code generation:** It handles the interpretation as well as places restrictions on what it interprets.
3. **Validation:** In this phase, the Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates.

#### Can I use arrow functions in AOT?
No, Arrow functions or lambda functions can’t be used to assign values to the decorator properties. For example, the following snippet is invalid:
```javascript
@Component({
  providers: [{
    provide: MyService, useFactory: () => getService()
  }]
})
```
To fix this, it has to be changed as following exported function:
```javascript
function getService(){
  return new MyService();
}

@Component({
  providers: [{
    provide: MyService, useFactory: getService
  }]
})
```
If you still use arrow function, it generates an error node in place of the function. When the compiler later interprets this node, it reports an error to turn the arrow function into an exported function.
**Note:** From Angular5 onwards, the compiler automatically performs this rewriting while emitting the .js file.

#### What is the purpose of metadata json files?
The metadata.json file can be treated as a diagram of the overall structure of a decorator's metadata, represented as an abstract syntax tree(AST). During the analysis phase, the AOT collector scan the metadata recorded in the Angular decorators and outputs metadata information in .metadata.json files, one per .d.ts file.

#### Can I use any javascript feature for expression syntax in AOT?
No, the AOT collector understands a subset  of (or limited) JavaScript features. If an expression uses unsupported syntax, the collector writes an error node to the .metadata.json file. Later point of time, the compiler reports an error if it needs that piece of metadata to generate the application code.

#### What is folding?
The compiler can only resolve references to exported symbols in the metadata. Where as some of the non-exported members are folded while generating the code. i.e Folding is a process in which the collector evaluate an expression during collection and record the result in the .metadata.json instead of the original expression.
For example, the compiler couldn't refer selector reference because it is not exported
```javascript
let selector = 'app-root';
@Component({
  selector: selector
})
```
Will be folded into inline selector
```javascript
@Component({
      selector: 'app-root'
    })
```
Remember that the compiler can’t fold everything. For example, spread operator on arrays, objects created using new keywords and function calls.

#### What are macros?
The AOT compiler supports macros in the form of functions or static methods that return an expression in a `single return expression`.
For example, let us take a below macro function,
```javascript
export function wrapInArray<T>(value: T): T[] {
  return [value];
}
```
You can use it inside metadata as an expression,
```javascript
@NgModule({
  declarations: wrapInArray(TypicalComponent)
})
export class TypicalModule {}
```
The compiler treats the macro expression as it written directly
```javascript
@NgModule({
  declarations: [TypicalComponent]
})
export class TypicalModule {}
```
#### Give an example of few metadata errors?
Below are some of the errors encountered in metadata,
1. **Expression form not supported:** Some of the language features outside of the compiler's restricted expression syntax used in angular metadata can produce this error.
Let's see some of these examples,
```javascript
1. export class User { ... }
    const prop = typeof User; // typeof is not valid in metadata
2. { provide: 'token', useValue: { [prop]: 'value' } }; // bracket notation is not valid in metadata
```
2. ** Reference to a local (non-exported) symbol:** The compiler encountered a referenced to a locally defined symbol that either wasn't exported or wasn't initialized.
Let's take example of this error,
```javascript
// ERROR
let username: string; // neither exported nor initialized

@Component({
  selector: 'my-component',
  template: ... ,
  providers: [
    { provide: User, useValue: username }
  ]
})
export class MyComponent {}
```
You can fix this by either exporting or initializing the value,
```javascript
export let username: string; // exported
(or)
let username = 'John'; // initialized
```
3. **Function calls are not supported:** The compiler does not currently support function expressions or lambda functions. For example, you cannot set a provider's useFactory to an anonymous function or arrow function as below.
```javascript
  providers: [
    { provide: MyStrategy, useFactory: function() { ... } },
    { provide: OtherStrategy, useFactory: () => { ... } }
  ]
```
You can fix this with exported function
```javascript
export function myStrategy() { ... }
export function otherStrategy() { ... }
... // metadata
providers: [
    { provide: MyStrategy, useFactory: myStrategy },
    { provide: OtherStrategy, useFactory: otherStrategy },
```
4. **Destructured variable or constant not supported:** The compiler does not support references to variables assigned by destructuring.
For example, you cannot write something like this:
```javascript
import { user } from './user';

// destructured assignment to name and age
const {name, age} = user;
... //metadata
providers: [
    {provide: Name, useValue: name},
    {provide: Age, useValue: age},
  ]
```
You can fix this by non-destructured values
```javscript
import { user } from './user';
... //metadata
providers: [
    {provide: Name, useValue: user.name},
    {provide: Age, useValue: user.age},
  ]
```
#### What is metadata rewriting?
Metadata rewriting is the process in which the compiler converts the expression initializing the fields such as useClass, useValue, useFactory, and data into an exported variable, which replaces the expression. Remember that the compiler does this rewriting during the emit of the .js file but not in definition files( .d.ts file).

#### How do you provide configuration inheritance?
Angular Compiler supports configuration inheritance through extends in the tsconfig.json on angularCompilerOptions. i.e, The configuration from the base file(for example, tsconfig.base.json) are loaded first, then overridden by those in the inheriting config file.
```javascript
{
  "extends": "../tsconfig.base.json",
  "compilerOptions": {
    "experimentalDecorators": true,
    ...
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "preserveWhitespaces": true,
    ...
  }
}
```
#### How do you specify angular template compiler options?
The angular template compiler options are specified as members of the **angularCompilerOptions** object in the tsconfig.json file. These options will be specified adjecent to typescript compiler options.
```javascript
{
  "compilerOptions": {
    "experimentalDecorators": true,
              ...
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "preserveWhitespaces": true,
              ...
  }
}
```
#### How do you enable binding expression validation?
You can enable binding expression validation explicitly by adding the compiler option **fullTemplateTypeCheck** in the "angularCompilerOptions" of the project's tsconfig.json. It produces error messages when a type error is detected in a template binding expression.
For example, consider the following component:
```javascript
@Component({
  selector: 'my-component',
  template: '{{user.contacts.email}}'
})
class MyComponent {
  user?: User;
}
```
This will produce the following error:
```javascript
my.component.ts.MyComponent.html(1,1): : Property 'contacts' does not exist on type 'User'. Did you mean 'contact'?
```
#### What is the purpose of any type cast function?
You can disable binding expression type checking using $any() type cast function(by surrounding the expression). In the following example, the error Property contacts does not exist is suppressed by casting user to the any type.
```javascript
  template: '{{$any(user).contacts.email}}'
```
The $any() cast function also works with this to allow access to undeclared members of the component.
```javascript
    template: '{{$any(this).contacts.email}}'
```
#### What is Non null type assertion operator?
You can use the non-null type assertion operator to suppress the Object is possibly 'undefined' error. In the following example, the user and contact properties are always set together, implying that contact is always non-null if user is non-null. The error is suppressed in the example by using contact!.email.
```javascript
@Component({
  selector: 'my-component',
  template: '<span *ngIf="user"> {{user.name}} contacted through {{contact!.email}} </span>'
})
class MyComponent {
  user?: User;
  contact?: Contact;

  setData(user: User, contact: Contact) {
    this.user = user;
    this.contact = contact;
  }
}
```
#### What is type narrowing?
The expression used in an ngIf directive is used to narrow type unions in the Angular template compiler similar to if expression in typescript. So *ngIf allows the typeScript compiler to infer that the data used in the binding expression will never be undefined.
```javascript
@Component({
  selector: 'my-component',
  template: '<span *ngIf="user"> {{user.contact.email}} </span>'
})
class MyComponent {
  user?: User;
}
```
#### How do you describe various dependencies in angular application?
The dependencies section of package.json with in an angular application can be divided as follow,
1. **Angular packages:** Angular core and optional modules; their package names begin @angular/.
2. **Support packages:** Third-party libraries that must be present for Angular apps to run.
3. **Polyfill packages:** Polyfills plug gaps in a browser's JavaScript implementation.

#### What is zone?
A Zone is an execution context that persists across async tasks. Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events

#### What is the purpose of common module?
The commonly-needed services, pipes, and directives provided by @angular/common module. Apart from these HttpClientModule is available under @angular/common/http.

#### What is codelyzer?
Codelyzer provides set of tslint rules for static code analysis of Angular TypeScript projects. ou can run the static code analyzer over web apps, NativeScript, Ionic etc. Angular CLI has support for this and it can be use as below,
```javascript
ng new codelyzer
ng lint
```
#### What is angular animation?
Angular's animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are **@angular/animations** and **@angular/platform-browser** and these dependencies are automatically added to your project when you create a project using Angular CLI.

#### What are the steps to use animation module?
You need to follow below steps to implement animation in your angular project,

1. **Enabling the animations module:** Import BrowserAnimationsModule to add animation capabilities into your Angular root application module(for example, src/app/app.module.ts).
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }
```
2. **Importing animation functions into component files:** Import required animation functions from @angular/animations in component files(for example, src/app/app.component.ts).
```javascript
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
```
3. **Adding the animation metadata property:** add a metadata property called animations: within the @Component() decorator in component files(for example, src/app/app.component.ts)
```javascript
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    // animation triggers go here
  ]
})
```
#### What is State function?
Angular's state() function is used to define different states to call at the end of each transition. This function takes two arguments: a unique name like open or closed and a style() function.
For example, you can write a open state function
```javascript
state('open', style({
  height: '300px',
  opacity: 0.5,
  backgroundColor: 'blue'
})),
```
#### What is Style function?
The style function is used to define a set of styles to associate with a given state name. You need to use it along with state() function to set CSS style attributes. For example, in the close state, the button has a height of 100 pixels, an opacity of 0.8, and a background color of green.
```javascript
state('close', style({
  height: '100px',
  opacity: 0.8,
  backgroundColor: 'green'
})),
```
**Note:** The style attributes must be in camelCase

#### What is the purpose of animate function?
Angular Animations are a powerful way to implement sophisticated and compelling animations for your Angular single page web application.

```
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
selector: 'app-animate',
templateUrl: `<div [@changeState]="currentState" class="myblock mx-auto"></div>`,
styleUrls: `.myblock {
    background-color: green;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    margin: 5rem;
    }`,
animations: [
    trigger('changeState', [
    state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
    })),
    state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
    })),
    transition('*=>state1', animate('300ms')),
    transition('*=>state2', animate('2000ms'))
    ])
]
})
export class AnimateComponent implements OnInit {

    @Input() currentState;

    constructor() { }

    ngOnInit() {
    }
}
```
#### What is transition function?
The animation transition function is used to specify the changes that occur between one state and another over a period of time. It accepts two arguments: the first argument accepts an expression that defines the direction between two transition states, and the second argument accepts an animate() function.
Let's take an example state transition from open to closed with an half second transition between states.

```javascript
transition('open => closed', [
  animate('500ms')
]),
```
#### How to inject the dynamic script in angular?

Using DomSanitizer we can inject the dynamic Html,Style,Script,Url.

```
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  template: `
      <div [innerHtml]="htmlSnippet"></div>
  `,
})
export class App {
      constructor(protected sanitizer: DomSanitizer) {}
      htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript("<script>safeCode()</script>");
  }
```

#### What is Angular Ivy?
Angular Ivy is a new rendering engine for Angular. You can choose to opt in a preview version of Ivy from Angular version 8.
1. You can enable ivy in a new project by using the --enable-ivy flag with the ng new command
```javascript
ng new ivy-demo-app --enable-ivy
```
2. You can add it to an existing project by adding `enableIvy` option in the `angularCompilerOptions` in your project's `tsconfig.app.json`.
```javascript
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": true
  }
}
```
#### What are the features included in ivy preview?
You can expect below features with Ivy preview,
1. Generated code that is easier to read and debug at runtime
2. Faster re-build time
3. Improved payload size
4. Improved template type checking

#### Can I use AOT compilation with Ivy?
Yes, it is a recommended configuration. Also, AOT compilation with Ivy is faster. So you need set the default build options(with in angular.json) for your project to always use AOT compilation.
```javascript
{
  "projects": {
    "my-project": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
          }
        }
      }
    }
  }
}
```
#### What is Angular Language Service?
The Angular Language Service is a way to get completions, errors, hints, and navigation inside your Angular templates whether they are external in an HTML file or embedded in annotations/decorators in a string. It has the ability to autodetect that you are opening an Angular file, reads your `tsconfig.json` file, finds all the templates you have in your application, and then provides all the language services.

#### How do you install angular language service in the project?
You can install Angular Language Service in your project with the following npm command
```javascript
npm install --save-dev @angular/language-service
```
After that add the following to the "compilerOptions" section of your project's tsconfig.json
```javascript
"plugins": [
    {"name": "@angular/language-service"}
]
```
**Note:** The completion and diagnostic services works for .ts files only. You need to use custom plugins for supporting HTML files.
#### Is there any editor support for Angular Language Service?
Yes, Angular Language Service is currently available for Visual Studio Code and WebStorm IDEs. You need to install angular language service using an extension and devDependency respectively. In sublime editor, you need to install typescript which has has a language service plugin model.

#### Explain the features provided by Angular Language Service?
Basically there are 3 main features provided by Angular Language Service,

1. **Autocompletion:** Autocompletion can speed up your development time by providing you with contextual possibilities and hints as you type with in an interpolation and elements.

![ScreenShot](images/language-completion.gif)

2. **Error checking:** It can also warn you of mistakes in your code.

![ScreenShot](images/language-error.gif)

3. **Navigation:** Navigation allows you to hover a component, directive, module and then click and press F12 to go directly to its definition.


#### How do you add web workers in your application?
You can add web worker anywhere in your application. For example, If the file that contains your expensive computation is `src/app/app.component.ts`, you can add a Web Worker using `ng generate web-worker app` command which will create `src/app/app.worker.ts` web worker file. This command will perform below actions,
1. Configure your project to use Web Workers
2. Adds app.worker.ts to receive messages
```javascript
addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  postMessage(response);
});
```
3. The component `app.component.ts` file updated with web worker file
```javascript
if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log('page got message: $\{data\}');
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
}
```
**Note:** You may need to refactor your initial scaffolding web worker code for sending messages to and from.
#### What are the limitations with web workers?
1. Some environments or platforms(like @angular/platform-server) used in Server-side Rendering, don't support Web Workers. In this case we need to provide a fallback mechanism to perform the computations to work in this environments.
2. Running Angular in web worker using `@angular/platform-webworker` is not yet supported in Angular CLI.

#### What is Angular CLI Builder?
In Angular8, the CLI Builder API is stable and available to developers who want to customize the `Angular CLI` by adding or modifying commands. For example, you could supply a builder to perform an entirely new task, or to change which third-party tool is used by an existing command.

#### What is a builder?
A builder function is a function that uses the `Architect API` to perform a complex process such as "build" or "test". The builder code is defined in an npm package. For example, BrowserBuilder runs a webpack build for a browser target and KarmaBuilder starts the Karma server and runs a webpack build for unit tests.

#### How do you invoke a builder?
The Angular CLI command `ng run` is used to invoke a builder with a specific target configuration. The workspace configuration file, `angular.json`, contains default configurations for built-in builders.

#### How do you create app shell in Angular?
An App shell is a way to render a portion of your application via a route at build time. This is useful to first paint of your application that appears quickly because the browser can render static HTML and CSS without the need to initialize JavaScript. You can achieve this using Angular CLI which generates an app shell for running server-side of your app.
```javascript
ng generate appShell [options] (or)
ng g appShell [options]
```
#### What are the case types in Angular?
Angular uses capitalization conventions to distinguish the names of various types. Angular follows the list of the below case types.
1. **camelCase :** Symbols, properties, methods, pipe names, non-component directive selectors, constants uses lowercase on the first letter of the item. For example, "selectedUser"
2. **UpperCamelCase (or PascalCase):** Class names, including classes that define components, interfaces, NgModules, directives, and pipes uses uppercase on the first letter of the item.
3. **dash-case (or "kebab-case"):** The descriptive part of file names, component selectors uses dashes between the words. For example, "app-user-list".
4. **UPPER_UNDERSCORE_CASE:** All constants uses capital letters connected with underscores. For example, "NUMBER_OF_USERS".

#### What are the class decorators in Angular?
A class decorator is a decorator that appears immediately before a class definition, which declares the class to be of the given type, and provides metadata suitable to the type
The following list of decorators comes under class decorators,
1. @Component()
2. @Directive()
3. @Pipe()
4. @Injectable()
5. @NgModule()

#### What are class field decorators?
The class field decorators are the statements declared immediately before a field in a class definition that defines the type of that field. Some of the examples are: @input and @output,
```javascript
@Input() myProperty;
@Output() myEvent = new EventEmitter();
```
#### What is declarable in Angular?
Declarable is a class type that you can add to the declarations list of an NgModule. The class types such as components, directives, and pipes comes can be declared in the module.

#### What are the restrictions on declarable classes?
Below classes shouldn't be declared,
1. A class that's already declared in another NgModule
2. Ngmodule classes
3. Service classes
4. Helper classes

#### What is a DI token?
A DI token is a lookup token associated with a dependency provider in dependency injection system. The injector maintains an internal token-provider map that it references when asked for a dependency and the DI token is the key to the map. Let's take example of DI Token usage,
```javascript
const BASE_URL = new InjectionToken<string>('BaseUrl');
const injector =
    Injector.create({providers: [{provide: BASE_URL, useValue: 'http://some-domain.com'}]});
const url = injector.get(BASE_URL);
```
#### What is Angular DSL?
A domain-specific language (DSL) is a computer language specialized to a particular application domain. Angular has its own Domain Specific Language (DSL) which allows us to write Angular specific html-like syntax on top of normal html. It has its own compiler that compiles this syntax to html that the browser can understand. This DSL is defined in NgModules such as animations, forms, and routing and navigation.
Basically you will see 3 main syntax in Angular DSL.
1. (): Used for Output and DOM events.
2. []: Used for Input and specific DOM element attributes.
3. * : Structural directives(*ngFor or *ngIf) will affect/change the DOM structure.

#### What is Bazel tool?
Bazel is a powerful build tool developed and massively used by Google and it can keep track of the dependencies between different packages and build targets. In Angular8, you can build your CLI application with Bazel.
**Note:** The Angular framework itself is built with Bazel.

#### What are the advantages of Bazel tool?
Below are the list of key advantages of Bazel tool,
1. It creates the possibility of building your back-ends and front-ends with the same tool
2. The incremental build and tests
3. It creates the possibility to have remote builds and cache on a build farm.

#### How do you use Bazel with Angular CLI?
The @angular/bazel package provides a builder that allows Angular CLI to use Bazel as the build tool.
1. **Use in an existing applciation:** Add @angular/bazel using CLI
```javascript
ng add @angular/bazel
```
2. **Use in a new application:** Install the package and create the application with collection option
```javascript
npm install -g @angular/bazel
ng new --collection=@angular/bazel
```
When you use ng build and ng serve commands, Bazel is used behind the scenes and outputs the results in dist/bin folder.

#### How do you run Bazel directly?
Sometimes you may want to bypass the Angular CLI builder and run Bazel directly using Bazel CLI. You can install it globally using @bazel/bazel npm package. i.e, Bazel CLI is available under @bazel/bazel package. After you can apply the below common commands,
```javascrippt
bazel build [targets] // Compile the default output artifacts of the given targets.
bazel test [targets] // Run the tests with *_test targets found in the pattern.
bazel run [target]: Compile the program represented by target and then run it.
```

#### What is Angular Framework?
Angular is a **TypeScript-based open-source** front-end platform that makes it easy to build applications with 
in web/mobile/desktop. The major features of this framework such as declarative templates, dependency injection, 
end to end tooling, and many more other features are used to ease the development.

#### What is angular CLI?
Angular CLI(**Command Line Interface**) is a command line interface to scaffold and build angular apps using nodejs style (commonJs) modules.
You need to install using below npm command,
```
npm install @angular/cli@latest
```
Below are the list of few commands, which will come handy while creating angular projects
1. **Creating New Project:** ng new <project-name>
2. **Generating Components, Directives & Services:** ng generate/g <feature-name>
The different types of commands would be,
* ng generate class my-new-class: add a class to your application
* ng generate component my-new-component: add a component to your application
* ng generate directive my-new-directive: add a directive to your application
* ng generate enum my-new-enum: add an enum to your application
* ng generate module my-new-module: add a module to your application
* ng generate pipe my-new-pipe: add a pipe to your application
* ng generate service my-new-service: add a service to your application
3. **Running the Project:** ng serve

#### What is Ng-Content/Content Projection?
The `<ng-content></ng-content>` tag as a placeholder for dynamic content, then when the template is parsed Angular will replace that placeholder tag with your content.

They are used to create configurable components. This means the components can be configured depending on the needs of its user. This is well known as **Content Projection**. Components that are used in published libraries make use of <ng-content> to make themselves configurable.
Example
```html
<!-- project-content.html -->
<div class="heading">
  <h1>Welcome to Content Projection</h1>
</div>
<div class="body">
  <div>Some Content...</div>
</div>
<div class="footer">
  <ng-content></ng-content>
</div>
```
```html
<project-content>
  <div>This is custom footer...</div>
</project-content>
```

#### How can I select an element in a component template?
We can get a handle to the DOM element via **ElementRef** by injecting it into component's constructor:
```typescript
constructor(myElement: ElementRef) { ... }
```

#### What is Redux and how does it relate to an Angular app?
Redux is a way to manage application state and improve maintainability of asynchronicity in your application by providing a single source of truth for the application state, and a unidirectional flow of data change in the application. **ngrx/store** is one implementation of Redux principles.

#### How routing works in Angular?
When a user navigates to a page, Angular Router performs the following steps in order:

1. It reads the browser URL the user wants to navigate to
1. It applies a URL redirect (if one is defined)
1. It figures out which router state corresponds to the URL
1. It runs the guards that are defined in the router state
1. It resolves the required data for the router state
1. It activates the Angular components to display the page
1. It manages navigation and repeats the steps above when a new page is requested.

To accomplish its tasks, Angular Router introduces the following terms and concepts:

* **router service**: the global Angular Router service in our application
* **router configuration**: definition of all possible router states our application can be in
* **router state**: the state of the router at some point in time, expressed as a tree of activated route snapshots
* **activated route snapshot**: provides access to the URL, parameters, and data for a router state node
* **guard**: script that runs when a route is loaded, activated or deactivated
* **resolver**: script that fetches data before the requested page is activated
* **router outlet**: location in the DOM where Angular Router can place activated components.

#### Explain local reference variables, @ViewChild() and @ContentChild().

![alt text](https://github.com/learning-zone/Angular/blob/master/assets/viewchild-1.png)

The @ViewChild and @ViewChildren decorators in Angular provide a way to access and manipulate DOM elements, directives and components. @ViewChild is used to query one element from the DOM and @ViewChildren for multiple elements.

If you want to access following inside the Parent Component, use @ViewChild decorator of Angular.

1. Child Component
1. Directive
1. DOM Element

ViewChild returns the first element that matches the selector.
Example: *@ViewChild()*
```typescript
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-message',
    template: `
    <h2>{{message}}</h2>
`
})
export class MessageComponent {
    @Input() message: string;
}
```
We are using MessageComponent inside AppComponent as shown in below listing:
```typescript
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <div>
      <h1>Messages</h1>
      <app-message [message]='message'></app-message>
    </div>
`
})
export class AppComponent implements OnInit {
    message: any;
    ngOnInit() {
        this.message = 'Hello World !';
    }
}
```
Here MessageComponent is located inside template of AppComponent, so it can be accessed as ViewChild.
```typescript
export class AppComponent implements OnInit, AfterViewInit {
    message: any;
    @ViewChild(MessageComponent) messageViewChild: MessageComponent;
  
    ngAfterViewInit() {
        console.log(this.messageViewChild);
    }
    ngOnInit() {
        this.message = 'Hello World !';
    }
}
```

* **@ContentChild()**

Example: MessageContainerComponent
```typescript
import { Component } from '@angular/core';
@Component({
    selector: 'app-messagecontainer',
    template: `
    <div>
      <h3>{{greetMessage}}</h3>
      <ng-content select="app-message"></ng-content>
    </div>
  `
})
export class MessageContainerComponent {
    greetMessage = 'Ignite UI Rocks!';
}
```

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <div>
      <app-messagecontainer>
      <app-message [message]='message'></app-message>
      </app-messagecontainer>
    </div>
`
})
export class AppComponent implements OnInit {
    message: any;
    ngOnInit() {
        this.message = 'Hello World !';
    }
}
```
Since, MessageComponnet is projected and being used inside template of MessageContainerComponent, it can be used as ContentChild as shown in the below listing:

```typescript
import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { MessageComponent } from './message.component';
  
@Component({
    selector: 'app-messagecontainer',
    template: `
    <div>
        <h3>{{greetMessage}}</h3>
        <ng-content select="app-message"></ng-content>
    </div>
    `
})
export class MessageContainerComponent implements AfterContentInit {
    greetMessage = 'Ignite UI Rocks!';
    @ContentChild(MessageComponent) MessageComponnetContentChild: MessageComponent;
    ngAfterContentInit() {
        console.log(this.MessageComponnetContentChild);
    }
}
```
#### How to make sure that single instance will be used in an entire application?
There are two ways to make a service a singleton in Angular:

* Declare root for the value of the @Injectable() providedIn property
* Include the service in the AppModule or in a module that is only imported by the AppModule
#### How do you reference the host of a component?
We can get the host element reference using
```typescript
class MyComponent {
  constructor(private elRef:ElementRef) {
    console.log(this.elRef.nativeElement);
  }
}
```
We can also subscribe to the `focus` event
```typescript
class MyComponent {
  @HostBinding() tabindex = 0;
  @HostListener('focus', ['$event'])
  onFocus(event) {
    console.log(event);
  }
}
```
#### Why would you use renderer methods instead of using native element methods? / What is difference between Renderer and ElementRef in angular?
The `Renderer` is a class that is a partial abstraction over the DOM. Using the `Renderer` for manipulating the DOM doesn't break server-side rendering or Web Workers (where direct access to the DOM would break).

`ElementRef` is a class that can hold a reference to a DOM element. This is again an abstraction to not break in environments where the browsers DOM isn't actually available.

There are other ways to acquire an `ElementRef` instance like `@ViewChild()`, `@ViewChildren()`, `@ContentChild()`, `@ContentChildren()`. In this case `ElementRef` is a reference to the matching element(s) in the template or children.

#### How would you control size of an element on resize of the window in a component?
```html
<div (window:resize)="onResize($event)"
```
```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent{
   onResize(event){
     event.target.innerWidth; // window width
   }
}

//OR
@HostListener('window:resize', ['$event'])
onResize(event) {
  event.target.innerWidth;
}
```
#### How to cache an observable data?
```typescript
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class CachedService {
  data$: Observable<Response> = this.dataSubject.asObservable();

  private dataSubject = new ReplaySubject<Response>(1);

  constructor(private http: Http) { }

  fetch() {
    this.http.get(...).subscribe(res => this.dataSubject.next(res));
  }
}
```
This will make an HTTP call when the fetch method is called, and any subscribers to `service.data$` ($ as a suffix basically represents a stream of values) will get the response from the `ReplaySubject`. As it replays earlier values, any subscribers who join after the HTTP call resolves will still get the previous response.

If We want to trigger an update, we can just call `service.fetch()` to kick off a new HTTP call and all subscribers will be updated once the new response arrives.
```typescript
@Component({ ... })
export class SomeComponent implements OnInit {

  constructor(private service: CachedService) { }

  ngOnInit() {
    this.service.fetch();
    this.service.data$.subscribe(...);
  }
}
```
#### What do you understand by a template variable? 
A template reference variable is often a reference to a DOM element within a template. It can also be a reference to an Angular component or directive or a web component.  
Example:
```html
<input type="text" #name>
<button (click)="show(name)">Show</button>
```
```typescript
show(name: HTMLInputElement){
    console.log(name.value);
}
```

#### What is shadow DOM? How is it helping Angular to perform better?
Shadow DOM basically allows group of DOM implementation to be hidden inside a single element and encapsulate styles to the element. Whenever we create a component, Angular puts it’s template into a shadowRoot, which is the Shadow DOM of that particular component.     
Example:
```typescript
@Component({
  templateUrl: 'card.html',
  styles: [`
    .card {
      height: 70px;
      width: 100px;
    }
  `],
  encapsulation: ViewEncapsulation.Native
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.Emulated is default 
})
```
* **ViewEncapsulation.None**: - No Shadow DOM at all. Therefore, also no style encapsulation.
* **ViewEncapsulation.Emulated**: - No Shadow DOM but style encapsulation emulation.
* **ViewEncapsulation.Native**: - Native Shadow DOM enabled.

#### How do you use a JavaScript third party lib in an Angular App?
Example: Adding `underscore.js` library to a Angular Project.

Step 1: Create a new project using Angular CLI
```typescript
ng new learning
```
Step 2: Install the package 
```typescript
npm install --save underscore
```
Step 3: Import the library into Angular (TypeScript)
```typescript
npm install --save @types/underscore
```
Step 4: Import type declaration into Angular app
```typescript
import * as _ from 'underscore';

export class AppComponent {
  constructor() {
    const myArray: number[] = [9, 1, 5];
    const lastItem: number = _.last(myArray); //Using underscore
    console.log(lastItem); //5
  }
}
```
#### Can we create two Components with the same name in two different .ts files?
No
#### What's the difference between RouterModule.forRoot(ROUTES) and RouterModule.forChild(ROUTES)?
* **RouterModule.forRoot(ROUTES)**: forRoot creates a module that contains all the directives, the given routes, and the router service itself.
* **RouterModule.forChild(ROUTES)**: forChild creates a module that contains all the directives and the given routes, but does not include the router service.  
Example: *RouterModule.forRoot(ROUTES)*
```typescript
// ...
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  // ...
})
export class AppModule {}
```
Example: *RouterModule.forChild(ROUTES)*
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  // ...
})
export class ChildModule {}
```
* **forRoot()**: service register to entire application
* **forChild()**: service register to particular child component

#### What are the difference between @Inject and @Injectable?
The `@Injectable` decorator aims to actually set some metadata about which dependencies to inject into the constructor of the associated class. It's a class decorator that doesn't require parameters. Without this decorator no dependency will be injected.
```typescript
@Injectable()
export class SomeService {
  constructor(private http:Http) {
  }
}
```
The `@Inject` decorator must be used at the level of constructor parameters to specify metadata regarding elements to inject. Without it, the type of parameters is used (`obj:SomeType` is equivalent to `@Inject(SomeType) obj`).
```typescript
@Injectable()
export class SomeService {
  constructor(@Inject(Http) private http:Http, @Inject('sometoken') obj) {
  }
}
```

#### What are Zones? What is Change Detection? What would be a good use for NgZone service?
The most common use of `NgZone` service is to optimize performance when starting a work consisting of one or more asynchronous tasks that don't require UI updates or error handling to be handled by Angular.   

Zone.js is an execution context that helps developers intercept and keep track of async operations. Zone works on the concept of associating each operation with a zone. Each zone can fork and create a child zone with a different context, no limits. Inside a zone, async operations are captured using different APIs, so that the developer can decide what to do with the interceptions.

`Zone` and `NgZone` are used to automatically trigger change detection as a result of async operations. But since change detection is a separate mechanism it can successfully work without Zone and NgZone. 

#### What is auxiliary routes in angular?
Angular supports the concept of auxiliary routes, which allow to set up and navigate multiple independent routes in a single app. Each component has one primary route and zero or more auxiliary outlets. Auxiliary outlets must have unique name within a component.  

To define the auxiliary route we must first add a named router `outlet` where contents for the auxiliary route are to be rendered.  
Example:
```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <nav>
      <a [routerLink]="['/component-one']">Component One</a>
      <a [routerLink]="['/component-two']">Component Two</a>
      <a [routerLink]="[{ outlets: { 'sidebar': ['component-aux'] } }]">Component Aux</a>
    </nav>

    <div style="color: green; margin-top: 1rem;">Outlet:</div>
    <div style="border: 2px solid green; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>

    <div style="color: green; margin-top: 1rem;">Sidebar Outlet:</div>
    <div style="border: 2px solid blue; padding: 1rem;">
      <router-outlet name="sidebar"></router-outlet>
    </div>
  `
})
export class AppComponent { }
```

Next we must define the link to the auxiliary route for the application to navigate and render the contents.
```html
<a [routerLink]="[{ outlets: { 'sidebar': ['component-aux'] } }]">
  Component Aux
</a>
```
Each auxiliary route is an independent route which can have:
* Its own child routes
* Its own auxiliary routes
* Its own route-params
* Its own history stack

#### How do you get a reference to a child component? 
`ViewChild`/`ViewChildren` or `ContentChild`/`ContentChildren`

#### How do you listen for events in a component? 
`HostListener` or via `elementRef.nativeElement`

#### How do you force a change detection cycle? 
`changeDetectorRef.markForCheck` or `changeDetectorRef.detectChanges()`

#### How would you get a reference to a parent component?  
Inject it in the constructor.

#### What does forwardRef do?
Allows to refer to references which are not yet defined.

For instance, `forwardRef` is used when the token which we need to refer to for the purposes of DI is declared, but not yet defined. It is also used when the token which we use when creating a query is not yet defined.  
Example:
```typescript
class Door {
  lock: Lock;

  // Door attempts to inject Lock, despite it not being defined yet.
  // forwardRef makes this possible.
  constructor(@Inject(forwardRef(() => Lock)) lock: Lock) { this.lock = lock; }
}

// Only at this point Lock is defined.
class Lock {}

const injector = ReflectiveInjector.resolveAndCreate([Door, Lock]);
const door = injector.get(Door);
expect(door instanceof Door).toBeTruthy();
expect(door.lock instanceof Lock).toBeTruthy();
```

#### What are entryComponents?
An entry component is any component that Angular loads imperatively. 
There are two main kinds of entry components:

* The bootstrapped root component.
* A component you specify in a route definition.  
```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // bootstrapped entry component
})
```
A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process (application launch).

#### When building custom form components, what interface do they components need to implement to particpate in forms?
`ControlValueAccessor`
#### What are the best way to unsubscribe from Observables in Angular?
**The Problem**  
```typescript
export class SimpleComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  private httpSubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private http: Http) {
  }
  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(params => {
        // do something
      });
    this.httpSubscription = this.http.get("/load")
      .subscribe(result => {
        // do something
      });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }
}
```
For every `Observable.subscribe()`, we store the Subscription instance and call its unsubscribe method in the `ngOnDestroy` callback. Angular calls the `ngOnDestroy` method once the component is not used anymore. Therefore, its the perfect place to end our subscriptions. While this solution might be OK for if you have one or two subscriptions, it becomes very tedious if we have more subscriptions.

**The solution**  
```typescript
export class SimpleComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute,
              private http: Http) {
  }
  ngOnInit() {
    this.route.params
      .takeUntil(componentDestroyed(this))
      .subscribe(params => {
        // do something
      });
    this.http.get("/load")
      .takeUntil(componentDestroyed(this))
      .subscribe(result => {
        // do something
      });
  }
  ngOnDestroy() {
    // empty
  }
}
```
At runtime, the function componentDestroyed alters the component instance and creates a new `ngOnDestroy` method which in turn calls an internally created Subject. The existing ngOnDestroy gets called by the new ngOnDestroy method.

#### How Event Emitters works in Angular?
`Event Emitters` use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

EventEmitter is really an Angular abstraction, and should be used pretty much only for emitting custom Events in components. Otherwise, just use Rx as if it was any other library.

Example: 
```typescript
@Component({
    selector : 'child',
    template : `
        <button (click)="sendNotification()">Notify my parent!</button>
    `
})
class Child {
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    sendNotification() {
        this.notifyParent.emit('Some value to send to the parent');
    }
}

@Component({
    selector : 'parent',
    template : `
        <child (notifyParent)="getNotification($event)"></child>
    `
})
class Parent {
    getNotification(evt) {
        // Do something with the notification (evt) sent by the child!
    }
}
```
**How not to use it?**
```typescript
class MyService {
    @Output() myServiceEvent : EventEmitter<any> = new EventEmitter();
}
```

#### How will you intercept http to inject header to each http call?
It provides a way to intercept HTTP requests and responses to transform or handle them before passing them along. Although interceptors are capable of mutating requests and responses, the HttpRequest and HttpResponse instance properties are read-only, rendering them largely immutable.

This is because we might want to retry a request if it does not succeed at first. And immutability ensures that the interceptor chain can re-process the same request multiple times.

**Create an Interceptor**:    
Let’s say we want to send 3 headers : Content-Type, Accept and Accept-Language. To set headers for every request in Angular, we will create a class that implements HttpInterceptor.

```typescript
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    if (!request.headers.has('Accept')) {
      request = request.clone({headers: request.headers.set('Accept', 'application/json')});
    }
    request = request.clone({headers: request.headers.set('Accept-Language', 'fr-FR')});
    return next.handle(request);
  }
}
```
Adding the interceptor to app.module.ts  
```typescript
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### How will you parallelize multiple observable call?
Parallel Http requests are required when application need to make simultaneously to get data and display result to end user. 

* **forkJoin()**: waits for each HTTP request to complete and group’s all the observables returned by each HTTP call into a single observable array and finally return that observable array.  
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs';  // RxJS 6 syntax

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public requestDataFromMultipleSources(): Observable<any[]> {
    let response1 = this.http.get(requestUrl1);
    let response2 = this.http.get(requestUrl2);
    let response3 = this.http.get(requestUrl3);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    return forkJoin([response1, response2, response3]);
  }
}
```
At the component level we can subscribe to single observable array and save the responses separately.   
```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class DemoComponent implements OnInit {
    public responseData1: any;
    public responseData2: any;
    public responseData3: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.requestDataFromMultipleSources().subscribe(responseList => {
            this.responseData1 = responseList[0];
            this.responseData2 = responseList[1];
            this.responseData3 = responseList[1];
        });
    }
}
```

* **mergeMap()**: Projects each source value to an Observable which is merged in the output Observable. It executes requests in parallel and it is fault tolerant so we still display most of the posts even if some of the requests fail.
```typescript
getItems(ids: number[]): Observable<Item> {
  return from(ids).pipe(
    mergeMap(id => <Observable<Item>> this.httpClient.get(`item/${id}`))
  );
}
```
* **concatMap()**: Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next
```typescript
getItems(ids: number[]): Observable<Item> {
  return from(ids).pipe(
     concatMap(id => <Observable<Item>> this.httpClient.get(`item/${id}`))
  );
}
```
#### How will you put one async call before another?
An `async` function can contain an `await` expression, that pauses the execution of the async function and waits for the passed `Promise`'s resolution, and then resumes the `async` function's execution and returns the resolved value.  
Example:
```typescript
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  users;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllData();
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }

  getUserPosts(userId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .toPromise();
  }

  getPostComments(postId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .toPromise();
  }
```
#### How can you cancel a router navigation?
```typescript
import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs';
import { CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }  from '@angular/router';

import { MyComponent} from './my-component/my-component.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<MyComponent> {

  canDeactivate(
    component: MyComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // you can just return true or false synchronously
    if (expression === true) {
      return true;
    }
    // or, you can also handle the guard asynchronously, e.g.
    // asking the user for confirmation.
    return component.dialogService.confirm('Discard changes?');
  }
}
```
Where `MyComponent` is custom component and `CanDeactivateGuard` is going to be registered in `AppModule` in the providers section and, more importantly, in your routing config in the `canDeactivate` array property:
```typescript
{
  path: 'somePath',
  component: MyComponent,
  canDeactivate: [CanDeactivateGuard]
},
```
#### How would you animate routing?
**Set up Routes**
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
**Creating an Animation**  
First we need to add the Angular Animation module to our application.
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
We will now add a new file `animations.ts`. In this file, we will define our fade animation.
```typescript
import {
  trigger,
  animate,
  transition,
  style,
  query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(
      ':enter',
      [style({ opacity: 0 })],
      { optional: true }
    ),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);
```
Now that we have defined our animation we need to explicitly set what element it should be applied to.  
```html
<header>
  <nav>
    <a routerLink="">home</a>
    <a routerLink="about">about</a>
  </nav>
</header>

<main [@fadeAnimation]="o.isActivated ? o.activatedRoute : ''">
  <router-outlet #o="outlet"></router-outlet>
</main>
```
Next in our App Component TypeScript file we need to add some information to our component decorator.  
```typescript
import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation] // register the animation
})
export class AppComponent { }
```
The last missing piece is some CSS in our global style sheet.  
```css
router-outlet ~ * {
  position: absolute;
  height: 100%;
  width: 100%;
}
```

#### How would you make sure an api call that needs to be called only once but with multiple conditions?
We can store data in a  singleton service, which its object is created once and it won’t get destroyed throughout the application. So even routes get changes the data will be available in other routes

#### If you need to respond to two different Observable/Subject with one callback function, how would you do it? (ex: if you need to change the url through route parameters and with prev/next buttons).
We can create page change Subject and we can emit when route parameters change or next/prev button change.

#### How can you access validation errors in the template to display error messages?
```typescript
*ngIf="name.invalid && (name.dirty || name.touched)"

*ngIf="name.errors.required"
```
#### How do you unit test a service with a dependency?
Using `TestBed`
```typescript
TestBed.configureTestingModule({
  providers: [AuthService]
});
```
#### What is the difference between an observable and a promise?
* `observable` are cancelable and use subscribe
* `promise` are non-cancelable and always returns

#### What is the difference between an observable and a subject?
A RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

#### What the importance of Dirty Flag, pristine, touched, untouched, valid, invalid?
* **Dirty flag** – indicates user has changed values
* **Pristine** – opposite of dirty flag
* **Touched** – indicates field is touched by user
* **Untouched** – Opposite of touched
* **Valid** – Checks whether all validation have passed
* **Invalid** – opposite of valid

#### what is defer in promise?
`Defer` is a object that exposes promises. It has three methods.
* Reject
* Resolve
* Notify

#### What is the difference between an Annotation and a Decorator in Angular?
*TODO*
#### What is transclusion in angular?
*TODO*
#### If your data model is updated outside the ‘Zone’, explain the process how will you the view?
*TODO*
#### What is the process of inserting an embedded view from a prepared TemplateRef?
```typescript
@Component({
    selector: 'app-root',
    template: `
        <ng-template #template let-name='fromContext'><div>{{name}}</ng-template>
    `
})
export class AppComponent implements AfterViewChecked {
    @ViewChild('template', { read: TemplateRef }) _template: TemplateRef<any>;
    constructor() { }

    ngAfterViewChecked() {
        this.vc.createEmbeddedView(this._template, {fromContext: 'John'});
    }
}
```
