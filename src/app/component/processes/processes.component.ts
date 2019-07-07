import { Component} from '@angular/core';
import { ProcessFileComponent } from 'src/app/process/process-file/process-file.component';
import { PropertyPhotosComponent } from 'src/app/process/property-photos/property-photos.component';
import { PropertyDataComponent } from 'src/app/process/property-data/property-data.component';
import { ProcessLogComponent } from 'src/app/process/process-log/process-log.component';
import { PropertyDocumentComponent } from 'src/app/process/property-document/property-document.component';
import { AdditionalDocumentComponent } from 'src/app/process/additional-document/additional-document.component';
import { FinalDocumentComponent } from 'src/app/process/final-document/final-document.component';
import { FinishReportComponent } from 'src/app/process/finish-report/finish-report.component';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.scss']
})
export class ProcessesComponent {

  public dynamicTabs = [
    {
        label: 'Process File',
        component: ProcessFileComponent
    },
    {
        label: 'Property photos',
        component:  PropertyPhotosComponent
    },
    {
      label: 'Property Data',
      component: PropertyDataComponent
  },
    {
        label: 'Property Documents',
        component: PropertyDocumentComponent
    },
    {
      label: 'Additional Documents',
      component: AdditionalDocumentComponent
  },
  {
      label: 'Final Document/Report',
      component: FinalDocumentComponent
  },
  {
      label: 'Finished Report',
      component: FinishReportComponent
  },
  {
    label: 'Process Log',
    component: ProcessLogComponent
}
];
}
