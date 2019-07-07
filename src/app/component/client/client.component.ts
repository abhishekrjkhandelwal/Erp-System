import { Component, OnInit } from '@angular/core';
import { BillingdataComponent } from 'src/app/client/billingdata/billingdata.component';
import { ClientFileComponent } from 'src/app/client/client-file/client-file.component';
import { ClientLogComponent } from 'src/app/client/client-log/client-log.component';
import { ProcesssComponent } from 'src/app/client/processs/processs.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  public clientTabs = [
    {
        label: 'Clientfile',
        component: ClientFileComponent
    },
    {
        label: 'Billingdata',
        component:  BillingdataComponent
    },
    {
      label: 'Process',
      component: ProcesssComponent
  },
    {
        label: 'ClientLog',
        component: ClientLogComponent
    },
   
  ];
  
  }





  
