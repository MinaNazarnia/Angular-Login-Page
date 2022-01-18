import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersListService } from 'src/shared/users-list.service';


export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.scss']
})
export class AdminAccessComponent implements OnInit {

  data!: any[];
  // typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  usersList!: string[];
  id!: any;

  constructor(private usersListService: UsersListService, private router: Router) { }

  ngOnInit(): void {
    this.usersListService.getAll().subscribe(((users: any) => {
      this.data = users;
    }))

  }

  goToProfile(login) {
    this.router.navigate(['/profile', login]);
  }
}
