// ./app/reset-password.tsx
import { Link } from "expo-router";
import { Platform, StatusBar, Text, View } from "react-native";

const ResetPassword = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "android" ? "dark-content" : "light-content"}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5e8db4",
        }}
      >
        <Text style={{ color: "red", fontWeight: "bold" }}>
          ResetPassword screen
        </Text>
        <Link href="/">
          <Text>Go to Home</Text>
        </Link>
      </View>
    </>
  );
};

export default ResetPassword;
