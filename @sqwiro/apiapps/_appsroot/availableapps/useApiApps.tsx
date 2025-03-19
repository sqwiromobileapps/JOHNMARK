import { colors } from '@sqwiro/app/theme';
import { ChubBank, ChubKcb, ChubMpesa } from '@expocraft-icons/chub';

import { MdiBrain, MdiEmailOutline, MdiSmsOutline } from '@expocraft-icons/mdi';

const useApiApps = () => {
  const ApiApps = {
    'magneta_application/smspro': {
      id: 'smspro',
      _ref: 'magneta_application/smspro',
      AppName: 'SMS Pro',
      AppId: 'smspro',
      AppDescription: 'Applicaton to manage SMS provider',
      AppIcon: <MdiSmsOutline />,
    },
    'magneta_application/kcbpro': {
      id: 'kcbpro',
      _ref: 'magneta_application/kcbpro',
      AppName: 'KCB Pro',
      AppId: 'kcbpro',
      AppDescription: 'Applicaton to manage KCB provider',
      AppIcon: <ChubKcb />,
    },

    'magneta_application/jengapro': {
      id: 'jengapro',
      _ref: 'magneta_application/jengapro',
      AppName: 'Jenga Pro',
      AppId: 'jengapro',
      AppDescription: 'Applicaton to manage Jenga provider',
      AppIcon: <ChubBank color={colors.dark} />,
    },

    'magneta_application/mpesapro': {
      id: 'mpesapro',
      _ref: 'magneta_application/mpesapro',
      AppName: 'Mpesa Pro',
      AppId: 'mpesapro',
      AppDescription: 'Applicaton to manage Mpesa provider',
      AppIcon: <ChubMpesa />,
    },

    'magneta_application/deepmind': {
      id: 'deepmind',
      _ref: 'magneta_application/deepmind',
      AppName: 'DeepMind',
      AppId: 'deepmind',
      AppDescription: 'Applicaton to manage AI services',
      AppIcon: <MdiBrain />,
    },

    'magneta_application/smtpmailer': {
      id: 'smtpmailer',
      _ref: 'magneta_application/smtpmailer',
      AppName: 'SMTP Mailer',
      AppId: 'smtpmailer',
      AppDescription: 'Applicaton to manage SMTP Mailer',
      AppIcon: <MdiEmailOutline color={colors.pink[500]} />,
    },
  };

  return ApiApps;
};

export default useApiApps;
