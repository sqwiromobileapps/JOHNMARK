import React from 'react';
import useSystemAppContext from '@sqwiro/appcore/context/useSystemAppContext';

const SmtpmailerAppProvider = ({ children }: { children: React.ReactNode }) => {
  const { ApplicationSettings } = useSystemAppContext();

  return <>{children}</>;
};

export default SmtpmailerAppProvider;
