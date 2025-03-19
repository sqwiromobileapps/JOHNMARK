import React from 'react';
import { Block, Text } from '@expocraft/core';
import { TouchableOpacity } from 'react-native';

type AppProps = {
  id: string;
  _ref: string;
  AppName: string;
  AppId: string;
  AppDescription: string;
  AppIcon: any;
};

function InstalledSuperAdminAppCard({ app, style }: { app: any; style: any }) {
  const [] = React.useState(0);

  const AppIcon = React.cloneElement(app.AppIcon, {
    size: 45,
  });

  return (
    <TouchableOpacity style={{ padding: 5, width: 110 }}>
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

export default InstalledSuperAdminAppCard;
