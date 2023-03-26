// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { Link, useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Formik, replace } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// import {
//   Alert,
//   FormControl,
//   IconButton,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
// // import Loader from "../../../components/modal/Loader";

// const SignInSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Require"),
//   password: Yup.string()
//     .min(6, "Too Short")
//     .max(50, "Too Long")
//     .required("Require"),
// });

// const theme = createTheme();

// export default function LoginForm() {
//   let navigate = useNavigate();
//   const [loginLoading, setLoginLoading] = useState(false);
//   const [resMessage, setResMessage] = useState(null);
//   console.log("res mmm ---------->", resMessage);
//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePassword = () => {
//     // When the handler is invoked
//     // inverse the boolean state of passwordShown
//     setPasswordShown(!passwordShown);
//   };

//   const SignIn = (values) => {
//     setLoginLoading(true);
//     axios
//       .post("http://localhost:5002/api/user-login", {
//         email: values.email,
//         password: values.password,
//       })
//       .then(function (response) {
//         setLoginLoading(false);
//         navigate("/add-new-car");
//         setResMessage(response.data.message);
//       })
//       .catch(function (error) {
//         console.log(error);
//         setLoginLoading(false);
//         setResMessage(error.response.data.message);
//       });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         {loginLoading === true ? <Loader /> : null}
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 3,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Log In
//           </Typography>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={SignInSchema}
//             onSubmit={(values, { resetForm }) => {
//               SignIn(values);
//               resetForm({ values: "" });
//             }}
//           >
//             {({
//               handleChange,
//               handleBlur,
//               handleSubmit,
//               values,
//               errors,
//               touched,
//               isValid,
//             }) => (
//               <Box component="form" noValidate sx={{ mt: 1 }}>
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={values.email}
//                   onChange={handleChange("email")}
//                   onBlur={handleBlur("email")}
//                   className="text-orange"
//                 />
//                 {errors.email && touched.email ? (
//                   <p style={{ fontSize: "10px", color: "red" }}>
//                     {errors.email}
//                   </p>
//                 ) : null}
//                 <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
//                   <InputLabel htmlFor="outlined-adornment-password">
//                     Password
//                   </InputLabel>
//                   <OutlinedInput
//                     fullWidth
//                     id="password"
//                     required
//                     autoComplete="current-password"
//                     value={values.password}
//                     onChange={handleChange("password")}
//                     onBlur={handleBlur("password")}
//                     type={passwordShown ? "text" : "password"}
//                     endAdornment={
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={togglePassword}
//                           onMouseDown={togglePassword}
//                           edge="end"
//                         >
//                           {passwordShown ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     }
//                     label="Password"
//                   />
//                 </FormControl>

//                 {errors.password && touched.password ? (
//                   <p style={{ fontSize: "10px", color: "red" }}>
//                     {errors.password}
//                   </p>
//                 ) : null}

//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   className="custom-button"
//                   sx={{ mt: 3, mb: 2 }}
//                   onClick={handleSubmit}
//                 >
//                   Log In
//                 </Button>
//                 {resMessage === null ? null : (
//                   <p style={{ color: "red" }}>{resMessage}</p>
//                 )}
//               </Box>
//             )}
//           </Formik>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }