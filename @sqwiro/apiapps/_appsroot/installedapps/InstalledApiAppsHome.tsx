import React from 'react';
import { Block, Divider, Text } from '@expocraft/core';
import InstalledCustomAppCard from './InstalledApiAppCard';
import useMerchantContext from '@sqwiro/appcore/context/useMerchantContext';
import useApiApps from '../availableapps/useApiApps';

function InstalledApiAppsHome() {
  const { merchant } = useMerchantContext();

  const merchantApiApps = Object.keys(
    merchant.ApiApplications as Record<
      string,
      { AppId: string; AppName: string }
    >
  );

  const ApiApps = useApiApps();

  const IstalledApiApps = Object.values(ApiApps).filter((app) =>
    merchantApiApps.includes(app._ref)
  );

  if (IstalledApiApps.length === 0) {
    return null;
  }

  return (
    <Block flex={false} padding>
      <Block flex={false} marginV>
        <Text title bold darkGray>
          API Apps
        </Text>
      </Block>
      <Divider />
      <Block flex={false} row wrap>
        {IstalledApiApps.map((app, index: number) => {
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

export default InstalledApiAppsHome;
