import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'aaa.bbb.ccc',
    appName: 'Test App',
    webDir: 'www',
    bundledWebRuntime: false,
    ios: {
        scheme: 'Test App'
    },
};

export default config;
