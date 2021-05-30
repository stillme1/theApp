import React from 'react';
import { View, Text} from 'react-native';

const Box=(props) => {
    const info=props.info;
    return(
        <View style={{alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, backgroundColor: '#ffd867'}}>
            <Text style={{color: '#555'}}>
                {props.info}
            </Text>
        </View>
    );
};

function display(props){
    return props[1].info.map((item) => {
        return(
            <Text key={item.info}>
                <Box info={item.info}/>
                {' '}
            </Text>
        );
    });
}

const Interests =(props) => {
    return(
        <View style={{width: '100%', paddingHorizontal: '3%',paddingVertical: 20, }}>
            <Text style={{color: '#555', marginBottom: 10, fontSize: 16}}>My interests</Text>
            <Text>
                {display(props.info)}
            </Text>
            
        </View>
    );
};

export default Interests;