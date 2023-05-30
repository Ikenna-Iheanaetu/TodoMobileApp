import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useFonts } from "expo-font";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";

// React Navigation Screens
import Intro from "./screens/Intro";
import Todo from "./screens/Todo";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  // My app's splash screen and font load

  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Josefin700: require("./assets/font/JosefinSans-Bold.ttf"),
    Josefin400: require("./assets/font/JosefinSans-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!

        // removeValue = async () => {
        //   try {
        //     await AsyncStorage.removeItem("user");
        //   } catch (e) {
        //     // remove error
        //   }
        // };
        // removeValue();

        // await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      if (!fontsLoaded) {
        return undefined;
      } else {
        await SplashScreen.hideAsync();
      }
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Intro"
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Drawer.Screen name="Intro">
          {(props) => <Intro onLayout={onLayoutRootView} {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Todo">
          {(props) => <Todo onLayout={onLayoutRootView} {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// <Drawer.Navigator initialRouteName="Intro" screenOptions={{
//   headerShown: false,
// }}>
//   <Drawer.Screen name="Todo" component={Todo} />
//   <Drawer.Screen name="Intro" component={Intro} />
// </Drawer.Navigator>

// <Stack.Navigator
//         initialRouteName="Intro"
//         screenOptions={{
//           headerShown: false,
//         }}
//       >
//         <Stack.Screen name="Intro">
//           {(props) => <Intro onLayout={onLayoutRootView} {...props} />}
//         </Stack.Screen>
//         <Stack.Screen name="Todo">
//           {(props) => <Todo onLayout={onLayoutRootView} {...props} />}
//         </Stack.Screen>
//       </Stack.Navigator>
