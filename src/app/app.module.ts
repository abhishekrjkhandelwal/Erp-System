import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessesComponent } from './component/processes/processes.component';
import { ClientComponent } from './component/client/client.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MessagesComponent } from './component/messages/messages.component';
import { UsersComponent } from './component/users/users.component';
import { ProcessFileComponent } from './process/process-file/process-file.component';
import { PropertyPhotosComponent } from './process/property-photos/property-photos.component';
import { PropertyDataComponent } from './process/property-data/property-data.component';
import { PropertyDocumentComponent } from './process/property-document/property-document.component';
import { AdditionalDocumentComponent } from './process/additional-document/additional-document.component';
import { FinalDocumentComponent } from './process/final-document/final-document.component';
import { FinishReportComponent } from './process/finish-report/finish-report.component';
import { ProcessLogComponent } from './process/process-log/process-log.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './process/filter.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule, MatIconModule, MatCardModule, MatNativeDateModule } from '@angular/material';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ClientFileComponent } from './client/client-file/client-file.component';
import { BillingdataComponent } from './client/billingdata/billingdata.component';
import { ProcesssComponent } from './client/processs/processs.component';
import { ClientLogComponent } from './client/client-log/client-log.component';
import {MatRadioModule} from '@angular/material/radio';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { DropzoneDirective } from './dropzone.directive';
import { FileSizePipe } from './file-size.pipe';
import { ImoService } from './shared/imo.service';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    ProcessesComponent,
    ClientComponent,
    LogoutComponent,
    MessagesComponent,
    UsersComponent,
    ProcessFileComponent,
    PropertyPhotosComponent,
    PropertyDataComponent,
    PropertyDocumentComponent,
    AdditionalDocumentComponent,
    FinalDocumentComponent,
    FinishReportComponent,
    ProcessLogComponent,
    FilterPipe,
    LoginComponent,
    HomeComponent,
    ClientFileComponent,
    BillingdataComponent,
    ProcesssComponent,
    ClientLogComponent,
    DropzoneDirective,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatNativeDateModule,
    MatTabsModule ,
    MatSidenavModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule ,
    AngularFireDatabaseModule 
  ],
  providers: [ImoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
