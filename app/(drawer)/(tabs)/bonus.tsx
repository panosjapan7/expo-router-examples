// ./app/(drawer)/(tabs)/bonus.tsx
import { Text, View } from "react-native";

const Bonus = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ color: "red", fontWeight: "bold" }}>Bonus Screen</Text>
    </View>
  );
};

export default Bonus;
