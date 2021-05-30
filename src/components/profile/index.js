import React from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfilePicture from './profilePicture';
import BasicInfo from'./basicInfo';
import Interests from './interests';
import Questions from './questions';
import Pictures from './pictures';

const Location=(props) => {
    return(
        <View style={{width: '100%', marginTop: 3}}>
            <Text style={{color: '#494949', fontWeight: 'bold', letterSpacing: 0.4,width: '90%', alignSelf: 'center'}}>
                <FontAwesome name={'map-marker'} size={20} color={'green'}/>  {props.name}'s location
            </Text>
            <Text style={{fontSize: 20, color: '#444', fontWeight: 'bold', letterSpacing: 0.4,width: '80%', alignSelf: 'center', marginBottom: 20,}}>
                {props.location}
            </Text>
        </View>
    );
};

const Live=(props) => {
    return(
        <View style={{width: '100%'}}>
            <Text style={{width: '90%', alignSelf: 'center'}}>
                <View style={{color: '#494949', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20, backgroundColor: '#ffe189'}}>
                    <Text>
                        Lives in {props.live}
                    </Text>
                </View>
            </Text>           
        </View>
    );
};

const From=(props) => {
    return(
        <View style={{width: '100%', marginVertical: 3}}>
            <Text style={{width: '90%', alignSelf: 'center'}}>
                <View style={{color: '#494949', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20, backgroundColor: '#ffe189'}}>
                    <Text>
                        From {props.from}
                    </Text>
                </View>
            </Text>           
        </View>
    );
};

const Profile=(props) => {
    const profileData=props.data;
    const img= profileData[5].img;
    const name= profileData[5].name;
    const from= profileData[5].from;
    const live= profileData[5].live;
    const age= profileData[5].age;
    const location= profileData[5].location;
    return(
        <View style={{flex: 1, borderRadius: 20, overflow: 'hidden',marginBottom: 10, width: '97%', alignSelf: 'center' }}>
            <ScrollView
            style={styles.scrollView} 
            contentContainerStyle={styles.contentContainer}
            >   
                <ProfilePicture img={img} name={name} age={age}/>
                <View style={styles.about}>
                    <Text style={styles.aTitle}>About me</Text>
                    <Text style={styles.aText}>{profileData[3].info}</Text>
                </View>
                <BasicInfo profileData={profileData}/>
                <Interests info = {profileData}/>
                <Pictures info={profileData}/>
                <Questions info = {profileData}/>
                <Location name ={name} location={location}/>
                <Live live={live}/>
                <From from={from}/>
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
        marginVertical: 5,
    },
    aText: {
        fontSize: 18,
    }
  });

export default Profile;