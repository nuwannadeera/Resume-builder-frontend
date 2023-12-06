import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../Models/user";

@Component({
  selector: 'app-personal-dtails',
  templateUrl: './personal-dtails.component.html',
  styleUrls: ['./personal-dtails.component.css']
})
export class PersonalDtailsComponent implements OnInit {

  user: User = new User(); // Initialize an instance of User class
  @Output() dataEmitter = new EventEmitter<User>();

  constructor() {
  }

  addUserData() {
    this.dataEmitter.emit(this.user); //called when the child component emits the data
  }


  ngOnInit(): void {
  }

}
