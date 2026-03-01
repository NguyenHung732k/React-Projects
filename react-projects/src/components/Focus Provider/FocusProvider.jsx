import { createContext, useContext, useState, useEffect, useRef } from "react";
import './FocusProvider.css'

const FocusContext = createContext();

export const useFocus = () => useContext(FocusContext);

const FocusProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const [ambientOn, setAmbientOn] = useState(false);

    const totalTime = 1500;
    const audioRef = useRef(null);

    /* --- Timer --- */
    useEffect(() => {
        let interval;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((t) => t - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    /* --- Mount / Unmount Cinematic --- */
    useEffect(() => {
        if (isActive) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            setTimeout(() => setIsVisible(false), 900);
            document.body.style.overflow = "auto";
        }
    }, [isActive]);

    /* --- Ambient Sound --- */
    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/ambient.mp3");
            audioRef.current.loop = true;
        }

        if (ambientOn) {
            audioRef.current.volume = 0.4;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [ambientOn]);

    const progress = (timeLeft / totalTime) * 440;

    const formatTime = () => {
        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <FocusContext.Provider
            value={{
                isActive,
                setIsActive,
                setIsRunning,
                isRunning,
            }}
        >
            <div
                className={`transition-all duration-1000 ${isActive ? "grayscale-[60%] saturate-50 scale-[0.995]" : ""
                    }`}
            >
                {children}
            </div>

            {isVisible && (
                <div
                    className={`fixed inset-0 z-50 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {/* Blur Layer */}
                    <div className="absolute inset-0 backdrop-blur-2xl bg-neutral-950/60" />

                    {/* Vignette */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />

                    {/* Focus Island */}
                    <div className="relative h-full flex items-center justify-center">
                        <div
                            className={`relative w-[420px] h-[420px] rounded-full 
              bg-white/5 backdrop-blur-3xl border border-white/10
              flex flex-col items-center justify-center
              shadow-[0_0_120px_rgba(255,255,255,0.06)]
              transition-all duration-1000 animate-slow-breath
              ${ambientOn ? "shadow-[0_0_120px_rgba(100,150,255,0.2)]" : ""}`}
                        >
                            {/* Task Label */}
                            <p className="text-white/50 text-xs tracking-widest uppercase mb-2">
                                Current Focus
                            </p>

                            <p className="text-white text-xl font-light tracking-wide text-center px-10 mb-6">
                                Deep Work Session
                            </p>

                            {/* Timer Ring */}
                            <div className="relative w-44 h-44 mb-6">
                                <svg className="w-full h-full -rotate-90">
                                    <circle
                                        cx="88"
                                        cy="88"
                                        r="70"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="6"
                                        fill="transparent"
                                    />
                                    <circle
                                        cx="88"
                                        cy="88"
                                        r="70"
                                        stroke="white"
                                        strokeWidth="6"
                                        fill="transparent"
                                        strokeDasharray="440"
                                        strokeDashoffset={440 - progress}
                                        className="transition-all duration-1000 ease-linear"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-mono">
                                    {formatTime()}
                                </div>
                            </div>

                            {/* Control Dock */}
                            <div className="absolute bottom-10 flex gap-6">
                                <button
                                    onClick={() => setIsRunning((r) => !r)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                                />

                                <button
                                    onClick={() => setAmbientOn((a) => !a)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                                />

                                <button
                                    onClick={() => setIsActive(false)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500/40 transition"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </FocusContext.Provider>
    );
}

export default FocusProvider