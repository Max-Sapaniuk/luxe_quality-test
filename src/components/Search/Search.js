import {Box, TextField, InputBase, InputAdornment, Divider, Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useFormik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    period: yup
        // .string('Enter your email')
        .date('Enter a valid email')
        // .required('Email is required'),
});

function Search() {
    const formik = useFormik({
        initialValues: {
            type: '',
            way: '',
            period: '',
            location: '',
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box bgcolor="#2C353A" display="flex" justifyContent="center" alignItems="center" height="90px">
            <form onSubmit={formik.handleSubmit}>
                <TextField variant="standard"
                           placeholder="Я хочу орендувати"
                           name="type"
                           error={formik.touched.type && Boolean(formik.errors.type)}
                           value={formik.values.type}
                           onChange={formik.handleChange}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <SearchIcon/>
                                   </InputAdornment>
                               ),
                               endAdornment: (
                                   <InputAdornment position="end">
                                       <Divider sx={{height: 30, m: 1, borderColor: "#697A83"}} orientation="vertical"/>
                                   </InputAdornment>
                               ),
                               style: {
                                   border: '5px solid #3072AC',
                                   borderRadius: "20px 0 0 20px",
                                   borderRight: 'none',
                                   height: '56px',
                                   backgroundColor: 'white',
                               },
                               disableUnderline: true,
                           }}/>
                <TextField variant="standard"
                           placeholder="Спосіб оренди"
                           name="way"
                           error={formik.touched.way && Boolean(formik.errors.way)}
                           value={formik.values.way}
                           onChange={formik.handleChange}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <SortIcon/>
                                   </InputAdornment>
                               ),
                               endAdornment: (
                                   <InputAdornment position="end">
                                       <Divider sx={{height: 30, m: 1, borderColor: "#697A83"}} orientation="vertical"/>
                                   </InputAdornment>
                               ),
                               style: {
                                   border: '5px solid #3072AC',
                                   borderRadius: "0",
                                   borderRight: 'none',
                                   borderLeft: 'none',
                                   height: '56px',
                                   backgroundColor: 'white',
                               },
                               disableUnderline: true,
                           }}/>
                <TextField variant="standard"
                           placeholder="Період оренди"
                           // type="date"
                           name="period"
                           error={formik.touched.period && Boolean(formik.errors.period)}
                           value={formik.values.period}
                           onChange={formik.handleChange}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <CalendarMonthIcon/>
                                   </InputAdornment>
                               ),
                               endAdornment: (
                                   <InputAdornment position="end">
                                       <Divider sx={{height: 30, m: 1, borderColor: "#697A83"}} orientation="vertical"/>
                                   </InputAdornment>
                               ),
                               style: {
                                   border: '5px solid #3072AC',
                                   borderRadius: "0",
                                   borderRight: 'none',
                                   borderLeft: 'none',
                                   height: '56px',
                                   backgroundColor: 'white',
                               },
                               disableUnderline: true,
                           }}/>
                <TextField variant="standard"
                           placeholder="Де шукати?"
                           name="location"
                           error={formik.touched.location && Boolean(formik.errors.location)}
                           value={formik.values.location}
                           onChange={formik.handleChange}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <LocationOnIcon/>
                                   </InputAdornment>
                               ),
                               style: {
                                   border: '5px solid #3072AC',
                                   borderRadius: "0",
                                   borderRight: 'none',
                                   borderLeft: 'none',
                                   height: '56px',
                                   backgroundColor: 'white',
                               },
                               disableUnderline: true,
                           }}/>
                <Button variant="contained"
                        type="submit"
                        sx={{
                            backgroundColor: "#3072AC",
                            color: "white",
                            height: "56px",
                            borderRadius: "0 20px 20px 0"
                        }}>Пошук</Button>
            </form>
        </Box>
    );
}

export default Search;
