import {Text, View ,Image,SafeAreaView,TextInput,StyleSheet,Alert,Button} from "react-native";
import { CameraView } from 'expo-camera';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';

export default function loginPage() {
  return (
    <View style = {styles.background}>
     
         <Image style ={styles.imagesize} source={require('@/assets/gift/icons8-pullups (1).gif')}/>
      <Text style={styles.text}>WELCOME YOUR HELTHY HOME</Text>
      <SafeAreaView>
      <TextInput
        style={styles.input}
          placeholder="User Name"
        keyboardType="numeric"
      
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
    </SafeAreaView>

         <View style={styles.fixToText}>
        <Button
          color={"red"}
          title="LOGIN"
          onPress={() => Alert.alert('Left button pressed')}
        />
    
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  background:{
    backgroundColor:" red "
  }
  ,
  input: {
    height: 40,
    borderRadius:50,
    position:'relative',
    color:"red",
    left:125,
    top:200,
    width:250,
    margin:12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    width:150,
  } ,
    fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
      left:260,
      top:250,


  },
  text:{
    position:'absolute',
    left:125,
    fontSize:20,
    fontFamily:'Fantasy'
  },
  imagesize:{
    position:'absolute',
    width:100,
    height:100,
    top:100,
    left:180,
    fontSize:20,
    fontFamily:'Fantasy'
  }
});

