import PanelGroup from "./PanelGroup"
import { useLayoutStore } from "./layoutStore"

export default function Workspace() {
    const layout = useLayoutStore((s) => s.layout)

    if (!layout) return null

    return (
        <div className="h-screen w-screen bg-neutral-950 text-white">
            <PanelGroup node={layout} />
        </div>
    )
}