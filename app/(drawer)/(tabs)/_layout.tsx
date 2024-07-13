// ./app/(drawer)/(tabs)/_layout.tsx
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
        // headerShown: false
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{ tabBarLabel: "Feed", headerTitle: "Feed" }}
      />
      <Tabs.Screen
        name="bonus"
        options={{ tabBarLabel: "Bonus", headerTitle: "Bonus" }}
      />
      <Tabs.Screen name="protected" options={{ href: null }} />
    </Tabs>
  );
};

export default TabsLayout;
