import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

import { Router } from '@angular/router'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
purposeSelectOptions= ['Registration of a birth certificate', 'Registration of a general civil passport ', 'Registration of a general civil passport  for children under 18 years of age',  'Legalization of documents', 'Visa processing', 'Notarial acts', 'And other services'];
timeOptions= [
   "09:00", "09:45", 
   "09:45", "10:30", 
   "10:30", "11:15",
   "11:15", "12:00", 
   "12:00", "12:45",
   "14:00", "14:45", 
   "14:45", "15:30",
   "15:30", "16:00", 
   ]

   appForm =this.formBuilder.group({
    firstName:['', Validators.required],
    lastName:[''],
    passId:['', Validators.required],
    phoneNumber:['', Validators.required],
    eMail:['', Validators.required],
    hireDate:['', Validators.required],
    chooseTime:['', Validators.required],
    purpose:['', Validators.required],
    
  });
//appForm :FormGroup;
constructor(private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
 

   //Valuechanges fo the whole data
    // this.appForm.valueChanges.subscribe(data => {
    //  console.log(data)
    // })
//dynamically we can capture the state of validation of the entire form
    // this.appForm.statusChanges.subscribe(formState => {
    //      localStorage.setItem(this.localStorageKey, JSON.stringify(formState));
    // })
 
  }
 ngAfterViewInit(){
  
  //  this.appForm.valueChanges.subscribe((formValue)=> {
  //    console.log(formValue);
  //  })
 }

onSubmit(){
  if (this.appForm.valid) {
    alert('You  appointment form submitted successfully');
    return this.router.navigateByUrl('/success')
  } else {
    // validate all form fields
  }
 
}
resetForm(){
  this.appForm.reset();
}

}
//   this.router.navigateByUrl('/success')
//    }
//    }
//this will routet to another page 
