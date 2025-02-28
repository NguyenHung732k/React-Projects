import Explanation from './Explanation'
import GraphVisualizer from './GraphVisualizer'

const ProblemCard = ({ problemTitle, steps, graphData }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-lg">
        <div>
            <h2 className="text-2xl font-semibold mb-4">Problem: {problemTitle}</h2>
            <p className="text-lg text-gray-700 mb-4">Solve the above problem step-by-step.</p>
            <Explanation steps={steps} />
        </div>
        <div>
            <h3 className="text-xl font-semibold mb-3">Graph Visualization:</h3>
            <GraphVisualizer data={graphData} />
        </div>
    </div>
)

export default ProblemCard