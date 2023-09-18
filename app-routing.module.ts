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
import { CoursePaymentMethodComponent } from './course-payment-method/course-payment-method.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionPendingComponent } from './transaction-pending/transaction-pending.component';
import { LessonInformationComponent } from './lesson-information/lesson-information.component';
import { MycouresComponent } from './mycoures/mycoures.component';
import { CourseClickingTitleComponent } from './course-clicking-title/course-clicking-title.component';
import { MycourseEyeActionComponent } from './mycourse-eye-action/mycourse-eye-action.component';

const routes: Routes = [

{path: 'mycourseclicktitle', component:CourseClickingTitleComponent},
{path: 'Coursesye', component:MycourseEyeActionComponent},
{path: 'transactionpending', component:TransactionPendingComponent},
{path: 'mycourse', component:MycouresComponent},
{path: 'transaction-history', component:TransactionHistoryComponent},
{path: 'lesson-info', component:LessonInformationComponent},
{path: 'coursepaymentmethod', component:CoursePaymentMethodComponent},
{path: 'login', component:LoginComponent},
{path: 'dashboard', component:DashboardComponent},
{path: '', component:RegistrationComponent},
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
