import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";





const LoginScreen = ({ navigation , route }: any): JSX.Element => {
  const [raisonSocial, setRaisonSocial] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { height } = Dimensions.get("window");


  const Login = async (): Promise<void> => {
    try {
      const response = await fetch(
        "http://192.168.9.33:2000/api/compagnies/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            raisonSocial,
            password,
          }),
        }
      );
      const data = await response.json();
      if (data.error) {
        Alert.alert("Error", data.error, [
          { text: "name compagny or password not correct!!" },
        ]);
      } else {
        navigation.navigate("Map");
        Alert.alert("Success", "You are logged in");
      }

      // await AsyncStorage.setItem("token", JSON.stringify(data.token));
      // console.log(data.token);
    } catch (error) {
      console.error(error);
    }
    console.log("Login success");
  };
  
  
  return (
    <KeyboardAwareScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#EEF1FF",
          height,
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
            borderRadius: 10,
          }}
        />
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>Login here</Text>
            <Text style={styles.text}>Welcome Back you're been missed !</Text>
          </View>
          <View
            style={{
              marginTop: 60,
            }}
          >
            <TextInput
              placeholder="Comapny Name"
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
              placeholder="Password"
              secureTextEntry={true}
              style={{
                backgroundColor: "#F5F5F5",
                fontWeight: "normal",
                fontSize: 12,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Text
              onPress={() => navigation.navigate("Register",{
                  latitude: null,
					        longitude: null,
                })}
      
              style={{
                fontWeight: "normal",
                color: "black",
                fontSize: 12,
                alignSelf: "flex-end",
              }}
            >
              Don't have an account?
            </Text>
            <Text onPress={() => navigation.navigate("Map")}>
              <FontAwesome5 name="map-marked-alt" size={30} color="#7489f2" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#7489f2",
              marginVertical: 15,
              marginHorizontal: 40,
              width: "60%",
              height: 40,
              marginTop: 60,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            onPress={Login}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                color: "white",
                fontSize: 16,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontWeight: "normal",
    color: "black",
    fontSize: 20,
  },
});
