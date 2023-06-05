import { useEffect, useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";

const Login = ({ navigation }) => {
  const [enrollment, setEnrollment] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(LoginContext);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  const login = () => {
    axios({
      method: "post",
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/token/generate-token1",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        Modulename: "STUDENTMODULE",
        otppwd: "PWD",
        passwordotpvalue: password,
        username: enrollment,
      },
    }).then((response) => {
      setUserData(response.data.response.regdata);
      navigation.navigate("Dashboard");
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../assets/jiit_logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.login_container}>
        <Text
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
            fontSize: 30,
            marginBottom: 60,
            // fontFamily: "Roboto-Regular",
          }}
        >
          Login
        </Text>
        <View style={styles.text_input_container}>
          <Text style={{ fontWeight: 600 }}>Enrollment No.</Text>
          <TextInput
            placeholder="0123456"
            style={styles.text_input}
            onChangeText={(text) => {
              setEnrollment(text);
            }}
          />
        </View>
        <View style={styles.text_input_container}>
          <Text style={{ fontWeight: 600 }}>Password</Text>
          <TextInput
            placeholder="********"
            style={styles.text_input}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPassword(text);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.btn_login2}
          onPress={() => {
            login();
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  login_container: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 60,
    marginTop: -100,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 60,
  },
  text_input_container: {
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  text_input: {
    marginTop: 5,
  },
  btn_login: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 5,
  },
  btn_login2: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
