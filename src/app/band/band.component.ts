import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-band',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './band.component.html',
  styleUrl: './band.component.scss'
})
export class BandComponent {

}
