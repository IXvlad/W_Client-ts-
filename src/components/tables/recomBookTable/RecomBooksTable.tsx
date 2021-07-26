import React, { FC, useState } from 'react';
import {
  Paper,
  TableBody,
  TableCell,
  Table,
  TableRow,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import GetAppIcon from '@material-ui/icons/GetApp';

import UseTable from '../UseTable';
import ActionButton from '../../controls/ActionButton';
import Loader from '../../Loader';

import { useActions } from '../../../hooks/useActions';

import { HeadCell } from '../models/HeadCells';
import { IRecomBookDTO } from '../../../models/DTO/recomBookDTO';
import { useSelector } from '../../../hooks/useSelector';

interface RecomBookTableProps {
  headCells: HeadCell[];
  data: IRecomBookDTO[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      background: theme.palette.background.default,
    },
  })
);

const RecomBooksTable: FC<RecomBookTableProps> = ({ headCells, data }) => {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.source_recomBook);
  const { fetchRecomBook } = useActions();
  const [filterFn, setFilterFn] = useState({
    fn: (items: IRecomBookDTO[]) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, RecordsAfterPagingAndSorting } =
    UseTable(headCells, data, filterFn);

  return (
    <Paper className={classes.paper}>
      <TblContainer>
        <Typography variant="h6" component="h1" style={{ margin: '10px' }}>
          Рекомендованная литература
          <hr />
        </Typography>
        <Table aria-label="collapsible table">
          <TblHead />
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={headCells.length} height="200px">
                  <Loader size="80px" />
                </TableCell>
              </TableRow>
            ) : (
              RecordsAfterPagingAndSorting().map((item: IRecomBookDTO) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell align="left">
                    {item.title.toLowerCase() !==
                    'Отсутствует'.toLowerCase() ? (
                      <ActionButton color="primary">
                        <GetAppIcon
                          fontSize="small"
                          onClick={() => {
                            fetchRecomBook(item.id);
                          }}
                        />
                      </ActionButton>
                    ) : (
                      <></>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TblContainer>
      <TblPagination />
    </Paper>
  );
};
export default RecomBooksTable;
