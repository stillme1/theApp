import React from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import ProfilePicture from './profilePicture';
import BasicInfo from'./basicInfo';
import profileData from '../../../asset/data/profileData';

const Profile=(props) => {
    const img="https://i.pinimg.com/originals/35/1c/88/351c8875a7dcb1f93fc9549ce7e135d4.jpg";
    return(
        <View style={{flex: 1, borderRadius: 20, overflow: 'hidden',marginVertical: 10, width: '95%', alignSelf: 'center' }}>
            <ScrollView
            style={styles.scrollView} 
            contentContainerStyle={styles.contentContainer}
            >   
                <ProfilePicture img={img}/>
                <View style={styles.about}>
                    <Text style={styles.aTitle}>About me</Text>
                    <Text style={styles.aText}>This is a test round to see how the text looks in this linne, I guess it looks good, but I need to get line height right.</Text>
                </View>
                <BasicInfo profileData={profileData}/>
            </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    scrollView: {
    //   flex: 1,
      height: '100%',
      width: '100%',
      alignSelf: 'center',
    },
    contentContainer: {
        // flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffeebc',
      overflow: 'hidden',
    //   paddingBottom: '60%',
    },
    about: {
        width: '100%',
        paddingHorizontal: '4%',
        paddingVertical: 10,
    },
    aTitle: {
        fontSize: 16,
        color: '#555',
    },
    aText: {
        fontSize: 18,
    }
  });

export default Profile;