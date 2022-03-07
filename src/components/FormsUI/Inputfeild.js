import React from 'react';
import { Input,Box,FormGroup } from '@material-ui/core';
import { Field , ErrorMessage} from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {

  const configTextfield = {
    ...otherProps,
    fullWidth: true,
    variant: 'outlined'
  };

  return (
    <Box marginBottom={2}>
      <FormGroup>
        <Field {...configTextfield} as={Input}/>
        <ErrorMessage component='div' style={{color:"red"}} name={name} />
      </FormGroup>
    </Box>
  );
};

export default TextfieldWrapper;