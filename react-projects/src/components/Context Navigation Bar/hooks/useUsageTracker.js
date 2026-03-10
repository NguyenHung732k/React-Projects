import { useEffect, useState } from "react";

export default function useUsageTracker(items) {
    const [sortedItems, setSortedItems] = useState(items);

    useEffect(() => {
        const usage = JSON.parse(localStorage.getItem("navUsage") || "{}");

        const sorted = [...items].sort(
            (a, b) => (usage[b.id] || 0) - (usage[a.id] || 0)
        );

        setSortedItems(sorted);
    }, [items]);

    const track = (id) => {
        const usage = JSON.parse(localStorage.getItem("navUsage") || "{}");

        usage[id] = (usage[id] || 0) + 1;

        localStorage.setItem("navUsage", JSON.stringify(usage));
    };

    return { sortedItems, track };
}