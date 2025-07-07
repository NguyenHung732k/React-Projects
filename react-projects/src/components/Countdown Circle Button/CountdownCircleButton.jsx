import CountdownCircle from './CountdownCircle'

const CountdownCircleButton = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <CountdownCircle
                duration={8}
                onComplete={() => console.log('Countdown finished!')}
                onCancel={() => console.log('Cancelled')}
                showControls={true}
            />
        </div>
    )
}

export default CountdownCircleButton