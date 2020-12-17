import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon, Avatar, Rating, Divider, ListItem, Button } from 'react-native-elements'

function UserProfile({ route, navigation }) {

    const { item } = route.params;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        
        {/* header, logo & notif */}
        <View style={{width: '100%', height: 120, backgroundColor: '#ffd500', 
        borderBottomRightRadius:30, borderBottomLeftRadius:30, 
        flexDirection: 'row'}}>
          {/* <Image source={require('./../assets/nutrahome_text.png')} 
          style={{marginTop:15, marginLeft:10, resizeMode:'stretch', width:210, height:54}}/> */}
          <View style={{marginTop:10, marginLeft:10}}>
            <Icon raised onPress={() => navigation.goBack()}
            name='arrow-back-outline' type='ionicon' size={25}/>
          </View>
          <View style={{ marginTop:15, marginLeft:10 }}>
            <Text style={{ fontSize:33, fontFamily:'Comfortaa-Bold' }}>
              Profile
            </Text>
          </View>
          <View style={{width:130}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>
        
        {/* dietitian profile */}
        <View style={{width: '85%', height: 95, backgroundColor: '#fff', 
        borderRadius:30, position:'absolute', top:90, flexDirection: 'row' }}>
          <View style={{marginVertical:10, marginHorizontal:13}}>
            <Avatar
              rounded size='large' title='LW'
              source={{uri:item.dphoto}}
            />
          </View>
          <View style={{marginVertical:8, marginHorizontal:3}}>
            <Text style={{ fontSize:25, fontFamily:'Comfortaa-Bold' }}>
              {item.dfname} {item.dlname}
            </Text>
            <Rating
              readonly={true} startingValue={5} imageSize={25}
              style={{ paddingVertical:5 }}
            />
          </View>
        </View>

        {/* scrollview */}
        <ScrollView style={{width: '85%', marginTop:60}}>

          {/* personal data */}
          <Text style={{marginVertical:8, fontSize:18, fontFamily:'Comfortaa-Bold'}}>
            Detail Information
          </Text>

          <View>
            <ListItem bottomDivider>
              <Icon name='ribbon-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Title {item.dtitle}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>  
            <ListItem bottomDivider>
              <Icon name='school-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>From {item.deducation}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='business-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Practice at {item.dpractice}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='receipt-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>{item.dexperience} years experience</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='pricetags-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>{item.dexpertise}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>  
          </View>

          <Button 
            buttonStyle={{ marginTop:10, marginBottom:25, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
            title="Consult"
            onPress={() => navigation.navigate('Pricing', item)}
            icon={
              <Icon style={{marginRight:10}} color='white' name='chatbox-ellipses-outline' type='ionicon' size={24}/>
            }
          />

        </ScrollView>
        
      </View>
    );
}

export default UserProfile