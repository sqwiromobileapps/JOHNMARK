import React from 'react';
import {
  ISYSTEM_APP_INITIAL_STATE,
  SYSTEM_APP_INITIAL_STATE,
} from './SYSTEM_APP_INITIAL_STATE';
import useAppContext from '@sqwiro/appcore/context/useAppContext';

export default function useSystemAppContext() {
  const { authContext, merchantContext, systemAppContext, dispatch } =
    useAppContext<ISYSTEM_APP_INITIAL_STATE>()((state) => ({
      authContext: state.authContext,
      merchantContext: state.merchantContext,
      systemAppContext: state.systemAppContext,
    }));

  const { currentUser, isAuthenticated, token } = authContext;
  const { merchant } = merchantContext;

  const Application = (merchant.ApiApplications['magneta_application/system'] ||
    {}) as (typeof merchant.ApiApplications)[keyof typeof merchant.ApiApplications];

  React.useEffect(() => {
    if (merchant) {
      const Application = (merchant.ApiApplications[
        'magneta_application/system'
      ] ||
        {}) as (typeof merchant.ApiApplications)[keyof typeof merchant.ApiApplications];

      dispatch((state) => ({
        systemAppContext: {
          ...state.systemAppContext,
          ApplicationSettings: Application.ApplicationSettings || {},
        },
      }));
    }
  }, [merchant]);

  return {
    ...SYSTEM_APP_INITIAL_STATE.systemAppContext,
    currentUser,
    isAuthenticated,
    token,
    merchant,
    ...systemAppContext,
    ApplicationSettings: Application.ApplicationSettings || {},
    Application: Application,
    dispatch,
  };
}
