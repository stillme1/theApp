import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HeartButton =(props) => {
    const right = props.right;
    if(right){
        return(
            <FontAwesome name="heart" size={22} color="#666" />
        );
    }
    else{
        return(
            <View/>
        );
    }
};

const BackButton =(props) => {
    const left = props.left;
    if(left){
        return(
            <FontAwesome style = {{marginRight: 20}} name="undo" size={22} color="#666" />
        );
    }
    else{
        return(
            <View/>
        );
    }
};

const LandingPage =(props) => {
    const w = 30;
    return(
        <View>
            <View style = {styles.row1}>
                <View style={{flexDirection: 'row'}}>
                    <BackButton left={1}/>
                    <HeartButton right={1}/>
                </View>
                <Text style={styles.title}>
                        theApp
                </Text>
                <FontAwesome name="sliders" size={24} color="#666" />
            </View>
            <View style={styles.row2}>
                <View style={{ flex: 1, backgroundColor: '#FFC312', width: w.toString()+'%', borderRadius: 5 }}/>
            </View>
        </View>
    );
};

export default LandingPage;