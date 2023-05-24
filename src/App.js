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
//import HomeScreen from "./componentes/HomeScreens"
//import DetailsScreen from "./componentes/DetailsScreens"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"
import ListaDeProduto from "./componentes/produto/ListaDeProdutoV2"
import ListaProduto from "./componentes/produto/ListaProduto"
import Quadrado from "./componentes/layout/Quadrado"
import FlexboxV1 from "./componentes/layout/FlexboxV1"
import FlexboxV2 from "./componentes/layout/Flexbox.V2"
const Stack = createNativeStackNavigator()
import FlexboxV3 from "./componentes/layout/FlexboxV3"



export default () =>  
   <SafeAreaView style={styles.TelaIniciante}>

       <FlexboxV3/>
      


     {/* <ListaProduto/>
        <ListaDeProduto/>
        <Familia>
        <Membro nome="Jorge" sobrenome="Pereiras"/>
        <Membro nome="Edinaldo" sobrenome="Pereiras"/>
        <Membro nome="Marcinho" sobrenome="Pereiras"/>
        <Membro nome="Roberta" sobrenome="Pereiras"/>
        </Familia>
        <Familia>
         <Membro nome="Lucas" sobrenome="Pereiras"/>
        <Membro nome="Fernanda" sobrenome="Pereiras"/>
        <Membro nome="Jorge" sobrenome="Pereiras"/>
        <Membro nome="Marcia" sobrenome="Pereiras"/>
        </Familia> */}
        </SafeAreaView>


{/*<NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

      {/* <ContadorV2/>
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