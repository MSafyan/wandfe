import React from 'react'
import { Paper, makeStyles } from '@material-ui/core';
import TableContent from '../../components/orders/TableContent'
import SearchForm from '../../components/orders/SearchForm';
import { connect } from "react-redux";
import { ORDER_COUNT,ORDER_LIST } from "../../actions/orderAction";

import Layout from '../../components/layout/Index'

const useStyles = makeStyles(theme => ({
    pageContent: {
        padding: theme.spacing(3),
        background:'white',
        // background:theme.palette.primary.light,
        boxShadow:'none'
    },
    searchInput: {
        width: '75%'
    }
}))

function ORDER_List({ORDER_LIST,history}) {

    const classes = useStyles();
    React.useEffect(()=>{
        ORDER_LIST();
        // ORDER_COUNT();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <SearchForm/>
            <Paper className={classes.pageContent}>
                <TableContent history={history}/>
            </Paper>
        </Layout>
    )
}


const mapStateToProps = state => ({
    orderList:state.order.orderList,
    type:state.auth.user?.type
});

export default connect(
    mapStateToProps,
    { ORDER_LIST,ORDER_COUNT }
)(ORDER_List);
