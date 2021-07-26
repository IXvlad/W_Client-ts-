import { FC, useState, useEffect } from 'react';
import {
  Paper,
  TableBody,
  TableCell,
  Table,
  TableRow,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import UseTable from '../UseTable';

import { IResultWelding } from '../models/ResultWelding';
import { IResWeldMaterials } from '../../../models/resWeldMaterials';
import { HeadCell } from '../models/HeadCells';

import { useSelector } from '../../../hooks/useSelector';

interface ResultWeldingTableProps {
  headCells: HeadCell[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      background: theme.palette.background.default,
    },
  })
);

const ResultWeldingTable: FC<ResultWeldingTableProps> = ({ headCells }) => {
  const classes = useStyles();
  const { resWelding } = useSelector((state) => state.record);
  const [resultWelding, setResultWelding] = useState<IResultWelding[]>([
    {
      material1: '',
      material2: '',
      weldingResult: '',
    },
  ]);

  const [filterFn, setFilterFn] = useState({
    fn: (items: IResultWelding[]) => {
      return items;
    },
  });
  const { TblContainer, TblHead, RecordsAfterPagingAndSorting } = UseTable(
    headCells,
    resultWelding,
    filterFn
  );

  const handleResultWelding = (resWelding: IResWeldMaterials | null) => {
    let res: IResultWelding[] = [];
    if (resWelding !== null) {
      if (resWelding.notData.length !== 0) {
        resWelding.notData.forEach((item) => {
          res.push({
            material1: item.material1,
            material2: item.material2,
            weldingResult: item.weldingResult,
          });
        });
      }
      if (resWelding.qualityСonnection.length !== 0) {
        resWelding.qualityСonnection.forEach((item) => {
          res.push({
            material1: item.material1,
            material2: item.material2,
            weldingResult: item.weldingResult,
          });
        });
      }
      if (resWelding.poorQualityConnections.length !== 0) {
        resWelding.poorQualityConnections.forEach((item) => {
          res.push({
            material1: item.material1,
            material2: item.material2,
            weldingResult: item.weldingResult,
          });
        });
      }
      setResultWelding(res);
    }
  };

  useEffect(() => {
    handleResultWelding(resWelding);
  }, [resWelding]);

  return (
    <Paper className={classes.paper}>
      <TblContainer>
        <Typography variant="h6" component="h1" style={{ margin: '10px' }}>
          Свариваемость материалов
          <hr />
        </Typography>
        <Table aria-label="collapsible table">
          <TblHead />
          <TableBody>
            {RecordsAfterPagingAndSorting().length > 0 ? (
              RecordsAfterPagingAndSorting().map((item: IResultWelding, i) => (
                <TableRow key={i}>
                  <TableCell>{item.material1}</TableCell>
                  <TableCell>{item.material2}</TableCell>
                  <TableCell>{item.weldingResult}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headCells.length}>
                  У нас нет информации о свариваемости выбранных материалов, с
                  помощью указанного типа сварки.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TblContainer>
    </Paper>
  );
};
export default ResultWeldingTable;
