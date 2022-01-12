import React, { MutableRefObject, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { LayoutChangeEvent, Animated as RNAnimated, Text as RNText, ScrollView, View, Pressable, ViewStyle, Button, useWindowDimensions, PanResponder } from 'react-native';
import Svg, { Rect, Path, Defs, Use, Stop, Text, LinearGradient, Mask } from 'react-native-svg';
import Animated, { cancelAnimation, interpolate, SharedValue, useAnimatedReaction, useAnimatedProps, useAnimatedStyle, useSharedValue, withSpring, withTiming, runOnJS, withDelay, Easing } from 'react-native-reanimated';
import { Gesture, GestureDetector, PanGestureHandler, HandlerStateChangeEvent, PanGestureHandlerEventPayload, NativeViewGestureHandler, GestureHandlerRootView, State } from 'react-native-gesture-handler'
import PagerSwiper from '!/powpow/components/scrollable/PageSwiper';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import MMStorage from 'react-native-mmstorage';

const Test = (props) => {

    const [data, setData] = useState([])
    const CountItem = 2;
    const MaxItemLength = 1000;
    useEffect(() => {
        SplashScreen.hide();
        let i = 0;
        let strs: any[] = [];
        let vc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        while (i < CountItem) {
            let n = Math.random() * MaxItemLength;
            let str = '';
            while (n > 0) {
                let x = Math.floor(Math.random() * 26)
                str = str + vc[x];
                n--;
            }
            strs.push(str);
            i++;
        }
        setData(strs)
    }, [])

    
    useEffect(() => {
        if (data.length > 0) {
            console.log('data is ready');
        }
    }, [data])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    );
}

export default Test;


