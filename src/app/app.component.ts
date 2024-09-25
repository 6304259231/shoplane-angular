import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent , SignupComponent , LoginComponent , HomeComponent ,RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Demo';
}
