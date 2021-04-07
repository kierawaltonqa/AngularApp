import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalise.pipe';

// you can declare pipes, components or directives
@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule
  ],
  exports: [CapitalizePipe]
})
export class SharedModule { }
