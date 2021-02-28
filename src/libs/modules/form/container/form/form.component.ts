import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';



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

 readonly localStorageKey ='form-create-snapshot';
appForm :FormGroup;
  constructor(private formBuilder: FormBuilder) { 
this.appForm =formBuilder.group({
  firstName:['', Validators.required],
  lastName:[''],
  passId:['', Validators.required],
  phoneNumber:['', Validators.required],
  hireDate:['', Validators.required],
  chooseTime:['', Validators.required],
  purpose:['']
});

}
  ngOnInit(): void {
 

   //Valuechanges fo the whole data
    // this.appForm.valueChanges.subscribe(data => {
    //  console.log(data)
    // })
//dynamically we can capture the state of validation of the entire form
    this.appForm.statusChanges.subscribe(formState => {
         localStorage.setItem(this.localStorageKey, JSON.stringify(formState));
    })
 
  }
 

  sendData(){
    console.log(this.appForm);
    console.log(this.appForm.value);
  }
}
