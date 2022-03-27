import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaginationHead from './PaginationHead';
import clsx from 'clsx';
import Export from './ExportDialog'

import {
	Table,
	TableRow,
	TableCell,
	TablePagination,
	TableFooter,
	TableContainer,
	Typography
} from '@material-ui/core';

import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
	bold:{
		fontWeight:'bold'
	},
	footer: {
		fontSize: 'larger',
		marginTop: '1rem',
	},
	statusButton:{
		fontSize:'0.7rem',
		padding:'0.1rem'
	},
	statusActive:{
		background:theme.palette.primary.light,
		padding:`${theme.spacing(1)}px`,
		borderRadius:'50%',
		width:'100px',
		textAlign:'center',
		fontWeight:'bold'
	}
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

const TableContent = ({type,loading,orderList}) => {
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
			{!loading && orderList?.length>0 ? (
				<>
					<TableContainer>
						<Table>
							<PaginationHead
								valueToOrderBy={valueToOrderBy}
								orderDirection={orderDirection}
								handleRequestSort={handleRequestSort}
							/>
							{sortedRowInformation(
								orderList,
								getComparator(orderDirection, valueToOrderBy)
							)
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((item, index) => (
									<TableRow key={index}>
										<TableCell>
											<Typography variant='body1' className={classes.bold}>
											{item.time}
											</Typography>
										</TableCell>
										<TableCell>
											{item.date || ''}
										</TableCell>
										<TableCell>
											{item.duration}
										</TableCell>
										<TableCell>
											<Typography variant='h5' className={clsx(classes.statusActive)}>
												{item.status || 'ACTIVE'}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body1' className={classes.bold}>
												{item.instructions.substring(0, 30)}
											</Typography>
											{item.address}
										</TableCell>
										<TableCell>
											{item.assigned ===null ? (
												<Typography variant='body2' className={classes.bold}>
													'No cleaner Assigned'
												</Typography>
											):null}
										</TableCell>
										<TableCell>
											${item.amount || 'Anonymous'}
											<Export item={item}/>
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
							count={orderList.length}
							rowsPerPage={rowsPerPage}
							// showFirstButton
							page={page}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</TableFooter>
				</>
			) : (
				<h3>Loading... Mrs {type} </h3>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
  orderList:state.order.orderList,
	loading:state.order.loading,
	type:state.auth.user?.type
});

export default connect(
	mapStateToProps,
	{ }
)(TableContent);
