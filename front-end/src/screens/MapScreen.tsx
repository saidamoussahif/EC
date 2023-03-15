// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import MapView, { Marker } from "react-native-maps";

// const MapScreen = () => {
// 	const [region, setRegion] = useState({

// 	  latitude: 32.303238238659105,
// 	  longitude: -9.233830110420818,
// 	  latitudeDelta: 0.0922,
// 	  longitudeDelta: 0.0421,
// 	});

// 	return (
// 	  <View style={styles.container}>
// 		<MapView
// 		  style={styles.map}
// 		  region={region}
// 		  onRegionChangeComplete={setRegion}
// 		>
// 		  <Marker
// 			coordinate={{
// 			  latitude:32.303238238659105,
// 			  longitude:  -9.233830110420818,
// 			}}
// 		  />
// 		</MapView>
// 	  </View>
// 	);
//   };
//   const styles = StyleSheet.create({
// 	container: {
// 	  flex: 1,
// 	},
// 	map: {
// 	  flex: 1,
// 	},
//   });

//   export default MapScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

interface MarkerData {
  raisonSocial: string;
  adress: string;
  phone: string;
  latitude: number;
  longitude: number;
}

const MapScreen = (): JSX.Element => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  //   const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadMarkers = async (): Promise<void> => {
    try {
      const response = await fetch(
        "http://192.168.9.33:2000/api/compagnies/getAll"
      );
      const text = await response.text();
      const data = JSON.parse(text);
      setMarkers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    //     AsyncStorage.getItem("token").then((token) => {
    //       if (!token) {
    //         navigation.navigate("Login");
    //       }
    //     });
    loadMarkers();
    // setIsLoading(false);
  }, []);

  // const navigation = useNavigation();
  // useEffect(() => {
  //   AsyncStorage.getItem("token").then((token) => {
  //     if (!token) {
  //       navigation.navigate("Login");
  //     }
  //   });
  // }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.303238238659105,
          longitude: -9.233830110420818,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* {isLoading
		
          ? null
          : markers.map((marker, index) => {

                    return (
                        <Marker

                            key={index}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={marker.raisonSocial}
                            description={marker.adress}

                        />
                    );
                })} */}

        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.raisonSocial}
              description={marker.adress}
              // image={require("../../assets/map.png")}
            />
          );
        })}
      </MapView>
      <View
        style={{
          backgroundColor: "#7489f2",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            width: 70,
            textAlign: "center",
            color: "white",
          }}
          onPress={() => {
			navigation.navigate("Login");
          }}
        >
          Logout
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
