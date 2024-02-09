import { Component } from '@angular/core';

@Component({
  selector: 'app-audit-detail',
  templateUrl: './audit-detail.component.html',
  styleUrl: './audit-detail.component.scss'
})
export class AuditDetailComponent {
  public tableData = [
    {
      StockItem: "Catfish",
      Chargeable: true,
      CountingUOM: { unit: "each", cost: 5 },
      TransferringUOM: { unit: "each", cost: 5 },
      PurchasingUOM: { unit: "each", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    },
    {
      StockItem: "Eggs",
      Chargeable: true,
      CountingUOM: { unit: "Carton", cost: 5 },
      TransferringUOM: { unit: "Carton", cost: 5 },
      PurchasingUOM: { unit: "Case", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    },
    {
      StockItem: "Target Cups",
      Chargeable: true,
      CountingUOM: { unit: "Sleeve", cost: 5 },
      TransferringUOM: { unit: "Sleeve", cost: 5 },
      PurchasingUOM: { unit: "Case", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    },
    {
      StockItem: "Oysters",
      Chargeable: false,
      CountingUOM: { unit: "Each", cost: 5 },
      TransferringUOM: { unit: "Each", cost: 5 },
      PurchasingUOM: { unit: "Each", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    },
    {
      StockItem: "Sausage",
      Chargeable: true,
      CountingUOM: { unit: "Each", cost: 5 },
      TransferringUOM: { unit: "Each", cost: 5 },
      PurchasingUOM: { unit: "Each", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    },
    {
      StockItem: "Shrimp",
      Chargeable: true,
      CountingUOM: { unit: "Each", cost: 5 },
      TransferringUOM: { unit: "Each", cost: 5 },
      PurchasingUOM: { unit: "Each", cost: 5 },
      TotalCount: "",
      unitCost: 0.00
    }
  ];
title: string ="Kaye's Bakery and Sweets";

}




