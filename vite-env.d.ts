/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPENWEATHER_APP_ID: string;
    readonly VITE_COINSTATS_API_KEY: string;
    readonly VITE_EXCHANGE_RATE_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
