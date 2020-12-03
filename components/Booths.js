import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';
import url from './../api/apiEndpoint'

function Booths({ navigation }) {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(url.api(url.booths()), {method:'GET'})
      .then((res) => res.json())
      .then((res) => {
        setItems(res.result)
      })
      .catch((error) => {
        console.log('error');
      })
  }, [])
 
  return (

    <View>
      <View style={{width: '100%', height: 90, backgroundColor: '#ffd500', 
        borderBottomRightRadius:30, borderBottomLeftRadius:30, 
        flexDirection: 'row'}}>
        <View style={{marginTop:10, marginLeft:10}}>
          <Icon raised onPress={() => navigation.goBack()}
          name='arrow-back-outline' type='ionicon' size={25}/>
        </View>
        <View style={{ marginTop:15, marginLeft:10 }}>
          <Text style={{ fontSize:20, fontFamily:'Comfortaa-Bold' }}>
            Find us here!
          </Text>
          <Text style={{ fontFamily:'Comfortaa' }}>
            Order or pickup your meals!
          </Text>
        </View>
        <View style={{width:43}}/>
        <View style={{marginTop:10}}>
          <Icon raised
          name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
        </View>
      </View>

      {
      items.length < 1
      ?
      <ActivityIndicator style={{marginTop:230}} size="large" color="#ea0505"/>
      :
      <FlatGrid
        itemDimension={130}
        data={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#fff' }]}>
            <Avatar rounded size='large' source={{uri: item.bphoto}}/>
            <Text style={styles.itemName}>{item.bname}</Text>
            <Text style={styles.itemCode}>{item.btype}</Text>
          </View>
        )}
      />
      }

    </View>
    
  );
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10, marginBottom:90
    // flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontFamily:'Comfortaa-Bold',
    textShadowColor: 'yellow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  itemCode: {
    fontSize: 12,
    color: 'black',
    fontFamily:'Comfortaa-Bold',
    textShadowColor: 'yellow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
});

export default Booths