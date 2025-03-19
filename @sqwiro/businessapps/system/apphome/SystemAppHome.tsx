import React from 'react';
import { Block, Header, IconButton } from '@expocraft/core';
import {
  MenuButton,
  TopMenuNavigationScreen,
} from '@expocraft/core/lib/widgets';
import { colors } from '@sqwiro/app/theme';

import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';
import SystemAppDashboard from '../dashboards/SystemAppDashboard';
import { MdiChartBar, MdiClose } from '@expocraft-icons/mdi';

const SystemAppHome = ({ navigation }) => {
  const [selected, setSelected] = React.useState('systemdashboard');
  const { rootDrawerNavigator, dispatch } = useMerchantAppNavigation();

  return (
    <TopMenuNavigationScreen
      header={
        <Header
          hasHeight
          onBack={() => {
            rootDrawerNavigator.goBack();
          }}
          leftComponent={
            <IconButton
              onPress={() => {
                rootDrawerNavigator.goBack();
              }}
            >
              <MdiClose size={20} color={colors.dark} />
            </IconButton>
          }
        />
      }
      buttons={[
        <MenuButton
          id="systemdashboard"
          title="System Dashboard"
          iconSize={22}
          IconComponent={<MdiChartBar />}
          color={colors.blue[500]}
          lightColor={colors.blue[100]}
          buttonStyle={{
            width: 85,
          }}
        />,
      ]}
      selected={selected}
      onChange={(selected) => setSelected(selected)}
    >
      <Block>{selected === 'systemdashboard' && <SystemAppDashboard />}</Block>
    </TopMenuNavigationScreen>
  );
};

export default SystemAppHome;
