import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Body, Header, Left, Right, Title} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
const SubHeader = ({title}) => {
  return (
    <Header style={styles.header}>
      <Left>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.fontColor1} name="arrow-back" />
        </TouchableOpacity>
      </Left>
      <Body>
        <Title style={styles.fontColor2}>{title}</Title>
      </Body>
      <Right>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.icon} name="home-outline" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.icon} name="camera-outline" />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomColor: 'rgb(150,150,150)',
    height: 50,
    borderBottomWidth: 0.5,
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontColor1: {
    fontSize: 20,
    color: 'black',
  },
  fontColor2: {
    color: 'black',
  },
  icon: {
    fontSize: 23,
    color: 'black',
  },
});
export default SubHeader;