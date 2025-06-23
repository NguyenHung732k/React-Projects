import { useState } from "react";
import clsx from "clsx"

const MorphModal = () => {
  const [open, setOpen] = useState(false)

  const stopPropagation = (event) => event.stopPropagation()

  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 bg-black transition-opacity duration-300 z-10",
          open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Morphing Button/Modal */}
      <div
        onClick={() => !open && setOpen(true)}
        className={clsx(
          "z-20 transition-all duration-500 ease-in-out bg-white text-gray-800 shadow-xl",
          open
            ? "fixed top-1/2 left-1/2 w-[90%] max-w-md p-8 rounded-2xl transform -translate-x-1/2 -translate-y-1/2"
            : "w-44 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer"
        )}
      >
        {/* Button Text */}
        {!open && <span className="text-black font-semibold">Open Modal</span>}

        {/* Modal Content */}
        {open && (
          <div onClick={stopPropagation} className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-600 hover:bg-transparent text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <form className="space-y-4 mt-4">
              <div>
                <label className="block text-sm mb-1 text-gray-600">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-gray-600">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default MorphModal