/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 5,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal:20,
        marginBottom:10,
        borderRadius:5
      }}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="home" size={30} color="blue" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="calendar" size={30} color="#bdbdbd" />
        <Text>Jadwal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="chatbubbles" size={30} color="#bdbdbd" />
        <Text>Pesan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="person" size={30} color="#bdbdbd" />
        <Text>User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
