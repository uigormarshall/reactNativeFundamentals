import React from 'react';
import { Text, View } from 'react-native';
import FirstComponent from "./components/FirstComponent";
export default function HelloWorldApp() {
  return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Hello, world!</Text>
        <FirstComponent title='this is my first component!'/>
      </View>
  );
}
