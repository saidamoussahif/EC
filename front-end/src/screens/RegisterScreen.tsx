import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const { height } = Dimensions.get("window");

const RegisterScreen = ({ navigation, route }: any): JSX.Element => {
  const [raisonSocial, setRaisonSocial] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const { latitude, longitude } = route.params;
    setLatitude(latitude+"");
    setLongitude(longitude+"");
  }, [route.params]);

  const handleRegister = async (): Promise<void> => {
    try {
      const res = await fetch(
        "http://192.168.9.33:2000/api/compagnies/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            raisonSocial,
            password,
            adress,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            phone,
          }),
        }
      );
      // 
      const text = await res.text();
      // console.log(JSON.parse(text));
      const data = JSON.parse(text);

      if (data.status === "SUCCESS") {
        navigation.navigate("Map");
        Alert.alert("Success", "You are logged in", [{ text: "OK" }]);
      } else {
        Alert.alert("Error", data.error, [{ text: "OK" }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#EEF1FF",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/delivery-trucks-road-out-smartphone-carry-goods-customer-home-with-location-pointer-bubble-chat-message-ecommerce-concept-blue-background-3d-illustration_56104-1811.jpg?size=626&ext=jpg&ga=GA1.2.1065634067.1658138070&semt=popular",
          }}
          style={{
            width: "100%",
            height: 200,
            alignSelf: "center",
            resizeMode: "contain",
            borderRadius: 20,
          }}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 20,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Create your account here !</Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TextInput
              placeholder="Comapny name"
              style={{
                backgroundColor: "#F5F5F5",
                fontWeight: "normal",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
              value={raisonSocial}
              onChangeText={setRaisonSocial}
            />
            <TextInput
              placeholder="Comapny adress"
              style={{
                backgroundColor: "#F5F5F5",
                fontWeight: "normal",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
              }}
              onChangeText={setAdress}
              value={adress}
            />
            <TextInput
              placeholder="Phone"
              style={{
                backgroundColor: "#F5F5F5",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
              onChangeText={setPhone}
              value={phone}
            />
            <TextInput
              placeholder="Latitude"
              value={latitude}
              editable={false}
              style={{
                backgroundColor: "#F5F5F5",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                // marginVertical: 10,
              }}
            />
            <TextInput
              placeholder="Longitude"
              value={longitude}
              editable={false}
              style={{
                backgroundColor: "#F5F5F5",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                backgroundColor: "#F5F5F5",
                fontSize: 12,
                padding: 15,
                borderRadius: 10,
                // marginVertical: 10,
              }}
              onPress={() => navigation.navigate("GetLocation")}
            >
              Get your position
            </Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{
                backgroundColor: "#F5F5F5",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontWeight: "normal",
                color: "black",
                fontSize: 12,
                alignSelf: "flex-end",
              }}
            >
              Allready have an account !
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#7489f2",
              marginVertical: 15,
              marginHorizontal: 40,
              width: "60%",
              height: 40,
              marginTop: 20,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={handleRegister}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 16,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF1FF",
  },
  text: {
    fontWeight: "normal",
    color: "black",
    fontSize: 20,
  },
});
