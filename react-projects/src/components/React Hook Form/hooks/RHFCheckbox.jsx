import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form"
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'

const RHFCheckbox = ({ name, options, label }) => {

  const { control } = useFormContext()


  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel>{label}</FormLabel>
          <FormGroup>
            {options?.map((option) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value.includes(option.id)}
                    onChange={() => {
                      value.includes(option.id) ?
                        onChange((value).filter((item) => item !== option.id))
                        :
                        onChange([...value, option.id])
                    }}
                    key={option.id}
                  />
                }
                label={option.label}
                key={option.id}
              />
            ))}
          </FormGroup>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  )
}

export default RHFCheckbox