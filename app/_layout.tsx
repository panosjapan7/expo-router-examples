// ./app/_layout.tsx
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Layout = () => {
  return (
    <>
      <SafeAreaView
        edges={["right", "left"]}
        style={{ flex: 1, backgroundColor: "transparent" }}
      >
        <View style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShadowVisible: false }}>
            <Stack.Screen
              name="index"
              options={{ headerShown: false, headerTitle: "Home" }}
            />
            <Stack.Screen
              name="login"
              options={{ headerShown: true, headerTitle: "Login" }}
            />
            <Stack.Screen
              name="register"
              options={{ headerShown: true, headerTitle: "Register" }}
            />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen
              name="reset-password"
              options={{
                presentation: "modal",
                headerTitle: "Reset Password",
                headerStyle: { backgroundColor: "#5e8db4" },
              }}
            />
          </Stack>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Layout;
