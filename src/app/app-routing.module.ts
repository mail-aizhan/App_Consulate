import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'login'
  },
{
  path:'login',
  pathMatch:'full',
  component: LoginContainerComponent
},
{
  path:'form',
  loadChildren: ()=> import('../libs/modules/form/form.module').then(m=>m.FormModule)
},{ 
path:'success',
loadChildren: ()=> import('../libs/modules/success.module').then(m=>m.SuccessModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
