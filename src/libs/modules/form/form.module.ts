import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormComponent } from './container/form/form.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


const routes: Route[]= [
  {
    path:'',
    redirectTo: 'edit'
  },
  {
    path:'',
    pathMatch: 'full', //pathmacth--redirectTo
    component: FormComponent
  }

  
] 
  @NgModule({
    declarations: [FormComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      MatFormFieldModule,
      MatButtonModule,
      MatSnackBarModule,
      MatSelectModule,
     MatInputModule,
     MatCardModule,
     MatNativeDateModule,
     MatDatepickerModule,
     AngularFirestoreModule

    ],
providers:[]

})
export class FormModule { }
