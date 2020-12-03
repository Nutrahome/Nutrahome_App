import React from 'react';
import { Image, View, Text } from 'react-native';

function About({ navigation }) {
    return (
      <View style={{ backgroundColor:'#ffd500', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize:33, fontFamily:'Comfortaa-Bold' }}>About Screen</Text>
        <Image
            source={{uri:'https://freepngimg.com/thumb/coming_soon/4-2-coming-soon-png.png'}}
            style={{width:300, height:300, resizeMode: "contain",}}
        />
      </View>
    );
}

export default About