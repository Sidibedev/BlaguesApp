import React from 'react';
import { StyleSheet, Text, View , StatusBar , Image} from 'react-native';
import { LinearGradient } from 'expo';
import {Button} from 'native-base'

export default class Splash extends React.Component {

componentDidMount() {
 StatusBar.setHidden(true);
}
  render() {
    return (

      <LinearGradient
               colors={['#233b6d', '#384e7b', '#657598']}
               style={{
                 position: 'absolute',
                 left: 0,
                 right: 0,
                 top: 0,
                 height: '100%',
               }}
      >
      <View style={styles.container}>

      <Image source={require('../img/logo.png')} style={{width : 100 , height: 100 , marginBottom: 40}} />

        <Text style={{color: "white" , fontSize: 22 , fontWeight: 'bold' , marginTop: 30, textAlign: 'center'}}>Les meilleures blagues du web </Text>
        <Text style={{color: "white" , fontSize: 20 , marginTop: 5 , fontWeight: 'bold' , textAlign: 'center'}}> Plus de 5000 blagues </Text>
        <Text style={{color: "#cccccc" , fontSize: 13 , marginTop: 5 , textAlign: 'center'}}> Attention cette app peut provoquer des crises de fou rire </Text>


      </View>


                <Button style={styles.button} title="Commencer"
                    onPress={() => this.props.navigation.navigate("Tab")}

                   >


                  <Text style={styles.text}> Commencer </Text>
                </Button>
    </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  button: {
     marginTop:5,
     marginBottom: 50,
     borderRadius: 50,         // Rounded border
     borderWidth: 2,           // 2 point border widht
     borderColor: '#233b6d',   // White colored border
     paddingHorizontal: 120,    // Horizontal padding
     paddingVertical: 10,      // Vertical padding
     backgroundColor:"#233b6d",
     alignSelf:'center',
     shadowColor: '#000000',
   shadowOffset: {
     width: 0,
     height: 3
   },
   shadowRadius: 5,
   shadowOpacity: 1.0

   },
   text: {
       color: 'white',
       fontWeight: 'bold',


     },
});
