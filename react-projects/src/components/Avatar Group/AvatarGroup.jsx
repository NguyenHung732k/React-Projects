import React from 'react';
import Group from './Group'

const AvatarGroup = () => {
    const users = [
        { name: 'Alice', avatar: 'https://i.pravatar.cc/150?img=1' },
        { name: 'Bob', avatar: 'https://i.pravatar.cc/150?img=2' },
        { name: 'Charlie', avatar: 'https://i.pravatar.cc/150?img=3' },
        { name: 'David', avatar: 'https://i.pravatar.cc/150?img=4' },
        { name: 'Eva', avatar: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Frank', avatar: 'https://i.pravatar.cc/150?img=6' },
        { name: 'Grace', avatar: 'https://i.pravatar.cc/150?img=7' },
    ]

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Team Members</h1>
            <Group users={users} />
        </div>
    )
}

export default AvatarGroup