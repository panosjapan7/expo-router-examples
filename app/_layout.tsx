// ./app/_layout.tsx
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="register" options={{ headerShown: true }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="reset-password"
        options={{ presentation: "modal", headerTitle: "Reset Password" }}
      />
    </Stack>
  );
};

export default Layout;
