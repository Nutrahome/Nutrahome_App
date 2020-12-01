import React from 'react';
import { Button, View, Text, Image, ScrollView } from 'react-native';
import { Icon, Avatar, Badge } from 'react-native-elements'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        
        {/* header, logo & notif */}
        <View style={{width: '100%', height: 120, backgroundColor: '#ffd500', 
        borderBottomRightRadius:30, borderBottomLeftRadius:30, 
        flexDirection: 'row'}}>
          <Image source={require('./../assets/nutrahome_text.png')} 
          style={{marginTop:15, marginLeft:10, resizeMode:'stretch', width:210, height:54}}/>
          <View style={{width:110}}/>
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
          <View style={{marginVertical:5, marginHorizontal:3}}>
            <Text style={{ fontSize:20, fontFamily:'Comfortaa-Bold' }}>
              Lintang Wisesa
            </Text>
            <Text style={{ marginBottom:3, fontFamily:'Comfortaa-Bold' }}>
              085890090045
            </Text>
            <View style={{ flexDirection:'row' }}>
              <Badge badgeStyle={{backgroundColor:'#ffd500',marginRight:5, height:22}} value={
                <Text style={{ padding:8, color:'black', fontFamily:'Comfortaa-Bold' }}>
                  117 kg
                </Text>} 
              />
              <Badge badgeStyle={{backgroundColor:'#ffd500', marginRight:5, height:22}} value={
                <Text style={{ padding:8, color:'black', fontFamily:'Comfortaa-Bold' }}>
                  178 cm
                </Text>} 
              />
              <Badge badgeStyle={{backgroundColor:'#ffd500', marginRight:5, height:22}} value={
                <Text style={{ padding:8, color:'black', fontFamily:'Comfortaa-Bold' }}>
                  Obese
                </Text>} 
              />
            </View>
          </View>
        </View>
        
        {/* 1st row: column menu */}
        <View style={{width: '90%', height: 80, 
        borderRadius:30, position:'absolute', top:205, flexDirection:'row', justifyContent:'center' }}>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='newspaper-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>News</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Icon reverse name='people-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Consult</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Icon reverse name='fast-food-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Meals</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Icon reverse name='document-text-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Diary</Text>
          </View>
        </View>

        {/* 2nd row: column menu */}
        <View style={{width: '90%', height: 80, 
        borderRadius:30, position:'absolute', top:315, flexDirection:'row', justifyContent:'center' }}>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='document-text-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Diary</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='notifications' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Menu</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='cash-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Pricing</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='information-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>About</Text>
          </View>
        </View>
        

        <Text style={{marginTop:300}}>.</Text>
        
        {/* <Button
          title="Go to Nutritionist"
          onPress={() => navigation.navigate('Nutritionist')}
        />
        <Button
          title="Go to Meals" color='#fd8c04'
          onPress={() => navigation.navigate('Meals')}
        />
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate('Cart')}
        />
        <Button
          title="Go to UserProfile"
          onPress={() => navigation.navigate('UserProfile')}
        /> */}
        
      </View>
    );
}

export default HomeScreen