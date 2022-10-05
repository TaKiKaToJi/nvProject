import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native"; //
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  // useEffect(()=>{

  //     getData();
  // },[])

  if (error) {
    //ถ้าerror จะreturn UI กลับไป
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
      </View>
    );
  }

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="green" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //console.log(res.data.data)
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error); //set error to state of error ว่าเกิดอะไรขึ้น
    }
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "gray",
        }}
      />
    );
  };

  const _renderItem = ({ item }) => {
    let picture =
      item.picture !== null ? item.picture : "https://via.placeholder.com/150";
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.addButtonStyle}
          onPress={() => {
            navigation.navigate('Detail', { id:item.id, title:item.title });
          }}
        >
          <View style={styles.dataContainer}>
            <View style={styles.container}>
              <Image
                resizeMode="cover"
                source={{ uri: picture }}
                style={styles.thumbnail}
              />
              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.detail}>{item.detail}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  return (
    <View>
      <FlatList
        data={product}
        keyExtrator={(item, index) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
        refreshing={loading}
        _onRefresh={_onRefresh}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: "100%",
    marginBottom: 15,
  },
});
