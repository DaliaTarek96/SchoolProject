import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { DegreeComponent } from './components/degree/degree.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TableComponent } from './components/table/table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DegreeComponent, HomeComponent, MainComponent, MainnavComponent, ProfileComponent, TableComponent],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    SharedModule.forRoot()
  ]
})
export class ParentsModule { }
