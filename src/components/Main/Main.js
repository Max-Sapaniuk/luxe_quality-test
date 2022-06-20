import {
    Grid,
} from "@mui/material";
import Category from "./Category/Category";
import Map from "./Map/Map";
import Advertisment from "./Advertisment/Advertisment";
import {useSelector} from "react-redux";

function Main() {
    let flats = useSelector((state) => state.main.flats)
    let mapBounds = useSelector(state => state.main.mapBounds)
    return (
        <>
            <Grid container>
                <Grid item xs={10}>
                    <Category/>
                    <Map/>
                </Grid>
                <Grid item xs={2} overflow={"scroll"} height="calc(100vh - 165px)">
                    {
                        mapBounds !== null && mapBounds !== undefined && mapBounds.length !== 0 ?
                            flats.map((flat) => {
                                console.log(mapBounds)
                                if (mapBounds.contains({lng: flat.lng, lat: flat.lat}))
                                    return (
                                        <Advertisment {...flat}/>
                                    )
                                else
                                    return <></>
                            })
                            :
                            <></>
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default Main;
