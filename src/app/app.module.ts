import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SignInComponent } from './session/sign-in/sign-in.component';
import { NotAuthorizedComponent } from './session/not-authorized/not-authorized.component';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AdminAccessComponent } from './layout/admin-access/admin-access.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './layout/profile/profile.component';


const appRoutes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  // { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-access', component: AdminAccessComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: '', component: AppComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    AdminAccessComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
