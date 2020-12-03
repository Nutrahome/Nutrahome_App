import React from 'react';
import { Button, View, Text } from 'react-native';

function UnderConstruction({ navigation }) {
    return (
      <View style={{ backgroundColor:'#edf285', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>UnderConstruction</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

export default UnderConstruction