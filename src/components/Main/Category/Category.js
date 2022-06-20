import {
    Box,
    Button, Checkbox,
    Collapse, Divider,
    Drawer, FormControlLabel, FormGroup, IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Rating, TextField,
    Typography
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useSelector} from "react-redux";
import {useState} from "react";

function Category() {
    const [isDrawerOpen, changeIsDrawerOpen] = useState(true);
    const [isSubCategoriesOpen, changeIsSubCategoriesOpen] = useState(true);
    const currency = useSelector(state => state.header.currency.value);

    return (<>
        <Box position={"relative"}>
            <Drawer open={isDrawerOpen}
                    variant="persistent"
                    PaperProps={{style: {height: "calc(100%-165px)", top: '165px', width: '250px'}}}>
                <Box>
                    <Box textAlign="center"
                         padding="17px"
                         bgcolor="#E8EFF0">
                        <Button variant="contained" sx={{
                            borderRadius: "50px",
                            textTransform: "none",
                        }} endIcon={<MapIcon/>}>Переглянути список</Button>
                    </Box>
                    <Box fontSize="14px" fontWeight="bold">
                        <Box>
                            <List component="nav">
                                <ListItemButton style={{
                                    color: 'blue',
                                }}>
                                    <ArrowBackIosNewIcon fontSize="10px"/>
                                    <ListItemText primary={<Typography fontSize="14px">Всі категорії</Typography>}/>
                                </ListItemButton>
                                <Collapse in={true} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Link href="#" underline="none" fontSize="14px"
                                                  marginLeft="30px" style={{
                                                cursor: 'not-allowed',
                                                color: 'gray',
                                                textDecoration: 'none',
                                            }}>
                                                Нерухомість
                                            </Link>
                                        </ListItem>
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                        <Box>
                            <List component="nav">
                                <ListItemButton
                                    onClick={() => changeIsSubCategoriesOpen(!isSubCategoriesOpen)}>
                                    <ListItemText primary={
                                        <Typography style={{
                                            textTransform: 'uppercase',
                                            fontSize: "14px",
                                            color: 'gray',
                                            fontWeight: 'bold',
                                        }}>
                                            Підкатегорії
                                        </Typography>}
                                    />
                                    {isSubCategoriesOpen ? <ExpandLess/> : <ExpandMore/>}
                                </ListItemButton>
                                <Collapse in={isSubCategoriesOpen} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem>
                                            <Link href="#" underline="none">
                                                Квартири
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="#" underline="none">
                                                Будинки
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="#" underline="none">
                                                Апартаменти
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="#" underline="none">
                                                Кімнати
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <Link href="#" underline="none">
                                                Комерційна нерухомість
                                            </Link>
                                        </ListItem>
                                    </List>
                                    <Button endIcon={<ExpandMore/>}
                                            sx={{marginLeft: '8px', textTransform: 'none'}}>Ще</Button>
                                </Collapse>
                            </List>
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: 'gray',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                margin: '16px 0 0 16px',
                                fontWeight: 'bold',
                            }}>
                                Ціна оренди({currency})
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <TextField
                                    inputProps={{
                                        placeholder: 'Min',
                                        style: {
                                            textAlign: 'right',
                                            backgroundColor: '#E8EFF0',
                                            width: "80px",
                                            padding: '10px 20px 10px 0',
                                        },
                                    }}
                                />
                                <Divider sx={{height: 40, m: 2, borderColor: "#697A83"}}
                                         orientation="vertical"/>
                                <TextField
                                    inputProps={{
                                        placeholder: 'Max',
                                        style: {
                                            backgroundColor: '#E8EFF0',
                                            width: "80px",
                                            padding: '10px 0 10px 20px',
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{
                                color: 'gray',
                                fontSize: '14px',
                                textTransform: 'uppercase',
                                margin: '16px 0 0 16px',
                                fontWeight: 'bold',
                            }}>
                                Пункт видачі
                            </Typography>
                            <FormGroup sx={{marginLeft: '16px'}}>
                                <FormControlLabel control={<Checkbox/>}
                                                  label="Відділення GUP"/>
                            </FormGroup>
                        </Box>
                        <Box textAlign="center">
                            <Typography sx={{fontWeight: 'bold', fontSize: '14px'}}>Оцініть цю категорію</Typography>
                            <Rating name="half-rating" defaultValue={4.5} precision={0.5}/>
                            <Typography sx={{color: 'gray', fontSize: '10px'}}>Всього голосів: 37</Typography>
                        </Box>
                    </Box>
                </Box>
            </Drawer>
            <Box sx={isDrawerOpen ? {
                position: 'absolute',
                left: '250px',
                top: '100px',
                transitionDuration: '0.2s',
                zIndex: '1',
            } : {
                position: 'absolute',
                left: '0px',
                top: '100px',
                transitionDuration: '0.2s',
                zIndex: '1',
            }}>
                <IconButton onClick={() => changeIsDrawerOpen(!isDrawerOpen)} sx={{
                    borderRadius: '0',
                    backgroundColor: 'white',
                    ":hover": {
                        backgroundColor: '#f1f0f0',
                    }
                }}>
                    {isDrawerOpen ? <ArrowBackIosNewIcon/> : <ArrowForwardIosIcon/>}
                </IconButton>
            </Box>
        </Box>
    </>);
}

export default Category;
