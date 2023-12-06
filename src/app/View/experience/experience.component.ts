import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Experience} from "../../Models/experience";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  /*
   *
  Declare variables
   *
   *
   * */

  experience: Experience = new Experience();  // Initialize an instance of Experience class
  experienceList: Array<Experience> = [];  // Declare a variable to store a list of experience
  check: boolean = true; // A flag to check validation status
  currentIndex: number = 1; // An index to track the current index
  @Output() dataEmitter = new EventEmitter<Experience[]>();

  constructor(
    private toastr: ToastrService, //add service for notification popup
    private spinner: NgxSpinnerService  //add service for loader
  ) {
  }

// Validation function to check if all required fields are filled
  validation() {
    this.check = true;
    if (!this.experience.position) {
      this.check = false;
      this.toastr.error('Add Position!');
    }
    if (!this.experience.company) {
      this.check = false;
      this.toastr.error('Add Company!');
    }
    if (!this.experience.start_date) {
      this.check = false;
      this.toastr.error('Add Start Date!');
    }
    return this.check;
  }

//clear Function
  clear() {
    this.experience = new Experience();
  }

// Function to add education fields to the list
  addToExperienceTable() {
    if (this.validation()) {
      this.spinner.show();
      this.experience.id = this.currentIndex++;
      console.log(this.experience);
      this.experienceList.unshift(this.experience);
      console.log(this.experienceList);
      this.dataEmitter.emit(this.experienceList); //called when the child component emits the data
      this.clear();
      this.toastr.success('Added Successfully');
      this.spinner.hide();
    }
  };

// Function to edit experience fields
  editExperienceData(data: any) {
    this.experienceList.forEach((value: any) => {
      if (value.id === data.id) {
        this.experience = data;
        const indexOfObject = this.experienceList.findIndex((object: any) => {
          return object.id === data.id;
        });
        // If the object is found, remove it from the educationList array
        if (indexOfObject !== -1) {
          this.experienceList.splice(indexOfObject, 1);
        }
      }
    });
  };

// Function to delete education fields
  deleteExperienceData(delete_index: number) {
    let new_id = -1;
    for (var i = 0; i < this.experienceList.length; i++) {
      if (this.experienceList[i].id === delete_index) {
        new_id = i;
        break;
      }
    }
    this.experienceList.splice(new_id, 1);
    this.toastr.success('Deleted Successfully');
    console.log(this.experienceList);
  };


  ngOnInit(): void {
  }

}
