import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Team Voting App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#ff00ff'
  },
  text:{
    padding: 25,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

