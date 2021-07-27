import {useState} from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return <MapView region={region} onRegionChange={setRegion}/>;
};

export default Map;
