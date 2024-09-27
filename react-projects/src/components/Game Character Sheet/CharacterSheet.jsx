import React, { useState } from 'react'
import CharacterForm from './CharacterForm'
import CharacterDisplay from './CharacterDisplay'

const CharacterSheet = () => {
    const [character, setCharacter] = useState({
        name: '',
        class: '',
        level: 1,
        health: 100,
        skills: [],
        experience: 0,
        alignment: '',
        background: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCharacter((prev) => ({ ...prev, [name]: value }))
    }

    const handleSkillAdd = (skill) => {
        setCharacter((prev) => ({
            ...prev,
            skills: [...prev.skills, skill],
        }))
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">RPG Character Sheet</h1>
            <CharacterForm character={character} onChange={handleChange} onSkillAdd={handleSkillAdd} />
            <CharacterDisplay character={character} />
        </div>
    )
}

export default CharacterSheet