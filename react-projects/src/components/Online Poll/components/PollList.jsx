import PollCard from './PollCard'

const PollList = ({ polls }) => (
    <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
        ))}
    </div>
)

export default PollList