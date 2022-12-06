import env from '@beam-australia/react-env';
import { createContext } from 'react';

export const EnvironmentVariables = createContext(null);

export const environmentVariables = {
  DATA_SOURCE_NETWORK_URL: env('DATA_SOURCE_NETWORK_URL')
};
