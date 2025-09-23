import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  activeTab: "Smart Script" | "Advanced Script";
  setActiveTab: (tab: "Smart Script" | "Advanced Script") => void;
}


export default function TopNavigator({ activeTab, setActiveTab }: Props) {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={() => setActiveTab("Smart Script")}>
        <Text
          style={[styles.navText, activeTab === "Smart Script" && styles.activeText]}
        >
          Smart Script
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab("Advanced Script")}>
        <Text
          style={[styles.navText, activeTab === "Advanced Script" && styles.activeText]}
        >
          Advanced Script
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#441414ff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    fontFamily: "Poppins-Regular",
  },
  navText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
  },
  activeText: {
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    paddingBottom: 2,
  },
});