// ./app/(drawer)/(tabs)/protected.tsx
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

const Protected = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red", fontWeight: "bold" }}>Protected screen</Text>
    </View>
  );
};

export default Protected;
