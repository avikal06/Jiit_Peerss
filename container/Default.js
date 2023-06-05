import { Button, StyleSheet, Text, View, Image } from "react-native";
import Box from "../components/Box";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Default = () => {
  return (
    <View style={{ padding: 30 }}>
      <Text style={styles.heading}>Dashboard</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Box
          color="#F8BDC4"
          icon={<FontAwesome5 name="clipboard-list" size={45} color="white" />}
          title="To-do List"
        />
        <Box
          color="#C490D1"
          icon={<Entypo name="megaphone" size={49} color="white" />}
          title="Events"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          color="#F67E7D"
          icon={<MaterialIcons name="lunch-dining" size={49} color="white" />}
          title="Mess Menu"
        />
        <Box
          color="#3CBBB1"
          icon={<AntDesign name="idcard" size={50} color="white" />}
          title="ID Card"
        />
      </View>
    </View>
  );
};

export default Default;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
  },
  box: {
    width: 110,
    height: 100,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { height: 1 },
  },
});
