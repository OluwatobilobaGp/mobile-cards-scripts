import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import CustomCard from "../components/CustomCard";

const SmartScript = () => {
  const data = [
    {
      id: "1",
      title: "Write Smarter",
      subtitle: "Boost productivity with AI-powered scripts.",
      background: require("../assets/bg1.jpg"),
    },
    {
      id: "2",
      title: "Organize Ideas",
      subtitle: "Turn scattered thoughts into structured notes.",
      background: require("../assets/b2.jpg"),
    },
    {
      id: "3",
      title: "Stay Inspired",
      subtitle: "Let creativity flow with daily insights.",
      background: require("../assets/b3.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Smart Scrit</Text>

      <FlatList
        data={data}
         horizontal   // makes it scroll sideways
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            subtitle={item.subtitle}
            background={item.background}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default SmartScript;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  listContent: {
    paddingHorizontal: 10, // spacing on left/right
  },
});
