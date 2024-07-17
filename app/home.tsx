import {Text,ScrollView,View,FlatList,SafeAreaView,TextInput,StyleSheet,Alert,Button, TouchableOpacity, StatusBar, Platform} from "react-native";
import Header from "@/components/header";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '0 Item',
        image: 'data:image/jpeg;base64,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'






  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '1 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Th2ird Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '3 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '4 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '5 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '6 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '7 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '8 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '9 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '10 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '11 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '12 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '13 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '14 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '15 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '16 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '17 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '18 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '19 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '20 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '21 Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '22 Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={style.item}>
    <Text style={style.title}>{title}</Text>
  </View>
);


const home = () => (      
    <View>
        <View style ={style.header}>
            <Text style={style.text}>TopSale.lk</Text>
        </View>
       <SafeAreaView>
        <ScrollView style={style.scrollview}>
        <Header/>
           <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
              numColumns={2}
              
      />
        </ScrollView>
       </SafeAreaView>
    </View>
  
    
);

const style =StyleSheet.create({
scrollview:{
}
  ,
  header:{
    backgroundColor:"#3b58d9",
    height:80,
    alignItems:'center'
    

  },
  text:{
    color:"black",
    fontSize:30,
    marginTop:40,
    fontFamily:'sherife'
  
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#38acd6',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  
  },
  title: {
    fontSize: 32,
  },
})
export default home;