// ./app/(drawer)/settings.tsx
import { Text, View } from "react-native";

const Settings = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ color: "red", fontWeight: "bold" }}>Settings screen</Text>
    </View>
  );
};

export default Settings;
