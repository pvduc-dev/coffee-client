import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  public users: User[] = [];

  constructor(private readonly userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: value => this.users = value,
      error: err => console.log(err),
      complete: () => console.log('complete!'),
    });
  }

}
