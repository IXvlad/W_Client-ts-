import { FC, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

import ActionButton from './controls/ActionButton';

import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '90%',
      },
      '& .MuiFormControl-root': {
        margin: theme.spacing(1),
      },
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

interface ChooseMaterialsProps {}
const ChooseMaterials: FC<ChooseMaterialsProps> = () => {
  const classes = useStyles();
  type typeWelding =
    | 'frictionWelding'
    | 'inertialFrictionWelding'
    | 'diffusionWelding';
  const {
    fetchMaterialExcel,
    fetchMaterials,
    fetchMaterialAvailableFiles,
    fetchResWelding,
  } = useActions();
  const { availableFiles, materials } = useSelector((state) => state.material);
  const [material1, setMaterial1] = useState(4); // По умолчанию стоит значение номера Алюминия
  const [material2, setMaterial2] = useState(4); // По умолчанию стоит значение номера Алюминия
  const [availableFileMat1, setAvailableFileMat1] = useState(true);
  const [availableFileMat2, setAvailableFileMat2] = useState(true);
  const [typeWelding, setTypeWelding] =
    useState<typeWelding>('frictionWelding');
  useEffect(() => {
    fetchMaterialAvailableFiles();
    fetchMaterials();
  }, []);
  // TO DO
  // Возникла сложность с определением типа event/event.target.value
  // т.к он может быть как number | typeWelding.
  // Временно поставил any.
  //
  const handleChangeMaterials1 = (event: any) => {
    setMaterial1(event.target.value);
    setAvailableFileMat1(availableFiles.includes(event.target.value));
  };
  const handleChangeMaterials2 = (event: any) => {
    setMaterial2(event.target.value);
    setAvailableFileMat2(availableFiles.includes(event.target.value));
  };
  const handleChangeTypeWelding = (event: any) => {
    setTypeWelding(event.target.value);
  };
  const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchResWelding(typeWelding, [material1, material2]);
  };
  const GetMat1Excel = () => {
    fetchMaterialExcel(material1);
  };
  const GetMat2Excel = () => {
    fetchMaterialExcel(material2);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={SubmitHandler}
    >
      <div>
        {availableFileMat1 ? (
          <TextField
            select
            key="select-first-material"
            id="select-first-material"
            label="1-й материал"
            value={material1}
            onChange={handleChangeMaterials1}
            helperText="Укажите 1-й материал"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ActionButton color="primary">
                    <GetAppIcon fontSize="small" onClick={GetMat1Excel} />
                  </ActionButton>
                  <Divider className={classes.divider} orientation="vertical" />
                </InputAdornment>
              ),
            }}
          >
            {materials.map((option) => (
              <MenuItem key={'material1-' + option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            select
            key="select-first-material"
            id="select-first-material"
            label="1-й материал"
            value={material1}
            onChange={handleChangeMaterials1}
            helperText="Укажите 1-й материал"
            variant="outlined"
          >
            {materials.map((option) => (
              <MenuItem key={'material1-' + option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      </div>
      <div>
        {availableFileMat2 ? (
          <TextField
            select
            key="select-second-material"
            id="select-second-material"
            label="2-й материал"
            value={material2}
            onChange={handleChangeMaterials2}
            helperText="Укажите 2-й материал"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ActionButton color="primary">
                    <GetAppIcon fontSize="small" onClick={GetMat2Excel} />
                  </ActionButton>
                  <Divider className={classes.divider} orientation="vertical" />
                </InputAdornment>
              ),
            }}
          >
            {materials.map((option) => (
              <MenuItem key={'material2-' + option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            select
            key="select-second-material"
            id="select-second-material"
            label="2-й материал"
            value={material2}
            onChange={handleChangeMaterials2}
            helperText="Укажите 2-й материал"
            variant="outlined"
          >
            {materials.map((option) => (
              <MenuItem key={'material2-' + option.name} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
        )}
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Тип сварки:</FormLabel>
        <RadioGroup
          aria-label="welding"
          name="welding"
          value={typeWelding}
          onChange={handleChangeTypeWelding}
        >
          <FormControlLabel
            key={'control-frictionWelding'}
            value="frictionWelding"
            control={<Radio />}
            label="Сварка трением"
          ></FormControlLabel>
          <FormControlLabel
            key={'control-inertialFrictionWelding'}
            value="inertialFrictionWelding"
            control={<Radio />}
            label="Инерционная сварка трением"
          ></FormControlLabel>
          <FormControlLabel
            key={'control-diffusionWelding'}
            value="diffusionWelding"
            control={<Radio />}
            label="Диффузионная сварка"
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
      <br />
      <ActionButton type="submit" color="primary">
        Проверить свариваемость
      </ActionButton>
    </form>
  );
};
export default ChooseMaterials;
