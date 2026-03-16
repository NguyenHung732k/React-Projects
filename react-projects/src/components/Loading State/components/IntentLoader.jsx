import { useIntentLoader } from "../hooks/useIntentLoader"
import { MicroShimmer } from "./MicroShimmer"
import { SkeletonLayout } from "./SkeletonLayout"
import { InteractivePlaceholder } from "./InteractivePlaceholder"
import { ProgressiveReveal } from "./ProgressiveReveal"

export function IntentLoader({ loading, children }) {

    const state = useIntentLoader(loading)

    if (!loading) {
        return <ProgressiveReveal>{children}</ProgressiveReveal>
    }

    if (state === "shimmer") {
        return <MicroShimmer />
    }

    if (state === "skeleton") {
        return <SkeletonLayout />
    }

    if (state === "placeholder") {
        return <InteractivePlaceholder />
    }

    return null
}