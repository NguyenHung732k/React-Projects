import Divider from './Divider';

const SectionDivider = () => {
    return (
        <div className="px-6 max-w-4xl mx-auto">
            {/* Section 1 */}
            <section className="py-24">
                <h2 className="text-4xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Welcome to the long-form page. This is your first section of content.
                </p>
            </section>

            {/* Section 2 */}
            <section className="py-24">
                <h2 className="text-4xl font-bold mb-6">Chapter 1</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Here begins the next chapter with more in-depth content.
                </p>
            </section>

            {/* Divider with label */}
            <Divider label="Next Chapter" />

            {/* Section 3 */}
            <section className="py-24">
                <h2 className="text-4xl font-bold mb-6">Chapter 2</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Final section for now. You can continue expanding.
                </p>
            </section>
        </div>
    )
}

export default SectionDivider