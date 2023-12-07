import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Education} from "../../Models/education";
import {ToastrService} from "ngx-toastr";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  /*
   *
  Declare variables
   *
   */
  education: Education = new Education(); // Initialize an instance of Education class
  educationList: Array<Education> = []; // Declare a variable to store a list of education
  check: boolean = true; // A flag to check validation status
  currentIndex: number = 1; // An index to track the current index
  @Output() dataEmitter = new EventEmitter<Education[]>();

  constructor(
    private toastr: ToastrService, //add service for notification popup
    private spinner: NgxSpinnerService  //add service for loader
  ) {
  }

// Validation function to check if all required fields are filled
  validation() {
    this.check = true;
    if (!this.education.course_name) {
      this.check = false;
      this.toastr.error('Add Course Name!');
    }
    if (!this.education.institute) {
      this.check = false;
      this.toastr.error('Add Institute!');
    }
    if (!this.education.start_date) {
      this.check = false;
      this.toastr.error('Add Start Date!');
    }
    if (!this.education.end_date) {
      this.check = false;
      this.toastr.error('Add End Date!');
    }
    return this.check;
  }

  //clear Function
  clear() {
    this.education = new Education();
  }

  // Function to add education fields to the list
  addToEducationTable() {
    if (this.validation()) {
      this.spinner.show();
      this.education.id = this.currentIndex++;
      console.log(this.education);
      this.educationList.unshift(this.education);
      this.dataEmitter.emit(this.educationList);
      // console.log(this.educationList);
      this.clear();
      this.toastr.success('Added Successfully');
      this.spinner.hide();
    }
  };

  // Function to edit education fields
  editEducationalData(data: any) {
    this.educationList.forEach((value: any) => {
      if (value.id === data.id) {
        this.education = data;
        const indexOfObject = this.educationList.findIndex((object: any) => {
          return object.id === data.id;
        });
        // If the object is found, remove it from the educationList array
        if (indexOfObject !== -1) {
          this.educationList.splice(indexOfObject, 1);
        }
      }
    });
  };

  // Function to delete education fields
  deleteEducationalData(delete_index: number) {
    let new_id = -1;
    for (var i = 0; i < this.educationList.length; i++) {
      if (this.educationList[i].id === delete_index) {
        new_id = i;
        break;
      }
    }
    this.educationList.splice(new_id, 1);
    this.toastr.success('Deleted Successfully');
    console.log(this.educationList);
  };


  ngOnInit(): void {
  }
}



