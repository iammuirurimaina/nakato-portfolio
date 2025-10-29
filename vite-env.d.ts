interface ImportMetaEnv {
    VITE_APP_TITLE: string;
    VITE_APP_LOGO: string;
    VITE_OAUTH_PORTAL_URL: any;
    VITE_APP_ID: any;
    readonly VITE_YOUR_URL: string;
    readonly VITE_REALM: string;
    readonly VITE_CLIENT_ID: string;
   
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }