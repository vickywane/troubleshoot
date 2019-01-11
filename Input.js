import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Query, Mutation, compose, graphql } from 'react-apollo'
import { gql } from 'apollo-boost'



const ADD_NAME = gql`
  mutation newReview( $input: String){
        newReview(  input: $comment){
        comment
        _id
      }
   }
  `
const Get_CONTACTS = gql`
query {  
  reviews {
    _id
   }
 }
`
const Input = props => {
    return reviews.map(r => (

        <View >
            <Mutation mutation={ADD_NAME}>
                {(newReview) => (
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput placeholder="MAKE A REVIEW"
                            onChangeText={(text) => props.updateComment(text)} />
                        <TouchableOpacity
                            onPress={() => {
                                addComment({
                                    variables: {
                                        input: {
                                            comment: props.updateComment,
                                            Id:
                                                props.data.reviews[Math.floor(Math.random() * 10)]._id
                                        }
                                    }
                                });
                            }} >
                            <Text>
                                SEND
                        </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Mutation>
        </View>
    ))
}
export default compose(graphql(Query))(Input);

 