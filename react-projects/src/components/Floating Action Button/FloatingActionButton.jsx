import { useEffect, useState } from "react";

const FloatingActionButton = () => {
    const [fabState, setFabState] = useState("circle")

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            if (scrollY < 100) {
                setFabState("circle");
            } else if (scrollY >= 100 && scrollY < 300) {
                setFabState("pill")
            } else {
                setFabState("bar")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const fabConfig = {
        circle: {
            size: "w-14 h-14 rounded-full",
            icon:
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                </svg>,
            label: "",
            bg: "bg-blue-600",
        },
        pill: {
            size: "w-36 h-14 rounded-full",
            icon:
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z" />
                </svg>,
            label: "Edit",
            bg: "bg-blue-600",
        },
        bar: {
            size: "w-56 h-14 rounded-xl",
            icon:
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" >
                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                </svg>,
            label: "Continue",
            bg: "bg-gradient-to-r from-blue-600 to-purple-600",
        },
    }

    const { size, icon, label, bg } = fabConfig[fabState];

    return (
        <div className="min-h-[2000px] bg-gray-100 relative">
            <div className="p-8">
                <h1 className="text-3xl font-bold">Scroll Down to Morph the FAB</h1>
                <p className="mt-4 max-w-xl text-gray-600">
                    This FAB will smoothly morph its shape, icon, and label based on how far you've scrolled down the page. Try scrolling past 100px and 300px!
                </p>
            </div>

            <button
                className={`
        fixed bottom-6 right-6 flex items-center justify-center gap-2
        text-white shadow-xl overflow-hidden backdrop-blur-md
        transition-all duration-500 ease-in-out transform
        hover:scale-105 active:scale-95 px-4
        ${size} ${bg}
      `}
                aria-label={label || "Floating Action Button"}
            >
                {icon}
                {label && (
                    <span className="text-sm font-medium whitespace-nowrap opacity-90">
                        {label}
                    </span>
                )}
            </button>
        </div>
    )
}

export default FloatingActionButton