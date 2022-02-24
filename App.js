import React, {useRef, useState, useEffect} from 'react';
import { Text, View, Animated, TouchableOpacity, TextInput, Switch, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function App() {
  const titleY = useRef(new Animated.Value(0)).current;
  const [viewMode, setViewMode] = useState('loading')
  const [weekOneMondayBeforeSchool, setWeekOneMondayBeforeSchool] = useState('')
  const [weekOneTuesdayBeforeSchool, setWeekOneTuesdayBeforeSchool] = useState('')
  const [weekOneWednesdayBeforeSchool, setWeekOneWednesdayBeforeSchool] = useState('')
  const [weekOneThursdayBeforeSchool, setWeekOneThursdayBeforeSchool] = useState('')
  const [weekOneFridayBeforeSchool, setWeekOneFridayBeforeSchool] = useState('')
  const [weekTwoMondayBeforeSchool, setWeekTwoMondayBeforeSchool] = useState('')
  const [weekTwoTuesdayBeforeSchool, setWeekTwoTuesdayBeforeSchool] = useState('')
  const [weekTwoWednesdayBeforeSchool, setWeekTwoWednesdayBeforeSchool] = useState('')
  const [weekTwoThursdayBeforeSchool, setWeekTwoThursdayBeforeSchool] = useState('')
  const [weekTwoFridayBeforeSchool, setWeekTwoFridayBeforeSchool] = useState('')
  const [weekOneMondayPeriodOne, setWeekOneMondayPeriodOne] = useState('')
  const [weekOneTuesdayPeriodOne, setWeekOneTuesdayPeriodOne] = useState('')
  const [weekOneWednesdayPeriodOne, setWeekOneWednesdayPeriodOne] = useState('')
  const [weekOneThursdayPeriodOne, setWeekOneThursdayPeriodOne] = useState('')
  const [weekOneFridayPeriodOne, setWeekOneFridayPeriodOne] = useState('')
  const [weekOneMondayPeriodTwo, setWeekOneMondayPeriodTwo] = useState('')
  const [weekOneTuesdayPeriodTwo, setWeekOneTuesdayPeriodTwo] = useState('')
  const [weekOneWednesdayPeriodTwo, setWeekOneWednesdayPeriodTwo] = useState('')
  const [weekOneThursdayPeriodTwo, setWeekOneThursdayPeriodTwo] = useState('')
  const [weekOneFridayPeriodTwo, setWeekOneFridayPeriodTwo] = useState('')
  const [weekOneMondayPeriodThree, setWeekOneMondayPeriodThree] = useState('')
  const [weekOneTuesdayPeriodThree, setWeekOneTuesdayPeriodThree] = useState('')
  const [weekOneWednesdayPeriodThree, setWeekOneWednesdayPeriodThree] = useState('')
  const [weekOneThursdayPeriodThree, setWeekOneThursdayPeriodThree] = useState('')
  const [weekOneFridayPeriodThree, setWeekOneFridayPeriodThree] = useState('')
  const [weekOneMondayPeriodFour, setWeekOneMondayPeriodFour] = useState('')
  const [weekOneTuesdayPeriodFour, setWeekOneTuesdayPeriodFour] = useState('')
  const [weekOneWednesdayPeriodFour, setWeekOneWednesdayPeriodFour] = useState('')
  const [weekOneThursdayPeriodFour, setWeekOneThursdayPeriodFour] = useState('')
  const [weekOneFridayPeriodFour, setWeekOneFridayPeriodFour] = useState('')
  const [weekOneMondayPeriodFive, setWeekOneMondayPeriodFive] = useState('')
  const [weekOneTuesdayPeriodFive, setWeekOneTuesdayPeriodFive] = useState('')
  const [weekOneWednesdayPeriodFive, setWeekOneWednesdayPeriodFive] = useState('')
  const [weekOneThursdayPeriodFive, setWeekOneThursdayPeriodFive] = useState('')
  const [weekOneFridayPeriodFive, setWeekOneFridayPeriodFive] = useState('')
  const [weekOneMondayPeriodSix, setWeekOneMondayPeriodSix] = useState('')
  const [weekOneTuesdayPeriodSix, setWeekOneTuesdayPeriodSix] = useState('')
  const [weekOneWednesdayPeriodSix, setWeekOneWednesdayPeriodSix] = useState('')
  const [weekOneThursdayPeriodSix, setWeekOneThursdayPeriodSix] = useState('')
  const [weekOneFridayPeriodSix, setWeekOneFridayPeriodSix] = useState('')
  const [weekTwoMondayPeriodOne, setWeekTwoMondayPeriodOne] = useState('')
  const [weekTwoTuesdayPeriodOne, setWeekTwoTuesdayPeriodOne] = useState('')
  const [weekTwoWednesdayPeriodOne, setWeekTwoWednesdayPeriodOne] = useState('')
  const [weekTwoThursdayPeriodOne, setWeekTwoThursdayPeriodOne] = useState('')
  const [weekTwoFridayPeriodOne, setWeekTwoFridayPeriodOne] = useState('')
  const [weekTwoMondayPeriodTwo, setWeekTwoMondayPeriodTwo] = useState('')
  const [weekTwoTuesdayPeriodTwo, setWeekTwoTuesdayPeriodTwo] = useState('')
  const [weekTwoWednesdayPeriodTwo, setWeekTwoWednesdayPeriodTwo] = useState('')
  const [weekTwoThursdayPeriodTwo, setWeekTwoThursdayPeriodTwo] = useState('')
  const [weekTwoFridayPeriodTwo, setWeekTwoFridayPeriodTwo] = useState('')
  const [weekTwoMondayPeriodThree, setWeekTwoMondayPeriodThree] = useState('')
  const [weekTwoTuesdayPeriodThree, setWeekTwoTuesdayPeriodThree] = useState('')
  const [weekTwoWednesdayPeriodThree, setWeekTwoWednesdayPeriodThree] = useState('')
  const [weekTwoThursdayPeriodThree, setWeekTwoThursdayPeriodThree] = useState('')
  const [weekTwoFridayPeriodThree, setWeekTwoFridayPeriodThree] = useState('')
  const [weekTwoMondayPeriodFour, setWeekTwoMondayPeriodFour] = useState('')
  const [weekTwoTuesdayPeriodFour, setWeekTwoTuesdayPeriodFour] = useState('')
  const [weekTwoWednesdayPeriodFour, setWeekTwoWednesdayPeriodFour] = useState('')
  const [weekTwoThursdayPeriodFour, setWeekTwoThursdayPeriodFour] = useState('')
  const [weekTwoFridayPeriodFour, setWeekTwoFridayPeriodFour] = useState('')
  const [weekTwoMondayPeriodFive, setWeekTwoMondayPeriodFive] = useState('')
  const [weekTwoTuesdayPeriodFive, setWeekTwoTuesdayPeriodFive] = useState('')
  const [weekTwoWednesdayPeriodFive, setWeekTwoWednesdayPeriodFive] = useState('')
  const [weekTwoThursdayPeriodFive, setWeekTwoThursdayPeriodFive] = useState('')
  const [weekTwoFridayPeriodFive, setWeekTwoFridayPeriodFive] = useState('')
  const [weekTwoMondayPeriodSix, setWeekTwoMondayPeriodSix] = useState('')
  const [weekTwoTuesdayPeriodSix, setWeekTwoTuesdayPeriodSix] = useState('')
  const [weekTwoWednesdayPeriodSix, setWeekTwoWednesdayPeriodSix] = useState('')
  const [weekTwoThursdayPeriodSix, setWeekTwoThursdayPeriodSix] = useState('')
  const [weekTwoFridayPeriodSix, setWeekTwoFridayPeriodSix] = useState('')
  const [weekOneMondayAfterSchool, setWeekOneMondayAfterSchool] = useState('')
  const [weekOneTuesdayAfterSchool, setWeekOneTuesdayAfterSchool] = useState('')
  const [weekOneWednesdayAfterSchool, setWeekOneWednesdayAfterSchool] = useState('')
  const [weekOneThursdayAfterSchool, setWeekOneThursdayAfterSchool] = useState('')
  const [weekOneFridayAfterSchool, setWeekOneFridayAfterSchool] = useState('')
  const [weekTwoMondayAfterSchool, setWeekTwoMondayAfterSchool] = useState('')
  const [weekTwoTuesdayAfterSchool, setWeekTwoTuesdayAfterSchool] = useState('')
  const [weekTwoWednesdayAfterSchool, setWeekTwoWednesdayAfterSchool] = useState('')
  const [weekTwoThursdayAfterSchool, setWeekTwoThursdayAfterSchool] = useState('')
  const [weekTwoFridayAfterSchool, setWeekTwoFridayAfterSchool] = useState('')
  Animated.loop(
    Animated.sequence([
      Animated.timing(titleY, {
        toValue: 10,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(titleY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  const changeView = (view) => {
    console.log(view)
    setViewMode(view)
  }

  const saveClasses = async () => {
    const classes = {
      weekOneMondayBeforeSchool,
      weekOneTuesdayBeforeSchool,
      weekOneWednesdayBeforeSchool,
      weekOneThursdayBeforeSchool,
      weekOneFridayBeforeSchool,
      weekTwoMondayBeforeSchool,
      weekTwoTuesdayBeforeSchool,
      weekTwoWednesdayBeforeSchool,
      weekTwoThursdayBeforeSchool,
      weekTwoFridayBeforeSchool,
      weekOneMondayPeriodOne,
      weekOneTuesdayPeriodOne,
      weekOneWednesdayPeriodOne,
      weekOneThursdayPeriodOne,
      weekOneFridayPeriodOne,
      weekOneMondayPeriodTwo,
      weekOneTuesdayPeriodTwo,
      weekOneWednesdayPeriodTwo,
      weekOneThursdayPeriodTwo,
      weekOneFridayPeriodTwo,
      weekOneMondayPeriodThree,
      weekOneTuesdayPeriodThree,
      weekOneWednesdayPeriodThree,
      weekOneThursdayPeriodThree,
      weekOneFridayPeriodThree,
      weekOneMondayPeriodFour,
      weekOneTuesdayPeriodFour,
      weekOneWednesdayPeriodFour,
      weekOneThursdayPeriodFour,
      weekOneFridayPeriodFour,
      weekOneMondayPeriodFive,
      weekOneTuesdayPeriodFive,
      weekOneWednesdayPeriodFive,
      weekOneThursdayPeriodFive,
      weekOneFridayPeriodFive,
      weekOneMondayPeriodSix,
      weekOneTuesdayPeriodSix,
      weekOneWednesdayPeriodSix,
      weekOneThursdayPeriodSix,
      weekOneFridayPeriodSix,
      weekTwoMondayPeriodOne,
      weekTwoTuesdayPeriodOne,
      weekTwoWednesdayPeriodOne,
      weekTwoThursdayPeriodOne,
      weekTwoFridayPeriodOne,
      weekTwoMondayPeriodTwo,
      weekTwoTuesdayPeriodTwo,
      weekTwoWednesdayPeriodTwo,
      weekTwoThursdayPeriodTwo,
      weekTwoFridayPeriodTwo,
      weekTwoMondayPeriodThree,
      weekTwoTuesdayPeriodThree,
      weekTwoWednesdayPeriodThree,
      weekTwoThursdayPeriodThree,
      weekTwoFridayPeriodThree,
      weekTwoMondayPeriodFour,
      weekTwoTuesdayPeriodFour,
      weekTwoWednesdayPeriodFour,
      weekTwoThursdayPeriodFour,
      weekTwoFridayPeriodFour,
      weekTwoMondayPeriodFive,
      weekTwoTuesdayPeriodFive,
      weekTwoWednesdayPeriodFive,
      weekTwoThursdayPeriodFive,
      weekTwoFridayPeriodFive,
      weekTwoMondayPeriodSix,
      weekTwoTuesdayPeriodSix,
      weekTwoWednesdayPeriodSix,
      weekTwoThursdayPeriodSix,
      weekTwoFridayPeriodSix,
      weekOneMondayAfterSchool,
      weekOneTuesdayAfterSchool,
      weekOneWednesdayAfterSchool,
      weekOneThursdayAfterSchool,
      weekOneFridayAfterSchool,
      weekTwoMondayAfterSchool,
      weekTwoTuesdayAfterSchool,
      weekTwoWednesdayAfterSchool,
      weekTwoThursdayAfterSchool,
      weekTwoFridayAfterSchool,
    }
    await AsyncStorage.setItem('classes', JSON.stringify(classes))
    setViewMode('view')
  }

  useEffect(() => {
    const getClasses = async () => {
      const classes = JSON.parse(await AsyncStorage.getItem('classes'))
      if (classes) {
        setWeekOneMondayBeforeSchool(classes.weekOneMondayBeforeSchool)
        setWeekOneTuesdayBeforeSchool(classes.weekOneTuesdayBeforeSchool)
        setWeekOneWednesdayBeforeSchool(classes.weekOneWednesdayBeforeSchool)
        setWeekOneThursdayBeforeSchool(classes.weekOneThursdayBeforeSchool)
        setWeekOneFridayBeforeSchool(classes.weekOneFridayBeforeSchool)
        setWeekTwoMondayBeforeSchool(classes.weekTwoMondayBeforeSchool)
        setWeekTwoTuesdayBeforeSchool(classes.weekTwoTuesdayBeforeSchool)
        setWeekTwoWednesdayBeforeSchool(classes.weekTwoWednesdayBeforeSchool)
        setWeekTwoThursdayBeforeSchool(classes.weekTwoThursdayBeforeSchool)
        setWeekTwoFridayBeforeSchool(classes.weekTwoFridayBeforeSchool)
        setWeekOneMondayPeriodOne(classes.weekOneMondayPeriodOne)
        setWeekOneTuesdayPeriodOne(classes.weekOneTuesdayPeriodOne)
        setWeekOneWednesdayPeriodOne(classes.weekOneWednesdayPeriodOne)
        setWeekOneThursdayPeriodOne(classes.weekOneThursdayPeriodOne)
        setWeekOneFridayPeriodOne(classes.weekOneFridayPeriodOne)
        setWeekOneMondayPeriodTwo(classes.weekOneMondayPeriodTwo)
        setWeekOneTuesdayPeriodTwo(classes.weekOneTuesdayPeriodTwo)
        setWeekOneWednesdayPeriodTwo(classes.weekOneWednesdayPeriodTwo)
        setWeekOneThursdayPeriodTwo(classes.weekOneThursdayPeriodTwo)
        setWeekOneFridayPeriodTwo(classes.weekOneFridayPeriodTwo)
        setWeekOneMondayPeriodThree(classes.weekOneMondayPeriodThree)
        setWeekOneTuesdayPeriodThree(classes.weekOneTuesdayPeriodThree)
        setWeekOneWednesdayPeriodThree(classes.weekOneWednesdayPeriodThree)
        setWeekOneThursdayPeriodThree(classes.weekOneThursdayPeriodThree)
        setWeekOneFridayPeriodThree(classes.weekOneFridayPeriodThree)
        setWeekOneMondayPeriodFour(classes.weekOneMondayPeriodFour)
        setWeekOneTuesdayPeriodFour(classes.weekOneTuesdayPeriodFour)
        setWeekOneWednesdayPeriodFour(classes.weekOneWednesdayPeriodFour)
        setWeekOneThursdayPeriodFour(classes.weekOneThursdayPeriodFour)
        setWeekOneFridayPeriodFour(classes.weekOneFridayPeriodFour)
        setWeekOneMondayPeriodFive(classes.weekOneMondayPeriodFive)
        setWeekOneTuesdayPeriodFive(classes.weekOneTuesdayPeriodFive)
        setWeekOneWednesdayPeriodFive(classes.weekOneWednesdayPeriodFive)
        setWeekOneThursdayPeriodFive(classes.weekOneThursdayPeriodFive)
        setWeekOneFridayPeriodFive(classes.weekOneFridayPeriodFive)
        setWeekOneMondayPeriodSix(classes.weekOneMondayPeriodSix)
        setWeekOneTuesdayPeriodSix(classes.weekOneTuesdayPeriodSix)
        setWeekOneWednesdayPeriodSix(classes.weekOneWednesdayPeriodSix)
        setWeekOneThursdayPeriodSix(classes.weekOneThursdayPeriodSix)
        setWeekOneFridayPeriodSix(classes.weekOneFridayPeriodSix)
        setWeekTwoMondayPeriodOne(classes.weekTwoMondayPeriodOne)
        setWeekTwoTuesdayPeriodOne(classes.weekTwoTuesdayPeriodOne)
        setWeekTwoWednesdayPeriodOne(classes.weekTwoWednesdayPeriodOne)
        setWeekTwoThursdayPeriodOne(classes.weekTwoThursdayPeriodOne)
        setWeekTwoFridayPeriodOne(classes.weekTwoFridayPeriodOne)
        setWeekTwoMondayPeriodTwo(classes.weekTwoMondayPeriodTwo)
        setWeekTwoTuesdayPeriodTwo(classes.weekTwoTuesdayPeriodTwo)
        setWeekTwoWednesdayPeriodTwo(classes.weekTwoWednesdayPeriodTwo)
        setWeekTwoThursdayPeriodTwo(classes.weekTwoThursdayPeriodTwo)
        setWeekTwoFridayPeriodTwo(classes.weekTwoFridayPeriodTwo)
        setWeekTwoMondayPeriodThree(classes.weekTwoMondayPeriodThree)
        setWeekTwoTuesdayPeriodThree(classes.weekTwoTuesdayPeriodThree)
        setWeekTwoWednesdayPeriodThree(classes.weekTwoWednesdayPeriodThree)
        setWeekTwoThursdayPeriodThree(classes.weekTwoThursdayPeriodThree)
        setWeekTwoFridayPeriodThree(classes.weekTwoFridayPeriodThree)
        setWeekTwoMondayPeriodFour(classes.weekTwoMondayPeriodFour)
        setWeekTwoTuesdayPeriodFour(classes.weekTwoTuesdayPeriodFour)
        setWeekTwoWednesdayPeriodFour(classes.weekTwoWednesdayPeriodFour)
        setWeekTwoThursdayPeriodFour(classes.weekTwoThursdayPeriodFour)
        setWeekTwoFridayPeriodFour(classes.weekTwoFridayPeriodFour)
        setWeekTwoMondayPeriodFive(classes.weekTwoMondayPeriodFive)
        setWeekTwoTuesdayPeriodFive(classes.weekTwoTuesdayPeriodFive)
        setWeekTwoWednesdayPeriodFive(classes.weekTwoWednesdayPeriodFive)
        setWeekTwoThursdayPeriodFive(classes.weekTwoThursdayPeriodFive)
        setWeekTwoFridayPeriodFive(classes.weekTwoFridayPeriodFive)
        setWeekTwoMondayPeriodSix(classes.weekTwoMondayPeriodSix)
        setWeekTwoTuesdayPeriodSix(classes.weekTwoTuesdayPeriodSix)
        setWeekTwoWednesdayPeriodSix(classes.weekTwoWednesdayPeriodSix)
        setWeekTwoThursdayPeriodSix(classes.weekTwoThursdayPeriodSix)
        setWeekTwoFridayPeriodSix(classes.weekTwoFridayPeriodSix)
        setWeekOneMondayAfterSchool(classes.weekOneMondayAfterSchool)
        setWeekOneTuesdayAfterSchool(classes.weekOneTuesdayAfterSchool)
        setWeekOneWednesdayAfterSchool(classes.weekOneWednesdayAfterSchool)
        setWeekOneThursdayAfterSchool(classes.weekOneThursdayAfterSchool)
        setWeekOneFridayAfterSchool(classes.weekOneFridayAfterSchool)
        setWeekTwoMondayAfterSchool(classes.weekTwoMondayAfterSchool)
        setWeekTwoTuesdayAfterSchool(classes.weekTwoTuesdayAfterSchool)
        setWeekTwoWednesdayAfterSchool(classes.weekTwoWednesdayAfterSchool)
        setWeekTwoThursdayAfterSchool(classes.weekTwoThursdayAfterSchool)
        setWeekTwoFridayAfterSchool(classes.weekTwoFridayAfterSchool)
        setViewMode('view')
      } else {
        setViewMode('welcome')
      }
    }
    getClasses()
  }, [])
  return (
    <>
      <Animated.View style={{transform: [{translateY: titleY}], alignItems: 'center', alignSelf: 'center', marginBottom: 10}}>
        {viewMode == 'view' || viewMode == 'loading' || viewMode == 'welcome' ?
          <>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Lynfield College Timetable V2</Text>
            <Text>The new and improved lynfield college class timetable that is up 24/7</Text>
          </>
        :
          <>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Editing timetable...</Text>
            <Text>{viewMode == 'weekOne' ? 'Week One' : 'Week Two'}</Text>
          </>
        }
      </Animated.View>
      {viewMode == 'view' ?
        <>
          <TouchableOpacity onPress={() => {setViewMode('weekOne')}} style={{position: 'absolute', top: 10, right: 10, zIndex: 2}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Edit</Text>
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Week Rotation One</Text>
            <View style={{flexDirection: 'row'}}>
              <TextBox editable={false}/>
              <TextBox text="Monday" editable={false}/>
              <TextBox text="Tuesday" editable={false}/>
              <TextBox text="Wednesday" editable={false}/>
              <TextBox text="Thursday" editable={false}/>
              <TextBox text="Friday" editable={false}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Before School" editable={false}/>
              <TextBox text={weekOneMondayBeforeSchool}/>
              <TextBox text={weekOneTuesdayBeforeSchool}/>
              <TextBox text={weekOneWednesdayBeforeSchool}/>
              <TextBox text={weekOneThursdayBeforeSchool}/>
              <TextBox text={weekOneFridayBeforeSchool}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 1" editable={false}/>
              <TextBox text={weekOneMondayPeriodOne}/>
              <TextBox text={weekOneTuesdayPeriodOne}/>
              <TextBox text={weekOneWednesdayPeriodOne}/>
              <TextBox text={weekOneThursdayPeriodOne}/>
              <TextBox text={weekOneFridayPeriodOne}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 2" editable={false}/>
              <TextBox text={weekOneMondayPeriodTwo}/>
              <TextBox text={weekOneTuesdayPeriodTwo}/>
              <TextBox text={weekOneWednesdayPeriodTwo}/>
              <TextBox text={weekOneThursdayPeriodTwo}/>
              <TextBox text={weekOneFridayPeriodTwo}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 3" editable={false}/>
              <TextBox text={weekOneMondayPeriodThree}/>
              <TextBox text={weekOneTuesdayPeriodThree}/>
              <TextBox text={weekOneWednesdayPeriodThree}/>
              <TextBox text={weekOneThursdayPeriodThree}/>
              <TextBox text={weekOneFridayPeriodThree}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 4" editable={false}/>
              <TextBox text={weekOneMondayPeriodFour}/>
              <TextBox text={weekOneTuesdayPeriodFour}/>
              <TextBox text={weekOneWednesdayPeriodFour}/>
              <TextBox text={weekOneThursdayPeriodFour}/>
              <TextBox text={weekOneFridayPeriodFour}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 5" editable={false}/>
              <TextBox text={weekOneMondayPeriodFive}/>
              <TextBox text={weekOneTuesdayPeriodFive}/>
              <TextBox text={weekOneWednesdayPeriodFive}/>
              <TextBox text={weekOneThursdayPeriodFive}/>
              <TextBox text={weekOneFridayPeriodFive}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 6" editable={false}/>
              <TextBox text={weekOneMondayPeriodSix}/>
              <TextBox text={weekOneTuesdayPeriodSix}/>
              <TextBox text={weekOneWednesdayPeriodSix}/>
              <TextBox text={weekOneThursdayPeriodSix}/>
              <TextBox text={weekOneFridayPeriodSix}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="After School" editable={false}/>
              <TextBox text={weekOneMondayAfterSchool}/>
              <TextBox text={weekOneTuesdayAfterSchool}/>
              <TextBox text={weekOneWednesdayAfterSchool}/>
              <TextBox text={weekOneThursdayAfterSchool}/>
              <TextBox text={weekOneFridayAfterSchool}/>
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Week Rotation Two</Text>
            <View style={{flexDirection: 'row'}}>
              <TextBox editable={false}/>
              <TextBox text="Monday" editable={false}/>
              <TextBox text="Tuesday" editable={false}/>
              <TextBox text="Wednesday" editable={false}/>
              <TextBox text="Thursday" editable={false}/>
              <TextBox text="Friday" editable={false}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Before School" editable={false}/>
              <TextBox text={weekTwoMondayBeforeSchool}/>
              <TextBox text={weekTwoTuesdayBeforeSchool}/>
              <TextBox text={weekTwoWednesdayBeforeSchool}/>
              <TextBox text={weekTwoThursdayBeforeSchool}/>
              <TextBox text={weekTwoFridayBeforeSchool}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 1" editable={false}/>
              <TextBox text={weekTwoMondayPeriodOne}/>
              <TextBox text={weekTwoTuesdayPeriodOne}/>
              <TextBox text={weekTwoWednesdayPeriodOne}/>
              <TextBox text={weekTwoThursdayPeriodOne}/>
              <TextBox text={weekTwoFridayPeriodOne}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 2" editable={false}/>
              <TextBox text={weekTwoMondayPeriodTwo}/>
              <TextBox text={weekTwoTuesdayPeriodTwo}/>
              <TextBox text={weekTwoWednesdayPeriodTwo}/>
              <TextBox text={weekTwoThursdayPeriodTwo}/>
              <TextBox text={weekTwoFridayPeriodTwo}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 3" editable={false}/>
              <TextBox text={weekTwoMondayPeriodThree}/>
              <TextBox text={weekTwoTuesdayPeriodThree}/>
              <TextBox text={weekTwoWednesdayPeriodThree}/>
              <TextBox text={weekTwoThursdayPeriodThree}/>
              <TextBox text={weekTwoFridayPeriodThree}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 4" editable={false}/>
              <TextBox text={weekTwoMondayPeriodFour}/>
              <TextBox text={weekTwoTuesdayPeriodFour}/>
              <TextBox text={weekTwoWednesdayPeriodFour}/>
              <TextBox text={weekTwoThursdayPeriodFour}/>
              <TextBox text={weekTwoFridayPeriodFour}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 5" editable={false}/>
              <TextBox text={weekTwoMondayPeriodFive}/>
              <TextBox text={weekTwoTuesdayPeriodFive}/>
              <TextBox text={weekTwoWednesdayPeriodFive}/>
              <TextBox text={weekTwoThursdayPeriodFive}/>
              <TextBox text={weekTwoFridayPeriodFive}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 6" editable={false}/>
              <TextBox text={weekTwoMondayPeriodSix}/>
              <TextBox text={weekTwoTuesdayPeriodSix}/>
              <TextBox text={weekTwoWednesdayPeriodSix}/>
              <TextBox text={weekTwoThursdayPeriodSix}/>
              <TextBox text={weekTwoFridayPeriodSix}/>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <TextBox text="After School" editable={false}/>
              <TextBox text={weekTwoMondayAfterSchool}/>
              <TextBox text={weekTwoTuesdayAfterSchool}/>
              <TextBox text={weekTwoWednesdayAfterSchool}/>
              <TextBox text={weekTwoThursdayAfterSchool}/>
              <TextBox text={weekTwoFridayAfterSchool}/>
            </View>
          </View>
        </>
      : viewMode == 'weekOne' ?
          <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {changeView('weekTwo')}} style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Week Rotation One</Text>
                <Switch activeTrackColor="#ccc" thumbColor="#1DA1F2" activeThumbColor="#1DA1F2" value={false} style={{marginHorizontal: 10}}/>
                <Text style={{fontWeight: 'bold'}}>Week Rotation Two</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <TextBox editable={false}/>
                <TextBox text="Monday" editable={false}/>
                <TextBox text="Tuesday" editable={false}/>
                <TextBox text="Wednesday" editable={false}/>
                <TextBox text="Thursday" editable={false}/>
                <TextBox text="Friday" editable={false}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Before School" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayBeforeSchool} setTextValue={setWeekOneMondayBeforeSchool}/>
                <TextBox editable={true} textValue={weekOneTuesdayBeforeSchool} setTextValue={setWeekOneTuesdayBeforeSchool}/>
                <TextBox editable={true} textValue={weekOneWednesdayBeforeSchool} setTextValue={setWeekOneWednesdayBeforeSchool}/>
                <TextBox editable={true} textValue={weekOneThursdayBeforeSchool} setTextValue={setWeekOneThursdayBeforeSchool}/>
                <TextBox editable={true} textValue={weekOneFridayBeforeSchool} setTextValue={setWeekOneFridayBeforeSchool}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 1" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodOne} setTextValue={setWeekOneMondayPeriodOne}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodOne} setTextValue={setWeekOneTuesdayPeriodOne}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodOne} setTextValue={setWeekOneWednesdayPeriodOne}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodOne} setTextValue={setWeekOneThursdayPeriodOne}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodOne} setTextValue={setWeekOneFridayPeriodOne}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 2" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodTwo} setTextValue={setWeekOneMondayPeriodTwo}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodTwo} setTextValue={setWeekOneTuesdayPeriodTwo}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodTwo} setTextValue={setWeekOneWednesdayPeriodTwo}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodTwo} setTextValue={setWeekOneThursdayPeriodTwo}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodTwo} setTextValue={setWeekOneFridayPeriodTwo}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 3" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodThree} setTextValue={setWeekOneMondayPeriodThree}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodThree} setTextValue={setWeekOneTuesdayPeriodThree}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodThree} setTextValue={setWeekOneWednesdayPeriodThree}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodThree} setTextValue={setWeekOneThursdayPeriodThree}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodThree} setTextValue={setWeekOneFridayPeriodThree}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 4" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodFour} setTextValue={setWeekOneMondayPeriodFour}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodFour} setTextValue={setWeekOneTuesdayPeriodFour}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodFour} setTextValue={setWeekOneWednesdayPeriodFour}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodFour} setTextValue={setWeekOneThursdayPeriodFour}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodFour} setTextValue={setWeekOneFridayPeriodFour}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 5" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodFive} setTextValue={setWeekOneMondayPeriodFive}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodFive} setTextValue={setWeekOneTuesdayPeriodFive}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodFive} setTextValue={setWeekOneWednesdayPeriodFive}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodFive} setTextValue={setWeekOneThursdayPeriodFive}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodFive} setTextValue={setWeekOneFridayPeriodFive}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="Period 6" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayPeriodSix} setTextValue={setWeekOneMondayPeriodSix}/>
                <TextBox editable={true} textValue={weekOneTuesdayPeriodSix} setTextValue={setWeekOneTuesdayPeriodSix}/>
                <TextBox editable={true} textValue={weekOneWednesdayPeriodSix} setTextValue={setWeekOneWednesdayPeriodSix}/>
                <TextBox editable={true} textValue={weekOneThursdayPeriodSix} setTextValue={setWeekOneThursdayPeriodSix}/>
                <TextBox editable={true} textValue={weekOneFridayPeriodSix} setTextValue={setWeekOneFridayPeriodSix}/>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextBox text="After School" editable={false}/>
                <TextBox editable={true} textValue={weekOneMondayAfterSchool} setTextValue={setWeekOneMondayAfterSchool}/>
                <TextBox editable={true} textValue={weekOneTuesdayAfterSchool} setTextValue={setWeekOneTuesdayAfterSchool}/>
                <TextBox editable={true} textValue={weekOneWednesdayAfterSchool} setTextValue={setWeekOneWednesdayAfterSchool}/>
                <TextBox editable={true} textValue={weekOneThursdayAfterSchool} setTextValue={setWeekOneThursdayAfterSchool}/>
                <TextBox editable={true} textValue={weekOneFridayAfterSchool} setTextValue={setWeekOneFridayAfterSchool}/>
              </View>
              <TouchableOpacity onPress={async () => {await saveClasses()}} style={{padding: 10, borderWidth: 3, borderRadius: 10, borderColor: 'black', flexDirection: 'row', marginTop: 10}}>
                <Entypo name='save' size={20} color='black'/>
                <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Save</Text>
              </TouchableOpacity>
            </View>
          </>
      : viewMode == 'weekTwo' ?
        <>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {changeView('weekOne')}} style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>Week Rotation One</Text>
              <Switch activeTrackColor="#ccc" thumbColor="#1DA1F2" activeThumbColor="#1DA1F2" value={true} style={{marginHorizontal: 10}}/>
              <Text style={{fontWeight: 'bold'}}>Week Rotation Two</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <TextBox editable={false}/>
              <TextBox text="Monday" editable={false}/>
              <TextBox text="Tuesday" editable={false}/>
              <TextBox text="Wednesday" editable={false}/>
              <TextBox text="Thursday" editable={false}/>
              <TextBox text="Friday" editable={false}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Before School" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayBeforeSchool} setTextValue={setWeekTwoMondayBeforeSchool}/>
              <TextBox editable={true} textValue={weekTwoTuesdayBeforeSchool} setTextValue={setWeekTwoTuesdayBeforeSchool}/>
              <TextBox editable={true} textValue={weekTwoWednesdayBeforeSchool} setTextValue={setWeekTwoWednesdayBeforeSchool}/>
              <TextBox editable={true} textValue={weekTwoThursdayBeforeSchool} setTextValue={setWeekTwoThursdayBeforeSchool}/>
              <TextBox editable={true} textValue={weekTwoFridayBeforeSchool} setTextValue={setWeekTwoFridayBeforeSchool}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 1" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodOne} setTextValue={setWeekTwoMondayPeriodOne}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodOne} setTextValue={setWeekTwoTuesdayPeriodOne}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodOne} setTextValue={setWeekTwoWednesdayPeriodOne}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodOne} setTextValue={setWeekTwoThursdayPeriodOne}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodOne} setTextValue={setWeekTwoFridayPeriodOne}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 2" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodTwo} setTextValue={setWeekTwoMondayPeriodTwo}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodTwo} setTextValue={setWeekTwoTuesdayPeriodTwo}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodTwo} setTextValue={setWeekTwoWednesdayPeriodTwo}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodTwo} setTextValue={setWeekTwoThursdayPeriodTwo}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodTwo} setTextValue={setWeekTwoFridayPeriodTwo}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 3" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodThree} setTextValue={setWeekTwoMondayPeriodThree}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodThree} setTextValue={setWeekTwoTuesdayPeriodThree}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodThree} setTextValue={setWeekTwoWednesdayPeriodThree}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodThree} setTextValue={setWeekTwoThursdayPeriodThree}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodThree} setTextValue={setWeekTwoFridayPeriodThree}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 4" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodFour} setTextValue={setWeekTwoMondayPeriodFour}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodFour} setTextValue={setWeekTwoTuesdayPeriodFour}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodFour} setTextValue={setWeekTwoWednesdayPeriodFour}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodFour} setTextValue={setWeekTwoThursdayPeriodFour}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodFour} setTextValue={setWeekTwoFridayPeriodFour}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 5" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodFive} setTextValue={setWeekTwoMondayPeriodFive}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodFive} setTextValue={setWeekTwoTuesdayPeriodFive}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodFive} setTextValue={setWeekTwoWednesdayPeriodFive}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodFive} setTextValue={setWeekTwoThursdayPeriodFive}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodFive} setTextValue={setWeekTwoFridayPeriodFive}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="Period 6" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayPeriodSix} setTextValue={setWeekTwoMondayPeriodSix}/>
              <TextBox editable={true} textValue={weekTwoTuesdayPeriodSix} setTextValue={setWeekTwoTuesdayPeriodSix}/>
              <TextBox editable={true} textValue={weekTwoWednesdayPeriodSix} setTextValue={setWeekTwoWednesdayPeriodSix}/>
              <TextBox editable={true} textValue={weekTwoThursdayPeriodSix} setTextValue={setWeekTwoThursdayPeriodSix}/>
              <TextBox editable={true} textValue={weekTwoFridayPeriodSix} setTextValue={setWeekTwoFridayPeriodSix}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextBox text="After School" editable={false}/>
              <TextBox editable={true} textValue={weekTwoMondayAfterSchool} setTextValue={setWeekTwoMondayAfterSchool}/>
              <TextBox editable={true} textValue={weekTwoTuesdayAfterSchool} setTextValue={setWeekTwoTuesdayAfterSchool}/>
              <TextBox editable={true} textValue={weekTwoWednesdayAfterSchool} setTextValue={setWeekTwoWednesdayAfterSchool}/>
              <TextBox editable={true} textValue={weekTwoThursdayAfterSchool} setTextValue={setWeekTwoThursdayAfterSchool}/>
              <TextBox editable={true} textValue={weekTwoFridayAfterSchool} setTextValue={setWeekTwoFridayAfterSchool}/>
            </View>
            <TouchableOpacity onPress={async () => {await saveClasses()}} style={{padding: 10, borderWidth: 3, borderRadius: 10, borderColor: 'black', flexDirection: 'row', marginTop: 10}}>
              <Entypo name='save' size={20} color='black'/>
              <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </>
      : viewMode == 'loading' ?
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="black" />
          <Text style={{fontSize: 20, paddingTop: 10, fontWeight: 'bold'}}>Loading...</Text>
        </View>
      : viewMode == 'welcome' ?
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, paddingTop: 10, fontWeight: 'bold'}}>Welcome to the Lynfield College Timetable V2!</Text>
          <Text style={{fontSize: 20, paddingTop: 10, fontWeight: 'bold'}}>The timetable for Lynfield College that is up 24/7</Text>
          <Text style={{fontSize: 20, paddingTop: 10, fontWeight: 'bold'}}>Press the edit button to add your classes to the timetable</Text>
          <TouchableOpacity onPress={() => {setViewMode('weekOne')}} style={{padding: 8, borderWidth: 3, borderRadius: 10, borderColor: 'black', flexDirection: 'row', marginTop: 10}}>
            <FontAwesome name='edit' size={28} color='black'/>
            <Text style={{fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Edit</Text>
          </TouchableOpacity>
        </View>
      :
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>An error occured. Please refresh the page.</Text>
        </View>
      }
    </>
  );
}

const TextBox = ({text, editable, textValue, setTextValue}) => {
  return(
    <View style={{width: 200, height: 60, borderWidth: 2, borderColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
      {!editable ?
        <Text style={{color: 'black', fontSize: 14, fontWeight: 'bold'}}>{text}</Text>
      :
        <TextInput
          onChangeText={setTextValue}
          value={textValue}
          placeholder="Put class here"
        />
      }
    </View>
  );
}
