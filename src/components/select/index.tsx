import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { FieldInputProps } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectProps } from '@mui/material/Select';

import { SelectFieldStyle, Wrapper } from './styled';

export interface ISelectField {
  label?: string;
  field: FieldInputProps<any>;
  optionsSelect: Array<{
    label: string | React.ReactElement;
    value: number | string;
    disabled?: boolean;
  }>;
  setFieldValue: (field: string, value: any) => void;
  selectProps?: SelectProps<any>;
  touched?: boolean;
  error?: string;
  notFoundContent?: React.ReactNode;
  disabled?: boolean;
  callbackOnChange?: () => void;
  typeLabel?: 'left' | 'top-left' | 'top-right';
}

const SelectField: React.FC<ISelectField> = ({
  label,
  touched,
  error,
  field,
  selectProps,
  optionsSelect,
  setFieldValue,
  notFoundContent,
  disabled,
  callbackOnChange,
  typeLabel,
  ...rest
}) => {
  const [value, setValue] = useState(field.value);

  const onChange = (e: any): void => {
    setFieldValue(field.name, e.target.value);
    setValue(e.target.value);
    if (callbackOnChange) {
      callbackOnChange();
    }
  };

  return (
    <Wrapper className={typeLabel}>
      <Typography>{label}</Typography>

      <SelectFieldStyle>
        <FormControl fullWidth {...rest}>
          <Select value={value} onChange={onChange} {...selectProps} disabled={disabled}>
            {optionsSelect.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectFieldStyle>
    </Wrapper>
  );
};

export default SelectField;
