import { useEffect, useState } from "react"

export default function SmartTheme() {

    const [theme, setTheme] = useState("light")

    /* ---------------- AUTO THEME ---------------- */

    useEffect(() => {

        const saved = localStorage.getItem("theme")

        if (saved) {
            setTheme(saved)
            return
        }

        const hour = new Date().getHours()

        if (hour > 18 || hour < 6) {
            setTheme("dark")
        } else {
            setTheme("light")
        }

    }, [])

    /* ---------------- APPLY THEME ---------------- */

    useEffect(() => {

        document.documentElement.dataset.theme = theme
        localStorage.setItem("theme", theme)

    }, [theme])

    /* ---------------- RIPPLE EFFECT ---------------- */

    function ripple(e) {

        const circle = document.createElement("div")

        circle.style.position = "fixed"
        circle.style.left = e.clientX + "px"
        circle.style.top = e.clientY + "px"
        circle.style.width = "20px"
        circle.style.height = "20px"
        circle.style.borderRadius = "50%"
        circle.style.pointerEvents = "none"

        circle.style.background =
            "radial-gradient(circle, rgba(255,255,255,.6), transparent)"

        circle.style.transform = "scale(0)"
        circle.style.animation = "themeRipple 700ms ease-out forwards"

        document.body.appendChild(circle)

        setTimeout(() => circle.remove(), 700)

    }

    /* ---------------- TOGGLE ---------------- */

    function toggle(e) {

        ripple(e)

        setTheme(theme === "light" ? "dark" : "light")

    }

    /* ---------------- PALETTES ---------------- */

    function setPalette(color) {

        document.documentElement.style.setProperty("--primary", color)

    }

    /* ---------------- GLOBAL STYLE ---------------- */

    useEffect(() => {

        const style = document.createElement("style")

        style.innerHTML = `

:root{

--bg:255 255 255;
--text:15 23 42;
--primary:59 130 246;
--card:255 255 255;
--shadow-opacity:.12;

}

[data-theme="dark"]{

--bg:15 23 42;
--text:241 245 249;
--card:30 41 59;
--shadow-opacity:.55;

}

body{

background:rgb(var(--bg));
color:rgb(var(--text));

transition:
background 600ms ease,
color 600ms ease;

}

*{

transition:
background-color 600ms,
color 600ms,
box-shadow 700ms,
border-color 600ms,
filter 700ms;

}

.card{

background:rgb(var(--card));
box-shadow:0 12px 30px rgba(0,0,0,var(--shadow-opacity));

}

img{

transition:filter 700ms ease;

}

[data-theme="dark"] img{

filter:
brightness(.85)
contrast(1.1)
saturate(.9);

}

@keyframes themeRipple{

to{
transform:scale(90);
opacity:0;
}

}

`

        document.head.appendChild(style)

        return () => document.head.removeChild(style)

    }, [])

    return (

        <div className="min-h-screen p-10 flex flex-col gap-6">

            {/* Theme Controls */}

            <div className="flex gap-3 items-center">

                <button
                    onClick={toggle}
                    className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition"
                >

                    {theme === "light" ? "🌙" : "☀️"}

                </button>

                <button
                    onClick={() => setTheme("light")}
                    className="px-3 py-1 rounded bg-gray-200"
                >
                    Light
                </button>

                <button
                    onClick={() => setTheme("dark")}
                    className="px-3 py-1 rounded bg-gray-800 text-white"
                >
                    Dark
                </button>

            </div>

            {/* Palette Controls */}

            <div className="flex gap-3">

                <button
                    onClick={() => setPalette("59 130 246")}
                    className="w-6 h-6 rounded-full bg-blue-500"
                />

                <button
                    onClick={() => setPalette("236 72 153")}
                    className="w-6 h-6 rounded-full bg-pink-500"
                />

                <button
                    onClick={() => setPalette("16 185 129")}
                    className="w-6 h-6 rounded-full bg-emerald-500"
                />

                <button
                    onClick={() => setPalette("168 85 247")}
                    className="w-6 h-6 rounded-full bg-purple-500"
                />

            </div>

            {/* Example UI */}

            <div className="card p-6 rounded-xl max-w-md">

                <h1 className="text-2xl font-bold mb-2">
                    Smart Theme UI
                </h1>

                <p className="opacity-80 mb-4">
                    Cinematic theme switching with ripple transitions.
                </p>

                <img
                    className="rounded-lg"
                    src="https://picsum.photos/400/200"
                />

                <button
                    className="mt-4 px-4 py-2 rounded text-white"
                    style={{ background: "rgb(var(--primary))" }}
                >
                    Primary Action
                </button>

            </div>

        </div>

    )

}