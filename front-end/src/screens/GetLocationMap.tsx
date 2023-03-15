import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";


const MapScreen = ({ navigation }: any) => {
	const [region, setRegion] = useState({
		 
	  latitude: 32.303238238659105,
	  longitude: -9.233830110420818,
	  latitudeDelta: 0.0922,
	  longitudeDelta: 0.0421,
	});
  
	return (
	  <View style={styles.container}>
		<MapView
		  style={styles.map}
		  region={region}
		  onRegionChangeComplete={setRegion}
		  onPress={
			(e) => {
				console.log(e.nativeEvent.coordinate.latitude);
				console.log(e.nativeEvent.coordinate.longitude);
				navigation.navigate("Register", {
					latitude: e.nativeEvent.coordinate.latitude,
					longitude: e.nativeEvent.coordinate.longitude,
				});
		  }
		  }
		>
		  <Marker
			coordinate={{
			  latitude:32.303238238659105,
			  longitude:  -9.233830110420818,
			}}
		  />
		</MapView>
	  </View>
	);
  };

  


  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	map: {
	  flex: 1,
	},
  });
  
  export default MapScreen;