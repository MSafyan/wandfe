import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/employees/TableContent'

import { connect } from "react-redux";
import { EMPLOYEE_LIST,EMPLOYEE_COUNT } from "../../actions/employeeActions";

import Layout from '../../components/layout/Index'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))

function EmployeeList({EMPLOYEE_LIST,EMPLOYEE_COUNT,history}) {

    const classes = useStyles();
    React.useEffect(()=>{
        EMPLOYEE_LIST();
        EMPLOYEE_COUNT();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <PageHeader
                title="Employee List"
                subTitle="Click on action icon to update details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar>
                </Toolbar>
                    <TableContent history={history}/>
            </Paper>
        </Layout>
    )
}


const mapStateToProps = state => ({
    employeeList:state.employee.employeeList
});

export default connect(
    mapStateToProps,
    { EMPLOYEE_LIST,EMPLOYEE_COUNT}
)(EmployeeList);
