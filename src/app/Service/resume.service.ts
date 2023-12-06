import { Injectable } from '@angular/core';
import {Saving_data} from "../Models/saving_data";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  saveResume(saving_data: Saving_data) {
    return this.http.post(this.apiUrl + '/saveResumeData', saving_data);
  }
}
