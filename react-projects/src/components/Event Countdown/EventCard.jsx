import React from 'react'

const EventCard = ({ key, title, timeRemaining, }) => {


    return (
        <div
            key={key}
            class="w-full h-96 rounded-2xl flex gap-9 flex-col items-center justify-center bg-cover bg-center rounded-lg bg-white/45 backdrop-blur-xl"
        >
            <h3 className=""> {title} </h3>

            {timeRemaining.seconds > 0 && (
                <div className="flex items-center justify-center w-full gap-2">
                    <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-24 flex items-center justify-center flex-col gap-1 px-3">
                        <h3 class="countdown-element days font-manrope font-semibold text-2xl text-white text-center">{timeRemaining.days}</h3>
                        <p class="text-lg uppercase font-normal text-white mt-1 text-center w-full">Days</p>
                    </div>
                    <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-24 flex items-center justify-center flex-col gap-1 px-3">
                        <h3 class="countdown-element days font-manrope font-semibold text-2xl text-white text-center">{timeRemaining.hours}</h3>
                        <p class="text-lg uppercase font-normal text-white mt-1 text-center w-full">Hour</p>
                    </div>
                    <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-24 flex items-center justify-center flex-col gap-1 px-3">
                        <h3 class="countdown-element days font-manrope font-semibold text-2xl text-white text-center">{timeRemaining.minutes}</h3>
                        <p class="text-lg uppercase font-normal text-white mt-1 text-center w-full">Minute</p>
                    </div>
                    <div className="rounded-xl bg-black/25 backdrop-blur-sm py-3 min-w-24 flex items-center justify-center flex-col gap-1 px-3">
                        <h3 class="countdown-element days font-manrope font-semibold text-2xl text-white text-center">{timeRemaining.seconds}</h3>
                        <p class="text-lg uppercase font-normal text-white mt-1 text-center w-full">Second</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EventCard