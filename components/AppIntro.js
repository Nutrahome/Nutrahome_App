import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Icon } from 'react-native-elements'

const slides = [
  {
    key: 'one',
    title: 'Welcome to',
    // text: 'Description.\nbla bla bla',
    image: require('./../assets/nutrahome.png'),
    // image: {uri: 'https://reactjs.org/logo-og.png'},
    style: {width: 200, height: 200},
    backgroundColor: '#ffd500',
  },
  {
    key: 'two',
    title: 'Consult with your\npersonal dietitian',
    // text: 'Description.\nbla bla bla',
    image: require('./../assets/intro_consult.png'),
    style: {width: 300, height: 300},
    backgroundColor: '#ffd500',
  },
  {
    key: 'three',
    title: 'Order your\nhealthy meals!',
    // text: 'Description.\nbla bla bla',
    image: require('./../assets/intro_meals.png'),
    style: {width: 350, height: 280},
    // image: {uri: 'https://reactjs.org/logo-og.png'},
    backgroundColor: '#ffd500',
  }
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function AppIntro({ navigation }) {
  
  let renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: item.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize:30, fontFamily:'Comfortaa-Bold', marginBottom:30 }}>
          {item.title}
        </Text>
        <Image source={item.image} style={item.style}/>
        <Text>{item.text}</Text>
      </View>
    );
  }
  
  let onDone = () => {
    navigation.navigate('Login')
  }
  
  let renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name='chevron-forward-outline' type='ionicon' 
        color="rgba(255, 255, 255, .9)" size={24}/>
      </View>
    );
  };

  let renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name='checkmark-outline' type='ionicon' 
        color="rgba(255, 255, 255, .9)" size={24}/>
      </View>
    );
  };

  return ( 
    <AppIntroSlider 
        // bottomButton={false}
        renderItem={renderItem} 
        data={slides} onDone={onDone}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        />
    )
}

export default AppIntro