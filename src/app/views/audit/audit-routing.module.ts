import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { AuditDetailComponent } from './audit-detail/audit-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Audit',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'audit',
      },
      {
        path: '',
        component: AuditComponent
      },
      {
        path: 'details',
        component: AuditDetailComponent,
        data: {
          title: 'Audit Details'
        },
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule {
}
