import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MiddlesmallheaderComponent } from './middlesmallheader/middlesmallheader.component';


@NgModule({
  declarations: [MiddlesmallheaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[MiddlesmallheaderComponent]
})
// use to share cpmponents with other modules

export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
      
    };
  }
}
