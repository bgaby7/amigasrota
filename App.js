import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize:  50,
    textAlign: 'center',
    marginTop:  100, 
  },
  button: {
    marginTop:  40,
  },
});
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amigas</Text>
      <Button
        title="Emmily"
        onPress={() => navigation.navigate('Emmily')}
        style={styles.button}
      />
      <Button
        title="Milleny"
        onPress={() => navigation.navigate('Milleny')}
        style={styles.button}
      />
    </View>
  );
}

function EmmilyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Emmily</Text>
      <Text style={styles.text}>Emmily é uma amiga muito bondosa, gentil e amorosa, que sepre esta comigo.</Text>
      <text>Desafio a Emmily imitar um gigante</text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
}

function MillenyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Milleny</Text>
      <Text style={styles.text}>Milleny é uma amiga que sempre está comigo, com muita paciência e muito companheira.</Text>
      <text>Desafio a Milleny a imitar uma senhora de idade.</text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Emmily" component={EmmilyScreen} />
        <Stack.Screen name="Milleny" component={MillenyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;