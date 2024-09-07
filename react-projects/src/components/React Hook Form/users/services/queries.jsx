import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useStates = () => {
    return useQuery({
        queryKey: ['states'],
        queryFn: () => axios
            .get('http://localhost:8080/states')
            .then((res) => res.data)
    })
}

export const useLanguages = () => {
    return useQuery({
        queryKey: ['languages'],
        queryFn: () => axios
            .get('http://localhost:8080/languages')
            .then((res) => res.data)
    })
}


export const useGenders = () => {
    return useQuery({
        queryKey: ['genders'],
        queryFn: () => axios
            .get('http://localhost:8080/genders')
            .then((res) => res.data)
    })
}

export const useSkills = () => {
    return useQuery({
        queryKey: ['skills'],
        queryFn: () => axios
            .get('http://localhost:8080/skills')
            .then((res) => res.data)
    })
}

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => axios
            .get('http://localhost:8080/users')
            .then((res) => res.data.map((user) => ({
                id: user.id.toString(),
                label: user.name,
            })))
    })
}

export const useUser = (id) => {
    return useQuery({
        queryKey: ['user', { id }],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/users/${id}`)

            return {
                variant: 'edit',
                id: data.id.toString(),
                name: data.name,
                email: data.email,
                formerEmploymentPeriod: [
                    new Date(data.formerEmploymentPeriod[0]),
                    new Date(data.formerEmploymentPeriod[1])
                ],
                gender: data.gender,
                languagesSpoken: data.languagesSpoken,
                registrationDateAndTime: new Date(data.registrationDateAndTime),
                salaryRange: [data.salaryRange[0], data.salaryRange[1]],
                skills: data.skills,
                states: data.states,
                students: data.students,
                isTeacher: data.isTeacher,
            }
        },
        enabled: !!id,
    })
}
