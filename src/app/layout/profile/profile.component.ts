import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersListService } from 'src/shared/users-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData: any;
  id: any;

  constructor(private route: ActivatedRoute, private usersListService: UsersListService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.usersListService.getById(this.id).subscribe(
      response => this.userData = response
    )
    console.log(this.userData);

  }
}
