 import React from 'react';
import { Container, Header, Item ,H1, List ,Input , Segment , ListItem , Spinner , CardItem, Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider ,Badge, Card, Title } from 'native-base'
import {Image , ListView,FlatList,StyleSheet,ScrollView, View , Alert , StatusBar} from 'react-native'
import {StackNavigator} from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import axios from 'axios';
import Modal from 'react-native-modal'
//import Share, {ShareSheet} from 'react-native-share';
import { FontAwesome } from '@expo/vector-icons';
import { Share } from 'react-native';
import ElevatedView from 'react-native-elevated-view'
import NetworkError from '../Components/NetworkError'
import ShareButton from '../Components/ShareButton'
import FavButton from '../Components/FavButton'




export default class Blague extends React.Component {


  constructor(props) {
      super(props);
      this.state = {

        blagues : [],
        loading : false,
        connexionerror : false,
        skip : 0
      };
    }
    async componentWillMount() {
          await Expo.Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          });
          this.setState({fontsAreLoaded: true});
      }
  componentDidMount() {
      this.fetchBlagues()
    }

  fetchBlagues () {
      axios.get("https://api.mlab.com/api/1/databases/mdr/collections/blagues?q={'categorie':'"+this.props.navigation.state.params.categorie+"'}&apiKey=1fGwM71dXm6I9dvj2zlSQd1heGA3a1_D&l=50&sk="+this.state.skip)
      .then((response) => {
          this.setState({
            blagues : [...this.state.blagues , ...response.data],
            loading : true
          })

         })
     .catch((error) => {
        this.setState({connexionerror : true , loading : true})
        });

      }

    renderError() {

      if (this.state.connexionerror === true) {

        return (
            <NetworkError content="Les blagues ne sont pas disponibles" />
        )

      }

      }

      renderSpinner() {
        if (this.state.loading === false) {
          return (
            <Spinner color="orange" />
          )
        }
      }

       _renderItem = ({item}) => (



     <ElevatedView elevation={5} style={styles.stayElevated}>




                        <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                        {item.name}
                      </Text>
                      <View style={{flexDirection: 'row' , marginTop: 10}}>

                                    <ShareButton blague={item.name} categorie={item.categorie} />

                                    <FavButton blague={item.name} categorie={item.categorie} />
                    </View>


      </ElevatedView>
 );

 renderFooter = () => {
 if (!this.state.loading) return null;

 return (

    <Spinner color="orange" />

 );
};

handlemoreBlagues = () => {
 this.setState({
   skip : this.state.skip + 50
 },
 () => {

    this.fetchBlagues()
 })
}


  getItemLayout = (data, index) => (
   {length: 5, offset: 5 * index, index}
  );


        render() {

        return (


                    <StyleProvider style={getTheme(platform)}>
                    <Container style={{backgroundColor : "white"}}>
                    <Header>

                      <Left>
                          <Button transparent  onPress = {() => this.props.navigation.goBack()}>
                            <Text style={{color: "white"}}>Retour</Text>
                          </Button>

                      </Left>

                    <Body>
                        <Title  style={{color : 'white'}}>{this.props.navigation.state.params.categorie}</Title>
                    </Body>

                    <Right>
                    </Right>
                    </Header>

                    <View style={{flex: 1}}>

                    {this.renderSpinner()}
                    {this.renderError()}
                    <FlatList
                    data={this.state.blagues}
                    keyExtractor={item => item._id.$oid}
                    renderItem={this._renderItem}
                    ListFooterComponent={this.renderFooter}
                    onEndReached = {this.handlemoreBlagues}
                    onEndReachedThreshold={0.5}


                  />


                </View>


        </Container>
        </StyleProvider>



    );
  }
}




var styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
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
})
