<!-- ![](assets/screenshots/expo-router-examples.gif) -->
<img src="./assets/screenshots/expo-router-examples.gif" width="300" height="30%" />

# This app creates the following navigation:

- Root Level (Stack):
  - 1 Stack Navigator (`app/_layout`) with 4 Screens (`app/index`, `app/login`, `app/register`, `app/reset-password`)
  - 1 Screen opens as a Modal (`reset-password`)
  - When modal is open:
    - The status bar contents on iOS is in white color
    - The status bar contents on Android is in black color
      <br />
      <br />
      <img src="./assets/screenshots/root-level.jpg" width="auto" height="30%" />
      <br />
      <br />
- 1 Level Deep (Drawer):
  - 1 Drawer Navigator (`app/(drawer)/_layout.tsx`)
  - 1 screen (`app/(drawer)/settings`)
  - Tabs navigator is not rendered on `settings` screen
    <br />
    <br />
    <img src="./assets/screenshots/level-1-drawer.jpg" width="50%" height="100%" />
    <br />
    <br />
- 2 Levels Deep (Tabs):
  - 1 Tabs Navigator (`app/(drawer)/(tabs)/_layout.tsx`) with 3 screens (`app/(drawer)/(tabs)/bonus`, `app/(drawer)/(tabs)/feed`, `app/(drawer)/(tabs)/protected`).
  - The `protected` screen is hidden from the Tab menu items
  - The Drawer icon is visible and Drawer menu can be toggled
    <br />
    <br />
    <img src="./assets/screenshots/level-2-tabs.jpg" width="50%" height="100%" />
    <br />
    <br />
