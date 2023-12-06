import {Component} from '@angular/core';
import {Education} from "./Models/education";
import {Experience} from "./Models/experience";
import {User} from "./Models/user";
import {Skills} from "./Models/skills";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";
import {ResumeService} from "./Service/resume.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resume-builder-frontend';

  //variable declaration

  educationList: Array<Education> = [];
  experienceList: Array<Experience> = [];
  skillList: Array<Skills> = [];
  user: User = new User(); // Initialize an instance of User class

  constructor(
    private toastr: ToastrService, //add service for notification popup
    private spinner: NgxSpinnerService,  //add service for loader
    private resumeService: ResumeService //import service file
  ) {
  }


  receiveEducationData(educationList: Education[]) {
    this.educationList = educationList;
    // console.log('app component1-----');
    // console.log(this.educationList);
  }

  receiveExperienceData(experienceList: Experience[]) {
    this.experienceList = experienceList;
    // console.log('app component2-----');
    // console.log(this.experienceList);
  }

  receiveSkillData(skillList: Skills[]) {
    this.skillList = skillList;
    // console.log('app component3-----');
    // console.log(this.skillList);
  }

  receivePersonalData(user: User) {
    this.user = user;
    // console.log('app component4-----');
    // console.log(this.user);
  }


}
