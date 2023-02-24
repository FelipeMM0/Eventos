import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    Container:{
      backgroundColor:'#131016',
      flex:1,
      padding:24,
      gap:10
    },
  
    eventName:{
      color:'#FDFCFE',
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },
  
    eventDate:{
      color:'#6B6B6B',
      fontSize:15,
      marginTop:5
    },

    form:{
        width:'100%',
        flexDirection:'row',
        marginTop:36,
        marginBottom:42
    },

    input:{
        flex:1,
        height:56,
        borderRadius: 5,
        padding:8,
        color:"white",
        backgroundColor:"#1F1E25",
        marginRight:12
    },

    button:{
        width:56,
        height:56,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#31CF67',
    },

    buttonText:{
        color:'#fff',
        fontSize:24
    },

    listEmptyText:{
      color:'white',
      fontSize: 14,
      textAlign:'center'
  }
  
  })