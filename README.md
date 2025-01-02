# IT3133-MobileApp

## Overview
This project is a React Native app utilizing `react-native-paper` components for a consistent Material Design look and feel. The app demonstrates basic functionality, including styled text, a divider, and a button with an icon, and is wrapped in a `PaperProvider` to ensure theme consistency. It also includes safe area handling using `react-native-safe-area-context` and scroll functionality for better user experience.

---

## Features
- Displays styled `Text` components using `react-native-paper`.
- Includes a `Divider` for clear content separation.
- A functional button with an icon and an `onPress` handler.
- Safe area integration for seamless compatibility across different devices.
- Scrollable content using `ScrollView`.

---

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Installation and Setup
1. Create a new Expo app using the blank template:
   ```bash
   npx create-expo-app MyMobileApp --template blank
   ```

2. Navigate to your project directory:
   ```bash
   cd MyMobileApp
   ```

3. Install required dependencies:
   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime
   npm install react-native-paper
   npm install react-native-safe-area-context
   npm install react-native-vector-icons
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

5. Run the app on your device or emulator:
   - For a physical device, scan the QR code using the Expo Go app.
   - For an emulator, press the corresponding key to open on Android (`a`) or iOS (`i`).

---

## File Structure
```
.
├── App.js                  # Main app file
├── components/
│   └── Home.js             # Home component with content layout
├── package.json            # Project configuration and dependencies
├── node_modules/           # Installed dependencies
└── README.md               # Project documentation
```

---

## Dependencies
### Core Dependencies
- `react-native`: Framework for building mobile apps.
- `expo`: React Native framework for easier development.
- `react-native-paper`: UI library for Material Design components.
- `react-native-safe-area-context`: Handles safe area padding for iOS and Android.
- `react-native-vector-icons`: Icon library for React Native.
- `react-dom` and `react-native-web`: For web compatibility.
- `@expo/metro-runtime`: Metro bundler runtime for Expo.

---

## Components Description
### `Home.js`
- Displays a headline styled using `react-native-paper`'s `Text` component.
- Includes a `Divider` for visual separation.
- Contains a long paragraph styled with `justify` alignment for better readability.
- Adds a `Button` with an icon that triggers a console log action on press.

### `App.js`
- Wraps the application in a `PaperProvider` for consistent theming.
- Ensures safe area handling using `SafeAreaView`.
- Incorporates a `ScrollView` to enable scrolling for long content.

---

## Styles
- `Home.js`: Adds padding and `textAlign: justify` to the paragraph for readability.
- `App.js`: Centers the content with `alignItems` and `justifyContent` properties.

---

## Running the App
1. Start the development server using:
   ```bash
   npx expo start
   ```

2. Open the app on a device or emulator:
   - Physical Device: Use Expo Go app to scan the QR code.
   - Emulator: Use `a` for Android or `i` for iOS.

---


## License
This project is licensed under the MIT License.

---

## Acknowledgments
- [React Native](https://reactnative.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [Expo](https://expo.dev/)


