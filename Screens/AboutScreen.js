import { View, Text } from 'react-native'
import React from 'react'

const AboutScreen = ({route}) => {
    // const {email} = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontSize:40}}> About Screen</Text>
      {/* <Text style={{fontSize:40}}>Email : {email}</Text> */}
      <Text style={{fontSize:40}}> Email : {route.params.email}</Text>
    </View>
  )
}

export default AboutScreen