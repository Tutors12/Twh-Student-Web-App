import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentMessageComponent } from './student-message/student-message.component';
import { FavoriteGroupClassComponent } from './favorite-group-class/favorite-group-class.component';
import { FavoriteCourseMainComponent } from './favorite-course-main/favorite-course-main.component';
import { FavoriteTutorComponent } from './favorite-tutor/favorite-tutor.component';
import { MyLessonComponent } from './my-lesson/my-lesson.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
 
{path: '', component:LoginComponent},
{path: 'dashboard', component:DashboardComponent},
{path: 'register', component:RegistrationComponent},
{path: 'chatmessage', component:StudentMessageComponent},
{path: 'favoritegroupclass', component:FavoriteGroupClassComponent},
{path: 'favoritecoursemain', component:FavoriteCourseMainComponent},
{path: 'favoritetutor', component:FavoriteTutorComponent},
{path: 'mylesson', component:MyLessonComponent},
{path: 'myprofile', component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
