import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { v4 as uuid } from "uuid";

const COLORS = {
  yellow: "bg-yellow-200",
  pink: "bg-pink-200",
  blue: "bg-blue-200",
  green: "bg-green-200",
};

const SNAP_DISTANCE = 12;

export default function SmartStickyBoard() {
  const [notes, setNotes] = useState([]);
  const [links, setLinks] = useState([]);
  const [linkMode, setLinkMode] = useState(false);
  const [selected, setSelected] = useState(null);
  const [dark, setDark] = useState(false);
  const boardRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const addNote = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: uuid(),
        content: "New note...",
        color: "yellow",
        x: 200 + prev.length * 20,
        y: 150 + prev.length * 20,
        checklist: [],
      },
    ]);
  };

  const updateNote = (id, data) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...data } : note))
    );
  };

  const handleSnap = (id, x, y) => {
    let snappedX = x;
    let snappedY = y;

    notes.forEach((note) => {
      if (note.id !== id) {
        if (Math.abs(note.x - x) < SNAP_DISTANCE) snappedX = note.x;
        if (Math.abs(note.y - y) < SNAP_DISTANCE) snappedY = note.y;
      }
    });

    return { snappedX, snappedY };
  };

  const createLink = (id) => {
    if (!selected) {
      setSelected(id);
    } else {
      if (selected !== id) {
        setLinks((prev) => [...prev, { from: selected, to: id, id: uuid() }]);
      }
      setSelected(null);
      setLinkMode(false);
    }
  };

  return (
    <div
      ref={boardRef}
      className="w-screen h-screen overflow-hidden relative
      bg-[radial-gradient(circle_at_center,_#ffffff,_#f1f5f9)]
      dark:bg-[#0F172A] transition-colors duration-500"
    >
      {/* Floating Toolbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 shadow-xl flex gap-6 z-50">
        <button onClick={addNote} className="font-semibold">
          + Note
        </button>
        <button onClick={() => setLinkMode(!linkMode)}>
          {linkMode ? "Cancel Link" : "Link"}
        </button>
        <button onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>

      {/* SVG Connection Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {links.map((link) => {
          const from = notes.find((n) => n.id === link.from);
          const to = notes.find((n) => n.id === link.to);
          if (!from || !to) return null;

          return (
            <motion.path
              key={link.id}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4 }}
              d={`M ${from.x + 150} ${from.y + 80}
                  C ${from.x + 300} ${from.y},
                    ${to.x - 100} ${to.y},
                    ${to.x + 150} ${to.y + 80}`}
              stroke="rgba(99,102,241,0.8)"
              strokeWidth="2"
              fill="transparent"
            />
          );
        })}
      </svg>

      {/* Notes */}
      <AnimatePresence>
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            note={note}
            updateNote={updateNote}
            handleSnap={handleSnap}
            linkMode={linkMode}
            createLink={createLink}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

function StickyNote({
  note,
  updateNote,
  handleSnap,
  linkMode,
  createLink,
}) {
  const controls = useAnimation();
  const textRef = useRef(null);

  const autoResize = () => {
    const el = textRef.current;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  useEffect(() => {
    autoResize();
  }, [note.content]);

  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ y: -4 }}
      whileDrag={{ scale: 1.04 }}
      onDrag={(e, info) => {
        const tilt = info.velocity.x / 150;
        controls.start({ rotate: tilt });
      }}
      onDragEnd={(e, info) => {
        const { snappedX, snappedY } = handleSnap(
          note.id,
          note.x + info.offset.x,
          note.y + info.offset.y
        );

        updateNote(note.id, { x: snappedX, y: snappedY });

        controls.start({
          rotate: 0,
          x: [0, -2, 2, -1, 1, 0],
          transition: { duration: 0.2 },
        });
      }}
    //   animate={controls}
      onClick={() => linkMode && createLink(note.id)}
      className={`absolute w-72 p-5 rounded-2xl backdrop-blur-xl 
        bg-white/80 dark:bg-slate-800/80
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        border border-white/40
        transition-all duration-300
        ${COLORS[note.color]}
      `}
      style={{ top: note.y, left: note.x }}
    >
      <textarea
        ref={textRef}
        value={note.content}
        onChange={(e) =>
          updateNote(note.id, { content: e.target.value })
        }
        className="w-full bg-transparent resize-none outline-none font-medium"
      />

      {/* Checklist */}
      {note.checklist.map((item) => (
        <div key={item.id} className="flex items-center mt-2">
          <input
            type="checkbox"
            checked={item.done}
            onChange={() =>
              updateNote(note.id, {
                checklist: note.checklist.map((c) =>
                  c.id === item.id ? { ...c, done: !c.done } : c
                ),
              })
            }
          />
          <span
            className={`ml-2 text-sm ${
              item.done ? "line-through opacity-50" : ""
            }`}
          >
            {item.text}
          </span>
        </div>
      ))}

      {/* Color Picker */}
      <div className="flex gap-2 mt-3">
        {Object.keys(COLORS).map((color) => (
          <div
            key={color}
            onClick={() => updateNote(note.id, { color })}
            className={`w-4 h-4 rounded-full cursor-pointer ${COLORS[color]}`}
          />
        ))}
      </div>
    </motion.div>
  );
}