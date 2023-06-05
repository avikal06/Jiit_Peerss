import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

const ResultTable = ({ result }) => {
  const data = [
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
    {
      g: "155.5",
      e: "19.5",
      c: "19.5",
      sgpap: "155.5",
      cgpap: "155.5",
      sgpa: "8",
      cgpa: "8",
    },
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {result.map((d, i) => {
        return (
          <View
            style={
              i % 2 == 0
                ? { ...styles.container, backgroundColor: "#eee" }
                : { ...styles.container, backgroundColor: "#fff" }
            }
            key={i}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexGrow: 1,
                marginRight: 20,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
                  marginRight: 20,
                  height: "100%",
                  fontWeight: 600,
                }}
              >
                {i + 1}
              </Text>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginRight: 20,
                }}
              >
                <Text>Grade P: {d.totalgradepoints}</Text>
                <Text>Course C: {d.totalcoursecredit}</Text>
                <Text>Earned C: {d.totalearnedcredits}</Text>
              </View>
              {/* <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text>SGPA P: 155.5</Text>
                <Text>CGPA P: 155.5</Text>
              </View> */}
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ marginBottom: 5, fontWeight: 600, marginRight: 30 }}
                >
                  SGPA P: {d.totalpointsecuredsgpa}
                </Text>
                <Text style={{ marginBottom: 5, fontWeight: 600 }}>
                  SGPA: {d.sgpa}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ marginBottom: 5, fontWeight: 600, marginRight: 30 }}
                >
                  CGPA P: {d.totalpointsecuredcgpa}
                </Text>
                <Text style={{ marginBottom: 5, fontWeight: 600 }}>
                  CGPA: {d.cgpa}
                </Text>
              </View>
            </View>
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

export default ResultTable;

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
