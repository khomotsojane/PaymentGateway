import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  navigation,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Items = () => {
  const navigation = useNavigation();
  const [chips, setChips] = useState([
    {
      id: 1,
      name: "Small chips",
      price: 20,
      src: require("../assets/small.jpg")
    },
    {
      id: 2,
      name: "Medium chips",
      price: 30,
      src: require("../assets/small.jpg")
    },
    {
      id: 3,
      name: "Large chips",
      price: 40,
      src: require("../assets/small.jpg")
    },
    {
      id: 4,
      name: "Larger chips",
      price: 50,
      src: require("../assets/small.jpg")
    },
    {
        id: 5,
        name: "Large chips",
        price: 40,
        src: require("../assets/small.jpg")
      },
      {
        id: 6,
        name: "Larger chips",
        price: 50,
        src: require("../assets/small.jpg")
      },
  ]);
  const SubmitHandler = (item) => {
    setChips([
      {
        src: item.src,
        name: item.name,
        id: item.id,
        price: item.price,
      },
    ]);
    navigation.navigate("Pay", { price: item.price });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{marginTop:30, fontWeight:'bold', fontSize:40, color:'white'}}>Kay's Fries</Text>
      </View>
      <View style={styles.list}>
      <FlatList
        data={chips}
        numColumns={2}
        renderItem={({item})=>(
            <TouchableOpacity onPress={() => SubmitHandler(item)}>
            <View
            style={{
                  backgroundColor: "blue",
                  width: 150,
                  height: 170,
                  marginHorizontal: 20,
                  marginVertical: 10,
                  borderRadius: 10,
                  alignContent: 'center',
                  alignItems:'center',
                }}>
                <Image source={item.src}
                    style={{
                    borderRadius: 10,
                    width: 150,
                    height: 100,
                    borderWidth: 2,
                    borderColor: "blue",
                    resizeMode: "contain",
                  }}
                />
                 <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "bold", color:'white' }}>{item.name}</Text>
                  <Text style={{ marginLeft: 20, fontWeight: "bold", color:'white' }}>R
                    {item.price}
                  </Text>
                </View>
            </View>
            </TouchableOpacity>
        )}
      />
      </View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: "blue",
    marginTop: 40,
  },
  list: {
    flex: 5,
    backgroundColor: "white",
  },
  items: {
    //backgroundColor:'',
    marginHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    height: 30,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#E8A392",
    borderColor: "white",
    borderRadius: 10,
    width: 70,
    alignContent:'center',
    textAlign: "center",
  }
});
