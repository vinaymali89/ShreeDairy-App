import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  body: any = {
     email: '',
     password: '',
}

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  login(event: Event){
    this.loginService.onLogin(this.body).subscribe((data:any) => {
      console.log(data);
      if(data.status === true){
        localStorage.setItem('userID',data.user.id)
        this.router.navigate(['/home']);
      }
    });
  }
}
