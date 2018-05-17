/*Mohamed Aly Sidibe */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ShareButton from '../Components/ShareButton'
import FavButton from '../Components/FavButton'
import ButtonContainer from '../containers/ButtonContainer'
import ElevatedView from 'react-native-elevated-view'
class MylistItem extends React.PureComponent {
    render() {
    return (
      <ElevatedView elevation={10} style={styles.stayElevated} >

                <Text selectable={true} style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                      {this.props.blague}
                </Text>

                  <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>{this.props.categorie} </Text>

                 <View style={{flexDirection: 'row' , marginTop: 10}}>

                  <ShareButton blague={this.props.blague} categorie={this.props.categorie} />

                <ButtonContainer blague={this.props.blague} categorie={this.props.categorie}  />

                </View>
      </ElevatedView>

    );
  }
}


export default MylistItem;

const styles = StyleSheet.create({

  stayElevated: {
       alignItems:'center',
       justifyContent: 'center',
       flex: 1,
       alignSelf: 'center',
       width: '90%',
       height: '30%',
      margin: 10,
       backgroundColor: 'white',
       shadowColor: '#bfbfbf',
       shadowOffset: {
         width: 0,
         height: 7
       },
       shadowRadius: 10,
       shadowOpacity: 2.0
     },
});
