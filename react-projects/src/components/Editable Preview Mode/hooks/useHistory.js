export function useHistory(initial) {

    const [stack, setStack] = useState([initial])
    const [index, setIndex] = useState(0)

    const commit = (state) => {
        const copy = stack.slice(0, index + 1)
        copy.push(state)
        setStack(copy)
        setIndex(copy.length - 1)
    }

    const undo = () => setIndex(i => Math.max(0, i - 1))
    const redo = () => setIndex(i => Math.min(stack.length - 1, i + 1))

    return { state: stack[index], commit, undo, redo }
}