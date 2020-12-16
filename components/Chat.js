import React from 'react';
import { Image, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon, Avatar } from 'react-native-elements'

function Chat({ navigation }) {
    return (
      <View style={{flex:1}}>

        {/* <View style={{width: '100%', height: 90, backgroundColor: '#ffd500', 
          borderBottomRightRadius:30, borderBottomLeftRadius:30, 
          flexDirection: 'row'}}>
          <View style={{marginTop:10, marginLeft:10}}>
            <Icon raised onPress={() => navigation.goBack()}
            name='arrow-back-outline' type='ionicon' size={25}/>
          </View>
          <View style={{ marginTop:15, marginLeft:10 }}>
            <Text style={{ fontSize:20, fontFamily:'Comfortaa-Bold' }}>
              Meet our dietitians!
            </Text>
            <Text style={{ fontFamily:'Comfortaa' }}>
              Best partner, best result
            </Text>
          </View>
          <View style={{width:40}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View> */}

        <WebView
        source={{ uri: 'https://tawk.to/chat/5fd97129df060f156a8d7a1b/1epl95bl8' }}
        style={{ marginTop: 0, flex: 1 }}
        />
      </View>
    );
}

export default Chat