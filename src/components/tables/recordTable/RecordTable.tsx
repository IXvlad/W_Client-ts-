import React, { FC, useState, useEffect } from 'react';
import {
  Table,
  TableCell,
  TableBody,
  Toolbar,
  InputAdornment,
  Divider,
  Paper,
  TableRow,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import CachedIcon from '@material-ui/icons/Cached';

import Loader from '../../Loader';
import UseTable from '../UseTable';
import Row from './Row';
import Input from '../../controls/Input';
import ActionButton from '../../controls/ActionButton';

import { HeadCell } from '../models/HeadCells';
import { IRecordDTO } from '../../../models/DTO/recordDTO';
import { IAuthor } from '../../../models/author';
import { useSelector } from '../../../hooks/useSelector';

interface TableProps {
  headCells: HeadCell[];
  data: IRecordDTO[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      background: theme.palette.background.default,
    },
    divider: { height: 28, margin: 4 },
  })
);

const RecordTable: FC<TableProps> = ({ headCells, data }) => {
  const classes = useStyles();
  const { isLoading } = useSelector((state) => state.record);
  const [inputValue, setInputValue] = useState<string>('');
  const [filterFn, setFilterFn] = useState({
    fn: (items: IRecordDTO[]) => {
      return items;
    },
  });

  const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const { TblContainer, TblHead, TblPagination, RecordsAfterPagingAndSorting } =
    UseTable(headCells, data, filterFn);
  const AuthorsToString = (authors: IAuthor[]): string => {
    let strAuthors: string = '';
    authors.forEach((author) => {
      strAuthors += author.lastname + ' ' + author.name + ' ' + author.surname;
    });
    return strAuthors;
  };
  useEffect(() => {
    let keyWords = inputValue.split(' ');
    let newItems: IRecordDTO[];
    setFilterFn({
      fn: (items) => {
        if (inputValue === '') return items;
        else {
          keyWords.forEach((element) => {
            if (element != null)
              items = items.filter(
                (a) =>
                  AuthorsToString(a.Authors)
                    .toLowerCase()
                    .includes(element.toLowerCase()) ||
                  a.Title.toLowerCase().includes(element.toLowerCase()) ||
                  a.Number?.toString()
                    .toLowerCase()
                    .includes(element.toLowerCase()) ||
                  a.Description.toLowerCase().includes(element.toLowerCase()) ||
                  a.YDK.toLowerCase().includes(element.toLowerCase())
              );
            newItems = items;
          });
          return newItems;
        }
      },
    });
  }, [inputValue]);

  return (
    <Paper className={classes.paper}>
      <Toolbar>
        <Input
          key={'search-input'}
          style={{ width: '40%' }}
          label="Ключевые слова..."
          value={inputValue}
          onChange={SearchHandler}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <Divider className={classes.divider} orientation="vertical" />
                <ActionButton color="primary">
                  <CachedIcon
                    fontSize="small"
                    onClick={() => {
                      setInputValue('');
                    }}
                  />
                </ActionButton>
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
      <TblContainer>
        <Table aria-label="collapsible table">
          <TblHead>
            <TableCell />
          </TblHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={headCells.length} height="200px">
                  <Loader size="80px" />
                </TableCell>
              </TableRow>
            ) : (
              RecordsAfterPagingAndSorting().map((record: IRecordDTO) => (
                <Row key={record.Id} data={record} />
              ))
            )}
          </TableBody>
        </Table>
        <TblPagination />
      </TblContainer>
    </Paper>
  );
};
export default RecordTable;
