import React from 'react';
import { Button, View, Text } from 'react-native';

function Nutritionist({ navigation }) {
    return (
      <View style={{ backgroundColor:'#edf285', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User Profile</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

export default Nutritionist