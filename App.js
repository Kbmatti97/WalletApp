import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, defaultTheme, DefaultTheme } from "@react-navigation/native";

import Connexion  from "./Components/Connexion";
import Menu  from "./Components/Menu";
import Paiement  from "./Components/Paiement";
import Transfert  from "./Components/Tranfert";
import Paiementfacture  from "./Components/Paiementfacture";
import Historique  from "./Components/Historique";
import MyCards from "./Components/MyCards";
import ScreenCreation from './Components/ScreenCreation';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'ScreenCreation'}
      >
        <Stack.Screen name="ScreenCreation" component={ScreenCreation} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Paiement" component={Paiement} />
        <Stack.Screen name="Historique" component={Historique} />
        <Stack.Screen name="Transfert" component={Transfert} />
        <Stack.Screen name="Paiementfacture" component={Paiementfacture} />
        {/*<Stack.Screen name="MyCards" component={MyCards} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;