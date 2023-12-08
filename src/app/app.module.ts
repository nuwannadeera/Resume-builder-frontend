import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {PersonalDtailsComponent} from "./View/personal-dtails/personal-dtails.component";
import {EducationComponent} from "./View/education/education.component";
import {ExperienceComponent} from "./View/experience/experience.component";
import {SkillsComponent} from "./View/skills/skills.component";
import {ResumeViewComponent} from "./View/resume-view/resume-view.component";
import {ResumeService} from "./Service/resume.service";
import {ResumeHeadingsComponent} from "./View/resume-headings/resume-headings.component";

@NgModule({
  declarations: [
    AppComponent,
    ResumeViewComponent,
    PersonalDtailsComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ResumeHeadingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    DragDropModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
    ResumeService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
