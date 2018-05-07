import React from 'react';
import { Container, Header, Item ,H1, List ,Input , Segment , ListItem ,CardItem, Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider ,Badge, Card, Title } from 'native-base'
import {Image , ListView,FlatList,StyleSheet,ScrollView, View , Alert , StatusBar , AsyncStorage} from 'react-native'
import {StackNavigator} from 'react-navigation'
import { AppLoading, Asset, Font } from 'expo'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import axios from 'axios';
import Modal from 'react-native-modal'
//import Share, {ShareSheet} from 'react-native-share';
import { FontAwesome } from '@expo/vector-icons';
import { Share } from 'react-native';






export default class Favoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          seg: 1,
          favoris : [],
          urgents : null ,
          events : null ,
          isModalVisible: false,
          visible : false
        };

      }


      _showModal = () => this.setState({ isModalVisible: true })

      _hideModal = () => this.setState({ isModalVisible: false })

     async componentWillMount() {
            await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            });
            this.setState({fontsAreLoaded: true});


    }
    componentDidMount() {
        this.fetchDons()
        
      }

      fetchDons () {
        axios.get('http://abdourahmane-1.000webhostapp.com/dondesang')
        .then((response) => {
            this.setState({dons : response.data})
           })
       .catch(function (error) {
            console.log(error);
          });

        }







        render() {

            // let shareOptions = {
            //     title: "",
            //     message: "",
            //     url: "https://sauvonsplus.com/",
            //     subject: "Share Link" //  for email
            //   };





        return (


                    <StyleProvider style={getTheme(platform)}>
                    <Container style={{backgroundColor : '#ecf0f1'}}>
                    <Header >

                    <Body>
                        <Title  style={{color : 'white'}}>Mes favoris</Title>
                    </Body>
{/*
                    <Right>
                      <Icon style={{color: "white"}} name="search" onPress={() => this.props.navigation.navigate("Search")} />
                    </Right> */}
                    </Header>

                    <Content style={{backgroundColor:'white'}}>

{/*


                                                  <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                                                       <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                                                          Bonjour mouhameda,

                                                          Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                                                         </Text>







                                                   <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                                                   <View style={{flexDirection: 'row' , marginTop: 10}}>

                                                     <Button transparent>
                                                                     <Icon active name="md-share" />


                                                     </Button>
                                                     <Button transparent style={{marginLeft: 5}}>
                                                                     <Icon  active name="md-trash" />


                                                     </Button>


                                                   </View>


                                            </Card>

                                            <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                                                 <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                                                    Bonjour mouhameda,

                                                    Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                                                   </Text>







                                             <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                                             <View style={{flexDirection: 'row' , marginTop: 10}}>

                                               <Button transparent>
                                                               <Icon active name="md-share" />


                                               </Button>
                                               <Button transparent style={{marginLeft: 5}}>
                                                               <Icon active name="md-trash" />


                                               </Button>


                                             </View>


                                      </Card>

                                      <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                                           <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                                              Bonjour mouhameda,

                                              Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                                             </Text>







                                       <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                                       <View style={{flexDirection: 'row' , marginTop: 10}}>

                                         <Button transparent>
                                                         <Icon active name="md-share" />


                                         </Button>
                                         <Button transparent style={{marginLeft: 5}}>
                                                         <Icon active name="md-trash" />


                                         </Button>


                                       </View>


                                </Card>

                                <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                                     <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                                        Bonjour mouhameda,

                                        Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                                       </Text>







                                 <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                                 <View style={{flexDirection: 'row' , marginTop: 10}}>

                                   <Button transparent>
                                                   <Icon active name="md-share" />


                                   </Button>
                                   <Button transparent style={{marginLeft: 5}}>
                                                   <Icon active name="md-trash" />


                                   </Button>


                                 </View>


                          </Card>

                          <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                               <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                                  Bonjour mouhameda,

                                  Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                                 </Text>







                           <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                           <View style={{flexDirection: 'row' , marginTop: 10}}>

                             <Button transparent>
                                             <Icon active name="md-share" />


                             </Button>
                             <Button transparent style={{marginLeft: 5}}>
                                             <Icon active name="md-trash" />


                             </Button>


                           </View>


                    </Card>
                    <Card style={{marginTop: 10 , alignItems: 'center' , justifyContent: 'center' , marginLeft: 10 , marginRight:  10}}>




                         <Text style={{textAlign: 'center' , marginTop: 5 , marginLeft: 5 , fontSize: 16}}>
                            Bonjour mouhameda,

                            Des projets correspondant à vos domaines de compétences viennent d'être publiés sur Codeur.com.


                           </Text>







                     <Text style={{color: 'orange' , marginTop: 10 , fontSize: 20 , fontWeight: 'bold'}}>Categorie ss</Text>

                     <View style={{flexDirection: 'row' , marginTop: 10}}>

                       <Button transparent>
                                       <Icon active name="md-share" />


                       </Button>
                       <Button transparent style={{marginLeft: 5}}>
                                       <Icon active name="md-trash" />


                       </Button>


                     </View>


              </Card> */}


              <View style={{ alignItems:'center' , flex : 1 , justifyContent: 'center' , marginTop: 50}}>



                             <Image  source={require('../img/fav.png')} style={{width : 250 , height : 250 , marginTop: 70}}/>

                             <Text style={{marginTop: 10 ,fontSize: 18, fontWeight: '400', color: "#233b6d"}}> Vous n'avez pas encore de favoris </Text>




              </View>


                    </Content>


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
})
