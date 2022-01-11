import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SignInComponent } from './session/sign-in/sign-in.component';
import { NotAuthorizedComponent } from './session/not-authorized/not-authorized.component';
import { AuthGuard } from 'src/shared/guards/auth.guard';


const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  // { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '', component: AppComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
