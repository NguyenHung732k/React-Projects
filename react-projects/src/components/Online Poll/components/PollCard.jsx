import { Link } from 'react-router-dom'

const PollCard = ({ poll }) => (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg font-semibold mb-2">{poll.question}</h3>
        <Link
            to={`/poll/${poll.id}`}
            className="text-blue-600 hover:underline"
        >
            View Poll
        </Link>
    </div>
)

export default PollCard