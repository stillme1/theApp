import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';

import ProfilePicture from './src/components/profile/profilePicture';
import BasicInfo from './src/components/profile/basicInfo';
import LandingPage from './src/screens/Landing';
import Profile from './src/components/profile';
import profileData from './asset/data/profileData';

const App: () => Node = () => {
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#efefef'}}>
      {/* <ProfilePicture/> */}
        {/* <BasicInfo/> */}
        <LandingPage/>
        <Profile data={profileData}/>
    </SafeAreaView>
  );
};

export default App;
