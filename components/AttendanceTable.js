import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const AttendanceTable = ({ attendanceData }) => {
  const data = [
    {
      title: "Probability and Random Processes",
      lec: "18%",
      tut: "19%",
      lt: "20%",
    },
    {
      title: "Operations Research",
      lec: "30%",
      tut: "20%",
      lt: "45%",
    },
    {
      title: "Computer Networks and IOT",
      lec: "50%",
      tut: "0%",
      lt: "50%",
    },
    {
      title: "Social Media and Society",
      lec: "70%",
      tut: "40%",
      lt: "66%",
    },
    {
      title: "Artificial Intelligence",
      lec: "18%",
      tut: "19%",
      lt: "20%",
    },
    {
      title: "Soft Computing",
      lec: "30%",
      tut: "26%",
      lt: "44%",
    },
    {
      title: "Concepts of Graph Theory",
      lec: "70%",
      tut: "0%",
      lt: "70%",
    },
  ];
  return (
    <ScrollView style={styles.scrollContainer}>
      {attendanceData?.map((d, i) => {
        return (
          <View
            style={
              i % 2 == 0
                ? { ...styles.container, backgroundColor: "#eee" }
                : { ...styles.container, backgroundColor: "#fff" }
            }
            key={i}
          >
            <View>
              <Text style={{ fontSize: 16, marginBottom: 3, width: 250 }}>
                {d.subjectcode}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text>Lecture: {d.Lpercentage}</Text>
                <Text style={{ marginLeft: 20 }}>
                  Tutorial: {d.Tpercentage}
                </Text>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              {d.LTpercantage || d.Ppercentage
                ? d.LTpercantage || d.Ppercentage
                : d.Lpercentage}
              %
            </Text>
          </View>
        );
      })}
      <View style={{ ...styles.container, backgroundColor: "#fff" }}>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 3 }}></Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text></Text>
            <Text style={{ marginLeft: 20 }}></Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 35,
          }}
        ></Text>
      </View>
      <View style={{ ...styles.container, backgroundColor: "#fff" }}>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 3 }}></Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text></Text>
            <Text style={{ marginLeft: 20 }}></Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 35,
          }}
        ></Text>
      </View>
    </ScrollView>
  );
};

export default AttendanceTable;

const styles = StyleSheet.create({
  scrollContainer: {
    width: "100%",
    height: "75%",
    marginTop: 20,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
