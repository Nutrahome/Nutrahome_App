import React, {useRef, useState} from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity,
  SafeAreaView, StyleSheet, PixelRatio, Dimensions, Image
} from 'react-native';
import { Icon, Input, Button, CheckBox, Divider 
} from 'react-native-elements'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function Assessment({ navigation }) {
  const scrollViewRef = useRef();
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width, height } = Dimensions.get('window');

  const { currentPage: pageIndex } = sliderState;
  const [ Male, setMale] = useState(false);
  const [ Female, setFemale] = useState(false);
  let objDate = {}
  let dateToday = new Date(Date.now()).toISOString().split('T')[0]
  objDate[dateToday] = { selected: true, marked:true, selectedColor:'#ea0505', dotColor:'#ffd500' };
  const [ Birthday, setBirthday] = useState(objDate);
  const [ Weight, setWeight] = useState(0);
  const [ Height, setHeight] = useState(0);
  const [ Wchange, setWchange] = useState(null);
  const [ Feel, setFeel] = useState(null);
  const [ Medrecord, setMedrecord] = useState(null);
  const [ IsAllergy, setIsAllergy] = useState(false);
  const [ FoodAllergy, setFoodAllergy] = useState(false);
  const [ HowActive, setHowActive] = useState([false, false, false, false, false]);
  const [ ChangeHabit, setChangeHabit] = useState([false, false, false]);
  
  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const goToPage = (i) => {
    scrollViewRef.current?.scrollTo({ x: i * width, animated: true, });
  }
  
  const getSelectedDayEvents = date => {
    let markedDates = {};
    markedDates[date] = { selected: true, marked:true, selectedColor:'#ea0505', dotColor:'#ffd500' };
    setBirthday(markedDates)
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor:'#ffd500', flex: 1 }}>

        <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}>
          {/* Question 1 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginVertical:40 }}>
              <Image source={ require('./../assets/nutrahome.png') } style={{ width:70, height:70, marginBottom:50 }}/>
              <Text style={{ marginLeft:10, fontSize:25, fontFamily:'Comfortaa-Bold', marginBottom:5 }}>
                Nutritional Assessment
              </Text>
              <Text style={{marginTop:5, marginLeft:15, marginBottom:5, fontFamily:'Comfortaa-Bold'}}>
                Please fill out the following form honestly. 
                We'll ensure that your data is safe and only be used for private consultation.
              </Text> 
              <Text style={{marginTop:5, marginLeft:15, marginBottom:25, fontFamily:'Comfortaa-Bold'}}>
                If you have any questions, please contact us on Instagram @Nutrahome or e-mail asknutrahome@gmail.com.
              </Text>
              <Button 
                buttonStyle={{ marginTop:10, marginBottom:10, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
                title="Take an Assessment"
                onPress={() => goToPage(pageIndex + 1)}
                icon={
                  <Icon style={{marginRight:10}} color='white' name='body-outline' type='ionicon' size={24}/>
                }
              />
            </View>
          </View>

          {/* Question 2 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginVertical:20 }}>
              <Text style={{marginLeft:15, marginBottom:15, fontFamily:'Comfortaa-Bold'}}>
                Gender
              </Text>
              <View style={{flex:1, flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                  <CheckBox
                    title='Male'
                    checked={Male}
                    containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                    textStyle={{fontSize:18}}
                    iconType='ionicon'
                    checkedIcon='checkmark-circle'
                    uncheckedIcon='ellipse-outline'
                    checkedColor='#ea0505'
                    uncheckedColor='grey'
                    onPress={()=>{
                      setMale(true)
                      setFemale(false)
                    }}
                  />
                </View>
                <View style={{width:'50%'}}>
                  <CheckBox
                  title='Female'
                  checked={Female}
                  containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                  textStyle={{fontSize:18}}
                  iconType='ionicon'
                  checkedIcon='checkmark-circle'
                  uncheckedIcon='ellipse-outline'
                  checkedColor='#ea0505'
                  uncheckedColor='grey'
                  onPress={()=>{
                    setMale(false)
                    setFemale(true)
                  }}
                />
                </View>
              </View>

              <Divider style={{ marginTop:40, backgroundColor: 'black' }} />
              <Text style={{marginTop:20, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
                Date of birth 
                {/* {Object.keys(Birthday)} */}
              </Text>
                
              <Calendar
                onDayPress={day => {
                  getSelectedDayEvents(day.dateString);
                }}
                markedDates={Birthday}
                enableSwipeMonths={true}
                markingType={'interactive'}
                style={{
                  height: 350
                }}
                theme={{
                  textDayFontFamily: 'Comfortaa-Bold',
                  textMonthFontFamily: 'Comfortaa-Bold',
                  textDayHeaderFontFamily: 'Comfortaa-Bold',
                }}
              />

            </View>
          </View>
          
          {/* Question 3 */}
          <View style={{ width, height }}>
            <View style={{ flexDirection:'row', marginHorizontal:30, marginTop:40 }}>
            
              <View style={{width:'50%'}}>
                <Text style={{marginTop:0, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
                  Weight (kg)
                </Text>
                <Input
                  keyboardType = 'numeric'
                  inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                  placeholder='e.g. 65'
                  leftIcon={
                    <Icon style={{marginLeft:10}} name='barbell-outline' type='ionicon' size={24}/>
                  }
                />
              </View>

              <View style={{width:'50%'}}>
                <Text style={{marginTop:0, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
                  Height (cm)
                </Text>
                <Input
                  keyboardType = 'numeric'
                  inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                  placeholder='e.g. 175'
                  leftIcon={
                    <Icon style={{marginLeft:10}} name='man-outline' type='ionicon' size={24}/>
                  }
                />
              </View>
            </View>
            
            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginTop:5, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                Recent weight changes
              </Text>
              <Text style={{marginTop:0, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold', fontSize:12}}>
                *gain/lose how many kg and since when
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. gain 5 kg last month'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='create-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginTop:5, marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                How do you feel recently?
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. normal, weak, diarrhea'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='create-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginTop:5, marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                Do you have any underlying medical condition/history?
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. normal, diabetes, hypertention'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='create-outline' type='ionicon' size={24}/>
                }
              />
            </View>

          </View>

          {/* Question 4 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginVertical:20 }}>
              <Text style={{marginTop:20, marginLeft:15, marginBottom:15, fontFamily:'Comfortaa-Bold'}}>
                Do you have any food allergies or intolerances?
              </Text>
              <View style={{flexDirection:'row'}}>
                <View style={{width:'50%'}}>
                  <CheckBox
                    title='No'
                    checked={!IsAllergy}
                    containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                    textStyle={{fontSize:18}}
                    iconType='ionicon'
                    checkedIcon='checkmark-circle'
                    uncheckedIcon='ellipse-outline'
                    checkedColor='#ea0505'
                    uncheckedColor='grey'
                    onPress={()=>{
                      setIsAllergy(false)
                    }}
                  />
                </View>
                <View style={{width:'50%'}}>
                  <CheckBox
                  title='Yes'
                  checked={IsAllergy}
                  containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                  textStyle={{fontSize:18}}
                  iconType='ionicon'
                  checkedIcon='checkmark-circle'
                  uncheckedIcon='ellipse-outline'
                  checkedColor='#ea0505'
                  uncheckedColor='grey'
                  onPress={()=>{
                    setIsAllergy(true)
                  }}
                />
                </View>
              </View>
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                If yes, mention them
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. lobster, spinach, milk'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='restaurant-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                How active are you?
              </Text>
              <CheckBox
                title='Little or no exercise, desk job'
                checked={HowActive[0]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setHowActive([true, false, false, false, false])
                }}
              />
              <CheckBox
                title='Light exercise/sports 1-3 days per week'
                checked={HowActive[1]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setHowActive([false, true, false, false, false])
                }}
              />
              <CheckBox
                title='Moderate exercise 3-5 days a week'
                checked={HowActive[2]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setHowActive([false, false, true, false, false])
                }}
              />
              <CheckBox
                title='Hard exercise or sports 6-7 days a week'
                checked={HowActive[3]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setHowActive([false, false, false, true, false])
                }}
              />
              <CheckBox
                title='Hard daily exercise & physical job'
                checked={HowActive[4]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setHowActive([false, false, false, false, true])
                }}
              />
            </View>

          </View>

          {/* Question 5 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginTop:20 }}>
              <Text style={{marginTop:20, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
                How many times do you eat in a day? Mention the typical time for each meals.
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='3x: 8am, lunch 1pm, dinner 7pm'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='restaurant-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{ marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                What did you have for BREAKFAST today or yesterday? How much? 
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. 1 beef sandwich & 1 cup milk'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='partly-sunny-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{ marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                What did you have for LUNCH today or yesterday? How much? 
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. 4 slices veggie pizza'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='sunny-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{ marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                What did you have for DINNER today or yesterday? How much? 
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. salad & green tea'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='moon-outline' type='ionicon' size={24}/>
                }
              />
            </View>
          </View>

          {/* Question 6 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginTop:20 }}>
              <Text style={{marginTop:20, marginLeft:15, marginBottom:0, fontFamily:'Comfortaa-Bold'}}>
                How many times do you snack in a day? What do you usually have as snacks? How much?
              </Text>
              <Text style={{ fontSize:12, marginLeft:15, marginBottom:10, fontFamily:'Comfortaa-Bold'}}>
                *Mention the typical time for each snacks.  
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='1x: 3pm, just a Big Mac'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='pizza-outline' type='ionicon' size={24}/>
                }
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:-10 }}>
              <Text style={{marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                Do you wish to change your eating habits?
              </Text>
              <CheckBox
                title='Yes, of course'
                checked={ChangeHabit[0]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setChangeHabit([true, false, false])
                }}
              />
              <CheckBox
                title='Maybe'
                checked={ChangeHabit[1]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setChangeHabit([false, true, false])
                }}
              />
              <CheckBox
                title='No, thanks'
                checked={ChangeHabit[2]}
                containerStyle={{marginVertical:-5, backgroundColor:'#ffd500', borderColor:'#ffd500'}}
                textStyle={{fontSize:15}}
                iconType='ionicon'
                checkedIcon='checkmark-circle'
                uncheckedIcon='ellipse-outline'
                checkedColor='#ea0505'
                uncheckedColor='grey'
                onPress={()=>{
                  setChangeHabit([false, false, true])
                }}
              />
            </View>

            <View style={{ marginHorizontal:30, marginTop:10 }}>
              <Text style={{ marginBottom:10, marginLeft:15, fontFamily:'Comfortaa-Bold'}}>
                Why? Tell us your reasons 
              </Text>
              <Input
                inputContainerStyle={{ backgroundColor:'white', borderRadius:20 }}
                placeholder='e.g. I wanna be healthy'
                leftIcon={
                  <Icon style={{marginLeft:10}} name='create-outline' type='ionicon' size={24}/>
                }
              />
            </View>
          </View>
          
          {/* Question 7 */}
          <View style={{ width, height }}>
            <View style={{ marginHorizontal:30, marginVertical:40 }}>
              <Image source={ require('./../assets/nutrahome.png') } style={{ width:70, height:70, marginBottom:50 }}/>
              <Text style={{ marginLeft:10, fontSize:25, fontFamily:'Comfortaa-Bold', marginBottom:5 }}>
                Thank you!
              </Text>
              <Text style={{marginTop:5, marginLeft:15, marginBottom:25, fontFamily:'Comfortaa-Bold'}}>
                Your data will be saved & only be used during private consultation. You can update your assessment data anytime.
              </Text>
              <Button 
                buttonStyle={{ marginTop:10, marginBottom:10, backgroundColor:'#ea0505', marginLeft:10, width:320, height:50, borderRadius:20 }}
                title="Finish Assessment"
                onPress={() => navigation.navigate('Home')}
                icon={
                  <Icon style={{marginRight:10}} color='white' name='check-circle' type='octicons' size={24}/>
                }
              />
            </View>
          </View>

        </ScrollView>
              
        <View> 
          <View style={[styles.paginationWrapper, {left:-340}]}>
            <TouchableOpacity onPress={() => {
              if (pageIndex > 0){
                goToPage(pageIndex - 1)
              } else {
                navigation.navigate('Home')
              }}}>
              <View style={styles.buttonCircle}>
                <Icon name={pageIndex > 0 ? 'chevron-back-outline' : 'close-outline'} type='ionicon' 
                color="rgba(255, 255, 255, .9)" size={24}/>
              </View>
            </TouchableOpacity>
          </View>
          
          <View style={styles.paginationWrapper}>
            {Array.from(Array(7).keys()).map((key, index) => (
              <View key={index}  
              style={[styles.paginationDots, {
                backgroundColor: pageIndex === index ? '#fff' : 'rgba(0, 0, 0, .2)', 
                opacity: pageIndex === index ? 1 : 0.5 }]} 
              />
            ))}
          </View>
          
          <View style={[styles.paginationWrapper, {left:340}]}>
            <TouchableOpacity onPress={() => {
              if (pageIndex < 6){
                goToPage(pageIndex + 1)
              } else {
                navigation.navigate('Home')
              }}}>
              <View style={styles.buttonCircle}>
                <Icon name={pageIndex < 6 ? 'chevron-forward-outline' : 'checkmark-outline'} 
                type='ionicon' color="rgba(255, 255, 255, .9)" size={24}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 17,
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    marginLeft: 10,
  },
  buttonCircle: {
    margin:-10,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Assessment