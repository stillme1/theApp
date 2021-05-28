import React from 'react';
import { View, Text, Image} from 'react-native';

const ProfilePicture=(props) => {
    const data=props;
    return(
        <View style={{marginTop: 10}}>
            <Image
                source={{uri : props.img}}
                style={{height: 500, aspectRatio: 2/3, alignSelf: 'center', borderRadius: 20}}
            />
            <Text style ={{fontSize: 20, color: '#fff', position: 'absolute', bottom: '5%', left: '5%'}}>
                Abhishek, 20
            </Text>
        </View>
    );
};

export default ProfilePicture;