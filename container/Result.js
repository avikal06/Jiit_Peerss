import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import ResultTable from "../components/ResultTable";
const Result = ({ result }) => {
  return (
    <View>
      <Text style={styles.heading}>Result</Text>
      <ResultTable result={result} />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },

  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
