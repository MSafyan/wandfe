import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationHead from './PaginationHead';
import {
	Table,
	TableRow,
	TableCell,
	TablePagination,
	TableFooter,
	TableContainer,
	IconButton
} from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Email from './email'

import Link from '@material-ui/core/Link';

import { connect } from "react-redux";
import { CUSTOMER_EDIT } from "../../actions/customerAction";


const useStyles = makeStyles((theme) => ({
	footer: {
		fontSize: 'larger',
		marginTop: '1rem',
	},
}));

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

const sortedRowInformation = (rowArray, comparator) => {
	const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
	stabilizedRowArray.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedRowArray.map((el) => el[0]);
};

const TableContent = ({CUSTOMER_EDIT,customerList,loading,history}) => {
	const classes = useStyles();

	const [orderDirection, setOrderDirection] = useState('asc');
	const [valueToOrderBy, SetValueToOrderBy] = useState('ID');
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleRequestSort = (event, property) => {
		const isAccessending =
			valueToOrderBy === property && orderDirection === 'asc';
		SetValueToOrderBy(property);
		setOrderDirection(isAccessending ? 'desc' : 'asc');
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value), 10);
		setPage(0);
	};

	return (
		<div>
			{!loading ? (
				<>
					<TableContainer>
						<Table>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								customerList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((person, index) => (
									<TableRow key={index}>
										{/* just add the name of cells you want the data about */}
										<TableCell>{person.id}</TableCell>
										<TableCell>
											{person.firstName}
										</TableCell>
										<TableCell>
											{person.email}
										</TableCell>
										<TableCell>
											{person.address}
										</TableCell>
										<TableCell>
											{person.loyalCustomer || 'none'}
										</TableCell>
										<TableCell>
											{person.vehicles && person.vehicles.map((val)=>(<div key={val.id}>{val?.vehicleRegNo}</div>))}
										</TableCell>
										<TableCell>
											<Link onClick={()=>{history.push('/newcustomer');return CUSTOMER_EDIT(person)}}>
													<IconButton >
														<EditIcon/>
													</IconButton>
											</Link>
											{/* <Link onClick={()=>console.log('remove')}>
													<IconButton>
														<DeleteIcon color='secondary'/>
													</IconButton>
											</Link> */}
											<Email email={person.email} contactNo1={person.contactNo1} />
										</TableCell>
									</TableRow>
								))}
						</Table>
					</TableContainer>
					<TableFooter>
						<TablePagination
							className={classes.footer}
							color='primary'
							rowsPerPageOptions={[1, 5, 10]}
							component='div'
							count={customerList.length}
							rowsPerPage={rowsPerPage}
							// showFirstButton
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableFooter>
				</>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
  customerList:state.customer.customerList,
	loading:state.customer.loading
});

export default connect(
	mapStateToProps,
	{ CUSTOMER_EDIT }
)(TableContent);
