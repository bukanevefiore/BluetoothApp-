import React from 'react';
import { View, Text, TouchableOpacity,
StyleSheet, Image } from 'react-native';
import Separator from './separator';

function Device(props){
    return (
        <>
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={props.iconLeft}/>
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Image style={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
        <Separator color='#eceff1'/>
        </>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    wrapperLeft:{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperName:{
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15
    },
    name:{
        marginLeft: 40,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
    },
    iconRight:{
        width: 20,
        height: 20
    },
    iconLeft:{
        width: 20,
        height: 20
    }
})


export default Device;