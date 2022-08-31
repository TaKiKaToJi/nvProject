import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // TEST
    }
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Create Post" onPress={()=>navigation.navigate("CreatePost")} />
      <Text style={{ margin: 10 }}>Post:{route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postTest, setPostText] = React.useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder={{ height: 200, padding: 100, BackgroundColor: "white", alignItems: "center", justifyContent: "center"}}
        onChangeText={(postTest)=> setPostText(postTest)}
        value={postTest}
      />

      <Button title="Click" onPress={()=>{
        navigation.navigate('Home',{post:postTest})
      }}/>
    </>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { BackgroundColor: "#b015e8" },
          headerTintColor: "#15b3e8",
          headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
