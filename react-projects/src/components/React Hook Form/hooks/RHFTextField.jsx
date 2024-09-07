import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material'

const RHFTextField = ({ name, ...props }) => {

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  )
}

export default RHFTextField