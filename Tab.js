import React from 'react';
import { Container, Header, Badge,Item , Input ,  Separator , Thumbnail, ListItem , Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider , Title } from 'native-base'
import {Image , ListView} from 'react-native'
import {StackNavigator , TabNavigator} from 'react-navigation'
import { Root } from "native-base";
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import axios from 'axios';
import Blaguedujour from './Screens/Blaguedujour'
import Allblagues from './Screens/Allblagues'
import Categorie from './Screens/Categorie'
import Favoris from './Screens/Favoris'




export default (MainScreenNavigator = TabNavigator({

  Blaguedujour : {screen : Blaguedujour},
  Allblagues : {screen : Allblagues},
  Categorie : {screen : Categorie},

  Favoris : {screen : Favoris}

},


{

  tabBarPosition: "bottom",
  swipeEnabled : true,
  tabBarComponent: props => {
    return (
        <StyleProvider style={getTheme(platform)}>
      <Footer>

        <FooterTab>
              <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Blaguedujour")}
              >
                <Icon name="md-calendar" />

              </Button>


            <Button
                            vertical
                            active={props.navigationState.index === 1}
                            onPress={() => props.navigation.navigate("Allblagues")}
                            >
                              <Icon name="md-happy" />

          </Button>

              <Button

              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Categorie")}

              >
                <Icon name="md-apps" />

              </Button>



              <Button vertical active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("Favoris")}>



                <Icon name="md-heart" />

              </Button>
        </FooterTab>

</Footer>

</StyleProvider>

);
    }
  }
));
