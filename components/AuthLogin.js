import React, {useState} from 'react';
import { Animated, View, Text, Image } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from './styles';

const {Value, Text: AnimatedText} = Animated;
const CELL_COUNT = 6;
const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

function AuthLogin({ navigation }) {
  
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

    return (
    <View style={{ width:'100%', backgroundColor:'#ffd500', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <View style={{ marginHorizontal:30, marginVertical:40 }}>
        <Image source={ require('./../assets/nutrahome.png') } style={{ width:70, height:70, marginBottom:70 }}/>
        <Text style={{ marginLeft:10, fontSize:30, fontFamily:'Comfortaa-Bold', marginBottom:20 }}>Log in</Text>          
        
        <Text style={{marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
          Type your number
        </Text>
        <Input
          containerStyle={{ width:340, marginBottom:-40 }}
          inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
          placeholder='081234567890'
          leftIcon={
            <Icon style={{marginLeft:10}} name='phone-portrait-outline' type='ionicon' size={24}/>
          }
        />
        
        {/* <Input
          containerStyle={{ width:340, marginBottom:-10 }}
          inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
          placeholder='••••••'
          secureTextEntry={true}
          leftIcon={
            <Icon style={{marginLeft:10}} name='lock-open-outline' type='ionicon' size={24}/>
          }
        /> */}

        <Text style={{marginTop:25, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
          Type your pin
        </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

        <Button 
          buttonStyle={{ marginTop:20, marginBottom:10, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
          title="Log in"
          onPress={() => navigation.navigate('MainApp')}
          icon={
            <Icon style={{marginRight:10}} color='white' name='enter-outline' type='ionicon' size={24}/>
          }
        />
        <Button
          buttonStyle={{ marginLeft:10, width:320, height:50, borderRadius:20 }}
          title="or Sign up"
          onPress={() => navigation.navigate('Signup')}
          type="clear"
        />
        </View>
    </View>
    )
}

export default AuthLogin;