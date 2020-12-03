import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import url from './../api/apiEndpoint'

function Payment({ navigation }) {

  const [atm, setAtm] = useState([]);
  const [inet, setInet] = useState([]);
  const [emoney, setEmoney] = useState([]);
  useEffect(() => {
    
    fetch(url.api(url.payatm()), {method:'GET'})
      .then((res) => res.json())
      .then((res) => {
        
        setAtm(res.result)
        fetch(url.api(url.payinet()), {method:'GET'})
        .then((res) => res.json())
        .then((res) => {
          
          setInet(res.result)
          fetch(url.api(url.payemoney()), {method:'GET'})
          .then((res) => res.json())
          .then((res) => {
            
            setEmoney(res.result)
        
          })
          .catch((error) => {
            console.log('error');
          })
        })
        .catch((error) => {
          console.log('error');
        })    
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
              Payment Methods
            </Text>
            <Text style={{ fontFamily:'Comfortaa' }}>
              Easy ways to pay!
            </Text>
          </View>
          <View style={{width:58}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>

        <View style={{alignItems:'center'}}>
        <ScrollView style={{width:'85%', marginBottom:190}}>

          {/* BANK ATM PAYMENT */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            Bank or ATM
          </Text>
          {
            atm.length < 1
            ?
            <ActivityIndicator style={{marginVertical:20}} size="large" color="#ea0505"/>
            :
            <View>
              {
                atm.map((val, i) => (
                  <ListItem key={i} bottomDivider>
                    <Image style={{width:30, height:30, resizeMode:'contain'}} source={{uri: val.pmphoto}} />
                    <ListItem.Content>
                      <ListItem.Title>{val.pmname}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))
              }
            </View>
          }
          
          {/* INTERNET MOBILE BANKING */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            Internet or Mobile Banking
          </Text>
          {
            inet.length < 1
            ?
            <ActivityIndicator style={{marginVertical:20}} size="large" color="#ea0505"/>
            :
            <View>
              {
                inet.map((val, i) => (
                  <ListItem key={i} bottomDivider>
                    <Image style={{width:30, height:30, resizeMode:'contain'}} source={{uri: val.pmphoto}} />
                    <ListItem.Content>
                      <ListItem.Title>{val.pmname}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))
              }
            </View>
          }
          
          {/* EMONEY */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            e-Money
          </Text>
          {
            emoney.length < 1
            ?
            <ActivityIndicator style={{marginVertical:20}} size="large" color="#ea0505"/>
            :
            <View>
              {
                emoney.map((val, i) => (
                  <ListItem key={i} bottomDivider>
                    <Image style={{width:30, height:30, resizeMode:'contain'}} source={{uri: val.pmphoto}} />
                    <ListItem.Content>
                      <ListItem.Title>{val.pmname}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ))
              }
            </View>
          }
        </ScrollView>
        </View>

      </View>
    );
}

export default Payment