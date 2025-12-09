import { useInView } from "./useInView";

const RevealTable = ({ data }) => {
  return (
    <div className="
      rounded-2xl border border-gray-200 bg-white/70 
      dark:bg-gray-900/60 dark:border-gray-800 
      shadow-lg backdrop-blur-md overflow-hidden
    ">
      <table className="min-w-full text-sm">
        
        {/* HEADER */}
        <thead className="
          sticky top-0 z-20 bg-white/60 dark:bg-gray-900/70 
          backdrop-blur-md border-b border-gray-200 dark:border-gray-800
        ">
          <tr>
            {["ID", "Name", "Email"].map((header) => (
              <th
                key={header}
                className="
                  px-6 py-4 text-left font-semibold tracking-wide 
                  text-gray-700 dark:text-gray-200 uppercase text-xs
                "
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          {data.map((row, index) => (
            <RevealRow key={row.id} row={row} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RevealRow({ row, index }) {
  const { ref, isVisible } = useInView();

  return (
    <tr
      ref={ref}
      style={{ transitionDelay: `${index * 55}ms` }}
      className={`
        transition-all duration-700 ease-out 
        ${isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-[0.985]" 
        }
        hover:bg-gray-50 dark:hover:bg-gray-800/50
      `}
    >
      <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.id}</td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-200 font-medium">{row.name}</td>
      <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{row.email}</td>
    </tr>
  )
}

export default RevealTable