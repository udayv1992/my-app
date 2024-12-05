import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventregistrationComponent } from './eventregistration/eventregistration.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { StoreComponent } from './store/store.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailsComponent } from './mails/mails.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentidComponent } from './studentid/studentid.component';
import { CreateStudentidComponent } from './create-studentid/create-studentid.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    component: DashboardComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'calculator', component: CalculatorComponent },
      { path: 'rectangle', component: RectangleComponent },
      { path: 'circle', component: CircleComponent },
      { path: 'bmi', component: BmiComponent },
      { path: 'data-binding', component: DataBindingComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'eventregistration', component: EventregistrationComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'store', component: StoreComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'flipkart', component: FlipkartComponent },
      { path: 'mails', component: MailsComponent },
      { path: 'pinterest', component: PinterestComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'imdb', component: ImdbComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'bankaccount', component: BankaccountsComponent },
      { path: 'createvehicle', component: CreateVehicleComponent },
      { path: 'createaccounts', component: CreateAccountsComponent },
      { path: 'studentid', component: StudentidComponent },
      { path: 'createstudentid', component: CreateStudentidComponent },
      { path: 'userprofile', component: UserProfileComponent },
      { path: 'createuser', component: CreateUserComponent },
      { path: 'studentform', component: StudentFormComponent },
      { path: 'vehicledetails/:id', component: VehicleDetailsComponent },
      { path: 'edit-vehicle/:id', component: CreateVehicleComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'sibling', component: SiblingComponent },
    ],
  },

  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
