import { getDefaultConfig } from 'expo';

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('db');

export default defaultConfig;