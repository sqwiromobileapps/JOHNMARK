import useAppContext from '@sqwiro/appcore/context/useAppContext';
import { IEMASOMO_USER_APP_INITIAL_STATE } from './EMASOMO_USER_APP_INITIAL_STATE';

export const useEmasomoUserAppContext = () => {
  const { emasomoUserAppContext, dispatch } =
    useAppContext<IEMASOMO_USER_APP_INITIAL_STATE>()((state) => ({
      emasomoUserAppContext: state.emasomoUserAppContext,
    }));

  return {
    ...emasomoUserAppContext,
    dispatch,
  };
};
