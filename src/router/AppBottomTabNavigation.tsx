import React from "react";
import { LayoutChangeEvent, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { BottomTabBar, BottomTabBarItem, BottomTabBarItemType } from '!/powpow/navigation'
import CustomBottomTabBarItem from './AppBottomTabBarItem';

import Home from "!/src/router/screen/home";
import My from "!/src/router/screen/my";
import Find from "!/src/router/screen/find";

import { observer } from "mobx-react";

const AppBottomTabBarItem = observer((props: BottomTabBarItemType) => {
    const { index, label, isFocused, onPressCallback, onLongPressCallback } = props;
    const onPress = () => {
        onPressCallback();
    }
    const onLongPress = () => {
        onLongPressCallback();
    }

    return (
        <CustomBottomTabBarItem
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            defaultStyle={{ text: { color: '#8E8F8F' } }} //icon: {color: '#8E8F8F'},
            activeStyle={{ text: { color: '#FFF' } }}//icon: {color: '#FFF'},
        />
    )
});


const AppBottomTabNavigation = React.memo((props) => {

    const onTabBarHeightChanged = (event: LayoutChangeEvent) => {

    }

    return (
        <Tab.Navigator
            initialRouteName={"首页"}
            tabBar={(props: any) => (
                <BottomTabBar
                    {...props}
                    onTabBarHeightChanged={onTabBarHeightChanged}
                    ItemComponent={AppBottomTabBarItem}
                    containerStyles={[{ backgroundColor: '#161616' }]}
                />
            )}
            screenOptions={{
                headerShown: false,
                lazy: false,
            }}
        >
            <Tab.Screen name={"首页"} component={Home} />
            <Tab.Screen name={"发现"} component={Find} />
            <Tab.Screen name={"我的"} component={My} />
        </Tab.Navigator>
    );
});

export default AppBottomTabNavigation;
