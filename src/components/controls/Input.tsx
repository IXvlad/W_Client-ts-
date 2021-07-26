import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

interface InputProps {
  name?: string;
  label: string;
  value: string;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps: {
    startAdornment: JSX.Element;
    endAdornment: JSX.Element;
  };
  style: {
    width: string;
  };
}
const Input: FC<InputProps> = ({
  name,
  label,
  value,
  error,
  onChange,
  inputProps,
  style,
}) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputProps={inputProps}
      style={style}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default Input;
