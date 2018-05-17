/* @flow */
import {Right, ListItem, Container, Content, List, Icon, Body, Left, Switch, Header, Title} from 'native-base';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Parametres extends Component {
  render() {
    return (
      <Container>
        <Header>
              <Body>
                  <Title style={{color : 'white'}}>Parametres</Title>
              </Body>

       </Header>

        <Content>
          <List>
          <ListItem itemDivider>
             <Text>Notifications</Text>
           </ListItem>
            <ListItem icon last>
              <Left>
                <Icon style={{color : "#233b6d"}} name="md-notifications" />
              </Left>
              <Body>
                <Text>Activer Notifications</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>
            </ListItem>

            <ListItem itemDivider>
               <Text>Social</Text>
             </ListItem>
             <ListItem icon >
               <Left>
                 <Icon style={{color : "#233b6d"}} name="md-share" />
               </Left>
               <Body>
                 <Text>Partager l'application</Text>
               </Body>

             </ListItem>
             <ListItem icon >
               <Left>
                 <Icon style={{color : "#233b6d"}} name="md-thumbs-up" />
               </Left>
               <Body>
                 <Text>Aimer notre page</Text>
               </Body>

             </ListItem>
             <ListItem icon last>
               <Left>
                 <Icon style={{color : "#233b6d"}} name="md-link" />
               </Left>
               <Body>
                 <Text>Visitez notre site</Text>
               </Body>

             </ListItem>



             <ListItem itemDivider >
                <Text>Feedback</Text>
              </ListItem>

              <ListItem icon last>
                <Left>
                  <Icon style={{color : "#233b6d"}} name="md-mail" />
                </Left>
                <Body>
                  <Text>Envoyez nous un Feedback</Text>
                </Body>

              </ListItem>


          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
