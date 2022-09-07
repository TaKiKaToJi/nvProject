import { View, Text, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen2 = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("Register Done")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home-outline" size={100} color="#15b3e8" />
      <Text style={{ fontSize: 20 }}> Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default HomeScreen2;
