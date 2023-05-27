/* eslint-disable react-native/no-inline-styles */
//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MenuBar from './src/components/MenuBar';
import Header from './src/components/Header';
import Jadwal from './src/components/Jadwal';
// create a component
const MyComponent = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([
    {category: 'Artikel'},
    {category: 'Konsultasi'},
    {category: 'Obat'},
    {category: 'Cari Dokter'},
    {category: 'Klinik Terdekat'},
    {category: 'Rumah Sakit'},
  ]);
  const [article, setArticle] = useState([
    {
      judul: 'Resep Rahasia agar tetap sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60 an',
      image: require('./src/image/1.jpg'),
    },
    {
      judul: 'Resep Rahasia agar tetap sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60 an',
      image: require('./src/image/1.jpg'),
    },
    {
      judul: 'Resep Rahasia agar tetap sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60 an',
      image: require('./src/image/1.jpg'),
    },
    {
      judul: 'Resep Rahasia agar tetap sehat',
      deskripsi: 'inilah resep rahasia agar anda tetap sehat di umur 60 an',
      image: require('./src/image/1.jpg'),
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, marginHorizontal: 20, marginTop: 10}}>
        <Header search={search} setSearch={setSearch} />
        <Jadwal />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Kategori</Text>
          <TouchableOpacity>
            <Text style={{color: 'orange'}}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={category}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  // flexDirection: 'row',

                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 10,
                  elevation: 3,
                  borderRadius: 25,
                }}>
                <Text>{item.category}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            marginBottom: 20,
          }}>
          <FlatList
            data={article}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  // flexDirection: 'row',

                  // paddingVertical: 10,
                  // paddingHorizontal: 10,
                  backgroundColor: 'white',
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 10,
                  elevation: 3,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flex: 1,
                    height: 200,
                    marginBottom: 10,
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      flex: 1,
                    }}
                    imageStyle={{
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    padding: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      borderColor: 'white',
                      borderWidth: 1,
                    }}
                  />
                  <Text style={{fontSize: 18}}>{item.judul}</Text>
                  <Text>{item.deskripsi}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <MenuBar />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

//make this component available to the app
export default MyComponent;
