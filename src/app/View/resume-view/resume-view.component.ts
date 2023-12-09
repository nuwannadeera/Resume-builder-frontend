import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {NgxSpinnerService} from "ngx-spinner";
import {ResumeService} from "../../Service/resume.service";
import {GetResumeDataService} from "../../Service/get-resume-data.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  /*
   *
  Declare variables
   *
   *
   * */
  selectedId: any;
  personalDataList: any = [];
  educationList: any = [];
  experienceList: any = [];
  skillsList: any = [];

  constructor(private actRoute: ActivatedRoute, //add service to get url params
              private spinner: NgxSpinnerService,// add service to loader
              private getResumeDataService: GetResumeDataService) // add service to get data from backend
  {
  }

  cvCategory = [
    'Personal Details',
    'Education',
    'Experience',
    'Skills'
  ];

  // drag drop function
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cvCategory, event.previousIndex, event.currentIndex);
  }

  getAllResumeData(index: any) {
    this.getResumeDataService.getAllData(index)
      .subscribe(res => {
        console.log('res');
        console.log(res);
        this.personalDataList = res[0];
        this.educationList = res[1];
        this.experienceList = res[2];
        this.skillsList = res[3];
      });
  }


  ngOnInit(): void {
    this.spinner.show();
    // catch the url params
    this.selectedId = this.actRoute.snapshot.params['uid'];
    // console.log('url params id.....');
    // console.log(this.selectedId);
    setTimeout(() => {
    this.getAllResumeData(this.selectedId);
      this.spinner.hide();
    }, 1000);
  }
}
