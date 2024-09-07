import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

const RHFRadioGroup = ({ name, options, label }) => {

  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option) => (
              <FormControlLabel
                value={option.id}
                control={<Radio checked={field.value === option.id} />}
                label={option.label}
                key={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  )
}

export default RHFRadioGroup