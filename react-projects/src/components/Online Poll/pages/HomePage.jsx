import { useState } from 'react'
import PollForm from '../components/PollForm'
import PollList from '../components/PollList'

const HomePage = () => {
    const [polls, setPolls] = useState([])

    const addPoll = (newPoll) => {
        setPolls([...polls, { ...newPoll, id: polls.length + 1, votes: Array(newPoll.options.length).fill(0) }]);
    }

    return (
        <div>
            <PollForm onAddPoll={addPoll} />
            <PollList polls={polls} />
        </div>
    )
}

export default HomePage