import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { graphql, Query } from 'react-apollo'
import gql from 'graphql-tag'

const Get_CONTACTS = gql`
 query {
   contacts {
    id
    # firstname
    # lastname
     }
  }
 `

export default class Contacts extends React.Component {
  render() {
    return (
      <Query query={Get_CONTACTS}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading!</Text>;
          if (error) return <Text>{error}</Text>;
          return (
           
            <View>

            </View>
          );
        }
        });
      </Query>
    );
  }
}
 