import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ResultComponent } from './result';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'result', component: ResultComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);