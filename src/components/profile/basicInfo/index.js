import React from 'react';
import { View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Box=(props) => {
    const info=props.info;
    return(
        <View style={{alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 20, backgroundColor: '#ffd867'}}>
            <Text style={{color: '#555'}}>
                <FontAwesome5 name={props.icon} size={18} color= {'#000'}/> {props.info}
            </Text>
        </View>
    );
};

function display(props){
    return props.map((item) => {
        return(
            <Text key={item.id}>
                <Box info={item.info} icon={item.icon}/>
                {' '}
            </Text>
        );
    });
}

const BasicInfo=(props) => {
    return(
        <View style={{paddingHorizontal: '3%',paddingVertical: 20, }}>
            <Text style={{color: '#555', marginBottom: 10, fontSize: 16}}>Basic info</Text>
            <Text>
                {/* <Box info='Engineer'/>{' '}
                <Box info='20 yrs'/>{' '}
                <Box info='148kg'/>{' '}                
                <Box info='163 cm'/>{' '}
                <Box info='Liberal'/>{' '}
                <Box info='Hindu'/>{' '}
                <Box info='Cancer'/>{' '}
                <Box info='Potter head'/>{' '}
                <Box info='Check'/>{' '} */}
                {display(props.profileData)}
            </Text>
            
        </View>
    );
};

export default BasicInfo;