import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import ProfilePicture from './src/components/profile/profilePicture';
import BasicInfo from './src/components/profile/basicInfo';
import LandingPage from './src/screens/Landing';
import Profile from './src/components/profile';

const App: () => Node = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ProfilePicture/> */}
        {/* <BasicInfo/> */}
        <LandingPage/>
        <Profile/>
    </SafeAreaView>
  );
};

export default App;
