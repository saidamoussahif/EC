import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
// import Colors from "../Constants/Colors";
// import { Dimensions } from "react-native";
// const width = Dimensions.get("screen").width/ 1 - 50;
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native";

const CompagniesScreen = () => {
    const navigation = useNavigation();
  const [compagny, setCompagny] = useState();
  const getCompagnies = async () => {
    const response = await fetch(
      "http://192.168.9.33:2000/api/compagnies/getAll"
    );
    const data = await response.json();
    setCompagny(data);
  };
  useEffect(() => {
    getCompagnies();
  });
  return (
    <View style={styles.compagnyContainer}>
      <FlatList
        data={compagny}
        renderItem={({ item }) => (
          <View style={styles.Card}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  color: "black",
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                Compagny Name :
              </Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                {item.raisonSocial}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                Adress :
              </Text>
              <Text
                style={{
                  color: "black",
                  paddingHorizontal: 10,
                  marginRight: 10,
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                {item.adress}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                Phone :
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 10,
                }}
              >
                {item.phone}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
                <Text
                style={{
                  color: "black",
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                Longitude :
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 10,
                }}
              >
                {item.longitude}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
                <Text
                style={{
                  color: "black",
                  paddingHorizontal: 10,
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                Latitude :
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 15,
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 10,
                }}
              >
                {item.latitude}
              </Text>
            </View>
          </View>
        )}
        numColumns={1}
      />
    </View>
  );
};

export default CompagniesScreen;

const styles = StyleSheet.create({
  compagnyContainer: {
    backgroundColor: "#fff",
  },
  Card: {
    width: 300,
    height: 200,
    backgroundColor: "#EEF1FF",
    marginHorizontal: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 25,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  compagnyInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
