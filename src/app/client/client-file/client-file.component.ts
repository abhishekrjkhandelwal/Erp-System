import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ImoService } from 'src/app/shared/imo.service';
import { AngularFirestore } from '@angular/fire/firestore';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-client-file',
  templateUrl: './client-file.component.html',
  styleUrls: ['./client-file.component.scss']
})
export class ClientFileComponent implements OnInit {
  
  constructor(public service :ImoService,public firestore :AngularFirestore){} 

  active:string[]=['Yes','No'];
  countries :string[] =['Belgium','INDIA','MYANMAR','PORTUGAL','ROMANIA','SINGAPORE','SPAIN','UAE'];
   emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
   ]);
     matcher = new MyErrorStateMatcher();
     

     ngOnInit() {
      this.resetForm();
    }
   
     resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
      this.service.formData = {
        id: null,
       cfAdmin : "", 
        cfName : "",
        cfContact : "",
        cfCountry : "",
        cfDistrict : "",
        cfCity: "",
        cfAddress :"",
        cfPoBOx : "",
        cfEmail : "",
        cfMobil : "",
        cfTelephone : "",
        cfActive : "",
        bdcorporateName: "",
        bdcontact : "",
        bdCountry : "",
        bdDistrict : "",
        bdCity: "",
        bdAddress : "",
        bdPoBOx : "" ,
        bdpayment : "",
        bdvaluation : "",
      }
    }
     
     onSubmit(form: NgForm) {
      let data = Object.assign({}, this.service.formData);
      delete data.id;
      if (form.value.id == null){
       
        this.firestore.collection('monit') .add(data);
      }
      else
        this.firestore.doc('imo/' + form.value.id).update(data);
     }
}

