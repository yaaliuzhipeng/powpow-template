import React, { useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const Index = (props) => {

    return (
        <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
            <Button title={'聊天室'} onPress={() => {
                props.navigation.navigate('聊天室');
            }}/>
        </View>
    )
}
export default Index;