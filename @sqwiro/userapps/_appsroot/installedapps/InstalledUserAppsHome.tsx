import React from 'react';
import { Block, Divider, Text } from '@expocraft/core';
import InstalledUserAppCard from './InstalledUserAppCard';
import UserApps from '../availableapps/UserApps';
import useMerchantContext from '@sqwiro/appcore/context/useMerchantContext';

function InstalledCustomAppsHome() {
  const { merchant } = useMerchantContext();

  const merchantCustomApps = Object.keys(
    merchant.CustomApplications as Record<
      string,
      { AppId: string; AppName: string }
    >
  );

  const IstalledUserApps = Object.values(UserApps).filter((app) =>
    merchantCustomApps.includes(app._ref)
  );

  if (IstalledUserApps.length === 0) {
    return null;
  }

  return (
    <Block flex={false} padding marginV>
      <Block flex={false} marginV>
        <Text title bold darkGray>
          User Apps
        </Text>
      </Block>
      <Divider />
      <Block flex={false} row wrap>
        {IstalledUserApps.map((app, index: number) => {
          return (
            <InstalledUserAppCard
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

export default InstalledCustomAppsHome;
