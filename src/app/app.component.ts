import { Component, signal } from '@angular/core';
// import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
// import { GetandsetComponent } from './getandset/getandset.component';
// import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
// import { DynamicstylingngstyleandngclassComponent } from './dynamicstylingngstyleandngclass/dynamicstylingngstyleandngclass.component';
// import { SignalComponent } from './signal/signal.component';
import { ComputedsignalComponent } from './computedsignal/computedsignal.component';
// import { DatatypeofsignalComponent } from './datatypeofsignal/datatypeofsignal.component';

@Component({
  selector: 'app-root',
  imports: [
    // GetandsetComponent
    // TemplatereferencevariableComponent,
    // TwowaybindingComponent
    // DynamicstylingngstyleandngclassComponent
    // SignalComponent
    computedsignal
    // ComputedsignalComponent
    // DatatypeofsignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
