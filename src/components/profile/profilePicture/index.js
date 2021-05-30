import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';

const ProfilePicture=(props) => {
    const data=props;
    const win= Dimensions.get('window');
    return(
        <View>
            <Image
                source={{uri : props.img}}
                style={{width: .97*win.width, aspectRatio: 2/3, alignSelf: 'center', borderRadius: 20}}
            />
            <Text style ={{fontSize: 22, fontWeight: 'bold', color: '#fff', position: 'absolute', bottom: '5%', left: '5%'}}>
                {props.name}, {props.age.toString()}
            </Text>
        </View>
    );
};

export default ProfilePicture;