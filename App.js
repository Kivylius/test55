import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerDevMenuItems } from "expo-dev-menu";

const devMenuItems = [
  {
    name: "My Custom Button",
    callback: () => console.log("Hello world!"),
  },
];

registerDevMenuItems(devMenuItems);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
