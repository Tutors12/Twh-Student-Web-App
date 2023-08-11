import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-student-message',
  templateUrl: './student-message.component.html',
  styleUrls: ['./student-message.component.css']
})

export class StudentMessageComponent {
username='username';
messages=[];
message='';
searchControl= new FormControl('');
 submit():void
 {
  
 }

}
