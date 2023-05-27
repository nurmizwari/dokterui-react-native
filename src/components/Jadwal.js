/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View,Text,TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Jadwal = () => {
  return (
    <View>
       <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Jadwal Pemeriksaan</Text>
          <TouchableOpacity>
            <Text style={{color: 'orange'}}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 20,
            borderRadius: 10,
            marginTop: 10,
            elevation: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              gap: 20,
              alignItems: 'center',
            }}>
            <View>
              <Image
                source={require('../image/1.jpg')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderColor: 'white',
                  borderWidth: 1,
                }}
              />
            </View>

            <View>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Dr. Adi Renata
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Dokter Umum
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Icon name="time" size={30} color="#bdbdbd" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                27 Mei 2023
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Icon name="compass" size={30} color="#bdbdbd" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                RS MH Thamrin Cileungsi
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <Icon name="chevron-forward-circle" size={35} color="#bdbdbd" />
          </View>
        </TouchableOpacity>
    </View>
  );
};

export default Jadwal;