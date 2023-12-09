import {Education} from "../../Models/education";
import {Experience} from "../../Models/experience";
import {Skills} from "../../Models/skills";
import {User} from "../../Models/user";
import {Saving_data} from "../../Models/saving_data";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";
import {ResumeService} from "../../Service/resume.service";
import {Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-resume-headings',
  templateUrl: './resume-headings.component.html',
  styleUrls: ['./resume-headings.component.css']
})
export class ResumeHeadingsComponent implements OnInit {

  /*
   *
  Declare variables
   *
   *
   * */
  check: boolean = true;
  user_inedx: any = 0;
  educationList: Array<Education> = [];
  experienceList: Array<Experience> = [];
  skillList: Array<Skills> = [];
  user: User = new User(); // Initialize an instance of User class
  saving_data: Saving_data = new Saving_data();  // Initialize an instance of User class

  constructor(
    private toastr: ToastrService, //add service for notification popup
    private spinner: NgxSpinnerService,  //add service for loader
    private resumeService: ResumeService, //import service file
    private router: Router // import router service to redirect
  ) {
  }

  // add validation for save resume
  validation() {
    this.check = true;
    if (!this.user.title) {
      this.check = false;
      this.toastr.error('Add Title!');
    }
    if (!this.user.post) {
      this.check = false;
      this.toastr.error('Add Name!');
    }
    if (!this.user.name) {
      this.check = false;
      this.toastr.error('Add Name!');
    }
    if (!this.user.email) {
      this.check = false;
      this.toastr.error('Add Email!');
    }
    if (!this.user.contact_no) {
      this.check = false;
      this.toastr.error('Add ContactNo!');
    }
    if (!this.user.date_of_birth) {
      this.check = false;
      this.toastr.error('Add DOB!');
    }
    if (!this.user.address) {
      this.check = false;
      this.toastr.error('Add Address!');
    }
    if (!this.user.linkedin_profile) {
      this.check = false;
      this.toastr.error('Add Profile Link!');
    }
    if (this.educationList.length == 0) {
      this.check = false;
      this.toastr.error('Add Education!');
    }
    if (this.experienceList.length == 0) {
      this.check = false;
      this.toastr.error('Add Experience!');
    }
    if (this.skillList.length == 0) {
      this.check = false;
      this.toastr.error('Add Skills!');
    }
    return this.check;
  }

// get data from education component
  receiveEducationData(educationList: Education[]) {
    this.saving_data.eduList = [];
    this.educationList = educationList;
    this.saving_data.eduList = educationList;
  }

  // get data from experience component
  receiveExperienceData(experienceList: Experience[]) {
    this.saving_data.expList = [];
    this.experienceList = experienceList;
    this.saving_data.expList = experienceList;
  }

  // get data from skill component
  receiveSkillData(skillList: Skills[]) {
    this.saving_data.skillList = [];
    this.skillList = skillList;
    this.saving_data.skillList = skillList;
  }

  // get data from personal data component
  receivePersonalData(user: User) {
    this.saving_data.user = {};
    this.user = user;
    this.saving_data.user = user;
  }

//save resume data
  saveAllData() {
    if (this.validation()) {
      this.spinner.show();
      this.resumeService.saveResume(this.saving_data)
        .subscribe(res => {
          this.user_inedx = res;
          if (parseInt(this.user_inedx) > 0) {
            this.toastr.success('Data Saved Successfully!');
            this.redirect();
            console.log('saving data');
            console.log(this.saving_data);
            this.spinner.hide();
          } else {
            //if error occurs show notification
            this.toastr.error('Add Details First');
            this.spinner.hide();
          }
        });
    }
  }

  redirect() {
    // Encode the data
    // const encodedData = encodeURIComponent(JSON.stringify(this.saving_data));
    // Navigate to the 'viewResume' route with the encoded data
    this.router.navigateByUrl('/viewResume/' + this.user_inedx);
  }


  ngOnInit(): void {
  }

}
