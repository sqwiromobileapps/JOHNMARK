import { colors } from '@sqwiro/app/theme';
import {
  ChubDolphinix,
  ChubEmasomo,
  ChubLabfoxx,
  ChubMacadamiaNut,
  ChubPaprycaLogo,
  ChubPesaPurse,
  ChubRealistyca,
  ChubSaccomis,
} from '@expocraft-icons/chub';
import {
  FlatColorIconsBullish,
  FlatColorIconsReadingEbook,
  FlatColorIconsShop,
  FlatColorIconsTouchscreenSmartphone,
} from '@expocraft-icons/flat-color-icons';
import { MdiAccountSchoolOutline } from '@expocraft-icons/mdi';
import { NotoAvocado, NotoFarmer, NotoSeedling } from '@expocraft-icons/noto';

const CustomApps = {
  'magneta_application/macspro': {
    id: 'macspro',
    _ref: 'magneta_application/macspro',
    AppName: 'Macs Pro',
    AppId: 'macspro',
    AppDescription:
      'Application for managing macadamia processing from purchase to shipping',
    AppIcon: <ChubMacadamiaNut />,
  },
  'magneta_application/avopro': {
    id: 'avopro',
    _ref: 'magneta_application/avopro',
    AppName: 'Avo Pro',
    AppId: 'avopro',
    AppDescription: 'Application for managing avocado processing',
    AppIcon: <NotoAvocado />,
  },

  'magneta_application/farmbridge': {
    id: 'farmbridge',
    _ref: 'magneta_application/farmbridge',
    AppName: 'Farm Bridge',
    AppId: 'farmbridge',
    AppDescription: 'Application for managing Farmers, Farms, Organic Farming',
    AppIcon: <NotoFarmer />,
  },

  'magneta_application/seedlink': {
    id: 'seedlink',
    _ref: 'magneta_application/seedlink',
    AppName: 'Seed Link',
    AppId: 'seedlink',
    AppDescription: 'Application for managing seedlings and nurseries',
    AppIcon: <NotoSeedling />,
  },

  'magneta_application/papryca': {
    id: 'papryca',
    _ref: 'magneta_application/papryca',
    AppName: 'Papryca',
    AppId: 'papryca',
    AppDescription:
      'Application for managing your agriprocessing and packhouse',
    AppIcon: <ChubPaprycaLogo />,
  },

  'magneta_application/ppwallet': {
    id: 'ppwallet',
    _ref: 'magneta_application/ppwallet',
    AppName: 'PesaPurse Wallet',
    AppId: 'ppwallet',
    AppDescription: 'Applicaton to manage your pesapurse wallet',
    AppIcon: <ChubPesaPurse />,
  },

  'magneta_application/ppcore': {
    id: 'ppcore',
    _ref: 'magneta_application/ppcore',
    AppName: 'PesaPurse Core',
    AppId: 'ppcore',
    AppDescription: 'Applicaton to manage your pesapurse wallet',
    AppIcon: <ChubPesaPurse color={colors.yellow[900]} />,
  },

  'magneta_application/labfoxx': {
    id: 'labfoxx',
    _ref: 'magneta_application/labfoxx',
    AppName: 'Lab Foxx',
    AppId: 'labfoxx',
    AppDescription: 'Applicaton to manage your laboratory',
    AppIcon: <ChubLabfoxx />,
  },

  'magneta_application/realistyca': {
    id: 'realistyca',
    _ref: 'magneta_application/realistyca',
    AppName: 'Realistyca',
    AppId: 'realistyca',
    AppDescription: 'Applicaton for real estate developer',
    AppIcon: <ChubRealistyca />,
  },

  'magneta_application/dolphinix': {
    id: 'dolphinix',
    _ref: 'magneta_application/dolphinix',
    AppName: 'Dolphinix',
    AppId: 'dolphinix',
    AppDescription: 'Applicaton for traders',
    AppIcon: <ChubDolphinix />,
  },

  'magneta_application/mobileloaner': {
    id: 'mobileloaner',
    _ref: 'magneta_application/mobileloaner',
    AppName: 'Mobile Loaner',
    AppId: 'mobileloaner',
    AppDescription: 'Applicaton for managing mobile loans',
    AppIcon: <FlatColorIconsTouchscreenSmartphone />,
  },

  'magneta_application/saccomis': {
    id: 'saccomis',
    _ref: 'magneta_application/saccomis',
    AppName: 'SaccoMIS',
    AppId: 'saccomis',
    AppDescription: "Applicaton for managing sacco's",
    AppIcon: <ChubSaccomis />,
  },

  'magneta_application/vumapro': {
    id: 'vumapro',
    _ref: 'magneta_application/vumapro',
    AppName: 'Vuma Pro',
    AppId: 'vumapro',
    AppDescription: 'Applicaton for managing Investments',
    AppIcon: <FlatColorIconsBullish />,
  },

  'magneta_application/emasomo': {
    id: 'emasomo',
    _ref: 'magneta_application/emasomo',
    AppName: 'Emasomo',
    AppId: 'emasomo',
    AppDescription: 'Applicaton for managing e-Learning',
    AppIcon: <ChubEmasomo />,
  },
  'magneta_application/eschool': {
    id: 'eschool',
    _ref: 'magneta_application/eschool',
    AppName: 'E-School',
    AppId: 'eschool',
    AppDescription: 'Applicaton for managing e-schooling',
    AppIcon: <MdiAccountSchoolOutline color={colors.blue[500]} />,
  },

  'magneta_application/ebookshop': {
    id: 'ebookshop',
    _ref: 'magneta_application/ebookshop',
    AppName: 'E-Bookshop',
    AppId: 'ebookshop',
    AppDescription: 'Applicaton for managing e-bookshop',
    AppIcon: <FlatColorIconsReadingEbook />,
  },

  'magneta_application/cloudstore': {
    id: 'cloudstore',
    _ref: 'magneta_application/cloudstore',
    AppName: 'Cloud Store',
    AppId: 'cloudstore',
    AppDescription: 'Applicaton for managing cloud store',
    AppIcon: <FlatColorIconsShop />,
  },
};

export default CustomApps;
