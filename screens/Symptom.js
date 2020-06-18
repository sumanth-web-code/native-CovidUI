import React from 'react';
import {View,Text, StyleSheet,Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const screenWidth = Dimensions.get("window").width

const Symptom =({symptom,icon,description}) =>{
    return(
        <View style={styles.content}>
            <Text style={{fontSize:20,fontWeight:'700',color:'grey'}}>{symptom}</Text>
            <Text style={{fontSize:16,marginVertical:7}}>{description}</Text>
            <MaterialCommunityIcons name={icon} size={45} style={{alignSelf:'flex-end',color:'#ffc66a'}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    content:{
        backgroundColor: 'white',
        margin:8,
        borderRadius:20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        width:(screenWidth-60)/2
    }
})

export default Symptom;