import React from 'react';
import { Block, Divider, Text } from '@expocraft/core';
import InstalledSuperAdminAppCard from './InstalledSuperAdminAppCard';
import useSuperAdminApps from './useSuperAdminApps';

function InstalledSuperAdminAppsHome() {
  const superAdminApps = useSuperAdminApps();

  const merchantSuperAdminApps = Object.values(
    superAdminApps as Record<string, { AppId: string; AppName: string }>
  );

  return (
    <Block flex={false} padding>
      <Block flex={false} marginV>
        <Text title bold darkGray>
          Super Admin Apps
        </Text>
      </Block>
      <Divider />
      <Block flex={false} row wrap>
        {merchantSuperAdminApps.map((app, index: number) => {
          return (
            <InstalledSuperAdminAppCard
              key={`${index}-${app.AppId}`}
              app={app}
              style={{
                width: 170,
                height: 170,
                margin: 10,
              }}
            />
          );
        })}
      </Block>
    </Block>
  );
}

export default InstalledSuperAdminAppsHome;
