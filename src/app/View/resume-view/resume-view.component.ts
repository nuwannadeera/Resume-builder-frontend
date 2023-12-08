import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  selectedObj: any;
  personalData: any = {};
  educationList: any = [];
  experienceList: any = [];
  skillsList: any = [];

  constructor(private actRoute: ActivatedRoute) {
  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }


  ngOnInit(): void {
    // this.selectedObj = this.actRoute.snapshot.params['encodedData'];
    // this.personalData = JSON.parse(this.selectedObj.user);
    // this.educationList = JSON.parse(this.selectedObj.eduList);
    // this.experienceList = JSON.parse(this.selectedObj.expList);
    // this.skillsList = JSON.parse(this.selectedObj.skillList);
  }
}
