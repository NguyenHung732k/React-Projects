import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DateRangePicker } from '@mui/x-date-pickers-pro'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'

const RHFDateRangePicker = ({ name }) => {

  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            {...restField}
            value={Array.isArray(value) ? value : [null, null]}
          />
        </LocalizationProvider>
      )}
    />
  )
}

export default RHFDateRangePicker