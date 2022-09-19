function Counter(props){
    //1
    const [count, setCount] = useState(0)
    const prevCount = userRef(count)

    //3
    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleInreaseClick = () => {
        setCount(x => x + 1)
    }

    //2
    return(
        <div>
            <p>Previous: {prevCount.current}</p>
            <p>Current: {count}</p>
            <div>
                <button onClick={handleInreaseClick}></button>
            </div>
        </div>
    )
}