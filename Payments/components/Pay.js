import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const Pay = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [ccv, setCcv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const route = useRoute();

  const handleProceed = () => {
    navigation.navigate("Proceed");
  };
  const price = route.params?.price || 0;
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
         <Text style={{ fontSize: 30, fontWeight: "bold", marginTop:80 }}>Received Price: R{price}</Text>
        <Text style={{ marginTop: 40, fontSize: 20 }}>
          Payment Method: Credit Card
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "bold" }}>
          Credit Card
        </Text>
        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          placeholder="Card Number"
          autoCapitalize="none"
        />
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "bold" }}>
              Valid until
            </Text>
            <TextInput
              style={styles.input}
              value={expiryDate}
              onChangeText={(text) => setExpiryDate(text)}
              placeholder="MM/YY"
              autoCapitalize="none"
            />
          </View>
          <View style={{ marginLeft: 150 }}>
            <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "bold" }}>
              CCV
            </Text>
            <TextInput
              style={styles.input}
              value={ccv}
              onChangeText={(text) => setCcv(text)}
              placeholder="CCV"
              autoCapitalize="none"
            />
          </View>
        </View>
        <Text style={{ marginTop: 40, fontSize: 20, fontWeight: "bold" }}>
          Card Holder
        </Text>
        <TextInput
          style={styles.input}
          value={cardHolder}
          onChangeText={(text) => setCardHolder(text)}
          placeholder="Card Holder Name"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.lower}>
        <TouchableOpacity onPress={handleProceed}>
          <View style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>PAY NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 2,
  },
  form: {
    flex: 5,
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    backgroundColor: "#dcdcdc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  lower: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  proceedButton: {
    width: 350,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  proceedButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
