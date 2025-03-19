import React from 'react';
import { colors } from '@sqwiro/app/theme';
import { ChubGoogleDocs, ChubSales } from '@expocraft-icons/chub';
import {
  FlatColorIconsAdvertising,
  FlatColorIconsBookmark,
  FlatColorIconsCheckmark,
  FlatColorIconsConferenceCall,
  FlatColorIconsCustomerSupport,
  FlatColorIconsDataBackup,
  FlatColorIconsGlobe,
  FlatColorIconsImageFile,
  FlatColorIconsList,
  FlatColorIconsManager,
  FlatColorIconsMoneyTransfer,
  FlatColorIconsSettings,
  FlatColorIconsShipped,
  FlatColorIconsShop,
  FlatColorIconsTodoList,
  FlatColorIconsVoicePresentation,
} from '@expocraft-icons/flat-color-icons';
import { MdiFleet, MdiOnlinePredictionRounded } from '@expocraft-icons/mdi';

/*
activities,
crm,
finance,
hr,
marketing,
makerchecker,
mediamanager,
procurement,
sales,
retail,
website,
registrations,
customersupport,
realtime,
masterdata,
system,
realtime,
legaldesk,
*/

const useBusinessApps = () => {
  const BusinessApps = {
    'magneta_application/system': {
      id: 'system',
      _ref: 'magneta_application/system',
      AppName: 'System',
      AppId: 'system',
      AppDescription: 'Manage your system settings',
      AppIcon: <FlatColorIconsSettings />,
    },

    'magneta_application/mediamanager': {
      id: 'mediamanager',
      _ref: 'magneta_application/mediamanager',
      AppName: 'Media Manager',
      AppId: 'mediamanager',
      AppDescription: 'Applicaton to manage media files',
      AppIcon: <FlatColorIconsImageFile />,
    },

    'magneta_application/documentsmanager': {
      id: 'documentsmanager',
      _ref: 'magneta_application/documentsmanager',
      AppName: 'Documents Manager',
      AppId: 'documentsmanager',
      AppDescription: 'Applicaton to manage documents',
      AppIcon: <ChubGoogleDocs />,
    },

    'magneta_application/sales': {
      id: 'sales',
      _ref: 'magneta_application/sales',
      AppName: 'Sales',
      AppId: 'sales',
      AppDescription: 'Applicaton to manage sales',
      AppIcon: <ChubSales />,
    },
    'magneta_application/hr': {
      id: 'hr',
      _ref: 'magneta_application/hr',
      AppName: 'HR',
      AppId: 'hr',
      AppDescription: 'Applicaton to manage HR',
      AppIcon: <FlatColorIconsConferenceCall />,
    },
    'magneta_application/accounting': {
      id: 'accounting',
      _ref: 'magneta_application/accounting',
      AppName: 'Accounting',
      AppId: 'accounting',
      AppDescription: 'Applicaton to manage accounting',
      AppIcon: <FlatColorIconsList />,
    },
    'magneta_application/procurement': {
      id: 'procurement',
      _ref: 'magneta_application/procurement',
      AppName: 'Procurement & Inventory',
      AppId: 'procurement',
      AppDescription:
        'Applicaton to manage procurement, suppliers and inventory',
      AppIcon: <FlatColorIconsShipped />,
    },
    'magneta_application/makerchecker': {
      id: 'makerchecker',
      _ref: 'magneta_application/makerchecker',
      AppName: 'Maker Checker',
      AppId: 'makerchecker',
      AppDescription: 'Applicaton to manage maker checker',
      AppIcon: <FlatColorIconsCheckmark />,
    },

    'magneta_application/legaldesk': {
      id: 'legaldesk',
      _ref: 'magneta_application/legaldesk',
      AppName: 'Legal Desk',
      AppId: 'legaldesk',
      AppDescription: 'Applicaton to manage legal desk',
      AppIcon: <FlatColorIconsManager />,
    },

    'magneta_application/realtime': {
      id: 'realtime',
      _ref: 'magneta_application/realtime',
      AppName: 'Real Time',
      AppId: 'realtime',
      AppDescription: 'Applicaton to manage real time',
      AppIcon: <MdiOnlinePredictionRounded color={colors.green[300]} />,
    },

    'magneta_application/masterdata': {
      id: 'masterdata',
      _ref: 'magneta_application/masterdata',
      AppName: 'Master Data',
      AppId: 'masterdata',
      AppDescription: 'Applicaton to manage master data',
      AppIcon: <FlatColorIconsDataBackup />,
    },

    'magneta_application/registrations': {
      id: 'registrations',
      _ref: 'magneta_application/registrations',
      AppName: 'Registrations',
      AppId: 'registrations',
      AppDescription: 'Applicaton to manage registrations',
      AppIcon: <FlatColorIconsTodoList />,
    },

    'magneta_application/customersupport': {
      id: 'customersupport',
      _ref: 'magneta_application/customersupport',
      AppName: 'Customer Support',
      AppId: 'customersupport',
      AppDescription: 'Applicaton to manage customer support',
      AppIcon: <FlatColorIconsCustomerSupport />,
    },

    'magneta_application/website': {
      id: 'website',
      _ref: 'magneta_application/website',
      AppName: 'Website',
      AppId: 'website',
      AppDescription: 'Applicaton to manage website',
      AppIcon: <FlatColorIconsGlobe />,
    },

    'magneta_application/activitiestl': {
      id: 'activitiestl',
      _ref: 'magneta_application/activitiestl',
      AppName: 'Activities Timeline',
      AppId: 'activitiestl',
      AppDescription: 'Applicaton to manage activities timeline',
      AppIcon: <FlatColorIconsBookmark />,
    },

    'magneta_application/crm': {
      id: 'crm',
      _ref: 'magneta_application/crm',
      AppName: 'CRM',
      AppId: 'crm',
      AppDescription: 'Applicaton to manage CRM',
      AppIcon: <FlatColorIconsVoicePresentation />,
    },

    'magneta_application/retail': {
      id: 'retail',
      _ref: 'magneta_application/retail',
      AppName: 'Retail',
      AppId: 'retail',
      AppDescription: 'Applicaton to manage retail',
      AppIcon: <FlatColorIconsShop />,
    },

    'magneta_application/finance': {
      id: 'finance',
      _ref: 'magneta_application/finance',
      AppName: 'Finance',
      AppId: 'finance',
      AppDescription: 'Applicaton to manage finance',
      AppIcon: <FlatColorIconsMoneyTransfer />,
    },

    'magneta_application/marketing': {
      id: 'marketing',
      _ref: 'magneta_application/marketing',
      AppName: 'Marketing',
      AppId: 'marketing',
      AppDescription: 'Applicaton to manage marketing',
      AppIcon: <FlatColorIconsAdvertising />,
    },

    'magneta_application/fleetmanager': {
      id: 'fleetmanager',
      _ref: 'magneta_application/fleetmanager',
      AppName: 'Fleet Manager',
      AppId: 'fleetmanager',
      AppDescription: 'Applicaton for Fleet Management',
      AppIcon: <MdiFleet color={colors.grey[800]} />,
    },
  };

  return BusinessApps;
};

export default useBusinessApps;
