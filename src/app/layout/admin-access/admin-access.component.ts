import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/shared/users.service';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.scss']
})
export class AdminAccessComponent implements OnInit {

  data!: any[]
  id!: any;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(((users: any) => {
      this.data = users;
    }))

  }

  goToProfile(login: any) {
    this.router.navigate(['/profile', login]);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/sign-in']);
  }
}
