import React from 'react';
import {
	TableCell,
	TableHead,
	TableRow,
	TableSortLabel,
} from '@material-ui/core';

const Pagination = (props) => {
	const { valueToOrderBy, orderDirection, handleRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};
	return (
		<TableHead>
			<TableRow>
				<TableCell style={{ width: '10%' }} key='id'>
					<TableSortLabel
						active={valueToOrderBy === 'id'}
						direction={valueToOrderBy === 'id' ? orderDirection : 'asc'}
						onClick={createSortHandler('id')}
					>
						ID
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='name'>
					<TableSortLabel
						active={valueToOrderBy === 'name'}
						direction={valueToOrderBy === 'name' ? orderDirection : 'asc'}
						onClick={createSortHandler('name')}
					>
						Name
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='state'>
					<TableSortLabel
						active={valueToOrderBy === 'email'}
						direction={valueToOrderBy === 'email' ? orderDirection : 'asc'}
						onClick={createSortHandler('email')}
					>
						Email
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='address'>
					<TableSortLabel
						active={valueToOrderBy === 'address'}
						direction={valueToOrderBy === 'address' ? orderDirection : 'asc'}
						onClick={createSortHandler('address')}
					>
						Address
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }} key='loyalCustomer'>
					<TableSortLabel
						active={valueToOrderBy === 'loyalCustomer'}
						direction={valueToOrderBy === 'loyalCustomer' ? orderDirection : 'asc'}
						onClick={createSortHandler('loyalCustomer')}
					>
						Loyal Customer
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					<TableSortLabel
						active={valueToOrderBy === 'vehicleRegNo'}
						direction={valueToOrderBy === 'vehicleRegNo' ? orderDirection : 'asc'}
						onClick={createSortHandler('vehicleRegNo')}
					>
						vehicleRegNo
					</TableSortLabel>
				</TableCell>
				<TableCell style={{ width: '15%' }}>
					Actions

				</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default Pagination;
