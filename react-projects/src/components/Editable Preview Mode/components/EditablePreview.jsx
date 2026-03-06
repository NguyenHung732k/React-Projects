import { useState } from "react"
import EditableSection from "./components/EditableSection"
import EditableText from "./components/EditableText"

export default function EditablePreview() {

    const [page, setPage] = useState({
        sections: [
            {
                id: "hero",
                title: "Welcome to Editable Preview",
                subtitle: "Click text to edit directly"
            },
            {
                id: "about",
                title: "About Section",
                subtitle: "Inline editing with React + Tailwind"
            }
        ]
    })

    const updateSection = (id, key, value) => {
        setPage((prev) => ({
            ...prev,
            sections: prev.sections.map((s) =>
                s.id === id ? { ...s, [key]: value } : s
            )
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Top Bar */}
            <div className="sticky top-0 z-10 bg-white border-b px-6 py-3 flex justify-between items-center">

                <h1 className="font-semibold">Editable Preview Editor</h1>

                <div className="text-sm text-gray-500">
                    ✓ Auto Saved
                </div>

            </div>


            {/* Canvas */}
            <div className="max-w-3xl mx-auto py-10 space-y-8">

                {page.sections.map((section) => (

                    <EditableSection key={section.id}>

                        <EditableText
                            value={section.title}
                            onSave={(v) => updateSection(section.id, "title", v)}
                        />

                        <EditableText
                            value={section.subtitle}
                            onSave={(v) => updateSection(section.id, "subtitle", v)}
                        />

                    </EditableSection>

                ))}

            </div>

        </div>
    )
}