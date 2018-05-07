import React from 'react';
import { Container, Header, Item , Input ,  Separator , Thumbnail, ListItem , Content , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider , Title } from 'native-base'
import {Image , ListView , StatusBar} from 'react-native'
import {StackNavigator , TabNavigator} from 'react-navigation'
import { Root } from "native-base";
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import axios from 'axios';
import Blaguedujour from './Screens/Blaguedujour'
import Tab from './Tab'
import Allblagues from './Screens/Allblagues'
import Categorie from './Screens/Categorie'
import Favoris from './Screens/Favoris'
import Blague from './Screens/Blague'



const App =  StackNavigator({

  Blaguedujour : {
    screen: Blaguedujour ,


  },
  Blague : {
    screen: Blague ,


  },
  Favoris : {
    screen: Favoris ,


  },
  Categorie : {
    screen: Categorie ,


  },
  Allblagues : {
    screen: Allblagues ,


  },


  Tab : {
    screen : Tab
  },

},
{
    initialRouteName: "Tab",
    headerMode: "none",
},


);


export default () =>
<Root>
<StatusBar backgroundColor="#233b6d" />
<App style = {{backgroundColor:"white" }} />
</Root>;
