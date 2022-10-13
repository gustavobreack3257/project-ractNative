import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home(){
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participantesName, setParticipantesName] = useState('')

  function hundleParticipiantAdd(){

    if(participantes.includes(participantesName)) {
      return Alert.alert("Participante Existe", "Participante ja existe na lista")
    }

    setParticipantes(prevState => [...prevState, participantesName])
    setParticipantesName('')
  }

  function hundleParticipiantRemove( name: String){

    setParticipantes(prevState => prevState.filter(participantes => participantes !== name))

    Alert.alert("Remover", `Deseja Remover o participante ${name}??`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado")
      },
      {
        text: 'Nao',
        style: "cancel"
      }
    ])
    console.log(`Voce clicou em remover o participante ${name}`)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>sexta, 4 novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput style={styles.Input}
        placeholder="Nome do participante"
        placeholderTextColor="#00ced1"
        keyboardType="default"
        onChangeText={text => setParticipantesName(text)}
        value={participantesName}/>

        <TouchableOpacity style={styles.btn} onPress={hundleParticipiantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
      data={participantes}
      keyExtractor={item => item}
      renderItem={({ item }) => (
        <Participant
          key={item}
          name={item}
          onRemove={() => hundleParticipiantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>Nao chegou nenhum participante ao evento? Adicione um participante a lista.</Text>
        )}
      />




    </View>
  )
}
