import Resizer from "./Resizer"

export default function PanelGroup({ node }) {
    const isRow = node.direction === "row"

    return (
        <div
            className={`flex w-full h-full ${isRow ? "flex-row" : "flex-col"
                }`}
        >
            {node.children.map((child, i) => (
                <>
                    <div
                        style={{ flexBasis: `${node.sizes[i]}%` }}
                        className="relative"
                    >
                        {child.type === "panel"
                            ? <Panel panel={child} />
                            : <PanelGroup node={child} />}
                    </div>

                    {i < node.children.length - 1 && (
                        <Resizer direction={node.direction} />
                    )}
                </>
            ))}
        </div>
    )
}