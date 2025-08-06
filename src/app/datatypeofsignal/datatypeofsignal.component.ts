import { Component,Signal,signal,WritableSignal } from '@angular/core';

@Component({
  selector: 'app-datatypeofsignal',
  imports: [],
  templateUrl: './datatypeofsignal.component.html',
  styleUrl: './datatypeofsignal.component.scss'
})
export class DatatypeofsignalComponent {
  data: WritableSignal<number> = signal(10);
  dataType: Signal<string> = signal(typeof this.data());

  increment(){
    this.data.set(this.data() + 1);
    console.log(this.dataType());
  }
}
