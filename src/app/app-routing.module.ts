import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResumeHeadingsComponent} from "./View/resume-headings/resume-headings.component";
import {ResumeViewComponent} from "./View/resume-view/resume-view.component";

const routes: Routes = [
  {
    path: '',
    component: ResumeHeadingsComponent
  },
  {
    path: 'viewResume/:uid',
    component: ResumeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
