import { useState } from 'react'
import FamilyMember from './FamilyMember'

const FamilyTree = () => {
    const [members, setMembers] = useState([
        { name: 'John Doe', photo: 'https://via.placeholder.com/150', bio: 'Father', id: 1, relationship: 'Father' },
        { name: 'Jane Doe', photo: 'https://via.placeholder.com/150', bio: 'Mother', id: 2, relationship: 'Mother' },
    ])

    const moveMember = (fromIndex, toIndex) => {
        const updatedMembers = [...members]
        const [movedMember] = updatedMembers.splice(fromIndex, 1)
        updatedMembers.splice(toIndex, 0, movedMember)
        setMembers(updatedMembers)
    }

    return (
        <div className="flex flex-wrap gap-6 justify-center items-center">
            {members.map((member, index) => (
                <FamilyMember
                    key={member.id}
                    index={index}
                    member={member}
                    moveMember={moveMember}
                />
            ))}
        </div>
    )
}

export default FamilyTree