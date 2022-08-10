import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home-outline" size={100} color="#15b3e8" />
      <Text style={{ fontSize: 40 }}> Home Screen</Text>
      <Button
        title="About Me"
        onPress={() =>
          navigation.navigate("About", { email: "pi.kittiphop_st@tni.ac.th" })
        }
      />
    </View>
  );
};

export default HomeScreen;
