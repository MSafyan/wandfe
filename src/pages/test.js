// material
import React from 'react'
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
// import Page from '../components';
// import Layout from '../components/layout/Index'
import { connect } from "react-redux";

// ----------------------------------------------------------------------

 function DashboardApp() {
  return (
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>

        </Grid>
      </Container>
  );
}

const mapStateToProps = state => ({
  revenueData: state.order.revenueData,
  loading:state.customer.loading,
  customerYearly:state.customer.customerYearly
});

export default connect(
  mapStateToProps,
  null
)(DashboardApp);