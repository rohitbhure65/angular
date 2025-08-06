import { Component } from '@angular/core';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
// import { GetandsetComponent } from './getandset/getandset.component';
import { DynamicstylingngstyleandngclassComponent } from './dynamicstylingngstyleandngclass/dynamicstylingngstyleandngclass.component';

@Component({
  selector: 'app-root',
  imports: [
    // GetandsetComponent
    // TemplatereferencevariableComponent
    DynamicstylingngstyleandngclassComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
