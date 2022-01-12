import { BOTTOMBAR_BASE_HEIGHT } from '!/powpow/navigation/tabbar/BottomTabBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useBottomTabBarHeight = () => {
    const insets = useSafeAreaInsets();
    return insets.bottom + BOTTOMBAR_BASE_HEIGHT;
}
export default useBottomTabBarHeight;