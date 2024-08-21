import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(
    private router: Router
  ){
    // if(localStorage.getItem('userID') != null){
    //   this.router.navigate(['/home']);
    // }else{
    //   this.router.navigate(['/login']);
    // }
  }
}
