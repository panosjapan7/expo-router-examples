<!-- ![](assets/screenshots/expo-router-examples.gif) -->
<img src="./assets/screenshots/expo-router-examples.gif" width="300" height="30%" />

# This app creates the following navigation:

- Root Level (Stack):
  - 4 Screens (app/index, app/login, app/register, reset-password) with Stack Navigator
  - 1 Screen opens as a Modal (reset-password)
    <br />
    <br />
    <img src="./assets/screenshots/root-level.jpg" width="auto" height="30%" />
    <br />
    <br />
- 1 Level Deep (Drawer):
  - 1 Drawer Navigator (`app/(drawer)/\_layout.tsx`)
  - 1 screen (`app/(drawer)/settings`)
  - Tabs navigator is not rendered on `settings` screen
    <br />
    <br />
    <img src="./assets/screenshots/level-1-drawer.jpg" width="50%" height="100%" />
    <br />
    <br />
- 2 Levels Deep (Tabs):
  - 1 Tabs Navigator with 3 screens (`app/(drawer)/(tabs)/bonus`, `app/(drawer)/(tabs)/feed`, `app/(drawer)/(tabs)/protected`).
  - The `protected` screen is hidden from the Tab menu items
  - The Drawer icon is visble and can be toggled
    <br />
    <br />
    <img src="./assets/screenshots/level-2-tabs.jpg" width="50%" height="100%" />
    <br />
    <br />
