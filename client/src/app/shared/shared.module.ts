import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [HeaderComponent, MainComponent]
})
export class SharedModule { }
