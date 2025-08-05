import { Component } from '@angular/core';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
// import { TemplatereferencevariableComponent } from './templatereferencevariable/templatereferencevariable.component';
// import { GetandsetComponent } from './getandset/getandset.component';

@Component({
  selector: 'app-root',
  imports: [
    // GetandsetComponent
    // TemplatereferencevariableComponent,
    TwowaybindingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
