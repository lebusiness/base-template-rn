import { Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }, 
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    textAlign: 'center',
    marginTop: 6,
  },
  line: {
    marginTop: 10,
    height: 1,
    backgroundColor: "#DDD",
  },
  btn: {
    color: 'red'
  }
});
export default function App() {
  return (
    <View sдtyle={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.text}>World</Text>
        <Button style={styles.btn} title={'Say Hello'} />
        <View style={styles.line}></View>
      </View>
  );
}