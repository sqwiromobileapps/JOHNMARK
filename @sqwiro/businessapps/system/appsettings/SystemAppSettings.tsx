import React from 'react';

import {
  Block,
  LoadingButton,
  toastr,
  Text,
  Alert,
  Form,
} from '@expocraft/core';

import useGraphql from '@cloudhub-ux/graphql';
import useSystemAppContext from '../context/useSystemAppContext';

const SystemAppSettings = () => {
  const { Magneta_merchant, errors, setErrors, loadingModels } = useGraphql();
  const { merchant, Application, dispatch } = useSystemAppContext();

  console.log('Application', Application);

  const saveSettings = async (values: any) => {
    const data = await Magneta_merchant()
      .saveApplicationSettings({
        _id: merchant._id,
        App_Ref: Application._ref,
        AppCategory: Application.AppType || 'BUSINESSAPP',
        ApplicationSettings: values,
      })
      .toJson();

    if (data) {
      toastr.success('Smtpmailer settings saved successfully');
      dispatch((state) => ({
        ...state,
        merchantContext: {
          ...state.merchantContext,
          merchant: data,
        },
      }));
    }
  };

  return (
    <Block>
      <Form
        onSubmit={saveSettings}
        initialValues={{ ...Application.ApplicationSettings }}
        render={({ handleSubmit, submitting, pristine }) => (
          <Block>
            {errors.Magneta_merchantError && (
              <Alert
                error
                message={errors.Magneta_merchantError}
                onClose={() =>
                  setErrors({
                    Magneta_merchantError: '',
                  })
                }
              />
            )}
            <Block flex={false}>
              <LoadingButton
                containedcd
                dark
                disabled={pristine || submitting}
                onClick={handleSubmit}
                loading={loadingModels.Magneta_merchantLoading}
              >
                <Text white>Update smtpmailer settings</Text>
              </LoadingButton>
            </Block>
            <Block>
              <Block padding></Block>
            </Block>
          </Block>
        )}
      />
    </Block>
  );
};

export default SystemAppSettings;
