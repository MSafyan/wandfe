import React from 'react'
import PageHeader from "../../components/general/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles,Toolbar } from '@material-ui/core';
import TableContent from '../../components/customers/TableContent'

import { connect } from "react-redux";
import { CUSTOMER_LIST,CUSTOMER_COUNT } from "../../actions/customerAction";

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

function CustomerList({CUSTOMER_LIST,CUSTOMER_COUNT,history}) {

    const classes = useStyles();
    // const [records] = useState(employeeService.getAllEmployees())
    // const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    // const handleSearch = e => {
    //     let target = e.target;
    //     setFilterFn({
    //         fn: items => {
    //             if (target.value === "")
    //                 return items;
    //             else
    //                 return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    //         }
    //     })
    // }
    React.useEffect(()=>{
        CUSTOMER_LIST();
        CUSTOMER_COUNT();
          // eslint-disable-next-line
    },[])

    return (
        <Layout>
            <PageHeader
                title="Customer List"
                subTitle="list of customer,click on Icon to message customer or update his details"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
                    {/* <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    /> */}
                </Toolbar>
                    <TableContent history={history}/>
            </Paper>
        </Layout>
    )
}


const mapStateToProps = state => ({
    customerList:state.customer.customerList
});

export default connect(
    mapStateToProps,
    { CUSTOMER_LIST,CUSTOMER_COUNT }
)(CustomerList);
