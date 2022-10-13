import {View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

//typeScript importante pra identificar erros
type props ={
    name: string;
    onRemove: () => void;
}
export function Participant ({name, onRemove} : props){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

        <TouchableOpacity style={styles.btn} onPress={onRemove}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        </View>

    )
}