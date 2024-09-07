import React from 'react'
import { UsersProvider } from './users/components/UsersProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const ReactHookForm = () => {
    const queryClient = new QueryClient()


    return (
        <QueryClientProvider client={queryClient}>
            <UsersProvider />
        </QueryClientProvider>
    )
}

export default ReactHookForm