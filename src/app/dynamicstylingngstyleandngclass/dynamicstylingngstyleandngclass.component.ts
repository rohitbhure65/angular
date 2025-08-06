import { Component } from '@angular/core';
import { NgClass,NgStyle } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamicstylingngstyleandngclass',
  imports: [NgClass, NgStyle, CommonModule],
  templateUrl: './dynamicstylingngstyleandngclass.component.html',
  styleUrl: './dynamicstylingngstyleandngclass.component.scss'
})
export class DynamicstylingngstyleandngclassComponent {
 // For ngClass
  isActive = true;
  isHighlighted = false;
  hasError = true;
  classList = ['box', 'rounded'];

  // For ngStyle
  textColor = 'red';
  fontSize = 16;
  isError = false;
  dynamicWidth = '200px';
}
