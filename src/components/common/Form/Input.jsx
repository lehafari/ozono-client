import React from 'react';
import { useFormikContext } from 'formik';
import { FormControl, TextField } from '@mui/material';
const Input = ({ label, name, placeholder = '', type = 'text' }) => {
  const { values, errors, touched, setFieldValue, setTouched } =
    useFormikContext();
  const value = values[name] ? values[name] : '';
  const error = errors[name] ? errors[name] : '';
  const touchedInput = touched[name] ? touched[name] : '';

  return (
    <FormControl variant="standard" fullWidth sx={{ mb: 3 }}>
      <TextField
        size="small"
        variants="Outlined"
        label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onClick={() => setTouched({ ...touched, [name]: true })}
        onTouchStart={() => setTouched({ ...touched, [name]: true })}
      />
      {error && touchedInput && <span className="required">{error}</span>}
    </FormControl>
  );
};

export default Input;
