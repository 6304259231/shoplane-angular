import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    RouterOutlet,
    HttpClientModule , DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Demo';
}
