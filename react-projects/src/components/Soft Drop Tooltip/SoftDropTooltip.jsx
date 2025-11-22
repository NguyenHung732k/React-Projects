import { useState, useRef } from "react";
import './SoftDropTooltip.css'

const SoftDropTooltip = ({
    children,
    content,
    direction = "top",
    offset = 10,
    className = ""
}) => {
    const [open, setOpen] = useState(false);
    const [render, setRender] = useState(false);
    const timeoutRef = useRef(null);

    const show = () => {
        clearTimeout(timeoutRef.current);
        setRender(true);
        requestAnimationFrame(() => setOpen(true));
    };

    const hide = () => {
        setOpen(false);
        timeoutRef.current = setTimeout(() => setRender(false), 150);
    };

    const pos = {
        top: `bottom-full mb-[${offset}px]`,
        bottom: `top-full mt-[${offset}px]`,
        left: `right-full mr-[${offset}px]`,
        right: `left-full ml-[${offset}px]`
    }[direction];

    const caretPos = {
        top: "top-full left-1/2 -translate-x-1/2",
        bottom: "bottom-full left-1/2 -translate-x-1/2 rotate-180",
        left: "left-full top-1/2 -translate-y-1/2 -rotate-90",
        right: "right-full top-1/2 -translate-y-1/2 rotate-90"
    }[direction];

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            {children}

            {render && (
                <div
                    className={`${pos} tooltip-box
            ${open ? "tooltip-enter" : "tooltip-exit"} 
            ${className}`}
                >
                    {content}

                    {/* Caret */}
                    <div className={`tooltip-caret ${caretPos}`} />
                </div>
            )}
        </div>
    );
}

export default SoftDropTooltip