// ./app/_layout.tsx
import { Stack, usePathname } from "expo-router";
import { StatusBar, Platform, useColorScheme } from "react-native";
import { StatusBar as StatusBarApple } from "expo-status-bar";
const Layout = () => {
  const pathname = usePathname();
  const deviceTheme = useColorScheme();

  return (
    <>
      {Platform.OS === "android" ? (
        <StatusBar barStyle={"dark-content"} />
      ) : null}
      {Platform.OS === "ios" ? (
        <StatusBarApple
          style={
            deviceTheme === "light" && pathname === "/reset-password"
              ? "light"
              : deviceTheme === "light"
              ? "dark"
              : "light"
          }
        />
      ) : null}

      <Stack>
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
          options={{ presentation: "modal", headerTitle: "Reset Password" }}
        />
      </Stack>
    </>
  );
};

export default Layout;
