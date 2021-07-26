import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TableRow,
  Table,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
  Typography,
  Box,
} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { useActions } from '../../../hooks/useActions';

import ActionButton from '../../controls/ActionButton';

import { IRecordDTO } from '../../../models/DTO/recordDTO';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
    descriptionCell: {
      //background: theme.palette.background.paper,
    },
  })
);

interface RowProps {
  data: IRecordDTO;
}
const Row: FC<RowProps> = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const { fetchRecomBook, fetchImage } = useActions();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {data.YDK}
        </TableCell>
        <TableCell align="left">{data.Number}</TableCell>
        <TableCell align="left">{data.Title}</TableCell>
        <TableCell align="left">
          {data.Authors.map((author) => {
            return (
              author.surname +
              ' ' +
              author.name +
              '. ' +
              author.lastname +
              '., '
            );
          })}
        </TableCell>
        <TableCell align="left">
          {data.RecommendedBook_Id != 1 ? (
            <ActionButton color="primary">
              <PictureAsPdfIcon
                fontSize="small"
                onClick={() => {
                  fetchRecomBook(data.RecommendedBook_Id);
                }}
              />
            </ActionButton>
          ) : (
            <></>
          )}
          <ActionButton color="primary">
            <ImageIcon
              fontSize="small"
              onClick={() => {
                fetchImage(data.Source_Id);
              }}
            />
          </ActionButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Содержание
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow key={data.Description}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.descriptionCell}
                    >
                      {data.Description}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default Row;
