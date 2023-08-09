import { Component,Input } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
  icon = faEnvelope;
  appleicon=faAppleAlt;
}
