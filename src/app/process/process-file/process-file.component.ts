import { Component } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-process-file',
  templateUrl: './process-file.component.html',
  styleUrls: ['./process-file.component.scss'],
 
})

export class ProcessFileComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  countries :string[] =['Belgium','INDIA','MYANMAR','PORTUGAL','ROMANIA','SINGAPORE','SPAIN','UAE'];
  properties:string[] =['Mortgage','REIT','Commercial'];
  minDate =new Date();
  active:string[]=['Yes','No'];
  dateCtrl= new FormControl('',[Validators.required]);
  dateCtrl1= new FormControl('',[Validators.required]);
  dateCtrl2= new FormControl('',[Validators.required]);
  dateCtrl3= new FormControl('',[Validators.required]);
  dateCtrl4= new FormControl('',[Validators.required]);
  dateCtrl5= new FormControl('',[Validators.required]);



}

