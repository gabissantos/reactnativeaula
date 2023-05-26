import React, {Component} from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Estilo from "../Estilo";



const styles = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 125,
        alignItems:"center"
      }
})
export default class Serie extends Component {
    render() {
      return (
        <View style={styles.FlexV4}>
            <Text style={Estilo.txtGrande}>As melhores Series de 2022</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../imagens/gambito.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/sweet.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/peakt.jpg')}
          />
           <Image
            style={styles.tinyLogo}
            source={require('../imagens/coracao.jpg')}
          />
        </View>
      );
    }
  }