// ./app/register.tsx
import { Link } from "expo-router";
import { Text, View } from "react-native";

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "red", fontWeight: "bold" }}>Register screen</Text>
      <Link href="/">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
};

export default Register;
