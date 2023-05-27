/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity,
  StatusBar, Text,
  TextInput} from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  return (
    <View>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f4f4f4'} />
      <Text>Hello</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Nur Mizwari 👌</Text>
      <View
        // eslint-disable-next-line prettier/prettier
          style={{
          flexDirection: 'row',
          gap: 10,
        }}>
        <TextInput
          value={props.search}
          onChangeText={text => props.setSearch(text)}
          placeholder="Cari Informasi tentang kesehatan / dokter"
          style={{
            backgroundColor: 'white',
            elevation: 3,
            marginTop: 20,
            borderRadius: 5,
            padding:10
          }}
        />
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'blue',
            marginTop: 20,
            borderRadius: 5,
            paddingHorizontal: 10,
            elevation: 3,
          }}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
