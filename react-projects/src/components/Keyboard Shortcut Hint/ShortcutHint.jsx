import React from 'react'
import ShortcutButton from './ShortcutButton'

const ShortcutHint = () => {
    return (
        <div className="min-h-screen flex items-center justify-center gap-6 
                    bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-10">
            <ShortcutButton shortcut="⌘ + S" onClick={() => alert('Saved!')}>
                Save
            </ShortcutButton>
            <ShortcutButton shortcut="⌘ + Z" onClick={() => alert('Undo!')}>
                Undo
            </ShortcutButton>
            <ShortcutButton shortcut="⌘ + P" onClick={() => alert('Print!')}>
                Print
            </ShortcutButton>
        </div>
    )
}

export default ShortcutHint