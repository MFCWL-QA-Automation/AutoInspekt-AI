export type Environment = 'staging' | 'production';

interface EnvConfig {
  baseURL: string;
  credentials: {
    username: string;
    password: string;
  };
}

const configs: Record<Environment, EnvConfig> = {
  staging: {
    baseURL: 'https://aiv3portal.ibbtrade.com',
    credentials: {
      username: process.env.TEST_USERNAME || '',
      password: process.env.TEST_PASSWORD || '',
    },
  },
  production: {
    baseURL: process.env.PROD_BASE_URL || 'https://aiv3portal.ibbtrade.com',
    credentials: {
      username: process.env.PROD_USERNAME || '',
      password: process.env.PROD_PASSWORD || '',
    },
  },
};

const env = (process.env.NODE_ENV as Environment) || 'staging';

export const envConfig = configs[env];
