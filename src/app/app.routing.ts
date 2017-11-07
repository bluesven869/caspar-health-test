import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { PatientsComponent } from './components/patients/patients.component';
import { TherapistsComponent } from './components/therapists/therapists.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'facilities', component: FacilitiesComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'therapists', component: TherapistsComponent },
    
];


export const routing = RouterModule.forRoot(routes);
