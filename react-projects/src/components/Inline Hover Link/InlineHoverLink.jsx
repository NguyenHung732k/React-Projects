import HoverLink from './HoverLink'

const InlineHoverLink = () => {
    return (
        <div className="prose dark:prose-invert max-w-2xl mx-auto py-12">
            <h1 className="text-3xl font-bold">
                Welcome to <HoverLink href="/home">Our Site</HoverLink>
            </h1>

            <p>
                Learn more <HoverLink href="/about">about us</HoverLink> or check out our <HoverLink href="/blog">blog</HoverLink>
            </p>

            <p>
                Need help? <HoverLink href="/contact">Contact support</HoverLink>
            </p>
        </div>
    )
}

export default InlineHoverLink