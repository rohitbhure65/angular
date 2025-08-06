import { Component, signal, computed, Signal } from '@angular/core';

@Component({
  selector: 'app-computedsignal',
  imports: [],
  templateUrl: './computedsignal.component.html',
  styleUrl: './computedsignal.component.scss'
})
export class ComputedsignalComponent {
  // Create reactive signals x and y with initial values 10 and 30
  x = signal(10);
  y = signal(30);

  // Create a computed signal z that automatically recalculates when x or y changes
  // It returns the sum of x and y
  z: Signal<number> = computed(() => this.x() + this.y());

  // Method to increment x by 1 and log the current value of z
  // Because z is a computed signal, it reflects the latest value of x + y
  showvalue() {
    this.x.set(this.x() + 1); // Update x
    console.log(this.z());   // Print updated value of z (x + y)
  }
}
