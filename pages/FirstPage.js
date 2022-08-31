import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../components/styles";

const FirstPage = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTopStyle}>THIS IS FRIST PAGE</Text>
        <View style={{ marginTop: 15 }}>
          <Button
            title="GO TO SECOND PAGE"color="#5CB270"
            onPress={() => navigation.navigate("Second Page")}
            
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Button 
            title="GO THIRD PAGE"color="#5CB270"
            onPress={() => navigation.navigate("Third Page")}
            titleStyle={{fontSize:50}}
          />
        </View>
        <View style={{ bottom: "-40%"}}>
          <Text style={styles.textBottomSytel}>
            Thai-Nichi institute of Technology
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default FirstPage;