import React from "react";
import { Text } from 'react-native'
import Estilo from "./Estilo";


export default props =>{
//console.warn(param)
    return (

 <Text style={Estilo.txtGrande}>
    O Valor {props.min} é Maior que o {props.max}
    </Text>
    )
    
}