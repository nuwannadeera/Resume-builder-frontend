import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetResumeDataService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getAllData(uid: any) {
    return this.http.get<Array<any>>(this.apiUrl + '/view_cv_data.php?user_id='+ uid);
  }
}
