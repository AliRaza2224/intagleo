import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../store/actions/user.action';
import axios from 'axios';
const { API_BASE_URL } = process.env

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

export default function LoginCover() {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  const SignIn = async (values) => {
    dispatch(userLogin(values))
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
              Sign in
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={(values, { resetForm }) => {
                SignIn(values);
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
                    className="text-orange"
                  />
                  {errors.email && touched.email ? (
                    <p style={{ fontSize: "10px", color: "red" }}>
                      {errors.email}
                    </p>
                  ) : null}
                  <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      id="password"
                      required
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      type={passwordShown ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePassword}
                            onMouseDown={togglePassword}
                            edge="end"
                          >
                            {passwordShown ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  {errors.password && touched.password ? (
                    <p style={{ fontSize: "10px", color: "red" }}>
                      {errors.password}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="custom-button"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                  >
                    Log In
                  </Button>
                  <Grid container spacing={2} >
                    <Grid item xs={4} textAlign="left">
                      <Link to="/forget-password" variant="body2" >
                        Forget Password?
                      </Link>
                    </Grid>
                    <Grid item xs={8} textAlign="right">
                      Don't have an account? 
                      <Link to="/sign-up" variant="body2">
                        {" "}Sign Up
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