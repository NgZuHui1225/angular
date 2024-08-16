import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { UtilitiesComponent } from './main/utilities/utilities.component';
import { UnitsComponent } from './main/units/units.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path:'account', component: AccountComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'units', component: UnitsComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
