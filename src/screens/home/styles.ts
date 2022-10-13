import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName:{
      color: '#20b2aa',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,

    },
    eventDate:{
      color: '#FFF',
      fontSize: 16
    },
    Input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding:16,
        fontSize: 16,
        marginRight: 10
    },
    btnText: {
      fontSize: 20,
      color: '#FFF'

    },
    btn: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#00ced1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 30,

    },
    ListEmptyText:{
      fontSize:20,
      color: '#ffd700'
    }
  })