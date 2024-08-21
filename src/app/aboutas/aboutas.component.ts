import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-aboutas',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './aboutas.component.html',
  styleUrl: './aboutas.component.css'
})
export class AboutasComponent {

}
