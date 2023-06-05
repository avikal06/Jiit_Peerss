import { useContext, useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";

const Schedule = ({ semList }) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [examEvents, setExamEvents] = useState();
  const { userData } = useContext(LoginContext);

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
      url: "https://webportal.jiit.ac.in:6011/StudentPortalAPI/studentcommonsontroller/getstudentexamevents",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
      data: {
        instituteid: userData.institutelist[0].value,
        registationid: val,
      },
    }).then((response) => {
      setExamEvents(response.data.response.eventcode.examevent);
    });
  };

  return (
    <View>
      <Text style={styles.heading}>Schedule</Text>
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
          // handleClick(item.registrationid);
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
    </View>
  );
};

export default Schedule;

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
