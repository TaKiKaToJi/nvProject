import { View, Text, SafeAreaView , Button} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../components/styles";

const SecondPage = ({ navigation, route }) => {


  useEffect(() => {
    if (route.params?.insert) {
      setScreenText(route.params.insert);
    }
  }, [route.params?.insert]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTopStyle}>THIS IS SECOND PAGE</Text>
      <View style={{ marginTop: 15 }}>
        <Button
          title="GO FIRST PAGE"color="#5CB270"
          onPress={() => navigation.navigate("First Page")}
          
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <Button
          title="GO THIRD PAGE"color="#5CB270"
          onPress={() => navigation.navigate("Third Page")}
          
        />
      </View>
      <View style={{ bottom: "-40%"}}>
          <Text style={styles.textBottomSytel}>Thai-Nichi institute of Technology</Text>
        </View>
    </SafeAreaView>
  );
};

export default SecondPage;