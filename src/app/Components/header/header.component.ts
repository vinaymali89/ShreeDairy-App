import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  menuOpen = false;
  imgLogo: string | undefined;

  constructor(private router: Router){
    this.imgLogo = "../../Assets/Designer.png"
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  gotoProducts(){
    this.router.navigate(['../../products']);
  }

  gotoAbout(){
    this.router.navigate(['../../aboutas']);
  }

  gotoContact(){
    this.router.navigate(['../../contactas']);
  }

  gotoHome(){
    this.router.navigate(['../../home']);
    
  }
}
