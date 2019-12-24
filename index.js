import { NativeModules } from 'react-native';
import ShadowView from './src/ShadowView';
const { RnShadowViewModule } = NativeModules;
export {
    RnShadowViewModule
};
export default ShadowView;
