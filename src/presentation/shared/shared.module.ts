import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [ 
    BackButtonComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    BackButtonComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
