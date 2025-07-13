export interface ContentData {
  email: string;
  headline: string;
  paragraph: string;
}

export interface AppConfig {
  version: string;
  buildTime: string;
  isProduction: boolean;
  environment: string;
}
