import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Icon, Avatar, Badge, Divider, ListItem, Button } from 'react-native-elements'

function UserProfile({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        
        {/* header, logo & notif */}
        <View style={{width: '100%', height: 120, backgroundColor: '#ffd500', 
        borderBottomRightRadius:30, borderBottomLeftRadius:30, 
        flexDirection: 'row'}}>
          {/* <Image source={require('./../assets/nutrahome_text.png')} 
          style={{marginTop:15, marginLeft:10, resizeMode:'stretch', width:210, height:54}}/> */}
          <View style={{ marginTop:15, marginLeft:33 }}>
            <Text style={{ fontSize:33, fontFamily:'Comfortaa-Bold' }}>
              Profile
            </Text>
          </View>
          <View style={{width:180}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>
        
        {/* user short profile */}
        <View style={{width: '85%', height: 95, backgroundColor: '#fff', 
        borderRadius:30, position:'absolute', top:90, flexDirection: 'row' }}>
          <View style={{marginVertical:10, marginHorizontal:13}}>
            <Avatar
              rounded size='large' title='LW'
              source={{uri:'https://lintangwisesa.github.io/me/img/profile.jpg'}}
            />
          </View>
          <View style={{marginVertical:8, marginHorizontal:3}}>
            <Text style={{ fontSize:23, fontFamily:'Comfortaa-Bold' }}>
              Lintang Wisesa
            </Text>
            <Text style={{ marginBottom:3, fontSize:23, fontFamily:'Comfortaa-Bold' }}>
              085890090045
            </Text>
          </View>
        </View>

        {/* scrollview */}
        <ScrollView style={{width: '85%', marginTop:80}}>

          {/* upgrade member offer */}
          <View style={{height: 77, backgroundColor: 'pink', 
          borderRadius:30, flexDirection: 'row' }}>
            <View style={{marginVertical:5, marginHorizontal:5}}>
              <Icon reverse name='gift-outline' type='ionicon' color='#fff' size={24}
              iconStyle={{color:'#ea0505'}}/>
            </View>
            <View style={{marginVertical:10, marginHorizontal:3}}>
              <Text style={{ fontSize:18, fontFamily:'Comfortaa-Bold' }}>
                Join Nutramates!
              </Text>
              <Text style={{ marginBottom:3, fontFamily:'Comfortaa-Bold' }}>
                Upgrade for more benefits!
              </Text>
            </View>
            <View style={{marginTop:25, marginLeft:22}}>
              <Icon name='chevron-forward-outline' type='ionicon' color='#fff' size={24}
              iconStyle={{color:'#ea0505'}}/>
            </View>
          </View>

          {/* personal data */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            Personal Data
          </Text>

          {/* user account */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            User Account
          </Text>

          <View>
            <ListItem bottomDivider>
              <Icon name='create-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Edit Profile</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>  
            <ListItem bottomDivider>
              <Icon name='gift-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Promo Codes</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>  
          </View>

          {/* security */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            Security
          </Text>

          <View>
            <ListItem bottomDivider>
              <Icon name='lock-open-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Change Pin Number</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>

          {/* about */}
          <Text style={{marginVertical:10, fontSize:20, fontFamily:'Comfortaa-Bold'}}>
            About Us
          </Text>
          
          <View>
            <ListItem bottomDivider>
              <Icon name='bulb-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Nutrahome Guide</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='document-text-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Terms & Conditions</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='shield-checkmark-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Privacy Policy</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider>
              <Icon name='help-circle-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>Help Center</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </View>

          <Text style={{marginVertical:10, fontSize:16, fontFamily:'Comfortaa'}}>
            Version 0.0.1
          </Text>

          <Button 
            buttonStyle={{ marginTop:10, marginBottom:25, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
            title="Sign out"
            onPress={() => navigation.navigate('Home')}
            icon={
              <Icon style={{marginRight:10}} color='white' name='log-out-outline' type='ionicon' size={24}/>
            }
          />

        </ScrollView>
        
      </View>
    );
}

export default UserProfile