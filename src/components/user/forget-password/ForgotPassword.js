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
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik } from "formik";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
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

export default function ForgotPassword() {
    const [showPassword, setShowPassword] = React.useState(false);

    

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

                        <Typography component="h1" variant="h4" align='left'>
                            Recover Your Password
                        </Typography>
                        <Typography component="h5" variant="p" align='left'>
                            Enter an Email to get a recovery link to reset your password.
                        </Typography>
                        <Formik
                            initialValues={{
                                email: "",
                                passwor: "",
                            }}
                            validationSchema={SignInSchema}
                            onSubmit={(values, { resetForm }) => {

                                resetForm({ values: "" });
                                console.log(values);
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
                                <Box component="form" noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        value={values.email}
                                        onChange={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                    />
                                    {errors.email && touched.email ? (
                                        <p style={{ fontSize: "10px", color: "red" }}>
                                            {errors.email}
                                        </p>
                                    ) : null}




                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={handleSubmit}
                                    >
                                        Send
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to="/" variant="body2">
                                                Back to Login
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