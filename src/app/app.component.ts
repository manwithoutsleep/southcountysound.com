import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BandComponent } from "./band/band.component";
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BandComponent, HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'southcountysound.com';
}
