import { NgModule } from '@angular/core';
import { JoinPipe } from './join.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    JoinPipe
  ],
  exports: [
    JoinPipe
  ]
})

export class AppPipes {}