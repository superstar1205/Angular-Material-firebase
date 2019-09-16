import {Component, AfterViewInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentPortal, Portal, TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements AfterViewInit {

  @ViewChild('templatePortalContent', {static: false}) templatePortalContent: TemplateRef<any>;
  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<ComponentPortalExample>;
  templatePortal: TemplatePortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortalExample);
    this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
  }
}

@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample {}
