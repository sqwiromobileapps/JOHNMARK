import { IInitialState } from '@sqwiro/appcore/context/INITIAL_STATE';

export interface ISYSTEM_APP_INITIAL_STATE extends IInitialState {
  systemAppContext: {
    ApplicationSettings: {
      //
    };

    systemAppNavigation: any;
  };
}

export const SYSTEM_APP_INITIAL_STATE = {
  systemAppContext: {
    ApplicationSettings: {
      //
    },
  },
};
