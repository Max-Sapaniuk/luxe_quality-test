import {GoogleMap, LoadScript, Marker, MarkerClusterer} from "@react-google-maps/api";
import {Box, IconButton} from "@mui/material";
import {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFlats, setNewCenter, setMapBounds} from "../../../redux/mainSlice";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 165px)',
};

function Map() {
    let dispatch = useDispatch();
    let main = useSelector((state) => state.main)
    let center = main.center
    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        setMap(map);
        console.log(map)
        setMapBounds(map.getBounds())
    }, []);
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);
    useEffect(() => {
        if (!main.isLoaded) {
            dispatch(fetchFlats());
        }
    })
    return (
        <Box>
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={8}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    onBoundsChanged={() => dispatch(setMapBounds({mapBounds: map.getBounds()}))}
                    options={{
                        zoomControlOptions: {
                            position: 3.0
                        },
                        panControl: false,
                        mapTypeControl: false,
                        streetViewControl: false,
                        fullscreenControl: false,
                    }}
                >
                    <Box textAlign="right">
                        <IconButton
                        sx={{
                            color: 'white',
                            backgroundColor: 'blue',
                            ":hover": {
                                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                            },
                            marginRight: '10px',
                            marginTop: '100px',
                        }}
                        onClick={() => {
                            if (navigator.geolocation) {
                                navigator.geolocation.getCurrentPosition(
                                    (position) => {
                                        const pos = {
                                            lat: position.coords.latitude,
                                            lng: position.coords.longitude,
                                        };
                                        dispatch(setNewCenter(pos))
                                    },
                                    () => {
                                        console.log('Error')
                                    }
                                );
                            } else {
                                // Browser doesn't support Geolocation
                                console.log('Error(Browser)')
                            }
                        }}><GpsFixedIcon/></IconButton>
                    </Box>
                    {main.isCenterSet ? <Marker
                        key={'usersLocation'}
                        icon={'assets/images/icons8-home-page-30.png'}
                        position={center}
                        clickable={false}
                    /> : <></>}
                    <MarkerClusterer>
                        {(clusterer) =>
                            main.flats.map((flat) => {
                                return (
                                    <Marker
                                        key={flat.id}
                                        position={{
                                            lat: flat.lat,
                                            lng: flat.lng,
                                        }}
                                        clusterer={clusterer}
                                        onClick={(event) => console.log(event.latLng.lng())}
                                    />
                                )
                            })
                        }
                    </MarkerClusterer>
                </GoogleMap>
            </LoadScript>
        </Box>
    );
}

export default Map;
