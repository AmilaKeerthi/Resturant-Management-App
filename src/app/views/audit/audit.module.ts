import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuditComponent} from './audit/audit.component'
import { AuditDetailComponent } from './audit-detail/audit-detail.component';
import { AuditRoutingModule } from './audit-routing.module';
import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  PlaceholderModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [AuditComponent,AuditDetailComponent],
  imports: [
    AuditRoutingModule,
    CommonModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    PlaceholderModule
  ]
})
export class AuditModule { }
