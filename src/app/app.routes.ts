import { Routes } from '@angular/router';
import { BandComponent } from './components/band/band.component';
import { HomeComponent } from './components/home/home.component';
import { BandListComponent } from './components/band-list/band-list.component';
import { DreamListComponent } from './components/dream-list/dream-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'band-list', component: BandListComponent, title: 'Bands'},
    {path: 'band', component: BandComponent, title: 'Band'},
    {path: 'dream-list', component: DreamListComponent, title: 'Dreams in the South County Sound'},
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: '', component: HomeComponent, title: ''},
    {path: '**', component: PageNotFoundComponent, title: 'South County Not Found'}
];


