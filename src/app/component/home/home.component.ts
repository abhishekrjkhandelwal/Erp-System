import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { ProcessesComponent } from '../processes/processes.component';
import { MessagesComponent } from '../messages/messages.component';
import { UsersComponent } from '../users/users.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 title = 'IMOVALUE';
  public dTabs = [
  {
      label: 'Client',
      component: ClientComponent
  },
  {
      label: 'Process',
      component:  ProcessesComponent
  },
  {
    label: 'Messages',
    component: MessagesComponent
},
  {
      label: 'Users',
      component: UsersComponent
  },
  {
    label: 'Logout',
    component: LogoutComponent
}
];

}
