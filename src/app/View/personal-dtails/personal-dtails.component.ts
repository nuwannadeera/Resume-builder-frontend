import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/user";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-personal-dtails',
  templateUrl: './personal-dtails.component.html',
  styleUrls: ['./personal-dtails.component.css']
})
export class PersonalDtailsComponent implements OnInit {

  user: User = new User();

  constructor(private toastr: ToastrService) { }

  // showNotification() {
  //   this.toastr.success('This is a success message.', 'Success');
  // }

  ngOnInit(): void {
  }

}
