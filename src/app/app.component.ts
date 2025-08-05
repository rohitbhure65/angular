import { Component } from '@angular/core';
import { GetandsetComponent } from './getandset/getandset.component';

@Component({
  selector: 'app-root',
  imports: [
    GetandsetComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
