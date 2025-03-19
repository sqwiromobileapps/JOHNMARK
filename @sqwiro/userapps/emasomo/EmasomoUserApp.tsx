import React from 'react';
import { Block } from '@expocraft/core';
import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';
import EmasomoUserAppHome from './EmasomoUserAppHome';

const EmasomoUserApp = () => {
  const { authNavigator } = useMerchantAppNavigation();

  return (
    <Block>
      <EmasomoUserAppHome />
    </Block>
  );
};

export default EmasomoUserApp;
