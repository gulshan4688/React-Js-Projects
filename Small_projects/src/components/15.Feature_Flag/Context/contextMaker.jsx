import { createContext, useContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

//# created context step 1 
export const FeatureFlagsContext = createContext(null);

//! create context function step 2 
const FeatureFlagGlobalState = ({ children }) => {
    
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlag() {
        try {
            // fetching data d
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response);
            console.log(response);
            setLoading(false);
        } catch (er) {
            console.log(er);
            setLoading(false);
            throw new Error(er);
        }
    }

    useEffect(() => {
        fetchFeatureFlag();
    }, [])
      
    return (
        <FeatureFlagsContext.Provider value={{ loading, enabledFlags }} >
            {children}
        </FeatureFlagsContext.Provider>
    );
}

export default FeatureFlagGlobalState;
