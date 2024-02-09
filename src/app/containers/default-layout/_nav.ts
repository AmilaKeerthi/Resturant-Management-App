import { INavData } from '@coreui/angular';
export const navItems: INavData[] = [
  {
    name: '',
    url: '/profile',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'item 1',
        url: '/base/item',
      },
    ],
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Orders',
    url: '/theme/orders',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'POS Manager',
    url: '/theme/pos_manager',
    iconComponent: { name: 'cil-institution' },
    children: [
      {
        name: 'item 1',
        url: '/base/item',
      },
    ],
  },
  {
    name: 'Events',
    url: '/theme/events',
    iconComponent: { name: 'cil-calendar' },
  },
  {
    name: 'Premium',
    url: '/theme/premium',
    iconComponent: { name: 'cil-star' },
  },
  {
    name: 'Ingredients',
    url: '/theme/ingredients',
    iconComponent: { name: 'cil-basket' },
  },
  {
    name: 'Inventory',
    url: '/theme/inventory',
    iconComponent: { name: 'cil-storage' },
    children: [
      {
        name: 'Status',
        url: '/theme/status',
      },
      {
        name: 'Purchasing & Receiving',
        url: '/theme/purchasing_receiving',
      },
      {
        name: 'Transfers',
        url: '/theme/transfers',
      },
      {
        name: 'Audits',
        url: '/audits',
      },
      {
        name: 'Inventory Movements',
        url: '/theme/inventory_movements',
      },
    ],
  },

  { name: 'Labor', url: '/theme/labor', iconComponent: { name: 'cil-people' } },
  {
    name: 'Reports',
    url: '/theme/reports',
    iconComponent: { name: 'cil-bar-chart' },
  },
  {
    name: 'Configuration',
    url: '/theme/configuration',
    iconComponent: { name: 'cil-cog' },
  },
  {
    name: 'Help',
    url: '/theme/help',
    iconComponent: { name: 'cil-chat-bubble' }
  }


];
