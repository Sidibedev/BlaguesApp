import React from 'react';
import { Container, Spinner, Card, Header,Item , List ,Input ,CardItem, ListItem , Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider , Title } from 'native-base'
import {Image , ListView,FlatList,StyleSheet,Alert, View , RefreshControl, StatusBar ,NetInfo} from 'react-native'
import {StackNavigator} from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import axios from 'axios';
import SearchBar from 'react-native-searchbar';
import { FontAwesome } from '@expo/vector-icons';

import Placeholder from 'rn-placeholder';
import ElevatedView from 'react-native-elevated-view'
import NetworkError from '../Components/NetworkError'
import ShareButton from '../Components/ShareButton'
import FavButton from '../Components/FavButton'




function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

 export default class Blaguedujour extends React.Component {
constructor(props) {
   super(props)
   this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
        connexionerror : false,
        blague :[],
        results: [],
        fontsAreLoaded: false,
        loading:false,
        isReady: true,
        refreshing:false,
        date :'',
        isConnected : null

      }
    this._handleResults = this._handleResults.bind(this);



}

_onRefresh() {
  this.setState({refreshing: true});
  this.fetchServices().then(() => {
    this.setState({refreshing: false});
  });
}

renderSpinner() {
  if (this.state.loading === false) {
    return (
      <Spinner color="orange"/>
    )
  }
}


renderError() {

if (this.state.connexionerror === true) {

  return (

      <NetworkError hide={this.state.isConnected}/>
  )

}

}

// BUG: quand l'utilisateur n'a pas de connexion quand il demarre l'app , on lui met un msg d'erreur et quand il se connectionChange
// autpomatique les données sont fetchés.



componentDidMount() {

  NetInfo.isConnected.addEventListener(
      'connectionChange',
      this._handleConnectivityChange
  );
  NetInfo.isConnected.fetch().done(
      (isConnected) => { this.setState({isConnected});

    }
  );
  StatusBar.setHidden(false);

  var todayTime = new Date();
  var month = todayTime .getMonth() + 1;
  var day = todayTime .getDate();
  var year = todayTime .getFullYear();
  if (month < 10) {
    month = '0'+month

  }
  if (day<10) {
    day = '0'+day
  }
 var jour = year + "-" + month + "-" + day


  this.fetchBlagueDujour(jour)



}


componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    this.setState({
      isConnected,
    });
  };

fetchBlagueDujour (jour) {
  axios.get("https://api.mlab.com/api/1/databases/mdr/collections/blaguedujour?q={'date':'"+jour+"'}&apiKey=1fGwM71dXm6I9dvj2zlSQd1heGA3a1_D")
  .then((response) => {
      this.setState({blague : response.data , loading : true})

     })
 .catch( (error)  => {
   this.setState({connexionerror : true , loading : true})
    });

  }

async componentWillMount() {
     await Expo.Font.loadAsync({
       'Roboto': require('native-base/Fonts/Roboto.ttf'),
       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),

     });
     this.setState({isReady: false});


   }
_handleResults(results) {
    this.setState({ results });
  }


  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      require('../img/logo2.png'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

render() {

  if (this.state.isReady) {
    return (
      <AppLoading
        startAsync={this._loadAssetsAsync}
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />
    );
  }
  return (
   <StyleProvider style={getTheme(platform)}>
     <Container>

          <Header style={{backgroundColor: "#233b6d"}}>
                <Body>
                    <Title style={{color : 'white'}}>La blague du jour </Title>
                </Body>
                {/* <Right>
                    <Icon style={{color:"white"}} name="search" onPress={() => this.props.navigation.navigate("Search")}/>
                </Right> */}
         </Header>

         <Content>

            { this.renderSpinner() }

            { this.renderError() }

           {this.state.blague.map((result, i) => {

          return (

        <Card key={i} style={{marginTop: 20 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                  <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>

                    {result.blague}

                       </Text>


                 <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>{result.categorie}</Text>

                 <View style={{flexDirection: 'row' , marginTop: 10}}>

                   <ShareButton blague={result.blague} categorie={result.categorie} />
                   <FavButton blague={result.blague} categorie={result.categorie} />


                 </View>


          </Card>


        );
      })}







        </Content>
      </Container>
  </StyleProvider>



    );
  }
}
const styles = StyleSheet.create({

  stayElevated: {
       alignItems:'center',
       justifyContent: 'center',
       flex: 1,
       width: '90%',
       height: '30%',
       marginTop: 40,
      marginLeft: 20,
       backgroundColor: 'white',
       shadowColor: 'grey',
       shadowOffset: {
         width: 0,
         height: 7
       },
       shadowRadius: 10,
       shadowOpacity: 2.0
     },

});
