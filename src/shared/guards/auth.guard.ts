import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { empty, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        // return this.authService.isAuthenticated()
        //     .then(authenticated: boolean)=> {
        //     if (authenticated) {
        //         return true;
        //     } else {
        //         this.router.navigate(['/sign-in']);
        //     }
        // }

        console.log(localStorage.getItem('username'));

        if (localStorage.getItem('username')) {
            return true;
        } else {
            this.router.navigate(['/sign-in']);
            return false;
        }
    }

}