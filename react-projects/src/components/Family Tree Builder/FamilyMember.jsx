import { useDrag, useDrop } from 'react-dnd'

const FamilyMember = ({ member, moveMember, index }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'member',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [{ isOver }, drop] = useDrop({
        accept: 'member',
        drop: (item) => moveMember(item.index, index),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    })

    return (
        <div
            ref={(node) => drag(drop(node))}
            className={`bg-white p-4 rounded-lg shadow-lg space-y-2 transform transition-all hover:scale-105 cursor-pointer ${isDragging ? 'opacity-50' : ''}`}
        >
            <div className="relative">
                <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full border-4 border-gray-300 mx-auto" />
                <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full opacity-80">
                    {member.relationship}
                </div>
            </div>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-gray-600 text-center">{member.bio}</p>
        </div>
    )
}

export default FamilyMember