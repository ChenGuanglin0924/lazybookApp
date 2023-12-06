/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, ImageRequireSource} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {
//   NativeStackScreenProps,
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bill from './src/pages/bill';
import Stat from './src/pages/stat';
import My from './src/pages/my';
import InnerText from './src/components/InnerText';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const iconMap: Record<string, ImageRequireSource> = {
  stat: require('./src/assets/imgs/tabs/stat.png'),
  stat_on: require('./src/assets/imgs/tabs/stat_on.png'),
  bill: require('./src/assets/imgs/tabs/bill.png'),
  bill_on: require('./src/assets/imgs/tabs/bill_on.png'),
  my: require('./src/assets/imgs/tabs/my.png'),
  my_on: require('./src/assets/imgs/tabs/my_on.png'),
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="bill"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            const iconName = focused ? `${route.name}_on` : route.name;
            return (
              <Image
                source={iconMap[iconName]}
                style={{width: 28, height: 28}}
              />
            );
          },
          tabBarLabel: ({focused, color, children}) => {
            return (
              <InnerText style={{color: focused ? '#ffa200' : color}}>
                {children}
              </InnerText>
            );
          },
        })}>
        <Tab.Screen name="stat" component={Stat} options={{title: '统计'}} />
        <Tab.Screen name="bill" component={Bill} options={{title: '账单'}} />
        <Tab.Screen name="my" component={My} options={{title: '我的'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
