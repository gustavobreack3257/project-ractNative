import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        fontSize: 16,
        flex: 1,
        color: 'red',
        marginLeft: 17
    },
    btnText: {
        fontSize: 20,
        color: '#FFF'

      },
      btn: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      },

})