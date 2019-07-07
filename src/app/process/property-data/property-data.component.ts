import { Component} from '@angular/core';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.scss']
})
export class PropertyDataComponent {
  bedroom :string[] =['1 Bedroom','2 Bedroom','3 Bedroom','4 Bedroom','5 Bedroom'];
  propertiess:string[] =['Apartment','Villa','Warehouse','Residential','Building','Labour camp','others'];
}
