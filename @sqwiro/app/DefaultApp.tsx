import React from 'react';
import EmasomoUserApp from '@sqwiro/userapps/emasomo/EmasomoUserApp';
import useMerchantAppNavigation from '@sqwiro/appcore/context/useMerchantAppNavigation';

function DefaultApp({ navigation }) {
  const { dispatch } = useMerchantAppNavigation();

  React.useEffect(() => {
    dispatch((state) => ({
      appNavigationContext: {
        ...state.appNavigationContext,
        authNavigator: navigation,
      },
    }));
  }, []);

  return <EmasomoUserApp />;
}

export default DefaultApp;
