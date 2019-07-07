import { Component } from '@angular/core';

@Component({
  selector: 'app-billingdata',
  templateUrl: './billingdata.component.html',
  styleUrls: ['./billingdata.component.scss']
})
export class BillingdataComponent {

  payment: string[] = ['Money', 'Check', 'Transfer'];
  valuation :string[] =['Courier','E-mail'];

}