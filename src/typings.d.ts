// src/typings.d.ts
interface Window {
  chatwootSettings?: {
    position: string;
    type: string;
    launcherTitle: string;
  };
  chatwootSDK?: {
    run: (config: {
      websiteToken: string;
      baseUrl: string;
      containerId?: string;
    }) => void;
  };
}