import { Component } from '@angular/core';

@Component({
  selector: 'app-templatereferencevariable',
  imports: [],
  templateUrl: './templatereferencevariable.component.html',
  styleUrl: './templatereferencevariable.component.scss'
})
export class TemplatereferencevariableComponent {
  email: string = ''
  
  getEmail(val:string){
    this.email = val
  }

  setEmail(){
    this.email = "company@test.com";
  }
}
