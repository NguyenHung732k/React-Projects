import React, { createContext, useEffect, useState } from 'react'
import featureFlagsDataServiceCall from '../data'

export const FeatureFlagsContext = createContext(null)

const FeatureFlagGlobalState = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnabledFlags] = useState({})


    useEffect(() => {
        const fetchFeatureFlag = async () => {
            try {
                setLoading(true)

                const response = await featureFlagsDataServiceCall()
                setEnabledFlags(response)
                setLoading(false)

            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchFeatureFlag()
    }, [])

    
  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
        {children}
    </FeatureFlagsContext.Provider>
  )
}

export default FeatureFlagGlobalState