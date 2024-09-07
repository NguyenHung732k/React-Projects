import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const RHFDateTimePicker = ({ name, label }) => {

  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker label={label} {...field} />
        </LocalizationProvider>
      )}
    />
  )
}

export default RHFDateTimePicker