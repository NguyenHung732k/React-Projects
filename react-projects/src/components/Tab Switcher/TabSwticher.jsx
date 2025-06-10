import SwitchEffect from "./SwitchEffect"

const TabSwitcher = () => {
    const handleTabChange = (index) => {
        console.log("Active Tab Index:", index)
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4">
            <SwitchEffect
                tabs={["Overview", "Activity", "Notifications", "Settings"]}
                onChange={handleTabChange}
                initialIndex={1}
            />
        </div>
    )
}

export default TabSwitcher