import React from 'react';
import { Block, Divider, Text } from '@expocraft/core';
import InstalledCustomAppCard from './InstalledCustomAppCard';
import CustomApps from '../availableapps/CustomApps';
import useMerchantContext from '@sqwiro/appcore/context/useMerchantContext';

function InstalledCustomAppsHome() {
  const { merchant } = useMerchantContext();

  const merchantCustomApps = Object.keys(
    merchant.CustomApplications as Record<
      string,
      { AppId: string; AppName: string }
    >
  );

  const IstalledCustomApps = Object.values(CustomApps).filter((app) =>
    merchantCustomApps.includes(app._ref)
  );

  if (IstalledCustomApps.length === 0) {
    return null;
  }

  return (
    <Block flex={false} padding>
      <Block flex={false} marginV>
        <Text title bold darkGray>
          Custom Apps
        </Text>
      </Block>
      <Divider />
      <Block flex={false} row wrap>
        {IstalledCustomApps.map((app, index: number) => {
          return (
            <InstalledCustomAppCard
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
