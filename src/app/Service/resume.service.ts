import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  saveResume(saving_data: any) {
    console.log('service----');
    console.log(saving_data);
    return this.http.post(this.apiUrl + '/save_resume.php', saving_data);
  }
}
