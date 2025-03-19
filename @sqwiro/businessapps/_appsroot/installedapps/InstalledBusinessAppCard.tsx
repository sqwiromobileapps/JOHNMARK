import React from 'react';
import { Block, Text } from '@expocraft/core';
import { TouchableOpacity } from 'react-native';
import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';

type AppProps = {
  id: 'dolphinix';
  _ref: 'magneta_application/dolphinix';
  AppName: string;
  AppId: string;
  AppDescription: string;
  AppIcon: any;
};

function InstalledBusinessAppCard({
  app,
  style,
}: {
  app: AppProps;
  style: any;
}) {
  const { rootDrawerNavigator } = useMerchantAppNavigation();

  const AppIcon = React.cloneElement(app.AppIcon, {
    size: 45,
  });

  return (
    <TouchableOpacity
      style={{ padding: 10, width: 110 }}
      onPress={() => {
        rootDrawerNavigator.navigate(`${app.AppId}App`);
      }}
    >
      <Block flex={false} center marginV>
        <Block
          flex={false}
          card
          style={{
            height: 75,
            width: 75,
          }}
          shadow
          rounded
          padding
        >
          {AppIcon}
        </Block>
        <Block flex={false}>
          <Block flex={false} paddingT={5}>
            <Text small bold center numberOfLines={1}>
              {`${app.AppName}`.toUpperCase()}
            </Text>
            <Text small className="text-muted" numberOfLines={2} center>
              {app.AppDescription}
            </Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
}

export default InstalledBusinessAppCard;
