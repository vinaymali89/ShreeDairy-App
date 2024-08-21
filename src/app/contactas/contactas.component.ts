import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-contactas',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contactas.component.html',
  styleUrl: './contactas.component.css'
})
export class ContactasComponent {

}
