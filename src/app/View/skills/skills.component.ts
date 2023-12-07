import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Education} from "../../Models/education";
import {Skills} from "../../Models/skills";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //variable declaration
  skills: Skills = new Skills();
  skillList: Array<Skills> = [];
  check: boolean = true;
  currentIndex: number = 1;
  @Output() dataEmitter = new EventEmitter<Skills[]>();

  constructor(
    private toastr: ToastrService, //add service for notification popup
    private spinner: NgxSpinnerService  //add service for loader
  ) {
  }

  // Validation function to check if all required fields are filled
  validation() {
    this.check = true;
    if (!this.skills.skill) {
      this.check = false;
      this.toastr.error('Add Skill!');
    }
    return this.check;
  }

  //clear Function
  clear() {
    this.skills = new Skills();
  }

  // Function to add skills fields to the list
  addToSkillsTable() {
    if (this.validation()) {
      this.spinner.show();
      this.skills.id = this.currentIndex++;
      console.log(this.skills);
      this.skillList.unshift(this.skills);
      this.dataEmitter.emit(this.skillList); //called when the child component emits the data
      // console.log(this.skillList);
      this.clear();
      this.toastr.success('Added Successfully');
      this.spinner.hide();
    }
  };

  // Function to edit skill field
  editSkillData(data: any) {
    this.skillList.forEach((value: any) => {
      if (value.id === data.id) {
        this.skills = data;
        const indexOfObject = this.skillList.findIndex((object: any) => {
          return object.id === data.id;
        });
        // If the object is found, remove it from the educationList array
        if (indexOfObject !== -1) {
          this.skillList.splice(indexOfObject, 1);
        }
      }
    });
  };

  // Function to delete skill field
  deleteSkillData(delete_index: number) {
    let new_id = -1;
    for (var i = 0; i < this.skillList.length; i++) {
      if (this.skillList[i].id === delete_index) {
        new_id = i;
        break;
      }
    }
    this.skillList.splice(new_id, 1);
    this.toastr.success('Deleted Successfully');
    console.log(this.skillList);
  };


  ngOnInit(): void {
  }

}
