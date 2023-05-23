import React from "react";
import { Text } from "react-native";
import Estilo from "../Estilo";

import Protudo from "./Protudo";

export default props => {
    function obterLista(){
        Protudo.map(p => {
         return <Text key={p.id}>{p.id} - {p.name} tem R$ {p.preco} </Text>
        })
    }
    return(
        <>
        <Text style={Estilo.txtGrande}>
            Lista de produtos
        </Text>
        {obterLista()}
        </>
    )
}