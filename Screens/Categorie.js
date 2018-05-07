import React, { Component } from 'react';
import {View , ImageBackground, StyleSheet , TouchableOpacity,Image,ScrollView,Dimensions} from 'react-native'
import { Container, Header,Item , List ,Input , ListItem , Content , AsyncStorage , Footer, FooterTab, Button, Left , Right , Body,  Icon, Text , StyleProvider , Title } from 'native-base'
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import axios from 'axios'
import GridView from 'react-native-super-grid';
import Blague from './Blague'

export default class Categorie extends Component {







    render() {


            const items = [
                { name: 'femmes', code: '#ff5a94' }, { name: 'toto', code: '#2ecc71' },
                { name: 'enfants', code: '#3498db' }, { name: 'blague ta mère', code: '#9b59b6' },
                { name: 'pays', code: '#34495e' }, { name: 'armée', code: '#16a085' },
                { name: 'mariage', code: '#27ae60' }, { name: 'vieux', code: '#2980b9' },
                { name: 'travail', code: '#8e44ad' }, { name: 'religion', code: '#2c3e50' },
                { name: 'blague courte', code: '#f1c40f' }, { name: 'alcool', code: '#e67e22' },
                { name: 'informatique', code: '#e74c3c' }, { name: 'foot', code: '#008080' },
                { name: 'ecole', code: '#6d63ae' }, { name: 'Blagues sur les fous', code: '#f39c12' },
                { name: 'hommes', code: '#d35400' }, { name: 'politique', code: '#c0392b' },

              ];

              return (
                <StyleProvider style={getTheme(platform)}>
                  <Container>

                       <Header style={{backgroundColor: "#233b6d"}}>
                             <Body>
                                 <Title style={{color : 'white'}}>Categories</Title>
                             </Body>
                             {/* <Right>
                                 <Icon style={{color:"white"}} name="search" onPress={() => this.props.navigation.navigate("Search")}/>
                             </Right> */}
                      </Header>

                      <Content>

                        <GridView
                          itemDimension={130}
                          items={items}
                          spacing={15}
                          style={styles.gridView}
                          renderItem={item => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Blague" , {categorie : item.name})} style={[styles.itemContainer, { backgroundColor: item.code }]}>

                              <Text style={styles.itemName}>{item.name.toUpperCase()}</Text>
                            </TouchableOpacity>
                          )}
                        />

                      </Content>

                    </Container>

                  </StyleProvider>

   );
 }
}




const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
