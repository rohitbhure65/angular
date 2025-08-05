import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- required for ngModel

@Component({
  selector: 'app-twowaybinding',
  imports: [],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.scss'
})
export class TwowaybindingComponent {
 name: string = '';

  changeName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
  }
}
