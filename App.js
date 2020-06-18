import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Symptom from './screens/Symptom';



const colors = {
   themeColor: "#ffc66a",
   white:'#fff',
   background:'#f4f6fc'
}

const symptoms = [
  {
    symptom: 'Fatigue',
    icon: 'snowflake',
    description:'Fatigue is a feeling of tiredness and an overall lack of energy. A person with fatigue may feel drained, weak, or sluggish.'
    
  },
  {
    symptom: 'Dry Cough',
    icon: 'flash',
    description:'Doctors consider if a person notices they are coughing a lot for over an hour, or they have three or more coughing episodes in a day, they may have coronavirus.'
    
  },
  {
    symptom: 'Fever',
    icon: 'thermometer',
    description:'Doctors consider a temperature of 100.4°F or higher to be a fever.A person with a fever will feel hot to touch on their back or chest.'
    
  },
  {
    symptom: 'Shortness of breath',
    icon: 'air-filter',
    description:'Shortness of breath is a subjective feeling. However, those experiencing shortness of breath may describe it feeling as if they are suffocating, or unable to catch their breath.'
    
  }
]




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content"/>
        <View style={{padding:16, flexDirection:'row', justifyContent:'space-between'}}>
           <MaterialCommunityIcons name="text" size={30}/>
           <MaterialCommunityIcons name="magnify" size={30}/>
        </View>

        <View style={{padding:16, flexDirection:'row', justifyContent:'space-between'}}>
          <View>
           <Text style={{fontSize:20}}>COVID-19</Text>
           <Text style={{fontSize:21}}>Symptoms</Text>
          </View>
          <MaterialCommunityIcons name="thermometer" size={45} style={{color:colors.white,backgroundColor:colors.themeColor}}/>
        </View>

        <View 
             style={{borderTopWidth:6,
             borderTopColor:colors.themeColor,
             borderRadius: 3,
             marginHorizontal: 16,
             width:55}}/>

        <View style={{paddingHorizontal:8,paddingVertical:30}}>
            <FlatList 
               numColumns={2}
               data={symptoms} 
               keyExtractor ={item=>item.symptom}
               renderItem={({ item })=><Symptom symptom={item.symptom} 
                                                icon={item.icon}
                                                description={item.description}
                                                />}/>
        </View>   

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.background ,
    paddingHorizontal:8
    
  },
});
