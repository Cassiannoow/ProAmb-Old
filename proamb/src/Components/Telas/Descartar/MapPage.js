import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './MapPage.css'
import iconMaker from '../../../assets/img/icons/Map_pin_icon_green.svg.png'

const MapPage = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD73R3eF23pwqN1rmBNCJzttMUQUtZB1gw"
    })

    const position = {
        lat: -22.910555, 
        lng: -47.058985
    }

    return(
        <div className='map'>
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{
                            width: '100%',
                            height: '100%'
                        }}
                        center={position}
                        zoom={15}
                    >
                        <Marker className="marker" position={position} options={{
                            label: {
                                text: "Posição Teste",
                                className: "map-marker"
                            },

                            icon: iconMaker

                        }}/>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}

export default MapPage