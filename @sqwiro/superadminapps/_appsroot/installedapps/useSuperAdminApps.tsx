import React from 'react';
import { colors } from '@sqwiro/app/theme';
import {
  MdiClockLoader10,
  MdiCloudCircle,
  MdiComputer,
  MdiDatabase,
} from '@expocraft-icons/mdi';

const useSuperAdminApps = () => {
  const superadminapps = {
    'magneta_application/magneta': {
      id: 'magneta',
      _ref: 'magneta_application/magneta',
      AppName: 'Magneta',
      AppId: 'magneta',
      AppDescription:
        'Manage business applications, merchants, and subscriptions',
      AppIcon: <MdiComputer color={colors.blue[200]} />,
    },

    'magneta_application/servermonitor': {
      id: 'servermonitor',
      _ref: 'magneta_application/servermonitor',
      AppName: 'Server Monitor',
      AppId: 'servermonitor',
      AppDescription: 'Applicaton to monitor server status',
      AppIcon: <MdiCloudCircle color={colors.blue[500]} />,
    },

    'magneta_application/cron': {
      id: 'cron',
      _ref: 'magneta_application/cron',
      AppName: 'Cron Pro',
      AppId: 'cron',
      AppDescription: 'Application to manage cron jobs',
      AppIcon: <MdiClockLoader10 color={colors.blue[500]} />,
    },
    'magneta_application/arangomigrator': {
      id: 'arangomigrator',
      _ref: 'magneta_application/arangomigrator',
      AppName: 'Arango Migrator',
      AppId: 'arangomigrator',
      AppDescription: 'Application to migrate data from ArangoDB to postgres',
      AppIcon: <MdiDatabase color={colors.blue[500]} />,
    },
  };

  return superadminapps;
};

export default useSuperAdminApps;
