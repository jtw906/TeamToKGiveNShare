import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button, FlatList, Image, PermissionsAndroid} from 'react-native'
import {Card, FAB, Portal, Provider, BottomNavigation} from 'react-native-paper'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';



function Home(props) {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const [permissions, setPermissions] = React.useState({ locationPermission: false })

  const { open } = state;

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  const posts = [];
  const requests = [];

  const randomNumber = Array.from({length: 1000}, () => (Math.random() * 39));

  function insert_posts(long, lat){
    if(long.length == lat.length){
      for(let i = 0; i < long.length; i++){
        posts.push({coordinates: { latitude: lat[i], longitude: long[i] } })   
      }
    }
  };
  
  function insert_request(long, lat){
    if(long.length == lat.length){
      for(let i = 0; i < long.length; i++){
        requests.push({coordinates: { latitude: lat[i], longitude: long[i] } })   
      }
    }
  };

  insert_posts(randomNumber,randomNumber);
  insert_request(randomNumber, randomNumber);

  const [Location, setLocation] = useState({
    latitude: null,
    longitude: null,
    userAddress: null
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates());
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  function getCoordinates(){
    this.setLocation({
      latitude:  position.coords.latitude,
      longitude: position.coords.longitude
    })
  };

  // requestLocationPermission();
  // getLocation();

  // testing fucntion to get current locaitons
    return (
        <View style={styles.mapStyle} > 
        <MapView
            Provider = {PROVIDER_GOOGLE}
            showsUserLocation         
            style={{flex: 1}}
            coordinate={Location}   
            followsUserLocation={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true} 
            > 
            {posts.map((item, index) => (<Marker id='Posts' key={index} title="Post" pinColor='red' coordinate={item.coordinates} />))}
            {requests.map((item, index) => (<Marker id='Requests' key={index} title="Request" pinColor='blue' coordinate={item.coordinates} />))}
          </MapView>

            <FAB.Group
                style={styles.fab1}
                small={false}
                icon='dots-horizontal'
                open={open}
                actions={[
                    { icon: 'account-edit', 
                      label: 'Sign In / Sign Up',
                      onPress: () => props.navigation.navigate('Login') 
                    },
                    { icon: 'alert-circle-outline', 
                      label: 'New Requests',
                      onPress: () => props.navigation.navigate('Create') 
                    },
                    {
                      icon: 'alpha-s-circle-outline',
                      label: 'Share',
                      onPress: () => props.navigation.navigate('List') 
                    },
                    {
                      icon: 'email',
                      label: 'Messages',
                      onPress: () => console.log('Pressed Messages'),
                    },
                    {
                      icon: 'bell',
                      label: 'Notifications',
                      onPress: () => console.log('Pressed notifications'),
                    },
                  ]}
                  onStateChange={onStateChange}
                  onPress={() => {
                    if (open) {
                      // do something if the speed dial is open
                    }
                  }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fab1: {
        position: 'absolute',
        backdropColor: "",
        margin: 16,
        right: 0,
        bottom: 0,
    },
    fab2: {
        position: 'absolute',
        margin: 16,
        right: 80,
        bottom: 0
    },
    mapStyle: {  
      position: 'absolute',  
      top: 0,  
      left: 0,  
      right: 0,  
      bottom: 0,  
    }  
})

export default Home