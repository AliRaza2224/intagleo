import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required("Require"),
    lastName: Yup.string().required("Require"),
    email: Yup.string().email("Invalid email").required("Require"),
    password: Yup.string()
        .min(6, "Too Short")
        .max(50, "Too Long")
        .required("Require"),
});



const theme = createTheme({
    shape: {
        borderRadius: 2,
    },
});

export default function SignupCover() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                {/* <CssBaseline /> */}
                <Grid item xs={12} sm={7} md={7} component={Paper} elevation={6} square>
                    <Typography component="h1" variant="h5" align='left' sx={{ my: 1, mx: 2 }}>
                        EMPBOOKS
                    </Typography>
                    <Box
                        sx={{

                            width: '50%',
                            margin: '10% auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}
                    >

                        <Typography component="h1" variant="h5" align='left'>
                            Sign Up
                        </Typography>
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                passwor: "",
                            }}
                            validationSchema={SignUpSchema}
                            onSubmit={(values, { resetForm }) => {

                                resetForm({ values: "" });

                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                                isValid,
                            }) => (
                                <Box component="form" noValidate sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                placeholder="First Name"
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                value={values.firstName}
                                                onChange={handleChange("firstName")}
                                                onBlur={handleBlur("firstName")}
                                            />
                                            {errors.firstName && touched.firstName ? (
                                                <p style={{ fontSize: "10px", color: "red" }}>
                                                    {errors.firstName}
                                                </p>
                                            ) : null}
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                placeholder="Last Name"
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                autoFocus
                                                value={values.lastName}
                                                onChange={handleChange("lastName")}
                                                onBlur={handleBlur("lastName")}
                                            />
                                            {errors.lastName && touched.lastName ? (
                                                <p style={{ fontSize: "10px", color: "red" }}>
                                                    {errors.lastName}
                                                </p>
                                            ) : null}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange("email")}
                                                onBlur={handleBlur("email")}
                                            />
                                            {errors.email && touched.email ? (
                                                <p style={{ fontSize: "10px", color: "red" }}>
                                                    {errors.email}
                                                </p>
                                            ) : null}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl sx={{ my: 1, width: '100%' }} variant="outlined" fullWidth>
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput

                                                    id="outlined-adornment-password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"
                                                />
                                                {errors.password && touched.password ? (
                                                    <p style={{ fontSize: "10px", color: "red" }}>
                                                        {errors.password}
                                                    </p>
                                                ) : null}
                                            </FormControl>
                                        </Grid>

                                    </Grid>


                                    <Button
                                        onClick={handleSubmit}
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container sx={{ mt: 2, mb: 3 }}>
                                        <Grid item>
                                            Already have an account?{" "}
                                            <Link to="/" variant="body2">
                                                Sign in
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                        </Formik>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={5} md={5} sx={{
                    backgroundColor: "#1D2C42",
                }}
                />
            </Grid>
        </ThemeProvider>
    );
}