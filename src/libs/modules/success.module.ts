import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SuccessPageComponent } from './form/container/success-page/success-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Route[]= [
   
    {
      path:'',
      pathMatch: 'success', //pathmacth--redirectTo
      component: SuccessPageComponent
    }]
    
    
    @NgModule({
      declarations: [SuccessPageComponent],
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatToolbarModule
       
  
      ],
  providers:[]
  
  })
  export class SuccessModule { }