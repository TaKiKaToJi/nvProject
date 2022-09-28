import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
const _renderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: item.picture }} style={styles.thumbnail} />
      </View>
      <View style={styles.dataContent}>
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
      </View>
    </View>
  );
};
const ProductScreen = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      console.log(res.data.data);
      // alert(JSON.stringify(res.data.data))
      setProduct(res.data.data);
    };
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={Product}
        keyExtractor={(item, index) => item.id.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={_renderItem}
      />
    </View>
    
  );
};

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
    />
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
});

