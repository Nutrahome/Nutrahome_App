import React from 'react';
import { Button, View, Text } from 'react-native';

function Cart({ navigation }) {
    return (
      <View style={{ backgroundColor:'#edf285', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cart</Text>
        <Button
          color='#fd8c04'
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

export default Cart