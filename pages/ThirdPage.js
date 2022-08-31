import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../components/styles";

const ThirdPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTopStyle}>THIS IS THIRD PAGE</Text>
      <View style={{ marginBottom: 15 }}>
        <Button
          title="GO FIRST PAGE"
          color="#5CB270"
          onPress={() => navigation.navigate("First Page")}
        />
      </View>
      <View style={{ marginBottom: 15 }}>
        <Button
          title="GO SECOND PAGE"
          color="#5CB270"
          onPress={() => navigation.navigate("Second Page")}
        />
      </View>
      <View style={{ bottom: "-40%" }}>
        <Text style={styles.textBottomSytel}>
          Thai-Nichi institute of Technology
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
