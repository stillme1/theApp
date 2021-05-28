import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    row1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: 10,
        paddingTop: 20,
        // borderWidth: 2,

    },
    title: {
        color: '#FFC312',
        fontSize: 24,
        fontFamily: 'FredokaOne-Regular',
        letterSpacing: 2,
        width: '40%',
        position: 'absolute',
        left: '40%',        
    },
    row2: {
        width: '40%',
        backgroundColor: '#ddd',
        height: 4,
        alignSelf : 'center',
        borderRadius: 5,
    },


});

export default styles;