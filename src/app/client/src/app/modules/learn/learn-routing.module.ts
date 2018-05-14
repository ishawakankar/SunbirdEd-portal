import { LearnPageComponent, CourseConsumptionPageComponent, CoursePlayerComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResourceService } from '@sunbird/shared';
import { FlagContentComponent } from '@sunbird/core';
import { CourseProgressComponent } from '@sunbird/dashboard';


const routes: Routes = [
  {
    path: 'learn', component: LearnPageComponent,
    data: { breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Courses', url: '' }] }
  },
  {
    path: 'learn/course', component: CourseConsumptionPageComponent,
    children: [
      { path: ':courseId', component: CoursePlayerComponent,
        children: [{path: 'flag', component: FlagContentComponent}]
      },
      {
        path: ':courseId/dashboard', component: CourseProgressComponent
      },
      { path: ':courseId/:batchId', component: CoursePlayerComponent,
        children: [{path: 'flag', component: FlagContentComponent}]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
