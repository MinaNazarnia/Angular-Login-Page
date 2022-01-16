import { Component, OnInit } from '@angular/core';
import { UsersListService } from 'src/shared/users-list.service';

@Component({
  selector: 'app-admin-access',
  templateUrl: './admin-access.component.html',
  styleUrls: ['./admin-access.component.scss']
})
export class AdminAccessComponent implements OnInit {

  data!: any[];

  constructor(private usersListService: UsersListService) { }

  ngOnInit(): void {
    this.usersListService.get().subscribe(((users: any) => {
      this.data = users;
    }))
  }

}
