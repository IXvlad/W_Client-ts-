import React, { FC, ReactElement, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
  Paper,
} from '@material-ui/core';

import { HeadCell } from './models/HeadCells';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      background: theme.palette.background.default,
      '& thead th': {
        color: theme.palette.text,
        backgroundColor: theme.palette.background.default,
      },
      '& tbody td': {},
      '& .MuiTableSortLabel-root.MuiTableSortLabel-active': {
        color: theme.palette.text.hint,
      },
      '& .MuiTableSortLabel-root:hover': {
        color: theme.palette.text,
      },
      '& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon':
        {
          color: theme.palette.text,
        },
    },
  })
);

export default function UseTable(
  headCells: HeadCell[],
  data: any,
  filterFn: {
    fn: (items: any) => any;
  }
) {
  const classes = useStyles();
  type direction = 'asc' | 'desc';
  const pages = [3, 5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState<direction>('asc');
  const [orderBy, setOrderBy] = useState('');

  useEffect(() => {
    setPage(0);
  }, [filterFn]);

  const ChangePageHandler = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const SortHandler = (cellId: string) => {
    const isAsc = orderBy === cellId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cellId);
  };
  // TO DO
  // убери тип any!
  //
  const ChangeRowsPerPageHandler = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // TO DO
  // По возможности убрать any в:
  //    DescendingComparator
  //    GetComparator
  //    TableSort
  //    RecordsAfterPagingAndSorting
  //
  const DescendingComparator = (a: any, b: any, orderBy: string) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  const GetComparator = (order: direction, orderBy: string) => {
    return order === 'desc'
      ? (a: any, b: any) => DescendingComparator(a, b, orderBy)
      : (a: any, b: any) => -DescendingComparator(a, b, orderBy);
  };
  const TableSort = (array: any[], comparator: any) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };
  const RecordsAfterPagingAndSorting = () => {
    return TableSort(filterFn.fn(data), GetComparator(order, orderBy)).slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    );
  };

  const TblContainer: FC = ({ children }): ReactElement => {
    return (
      <Table component={Paper} className={classes.root}>
        {children}
      </Table>
    );
  };
  const TblHead: FC = ({ children }): ReactElement => {
    return (
      <TableHead>
        <TableRow>
          {children}
          {headCells.map((cell) => (
            <TableCell
              align="left"
              key={cell.id}
              sortDirection={orderBy === cell.id ? order : false}
            >
              {cell.disableSorting ? (
                cell.label
              ) : (
                <TableSortLabel
                  active={orderBy === cell.id}
                  direction={orderBy === cell.id ? order : 'asc'}
                  onClick={() => {
                    SortHandler(cell.id);
                  }}
                >
                  {cell.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const TblPagination: FC = (): ReactElement => {
    return (
      <TablePagination
        component="div"
        page={page}
        rowsPerPageOptions={pages}
        rowsPerPage={rowsPerPage}
        count={filterFn.fn(data).length}
        onChangePage={ChangePageHandler}
        onChangeRowsPerPage={ChangeRowsPerPageHandler}
        labelRowsPerPage={'Строк для отображения'}
      />
    );
  };

  return {
    TblContainer,
    TblHead,
    TblPagination,
    RecordsAfterPagingAndSorting,
  };
}
