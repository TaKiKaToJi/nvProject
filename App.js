import * as React from "react";
import { View, Text, Button,SafeAreaView,Image, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen2 from "./Screens/HomeScreen2";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <Image
          source={require("./assets/react_logo.png")}
          style={styles.sideMenuProfileIcon}
        />
      </SafeAreaView>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      {/* <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen2} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
