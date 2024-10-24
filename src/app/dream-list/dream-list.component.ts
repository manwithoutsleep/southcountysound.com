import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dream-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dream-list.component.html',
  styleUrl: './dream-list.component.scss'
})
export class DreamListComponent {

}
