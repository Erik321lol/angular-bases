import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MainPageComponenet } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    MainPageComponenet,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponenet
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
