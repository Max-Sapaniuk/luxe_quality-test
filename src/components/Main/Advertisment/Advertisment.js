import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

function Advertisment(props) {
    return (
        <>
            <Card sx={{height: 360, margin: '15px 5px 0 5px', borderRadius: '10px'}}>
                <Box position="relative">
                    <CardMedia
                        component="img"
                        height="240"
                        sx={{
                            objectFit: 'cover',
                        }}
                        image={props.image}
                    />
                    <Typography position="absolute"
                                bottom="0"
                                left="0"
                                color="white"
                                bgcolor="rgba(0, 0, 0, 0.7)"
                                padding="5px"
                                borderRadius="0 10px 0 0"
                                fontWeight="bold"
                                fontSize="12px"
                    >
                        {props.price} грн / доба
                    </Typography>
                </Box>
                <CardContent>
                    <Typography gutterBottom
                                variant="h5"
                                component="div"
                                fontSize="18px"
                                textOverflow="ellipsis"
                                whiteSpace="nowrap"
                                overflow="hidden"
                    >
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.address}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default Advertisment;
