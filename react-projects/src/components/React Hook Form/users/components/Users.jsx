import React, { useEffect } from 'react'
import { useGenders, useLanguages, useSkills, useStates, useUser, useUsers } from '../services/queries'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { Button, Container, List, ListItem, ListItemButton, ListItemText, ListSubheader, Stack, Typography } from '@mui/material'
import RHFTextField from '../../hooks/RHFTextField'
import RHFAutocomplete from '../../hooks/RHFAutocomplete'
import RHFToggleButtonGroup from '../../hooks/RHFToggleButtonGroup'
import RHFRadioGroup from '../../hooks/RHFRadioGroup'
import RHFCheckbox from '../../hooks/RHFCheckbox'
import RHFDateRangePicker from '../../hooks/RHFDateRangePicker'
import RHFSlider from '../../hooks/RHFSlider'
import RHFSwitch from '../../hooks/RHFSwitch'

import { useCreateUser, useEditUser } from '../services/mutations'

import { defaultValues } from '../types/schema'

const Users = () => {

    const statesQuery = useStates()
    const languagesQuery = useLanguages()
    const gendersQuery = useGenders()
    const skillsQuery = useSkills()
    const usersQuery = useUsers()

    const { watch, control, unregister, reset, setValue, handleSubmit } = useFormContext()

    const id = useWatch({ control, name: 'id' })
    const variant = useWatch({ control, name: 'variant' })

    const userQuery = useUser(id)

    useEffect(() => {
        const sub = watch((value) => {
            console.log(value)
        })

        return () => sub.unsubscribe()
    }, [watch])

    const isTeacher = useWatch({ control, name: 'isTeacher' })

    const { append, fields, remove, replace } = useFieldArray({
        control,
        name: 'students'
    })

    const handleUserClick = (id) => {
        setValue('id', id)
    }

    useEffect(() => {
        if (!isTeacher) {
            replace([])
            unregister('students')
        }
    }, [isTeacher, replace, unregister])

    useEffect(() => {
        if (userQuery.data) {
            reset(userQuery.data)
        }
    }, [reset, userQuery.data])


    const handleReset = () => {
        reset(defaultValues)
    }

    const createUserMutation = useCreateUser()
    const editUserMutation = useEditUser()

    const onSubmit = (data) => {
        if (variant === 'create') {
            createUserMutation.mutate(data)
        } else {
            editUserMutation.mutate(data)
        }
    }



    return (
        <Container maxWidth="sm" component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack sx={{ flexDirection: 'col', marginTop: '40px', gap: 2 }}>
                <List subheader={<ListSubheader>Users</ListSubheader>}>
                    {usersQuery.data?.map((user) => (
                        <ListItem disablePadding key={user.id}>
                            <ListItemButton
                                onClick={() => handleUserClick(user.id)}
                                selected={id === user.id}
                            >
                                <ListItemText primary={user.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Stack sx={{ gap: 2 }}>
                    <RHFTextField name="name" label="Name" />
                    <RHFTextField name="email" label="Email" />
                    <RHFAutocomplete
                        name="states"
                        label="States"
                        options={statesQuery.data}
                    />
                    <RHFToggleButtonGroup
                        name="languagesSpoken"
                        options={languagesQuery.data}
                    />
                    <RHFRadioGroup
                        name="gender"
                        options={gendersQuery.data}
                        label="Gender"
                    />
                    <RHFCheckbox
                        name="skills"
                        options={skillsQuery.data}
                        label="Skills"
                    />

                    <RHFDateRangePicker
                        name="registrationDateAndTime"
                        label="Registration Date & Time"
                    />
                    <Typography>Former Employment Period:</Typography>
                    <RHFDateRangePicker name="formerEmploymentPeriod" />
                    <RHFSlider name="salaryRange" label="Salary Range" />
                    <RHFSwitch name="isTeacher" label="Are you a teacher?" />
                </Stack>

                {isTeacher && (
                    <Button onClick={() => append({ name: '' })} type="button">
                        Add new student
                    </Button>
                )}

                {fields.map((field, index) => (
                    <div key={field.id}>
                        <RHFTextField
                            name={`students.${index}.name`}
                            label="Name"
                        />
                        <Button
                            color="error"
                            onClick={() => {
                                remove(index);
                            }}
                            type="button"
                        >
                            Remove
                        </Button>
                    </div>
                ))}

                <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button variant="contained" type="submit">
                        {variant === 'create' ? 'New user' : 'Edit user'}
                    </Button>
                    <Button onClick={handleReset}>Reset</Button>
                </Stack>

            </Stack>
        </Container>
    )
}

export default Users