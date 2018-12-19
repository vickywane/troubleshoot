import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

class Contacts extends Component {
  render() {
    return (
      <Query query={getContacts} >

        {({ loading, error, data: { contacts } }
        ) => {
          if (loading) {
            return (
              <ActivityIndicator />
            );
          }
          
          if (error) {
            return "An error has ocurred";
          }

          return (
            <Fragment>{
              contacts.map(contact => 
                ( 
                <View>
                  <Text> {contact.contacts.firstname} </Text>
                </View>
                )
              )
            }</Fragment>
          )
        }
        });
      </Query>
    );
  }
}

const getContacts = gql`
 query {
   contacts {
    id
    firstname
    lastname
     }
  }
 `

const ContactsWrapper = graphql(getContacts)(Contacts)
export default ContactsWrapper
