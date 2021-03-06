import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageForEachDepartmentComponent } from './components/main-page-for-each-department/main-page-for-each-department.component';
import { UpperheaderComponent } from './components/Header/upperheader/upperheader.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { MiddleheaderComponent } from './components/Header/middleheader/middleheader.component';
import { HomeComponent } from './components/Header/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SharedModule } from './_modules/shared/shared.module';
import { ErrorsComponent } from './components/errors/errors.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    MainPageForEachDepartmentComponent,
    UpperheaderComponent,
    HeaderComponent,
    MiddleheaderComponent,
    HomeComponent,
    ContactusComponent,
    ErrorsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

 }
