import React from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity, Touchable } from 'react-native'
import { color } from 'react-native-reanimated'
// import styelss from '../../theme/theme'

const index = ({name}) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.button}>
            <Button color="black"  title={name} onPress={onpress}
             />

             </View> */}

             <TouchableOpacity >
                 <View style={styles.textConteiner}>
                     <Text style={styles.textStyle}>{name}</Text>
                 </View>
             </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {

        marginTop: 50,
    },
    textConteiner: {
        padding:15,
        marginLeft:50,
        marginRight:50,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        borderColor:"black",
        borderWidth:1
       },
       textStyle:{
           fontSize:20,
           color:"#430064",
           fontWeight:"bold"
       }


})
