import React, { useEffect, useMemo, useRef, useState } from 'react';
import AppStackNavigation from './router/AppStackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NetworkStateProvider } from '!/powpow/lib';
import { useAndroidStatusBar } from '!/powpow/hooks';
import { ThemeProvider, useScreenSize } from '!/powpow/theme';
import { useSafeAreaReady } from '!/powpow/hooks';
import BottomTabBarProvider, { useBottomTabBarSize } from '!/powpow/navigation/tabbar/BottomTabBarProvider';
import useCodePushReady from './plugins/useCodePushReady';
import { FloatProvider } from '!/powpow/components'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen'
import CodePush from 'react-native-code-push';

import kvs from './data/kvs';

const AppContent = React.memo((props) => {
    /**
     * App 准备就绪分多个阶段
     * 第一阶段: 视图
     *      这一阶段准备工作是为 SafeAreaView 以及 ScreenSize 测量做准备。避免出现首次
     *      获取相关数值时最开始获得的是Default值。
     * 第二阶段: 数据
     *      这一阶段
     */
    const DEFAULT_STATE = {
        view: false,
        data: false,
    };
    const readyStateValue = useRef(DEFAULT_STATE).current;
    const [readyState, setReadyState] = useState(DEFAULT_STATE);
    const isReady = useMemo(() => {
        let keys = Object.keys(readyState);
        for (let k of keys) {
            if (readyState[k] === false) return false;
        }
        return true;
    }, [readyState])

    const statusBarConfig = useRef({ dynamic: true }).current;
    useAndroidStatusBar(statusBarConfig);
    const isSafeAreaReady = useSafeAreaReady();
    const screenSize = useScreenSize();
    // const isCodePushReady = useCodePushReady();
    const { ready: bottomTabBarReady } = useBottomTabBarSize();

    useEffect(() => {
        kvs.checkKeys();
    }, [])


    useEffect(() => {
        if (isSafeAreaReady && screenSize.ready && readyStateValue.view === false) {
            readyStateValue.view = true;
            setReadyState({ ...readyStateValue });
        }
    }, [isSafeAreaReady, screenSize])

    useEffect(() => {
        if (
            // isCodePushReady && 
            bottomTabBarReady
        ) {
            setTimeout(() => {
                readyStateValue.data = true;
                setReadyState({ ...readyStateValue });
            }, __DEV__ ? 0 : 200);
        }
    }, [
        // isCodePushReady, 
        bottomTabBarReady
    ])

    useEffect(() => {
        if (isReady) {
            requestAnimationFrame(() => { SplashScreen.hide(); })
        }
    }, [isReady])

    if (!readyState.view) return null;
    return <AppStackNavigation />
});

const App = (props) => {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NetworkStateProvider>
                <SafeAreaProvider>
                    <ThemeProvider withScreenSizeProvider>
                        <BottomTabBarProvider>
                            <AppContent />
                        </BottomTabBarProvider>
                    </ThemeProvider>
                </SafeAreaProvider>
            </NetworkStateProvider>
        </GestureHandlerRootView>
    )
}

const CodepushApp = CodePush({
    deploymentKey: '',
    checkFrequency: CodePush.CheckFrequency.ON_APP_START,
    installMode: CodePush.InstallMode.ON_NEXT_RESTART
})(App);

export default App