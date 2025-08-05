import { Component } from '@angular/core';
import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
// import { GetandsetComponent } from './getandset/getandset.component';

@Component({
  selector: 'app-root',
  imports: [
    // GetandsetComponent
    TemplatereferencevariableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
