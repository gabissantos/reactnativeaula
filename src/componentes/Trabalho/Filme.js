import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 110,
        height: 175,
      },

    T1  :{
        flexDirection:"row",
        alignContent:"space-around"
    }
})
export default class Filme extends Component {
    render() {
      return (
        <>
        <Text style={Estilo.txtGrande}>Os Melhores filmes de 2022</Text>
        <View style={styles.T1}>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/aguas.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/eden.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/mae.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/continencia.jpg')}
          />
        </View>
        </>
      );
    }
  }