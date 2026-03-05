import { Command } from "cmdk"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { Home, Folder, Zap, UserPlus } from "lucide-react"

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [recent, setRecent] = useState([])
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const commands = [
    {
      id: "dashboard",
      title: "Dashboard",
      group: "Navigation",
      icon: Home,
      shortcut: "⌘D",
      action: () => console.log("Dashboard"),
    },
    {
      id: "projects",
      title: "Projects",
      group: "Navigation",
      icon: Folder,
      shortcut: "⌘P",
      action: () => console.log("Projects"),
    },
    {
      id: "create-task",
      title: "Create Task",
      group: "Quick Actions",
      icon: Zap,
      shortcut: "↵",
      action: () => console.log("Create Task"),
    },
    {
      id: "invite",
      title: "Invite Member",
      group: "Quick Actions",
      icon: UserPlus,
      shortcut: "↵",
      action: () => console.log("Invite"),
    },
  ]

  const runCommand = (cmd) => {
    cmd.action()
    setRecent((r) => [cmd, ...r.filter((c) => c.id !== cmd.id)].slice(0, 5))
    setOpen(false)
  }

  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }

      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", down)
    return () => window.removeEventListener("keydown", down)
  }, [])

  useEffect(() => {
    const mouse = (e) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", mouse)
    return () => window.removeEventListener("mousemove", mouse)
  }, [])

  const groups = [...new Set(commands.map((c) => c.group))]

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-center pt-40 bg-black/40 backdrop-blur-sm">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              transformOrigin: `${cursor.x}px ${cursor.y}px`,
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-[640px] rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >

            <Command>

              <Command.Input
                autoFocus
                placeholder="Search or run a command..."
                className="w-full bg-transparent px-5 py-4 text-lg outline-none text-white placeholder:text-zinc-500 border-b border-white/10"
              />

              <Command.List className="max-h-[420px] overflow-y-auto">

                {recent.length > 0 && (
                  <>
                    <div className="px-4 py-2 text-xs uppercase text-zinc-500">
                      Recent
                    </div>

                    {recent.map((cmd, i) => (
                      <Item
                        key={cmd.id}
                        cmd={cmd}
                        index={i}
                        run={runCommand}
                      />
                    ))}
                  </>
                )}

                {groups.map((group) => (
                  <div key={group}>
                    <div className="px-4 py-2 text-xs uppercase text-zinc-500">
                      {group}
                    </div>

                    {commands
                      .filter((c) => c.group === group)
                      .map((cmd, i) => (
                        <Item
                          key={cmd.id}
                          cmd={cmd}
                          index={i}
                          run={runCommand}
                        />
                      ))}
                  </div>
                ))}

              </Command.List>

            </Command>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function Item({ cmd, run, index }) {
  const Icon = cmd.icon

  return (
    <Command.Item
      onSelect={() => run(cmd)}
      className="relative flex items-center justify-between gap-3 px-4 py-3 text-zinc-300 aria-selected:bg-white/5 rounded-md cursor-pointer"
    >

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.04 }}
        className="flex items-center gap-3"
      >

        <Icon size={18} className="text-zinc-400" />

        <span>{cmd.title}</span>

      </motion.div>

      {cmd.shortcut && (
        <kbd className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-400">
          {cmd.shortcut}
        </kbd>
      )}

    </Command.Item>
  )
}