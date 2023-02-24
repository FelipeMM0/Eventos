
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import {styles} from './styles'

import { Participant } from "../../components/Participant/participant";

import { useState } from "react";

import ptBr from 'date-fns/locale/pt-BR'
import {format, subDays, formatRelative} from 'date-fns'

export function Home(){

//   const publishedDateFormat = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
//     locale: ptBr
// })

//  var teste = formatRelative(subDays(new Date(), 3), new Date())

  const weekday = format(new Date(), 'EEEE', {
    locale:ptBr
  })

  const date = format(new Date(), "d 'de' LLLL 'de' yyyy", {
    locale:ptBr
  })

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handlePartcipantAdd(){
      if(participants.includes(participantName)){
        return Alert.alert("Participante já cadastrado", `${participantName}já foi cadastrado`)
      }

      setParticipants([...participants, participantName])
      setParticipantName('')

  }

  function handlePartcipantRemove(name:string){

  

    Alert.alert("Remover participante", `Remover o participante ${name}?`, [
      {
        text:'Não',
        style:'cancel'
      },
      {
        text:'Sim',
        onPress: () =>  setParticipants(participants.filter((participant)=> participant !== name))    
      }
    ])
  }

  return(

    <View style={styles.Container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        {weekday}, {date}
      </Text>

      <View style={styles.form}>

        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={text => setParticipantName(text)}
        />
      
        <TouchableOpacity 
          style={styles.button}
          onPress={handlePartcipantAdd}
        >
              <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View> 

      <FlatList
        data={participants}
        keyExtractor={item=> item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) =>(
              <Participant
                key={item}
                name={item} 
                onRemove={handlePartcipantRemove}
        />
        )}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Não foi cadastrado nenhum participante
          </Text>
        )}
      />


    </View>
  )
}