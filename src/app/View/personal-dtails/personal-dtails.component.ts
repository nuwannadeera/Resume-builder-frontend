import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/user";

@Component({
  selector: 'app-personal-dtails',
  templateUrl: './personal-dtails.component.html',
  styleUrls: ['./personal-dtails.component.css']
})
export class PersonalDtailsComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

}
