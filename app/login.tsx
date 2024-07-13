// ./app/login.tsx
import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Login = () => {
  const handleLogin = () => {
    router.replace("/(drawer)/feed");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red", fontWeight: "bold" }}>Login screen</Text>
      <Pressable onPress={handleLogin}>
        <Text>Log in</Text>
      </Pressable>
      <Link href="/reset-password">Forgot password?</Link>
      <Link href="/">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
};

export default Login;
