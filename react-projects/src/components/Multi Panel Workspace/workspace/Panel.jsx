import TabBar from "./TabBar"
import PanelContent from "./PanelContent"

export default function Panel({ panel }) {
    return (
        <div className="flex flex-col h-full bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden">

            <TabBar panel={panel} />

            <PanelContent panel={panel} />

        </div>
    )
}