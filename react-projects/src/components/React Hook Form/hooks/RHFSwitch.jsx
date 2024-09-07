import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControlLabel, Switch } from '@mui/material'

const RHFSwitch = ({ name, label }) => {

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} checked={field.value} />}
          label={label}
        />
      )}
    />
  )
}

export default RHFSwitch