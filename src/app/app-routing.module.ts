import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessesComponent } from './component/processes/processes.component';
import { ClientComponent } from './component/client/client.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MessagesComponent } from './component/messages/messages.component';
import { UsersComponent } from './component/users/users.component';
import { AdditionalDocumentComponent } from './process/additional-document/additional-document.component';
import { FinalDocumentComponent } from './process/final-document/final-document.component';
import { FinishReportComponent } from './process/finish-report/finish-report.component';
import { PropertyPhotosComponent } from './process/property-photos/property-photos.component';
import { PropertyDocumentComponent } from './process/property-document/property-document.component';
import { PropertyDataComponent } from './process/property-data/property-data.component';
import { ProcessLogComponent } from './process/process-log/process-log.component';
import { ProcessFileComponent } from './process/process-file/process-file.component';
import  {LoginComponent} from  './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { BillingdataComponent } from './client/billingdata/billingdata.component';
import { ClientFileComponent } from './client/client-file/client-file.component';
import { ClientLogComponent } from './client/client-log/client-log.component';
import { ProcesssComponent } from './client/processs/processs.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'processes', component: ProcessesComponent},
  { path: 'client', component: ClientComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'additionaldocument', component: AdditionalDocumentComponent},
  { path: 'finishreport', component: FinishReportComponent},
  { path: 'finaldocument', component: FinalDocumentComponent},
  { path: 'processfile', component: ProcessFileComponent},
  { path: 'processlog', component:  ProcessLogComponent},
  { path: 'propertydata', component:  PropertyDataComponent},
  { path: 'propertydocument', component: PropertyDocumentComponent},
  { path: 'propertyphotos', component: PropertyPhotosComponent},
  { path: 'billingdata', component: BillingdataComponent},
  { path: 'clientfile', component: ClientFileComponent},
  { path: 'clientlog', component: ClientLogComponent},
  { path: 'process', component: ProcesssComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
