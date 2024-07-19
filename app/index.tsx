// ./app/index.tsx
import { Text, View } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ color: "red", fontWeight: "bold" }}>Home screen</Text>
      <Link href="/register">
        <Text>Go to Register</Text>
      </Link>
      <Link href="/login">
        <Text>Go to Login</Text>
      </Link>
    </View>
  );
};

export default Home;
