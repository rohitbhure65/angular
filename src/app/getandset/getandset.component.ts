import { Component } from '@angular/core';

@Component({
  selector: 'app-getandset',
  imports: [],
  templateUrl: './getandset.component.html',
  styleUrl: './getandset.component.scss'
})
export class GetandsetComponent {
  name: string = '';
  displayName: string = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = "Rohit Bhure";
  }

}
