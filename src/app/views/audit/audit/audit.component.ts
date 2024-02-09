import { Component } from '@angular/core';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {
  public tableData = [
    { location: 'Main Dinner', items: 8, status: 100, expectedQoh: 15, auditQoh: 12, auditValue: 240, variance: -3, varianceValue: -60},
    { location: 'Breakfast Nook', items: 10, status: 95, expectedQoh: 20, auditQoh: 18, auditValue: 360, variance: -2, varianceValue: -40},
    { location: 'Lunch Counter', items: 6, status: 80, expectedQoh: 10, auditQoh: 8, auditValue: 160, variance: -2, varianceValue: -40},
    { location: 'Outdoor Patio', items: 12, status: 90, expectedQoh: 25, auditQoh: 22, auditValue: 440, variance: -3, varianceValue: -60},
    { location: 'Bar Area', items: 15, status: 0, expectedQoh: 30, auditQoh: 28, auditValue: 560, variance: -2, varianceValue: -40}
  ];

}

