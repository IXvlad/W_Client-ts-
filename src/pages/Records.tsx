import { FC, useEffect } from 'react';
import DescriptionIcon from '@material-ui/icons/Description';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import PageHeader from '../components/PageHeader';
import RecordTable from '../components/tables/recordTable/RecordTable';
import RecomBooksTable from '../components/tables/recomBookTable/RecomBooksTable';

import { HeadCell } from '../components/tables/models/HeadCells';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import ChooseMaterials from '../components/ChooseMaterials';
import ResultWeldingTable from '../components/tables/resultWeldingTable/ResultWeldingTable';

const RecordTableHeadCells: HeadCell[] = [
  { id: 'YDK', label: 'УДК', disableSorting: false },
  { id: 'Number', label: 'Номер', disableSorting: false },
  { id: 'Title', label: 'Заголовок', disableSorting: false },
  { id: 'Authors', label: 'Авторы', disableSorting: false },
  { id: 'Action', label: '', disableSorting: true },
];
const RecomBookTableHeadCells: HeadCell[] = [
  { id: 'title', label: 'Заголовок', disableSorting: false },
  { id: 'Action', label: '', disableSorting: true },
];

const ResultWeldingTableHeadCells: HeadCell[] = [
  { id: 'material1', label: 'Материал №1', disableSorting: true },
  { id: 'material2', label: 'Материал №2', disableSorting: true },
  { id: 'weldingResult', label: 'Результат сварки', disableSorting: true },
];

const fields: string[] = [
  'Id',
  'Ydk',
  'Number',
  'Title',
  'Authors',
  'Description',
  'RecommendedBookTitle',
  'RecommendedBook_Id',
  'Source_Id',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
  })
);

interface RecordsProps {}
const Records: FC<RecordsProps> = () => {
  const classes = useStyles();
  const { fetchRecords, fetchAllRecomBooks } = useActions();
  const { records } = useSelector((select) => select.record);
  const { books } = useSelector((select) => select.source_recomBook);

  useEffect(() => {
    fetchRecords(fields);
    fetchAllRecomBooks();
  }, []);

  return (
    <Grid>
      <Grid item>
        <PageHeader
          title="Публикации"
          subTitle="Реферативные журналы с 1970 по 1990 год"
          icon={DescriptionIcon}
        />
      </Grid>
      <Grid item className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <ChooseMaterials />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ResultWeldingTable headCells={ResultWeldingTableHeadCells} />
            <br />
            <RecomBooksTable headCells={RecomBookTableHeadCells} data={books} />
            <br />
          </Grid>
        </Grid>
        <RecordTable headCells={RecordTableHeadCells} data={records} />
      </Grid>
    </Grid>
  );
};

export default Records;
