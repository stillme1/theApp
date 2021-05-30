import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';

const Box=(props) => {
    const img=props.img;
    const win = Dimensions.get('window');
    return(
        <View style={{alignItems: 'center', paddingVertical: 5}}>
            <Image 
            source={{uri : img}}
            style={{width: .97*win.width, aspectRatio: 2/3, alignSelf: 'center'}}
            />
        </View>
    );
};

function display(props){
    return props[4].info.map((item) => {
        return(
            <View key={item.id}>
                <Box img={item.img}/>
            </View>
        );
    });
}

const Pictures=(props) => {
    return(
        <View>
            {display(props.info)}
        </View>
    );
};

export default Pictures;