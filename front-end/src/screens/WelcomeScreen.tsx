import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  StyleSheet,
} from "react-native";

const { height } = Dimensions.get("window");

interface Props {
  navigation: any;
}


// const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
export default function App({ navigation }: Props): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://img.freepik.com/free-vector/shopping-payment-online-process-computer-smartphone-tablet_1150-65561.jpg?size=626&ext=jpg&ga=GA1.2.1065634067.1658138070&semt=popular",
        }}
        style={{ height: height / 2.5 }}
        resizeMode={"contain"}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        {/* make this text animated */}
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Welcome to the app!
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 40 }}>
          Finding a logistics company near you is easy. With a tap.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#7489f2",
            borderRadius: 10,
            padding: 10,
            width: "80%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Let's started !
          </Text>
         
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#7489f2",
            borderRadius: 10,
            padding: 10,
            width: "80%",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              textAlign: "center",
            }}
            onPress={() => navigation.navigate("Compagnies")}
          >
            Compagnies
          </Text>
         
        </View>
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
