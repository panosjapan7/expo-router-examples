// ./app/(drawer)/_layout.tsx
import { Drawer } from "expo-router/drawer";
import { router, usePathname } from "expo-router";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useEffect } from "react";

const CustomDrawerComponent = (props: any) => {
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={"Feed"}
        onPress={() => router.push("/(drawer)/(tabs)/feed")}
        labelStyle={{ color: pathname === "/feed" ? "#fff" : "#000" }}
        style={{ backgroundColor: pathname === "/feed" ? "#333" : "#fff" }}
      />
      <DrawerItem
        label={"Bonus"}
        onPress={() => router.push("/(drawer)/(tabs)/bonus")}
        labelStyle={{ color: pathname === "/bonus" ? "#fff" : "#000" }}
        style={{ backgroundColor: pathname === "/bonus" ? "#333" : "#fff" }}
      />
      <DrawerItem
        label={"Settings"}
        onPress={() => router.push("/(drawer)/settings")}
        labelStyle={{ color: pathname === "/settings" ? "#fff" : "#000" }}
        style={{
          backgroundColor: pathname === "/settings" ? "#333" : "#fff",
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="settings"
        options={{ headerShown: true, headerTitle: "Settings" }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
