import React from 'react';
import { Animated, Pressable, Platform, TextStyle, Text, StyleSheet } from 'react-native';
import SvgIcon from '!/powpow/components/svgicon/SvgIcon';
import { font } from '!/powpow/lib/adaptive';

const AppBottomTabBarItem = React.memo((props: {
    label: string;
    isFocused: boolean;
    defaultStyle?: {
        text: TextStyle;
    };
    activeStyle?: {
        text: TextStyle;
    };
    onPress?: any;
    onLongPress?: any;
}) => {
    const { onPress, onLongPress, label, isFocused } = props;

    const defaultStyle = props.defaultStyle ?? { text: { ...styles.label, color: '#252525' } };
    const activeStyle = props.activeStyle ?? { text: { ...styles.label, color: '#252525' } };
    const textStyle = isFocused ? activeStyle.text : defaultStyle.text;

    return (
        <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.alignCenter}>
            <Text style={[styles.label, textStyle]}>{label}</Text>
        </Pressable>
    )
});

export default AppBottomTabBarItem;

const styles = StyleSheet.create({
    alignCenter: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    justifyCenter: {
        flex: 1,
        justifyContent: 'center'
    },
    label: {
        lineHeight: font(20),
        fontSize: font(16),
        fontWeight: '500',
    }
})
