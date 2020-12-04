import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { FlatGrid } from 'react-native-super-grid';

function Pricing({ navigation }) {
  
  const [items, setItems] = React.useState([
    { name: 'Counseling-only', pricenew:'200k', priceold:'250k', code: '#da9ff9', facility:['1x initial session', '3x follow-up session', 'No meal box'] },
    { name: 'Pre-contemplation', pricenew:'300k', priceold:'370k', code: '#bedcfa', facility:['1x initial session', '1x follow-up session', '1-week regular meal box'] },
    { name: 'Determination', pricenew:'550k', priceold:'620k', code: '#ccf6c8', facility:['1x initial session', '2x follow-up session', 'No meal box']},
    { name: 'Maintenance', pricenew:'1.000k', priceold:'1.150k', code: '#fafcc2', facility:['1x initial session', '3x follow-up session', '1-month regular meal box'] },
    { name: 'Maintenance (Western Cuisine)', priceold:'1.750k', pricenew:'1.500k', code: '#f6d6ad', facility:['1x initial session', '3x follow-up session', '1-month regular western meal box'] },
    { name: 'Premium Maintenance', pricenew:'2.500k', priceold:'2.200k', code: '#f9c0c0', facility:['1x initial session', '1x follow-up session', '1-month premium meal box'] },
  ]);

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
              Package Plans
            </Text>
            <Text style={{ fontFamily:'Comfortaa' }}>
              Affordable price, best services
            </Text>
          </View>
          <View style={{width:28}}/>
          <View style={{marginTop:10}}>
            <Icon raised
            name='notifications' type='ionicon' color='#C0C0C0' size={25}/>
          </View>
        </View>

        <FlatGrid
          itemDimension={200}
          data={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          spacing={10}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{flexDirection:'column', justifyContent:'center'}}>
                  <Text style={styles.itemidr}> Rp</Text>
                  <Text style={styles.itemPold}>{item.priceold} </Text>
                </View>
                <Text style={styles.itemPnow}>{item.pricenew}</Text>
              </View>
              <Text style={styles.itemFacility}>{item.facility[0]}</Text>
              <Text style={styles.itemFacility}>{item.facility[1]}</Text>
              <Text style={styles.itemFacility}>{item.facility[2]}</Text>
              <Button 
                buttonStyle={{ marginTop:20, marginBottom:10, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
                title="Purchase"
                onPress={() => navigation.navigate('Payment')}
                icon={
                  <Icon style={{marginRight:10}} color='white' name='card-outline' type='ionicon' size={24}/>
                }
              />
            </View>
          )}
        />

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
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10,
    padding: 10,
    height: 280,
  },
  itemName: {
    fontSize: 22,
    color: 'black',
    fontFamily:'Comfortaa-Bold',
    // textShadowColor: 'yellow',
    // textShadowOffset: {width: -1, height: 1},
    // textShadowRadius: 10
  },
  itemPold: {
    fontSize: 18,
    color: 'black', textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
    fontFamily:'Comfortaa-Bold',
    marginTop:-10
  },
  itemidr: {
    fontSize: 25,
    color: 'red',
    fontFamily:'Comfortaa-Bold',
    textShadowColor: 'yellow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  itemPnow: {
    fontSize: 40,
    color: 'red',
    fontFamily:'Comfortaa-Bold',
    textShadowColor: 'yellow',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  itemFacility: {
    fontSize: 16,
    color: 'black',
    fontFamily:'Comfortaa-Bold',
    marginBottom:-3
  }
});

export default Pricing