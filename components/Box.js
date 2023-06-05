import { Button, StyleSheet, Text, View, Image } from "react-native";

const Box = ({ color, icon, title }) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <View style={{ ...styles.box, backgroundColor: color }}>
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#fff",
            opacity: 0.4,
            borderRadius: 50,
            position: "absolute",
            bottom: -10,
            right: -20,
          }}
        ></View>
        {icon}
      </View>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 5,
          marginTop: -10,
          fontWeight: 500,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
  },
});
