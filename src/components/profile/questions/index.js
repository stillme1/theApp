import React from 'react';
import { View, Text} from 'react-native';


const Box=(props) => {
    return(
        <View style={{width: '100%', marginVertical: 20, paddingLeft: '5%'}}>
            <Text style={{color: '#555', paddingBottom: 5}}>
                {props.q}
            </Text>
            <Text style={{color: '#555', fontSize: 20, fontWeight: 'bold', letterSpacing: 1, lineHeight: 25}}>
                {props.a}
            </Text>
        </View>
    );
};

function display(props){
    return props[2].info.map((item) => {
        return(
            <View key={item.id}>
                <Box q={item.q} a={item.a}/>
            </View>
        );
    });
}

const Questions=(props) => {
    return(
        <View>
            {display(props.info)}
        </View>
    );
};

export default Questions;