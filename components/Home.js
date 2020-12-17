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
              Hi, Andy!
            </Text>
          </View>
          <View style={{width:150}}/>
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
              rounded size='large' title='AH'
              source={{uri:'https://lh3.googleusercontent.com/proxy/ToMSxx9tejmMlSLFZi6wvsUsGGAgkZAoKWNlUxAOUwShtqUTXhouwDxCx3CcLzhRuBa928zJAWJrgEloa-93Ke9JTZ3aNcl8i3OXXsITuWEN_fhR7nhp'}}
            />
          </View>
          <View style={{marginVertical:5, marginHorizontal:3}}>
            <Text style={{ fontSize:20, fontFamily:'Comfortaa-Bold' }}>
              Andy Heryandi
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
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('News')}>
              <Icon reverse name='newspaper-outline' type='ionicon' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>News</Text>
          </View>
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Dietitians')}>
              <Icon reverse name='people-outline' type='ionicon' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Consult</Text>
          </View>
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Meals')}>
              <Icon reverse name='fast-food-outline' type='ionicon' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Meals</Text>
          </View>
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Booths')}>
              <Icon reverse name='store' type='material' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Booths</Text>
          </View>
        </View>

        {/* 2nd row: column menu */}
        <View style={{width: '90%', height: 80, 
        borderRadius:30, position:'absolute', top:425, flexDirection:'row', justifyContent:'center' }}>
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Diary')}>
            <Icon reverse name='repo' type='octicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Diary</Text>
          </View>
          {/* <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Pricing')}>
            <Icon reverse name='cash-outline' type='ionicon' color='#ffd500' size={30}
            iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Pricing</Text>
          </View>
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
              <Icon reverse name='card-outline' type='ionicon' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Payment</Text>
          </View> */}
          <View style={{alignItems:'center', paddingHorizontal:5}}>
            <TouchableOpacity onPress={() => navigation.navigate('Assessment')}>
              <Icon reverse name='body-outline' type='ionicon' color='#ffd500' size={30}
              iconStyle={{color:'#ea0505'}}/>
            </TouchableOpacity>
            <Text style={{ fontFamily:'Comfortaa-Bold', marginTop:-5 }}>Assessment</Text>
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