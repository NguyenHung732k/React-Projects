import React from 'react'
import { useForm, Controller, useFormContext } from "react-hook-form"
import { Autocomplete, Box, Checkbox, TextField } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const RHFAutocomplete = ({ name, options, label }) => {

    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                <Autocomplete
                    options={options || []}
                    value={value.map((id) => options?.find((item) => item.id === id))}
                    getOptionLabel={(option) => options?.find((item) => item.id === option.id)?.label ?? ''}
                    isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
                    onChange={(_, newValue) => {
                        onChange(newValue.map((item) => item.id))
                    }}
                    disableCloseOnSelect
                    multiple
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            inputRef={ref}
                            error={!!error}
                            helperText={error?.message}
                            label={label}
                        />
                    )}

                    renderOption={(props, option, { selected }) => (
                        <Box>
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon />}
                                checkedIcon={<CheckBoxIcon />}
                                checked={selected}
                            />
                            {option.label}
                        </Box>
                    )}
                />
            )}

        />
    )
}

export default RHFAutocomplete