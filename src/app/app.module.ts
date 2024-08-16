import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AccountComponent } from './account/account.component';
import { UtilitiesComponent } from './main/utilities/utilities.component';
import { UnitsComponent } from './main/units/units.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AccountComponent,
    UtilitiesComponent,
    UnitsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    AppComponent,
    MainComponent,
    AccountComponent,
    UtilitiesComponent,
    UnitsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
