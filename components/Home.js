import React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Avatar, Badge } from 'react-native-elements'

function HomeScreen({ navigation }) {
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
              Hi, Lintang!
            </Text>
          </View>
          <View style={{width:90}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>
        
        {/* user short profile */}
        <TouchableOpacity style={{width: '85%', height: 95, backgroundColor: '#fff', 
        borderRadius:30, position:'absolute', top:90, flexDirection: 'row' }}
        onPress={() => navigation.navigate('UserProfile')}>
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
              <Badge badgeStyle={{backgroundColor:'#ea0505', marginRight:5, height:22}} value={
                <Text style={{ padding:8, color:'white', fontFamily:'Comfortaa-Bold' }}>
                  Obese
                </Text>} 
              />
            </View>
          </View>
          <View style={{marginTop:35, marginLeft:0}}>
            <Icon name='chevron-forward-outline' type='ionicon' color='#fff' size={24}
            iconStyle={{color:'#C0C0C0'}}/>
          </View>
        </TouchableOpacity>
        
        {/* upgrade member offer */}
        <View style={{width: '85%', height: 77, backgroundColor: 'pink', 
        borderRadius:30, position:'absolute', top:205, flexDirection: 'row' }}>
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

        {/* 1st row: column menu */}
        <View style={{width: '90%', height: 80, 
        borderRadius:30, position:'absolute', top:310, flexDirection:'row', justifyContent:'center' }}>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='newspaper-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('News')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>News</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='people-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Dietitians')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Consult</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='fast-food-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Meals')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Meals</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='store' type='material' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Booths')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Booths</Text>
          </View>
        </View>

        {/* 2nd row: column menu */}
        <View style={{width: '90%', height: 80, 
        borderRadius:30, position:'absolute', top:425, flexDirection:'row', justifyContent:'center' }}>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='repo' type='octicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Diary')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Diary</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='cash-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Pricing')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Pricing</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='card-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('Payment')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Payment</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <Icon reverse name='information-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}
            onPress={() => navigation.navigate('About')}/>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>About</Text>
          </View>
        </View>
        

        {/* <Text style={{marginTop:300}}>.</Text> */}
        
        {/* <Button
          title="Go to Nutritionist"
          onPress={() => navigation.navigate('Dietitians')}
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