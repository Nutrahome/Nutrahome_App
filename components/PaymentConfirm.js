import React, { useEffect, useState } from 'react';
import { Image, View, Text } from 'react-native';
import { Icon, Avatar, ListItem, Button, Overlay } from 'react-native-elements'

function PaymentConfirm({ route, navigation }) {
    const { packagePlan, payMethod, dietitian } = route.params;
    
    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
      setVisible(!visible);
    };
    // useEffect(()=>{
    //   console.log(packagePlan)
    //   console.log(payMethod)
    //   console.log(dietitian)
    // })

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        
        <View style={{width: '100%', height: 90, backgroundColor: '#ffd500', 
          borderBottomRightRadius:30, borderBottomLeftRadius:30, 
          flexDirection: 'row'}}>
          <View style={{marginTop:10, marginLeft:10}}>
            <Icon raised onPress={() => navigation.goBack()}
            name='arrow-back-outline' type='ionicon' size={25}/>
          </View>
          <View style={{ marginTop:15, marginLeft:10 }}>
            <Text style={{ fontSize:20, fontFamily:'Comfortaa-Bold' }}>
              Payment Confirmation
            </Text>
            <Text style={{ fontFamily:'Comfortaa' }}>
              Pay for your best plan
            </Text>
          </View>
          <View style={{width:10}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>

        <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/thumb/scan-code-and-make-payment-2523252-2117428.png'}}
          style={{height:300, width:300, marginTop:-50}}
        />

        <View style={{width: '85%', marginTop:-110}}>

          <View>
            <ListItem containerStyle={{alignItems:'flex-start'}} bottomDivider>
              <Icon name='gift-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title>{packagePlan.name}</ListItem.Title>
                <ListItem.Subtitle>Included: {packagePlan.facility[0]}, {packagePlan.facility[1]} and {packagePlan.facility[2]}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem containerStyle={{alignItems:'flex-start'}} bottomDivider>
              <Avatar rounded source={{uri: dietitian.dphoto}} />
              <ListItem.Content>
                <ListItem.Title>{dietitian.dfname} {dietitian.dlname}, {dietitian.dtitle}</ListItem.Title>
                <ListItem.Subtitle>{dietitian.dpractice}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>  
            <ListItem bottomDivider>
              <Image style={{width:30, height:30, resizeMode:'contain'}} source={{uri: payMethod.pmphoto}} />
              <ListItem.Content>
                <ListItem.Title>{payMethod.pmname}</ListItem.Title>
                <ListItem.Subtitle>Pay to Nutrahome account</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem containerStyle={{alignItems:'flex-start'}} bottomDivider>
              <Icon name='cash-outline' type='ionicon'/>
              <ListItem.Content>
                <ListItem.Title
                style={{fontWeight:'bold'}}>
                  Rp {packagePlan.pricenew.split('k')[0]}.000,-</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </View>

          <Button 
            buttonStyle={{ marginTop:7, marginBottom:25, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
            title="Pay"
            onPress={toggleOverlay}
            icon={
              <Icon style={{marginRight:10}} color='white' name='card-outline' type='ionicon' size={24}/>
            }
          />

        </View>
        
        <Overlay 
        overlayStyle={{width:300, borderRadius:30}}
        isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={{alignItems:'center', margin:20}}>
            <Image 
            style={{width:100, height:100}}
            source={{uri:'https://kvnmail.com/in/wp-content/uploads/2017/08/success-300x300.png'}}/>  
            <Text style={{fontSize:20, marginVertical:10,fontFamily:'Comfortaa-Bold'}}>
              Payment successful
            </Text>
            <Button 
            buttonStyle={{ marginTop:10, marginBottom:5, backgroundColor:'#ea0505', marginLeft:10, width:80, height:40, borderRadius:20 }}
            title="OK"
            onPress={toggleOverlay}
            // icon={
            //   <Icon style={{marginRight:10}} color='white' name='card-outline' type='ionicon' size={24}/>
            // }
          />
          </View>
        </Overlay>

      </View>
    );
}

export default PaymentConfirm