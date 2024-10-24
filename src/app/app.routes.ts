import { Routes } from '@angular/router';
import { BandComponent } from './band/band.component';
import { HomeComponent } from './home/home.component';
import { BandListComponent } from './band-list/band-list.component';
import { DreamListComponent } from './dream-list/dream-list.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'band-list', component: BandListComponent},
    {path: 'band', component: BandComponent},
    {path: 'dream-list', component: DreamListComponent},
];
