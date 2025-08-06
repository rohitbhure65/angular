import { Component,signal,effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  count = signal(0);
  
  constructor(){
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  incremeent(){
    this.count.set(this.count() + 1);
  }
  decremeent(){
    if(this.count() == 0) return
    this.count.set(this.count() - 1);
  }
}
