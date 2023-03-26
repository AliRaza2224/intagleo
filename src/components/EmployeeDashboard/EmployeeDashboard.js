import * as types from "../../store/actions/user.action"
import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function EmployeeDashboard() {
  const currentUser = useSelector((state) => state.auth.userLogin);
  console.log("current user-->>", currentUser)
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(types.saveUser(null))
    dispatch(types.LogedinUser(false))
    dispatch(types.saveToken(null))
  }
  return (
    <Container maxWidth="md">
      <Box sx={{
        width: '100%',
        margin: '10px',
        textAlign: 'end'
      }}>

        <Button variant="contained" onClick={handleSubmit}>Sign Out</Button>
      </Box>

      <Box sx={{

        width: '50%',
        margin: '10% auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Grid container spacing={2}>
          <Typography variant="h3" gutterBottom>
            Welcome to dashboard, {currentUser?.name}
          </Typography>
        </Grid>
      </Box>
    </Container>

  );
}

export default EmployeeDashboard;
