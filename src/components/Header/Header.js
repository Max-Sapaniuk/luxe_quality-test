import {useState} from "react";
import {Box, Button, Divider, Menu, MenuItem, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {useDispatch, useSelector} from "react-redux";
import {changeIsLanguageOpen, changeIsCurrencyOpen, setNewValue} from "../../redux/headerSlice";
import logo from "./logo.png";

function Header() {
    let header = useSelector(state => state.header);
    let dispatch = useDispatch();

    const [anchorLanguage, setAnchorLanguage] = useState(null);
    const [anchorCurrency, setAnchorCurrency] = useState(null);

    return (
        <Box bgcolor="blue" color="#697A83" display="flex" justifyContent="center" height="75px">
            <Box display="flex" justifyContent="space-between" bgcolor="#2C353A" width="1100px" height="70px">
                <Box display="flex" alignItems="center" justifyContent="center">
                    <img src={logo} alt="Logo" width="70px"/>
                    <Typography textAlign="left">Портал оренди та прокату<br/>товарів та послуг</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Button variant="contained"
                            endIcon={<AddIcon/>}
                            sx={{
                                color: 'white',
                                textTransform: 'none',
                                backgroundColor: '#F59440',
                                borderRadius: '20px',
                                ":hover": {
                                    backgroundColor: '#FAAF6E',
                                }
                            }}>
                        Здати в оренду
                    </Button>
                    <Button variant="text"
                            startIcon={<LoginIcon/>}
                            sx={{
                                color: "#697A83",
                                textTransform: 'none',
                                ":hover": {
                                    color: 'white',
                                }
                            }}>
                        Увійти
                    </Button>
                    <Divider sx={{ height: 35, m: 1, borderColor: "#697A83" }} orientation="vertical" />
                    <Box>
                        <Button variant="text"
                                endIcon={header.language.isOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                                onClick={(event) => {
                                    setAnchorLanguage(event.currentTarget)
                                    dispatch(changeIsLanguageOpen())
                                }}
                                sx={{
                                    color: "#697A83",
                                    textTransform: 'none',
                                    ":hover": {
                                        color: 'white',
                                    }
                                }}>
                            {header.language.value}
                        </Button>
                        <Menu
                            open={header.language.isOpen}
                            anchorEl={anchorLanguage}
                            onClose={() => dispatch(changeIsLanguageOpen())}
                        >
                            {header.language.allValues.map((value) => {
                                return (
                                    <MenuItem
                                        onClick={() => {

                                            dispatch(setNewValue({type: 'language', value: value}))
                                        }}>
                                        {value}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                    <Box>
                        <Button variant="text"
                                endIcon={header.currency.isOpen ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                                onClick={(event) => {
                                    setAnchorCurrency(event.currentTarget)
                                    dispatch(changeIsCurrencyOpen())
                                }}
                                sx={{
                                    color: "#697A83",
                                    textTransform: 'none',
                                    ":hover": {
                                        color: 'white',
                                    }
                                }}>
                            {header.currency.value}
                        </Button>
                        <Menu
                            open={header.currency.isOpen}
                            anchorEl={anchorCurrency}
                            onClose={() => dispatch(changeIsCurrencyOpen())}
                        >
                            {header.currency.allValues.map((value) => {
                                return (
                                    <MenuItem
                                        onClick={() => {
                                            dispatch(setNewValue({type: 'currency', value: value}))
                                        }}>
                                        {value}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;
