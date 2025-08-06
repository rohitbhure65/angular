import { Component, signal } from '@angular/core';
import { SignalComponent } from './signal/signal.component';
// import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
// import { GetandsetComponent } from './getandset/getandset.component';
// import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
// import { DynamicstylingngstyleandngclassComponent } from './dynamicstylingngstyleandngclass/dynamicstylingngstyleandngclass.component';

@Component({
  selector: 'app-root',
  imports: [
    // GetandsetComponent
    // TemplatereferencevariableComponent,
    // TwowaybindingComponent
    // DynamicstylingngstyleandngclassComponent
    SignalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
