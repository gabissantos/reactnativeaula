import React from "react";
import { Text, FlatList } from "react-native";
import Estilo from "../Estilo";

import Protudo from "./Protudo";

export default props => {

    return(
        <>
        <Text style={Estilo.txtGrande}>
            Lista de produtos Versão 2
        </Text>
        <FlatList
            data={Produtos}
            keyExtractor={item => `${item.id}`}
            renderItem={({intem: p}) => {
                return <Text>{p.id} - {p.nome} tem R$</Text>
            }}
         />
        </>
    )
}