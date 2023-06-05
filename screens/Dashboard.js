import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Default from "../container/Default";
import Attendance from "../container/Attendance";
import { useContext, useEffect, useState } from "react";
import Result from "../container/Result";
import Schedule from "../container/Schedule";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";

const Dashboard = ({ navigation }) => {
  const [screen, setScreen] = useState(1);
  const { userData, setUserData } = useContext(LoginContext);
  const [semData, setSemData] = useState([]);
  const [attendanceData, setAttendanceData] = useState();
  const [resultData, setResultData] = useState();
  const [semListSchedule, setSemListSchedule] = useState();

  const attendance = () => {
    axios({
      method: "post",
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentInforegistrationforattendence",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        clientid: userData.clientid,
        instituteid: userData.institutelist[0].value,
        membertype: userData.membertype,
        studentid: userData.memberid,
      },
    }).then((response) => {
      setSemData(response.data.response.semlist);
      setAttendanceData(response.data);
      setScreen(2);
    });
  };

  const result = () => {
    axios({
      method: "post",
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/studentsgpacgpa/getallsemesterdata",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        instituteid: userData.institutelist[0].value,
        studentid: userData.memberid,
        stynumber: "6",
      },
    }).then((response) => {
      setResultData(response.data.response.semesterList);
      setScreen(3);
    });
  };

  const schedule = () => {
    axios({
      method: "post",
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/studentcommonsontroller/getsemestercode-withstudentexamevents",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        clientid: userData.clientid,
        instituteid: userData.institutelist[0].value,
        memberid: userData.memberid,
      },
    }).then((response) => {
      setSemListSchedule(response.data.response.semesterCodeinfo.semestercode);
      setScreen(4);
    });
  };

  useEffect(() => {
    if (!userData) {
      navigation.navigate("Login");
    }
  }, [userData]);

  return (
    <View>
      <View style={{ ...styles.header, position: "relative" }}>
        <Image source={require("../assets/user.png")} style={styles.logo} />
        <Text
          style={{
            color: "#fff",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 18,
            marginTop: 10,
            marginBottom: 50,
          }}
        >
          {userData?.name}
        </Text>
        <TouchableOpacity
          style={{ position: "absolute", top: 50, right: 20 }}
          onPress={() => {
            setUserData(null);
          }}
        >
          <Entypo name="log-out" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.dashboard_container}>
        <View style={styles.switch_container}>
          {screen === 1 ? <Default /> : null}
          {screen === 2 ? (
            <Attendance semList={semData} attendanceData={attendanceData} />
          ) : null}
          {screen === 3 ? <Result result={resultData} /> : null}
          {screen === 4 ? <Schedule semList={semListSchedule} /> : null}
        </View>
        <View style={styles.nav_container}>
          <View style={styles.navbar}>
            <Pressable
              onPress={() => {
                setScreen(1);
              }}
            >
              <Entypo name="home" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                // setScreen(2);
                attendance();
              }}
            >
              <FontAwesome5 name="tasks" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                // setScreen(3);
                result();
              }}
            >
              <FontAwesome name="tasks" size={24} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                schedule();
              }}
            >
              <MaterialIcons name="schedule" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const ht = Dimensions.get("window").height * 0.6 + 90;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "stretch",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dashboard_container: {
    width: "100%",
    height: ht,
    backgroundColor: "#fff",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -90,
  },
  switch_container: {
    width: "100%",
    marginTop: 10,
    // padding: 30,
  },
  nav_container: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    left: 0,
    bottom: 20,
  },
  navbar: {
    flexDirection: "row",
    backgroundColor: "#000",
    width: "90%",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: "space-between",
    borderRadius: 40,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOffset: { height: 1 },
    shadowOpacity: 0.2,
  },
});
