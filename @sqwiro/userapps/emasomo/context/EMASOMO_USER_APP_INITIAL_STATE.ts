import { IInitialState } from '@sqwiro/appcore/context/INITIAL_STATE';

export interface IEMASOMO_USER_APP_INITIAL_STATE extends IInitialState {
  emasomoUserAppContext: {
    appName: string;
  };
}

const EMASOMO_USER_APP_INITIAL_STATE: Pick<
  IEMASOMO_USER_APP_INITIAL_STATE,
  'emasomoUserAppContext'
> = {
  emasomoUserAppContext: {
    appName: 'emasomo',
  },
};

export default EMASOMO_USER_APP_INITIAL_STATE;
