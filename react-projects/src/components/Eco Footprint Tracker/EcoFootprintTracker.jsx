import CarbonCalculator from './components/CarbonCalculator';
import EcoTips from './components/EcoTips';
import WeeklyChallenges from './components/WeeklyChallenges';
import Leaderboard from './components/Leaderboard';
import ThemeToggle from './components/ThemeToggle';

const EcoFootprintTracker = () => {
    return (
        <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Eco Footprint Tracker</h1>
                <ThemeToggle />
            </div>

            <CarbonCalculator />
            <EcoTips />
            <WeeklyChallenges />
            <Leaderboard />
        </div>
    );
};

export default EcoFootprintTracker;