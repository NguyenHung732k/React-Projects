import FeatureFlags from "./components/Feature Flag/FeatureFlags"
import FeatureFlagGlobalState from "./components/Feature Flag/context/FeatureFlagGlobalState"

import './App.css'


function App() {
  return (
    <>
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  );
}

export default App;
