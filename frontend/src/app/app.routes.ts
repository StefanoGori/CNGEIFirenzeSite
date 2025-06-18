import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FotoComponent } from './pages/foto/foto.component';
import { IscrizioniComponent } from './pages/iscrizioni/iscrizioni.component';
import { SegreteriaComponent } from './pages/segreteria/segreteria.component';
import { LaSezioneComponent } from './pages/chiSiamo/la-sezione/la-sezione.component';
import { StoriaComponent } from './pages/chiSiamo/storia/storia.component';
import { GruppiComponent } from './pages/chiSiamo/gruppi/gruppi.component';
import { ClanComponent } from './pages/chiSiamo/clan/clan.component';
import { SostenitoriComponent } from './pages/chiSiamo/sostenitori/sostenitori.component';
import { CinquePerMilleComponent } from './pages/chiSiamo/cinque-per-mille/cinque-per-mille.component';
import { ContributiComponent } from './pages/chiSiamo/contributi/contributi.component';
import { Contributi2019Component } from './pages/chiSiamo/contributi2019/contributi2019.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'foto', component:FotoComponent},
    {path:'iscrizioni', component:IscrizioniComponent},
    {path:'segreteria', component:SegreteriaComponent},
    {path:'la-sezione',component:LaSezioneComponent},
    {path:'storia',component:StoriaComponent},
    {path:'gruppi',component:GruppiComponent},
    {path:'clan',component:ClanComponent},
    {path:'sostenitori',component:SostenitoriComponent},
    {path:'cinque-per-mille',component:CinquePerMilleComponent},
    {path:'contributi',component:ContributiComponent},
    {path:'contributi2019',component:Contributi2019Component},
    {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
