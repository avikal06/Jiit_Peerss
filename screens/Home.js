import { useEffect } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";

const Home = ({ navigation }) => {
  useEffect(() => {
    const Nav = () => {
      navigation.navigate("Login");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    };
    setTimeout(Nav, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jiit.png")} style={styles.img_logo} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img_logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },
});
