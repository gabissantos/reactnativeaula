import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Primeiro from './componentes/Primeiro'
// import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
//import MinMax from "./componentes/MinMax"
//import Aleatorio from "./componentes/Aleatorio"
//import Titulo from "./componentes/Titulo"
//import Botao from "./componentes/Botao"
//import AtividadeDaSemana from "./componentes/AtividadeDaSemana"
//import Pai from "./componentes/direta/Pai"
//import Pai from "./componentes/indireta/Pai"
//import ContadorV2 from "./componentes/contador/ContadorV2"
import HomeScreen from "./componentes/HomeScreens"
import DetailsScreen from "./componentes/DetailsScreens"


const Stack = createNativeStackNavigator()

export default () => 

          <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

      {/*<ContadorV2/>
         <Pai/>
       <Pai/>
        <AtividadeDaSemana/>
        <Contador inicial={100}/>
        <Botao />
           <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro"/>
         <Primeiro/>
        <Text>1 + 2</Text>
        <Text>O valor da soma de 1 + 2 = {1+2}</Text>
        <Comp1/>
        <Comp2/>
        <Of/> 
        <MinMax min="3" max="20"/>
        <MinMax min="5" max="40"/>
        <MinMax min="7" max="55"/>
        <Text></Text>
        <Aleatorio miny={1} maxx={100} />*/}



// export default App

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

   // Lista de comentario


// function App(){
//     const jsx = <Text>Kaua Henrique</Text>
//     return jsx
// }

// const App = function () {
//     return <Text>Component 2</Text>
// }

// export default function(){
//     return <Text>Component 3</Text>
// }

// export default () => {
//     return <Text>Component 4</Text>
// }