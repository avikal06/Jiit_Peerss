import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext, useState } from "react";
import AttendanceTable from "../components/AttendanceTable";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";

const Attendance = ({ semList, attendanceData }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const { userData } = useContext(LoginContext);
  const [attendance, setAttendance] = useState();

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const handleClick = (val) => {
    axios({
      method: "post",
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentattendancedetail",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        clientid: userData.clientid,
        instituteid: userData.institutelist[0].value,
        studentid: userData.memberid,
        registrationid: val,
        stynumber: attendanceData.response.headerlist[0].stynumber,
      },
    }).then((response) => {
      setAttendance(response.data.response.studentattendancelist);
    });
  };

  console.log("attendance", attendance);

  return (
    <View>
      <Text style={styles.heading}>Attendance</Text>
      {renderLabel}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={semList}
        search
        maxHeight={300}
        labelField="registrationcode"
        valueField="registrationid"
        placeholder={!isFocus ? "Select semester" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.registrationid);
          handleClick(item.registrationid);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="book"
            size={20}
          />
        )}
      />
      {value ? (
        <AttendanceTable attendanceData={attendance} />
      ) : (
        <Text
          style={{
            fontSize: 18,
            fontWeight: 500,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 100,
          }}
        >
          Select a semester
        </Text>
      )}
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  icon: {
    marginRight: 10,
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
