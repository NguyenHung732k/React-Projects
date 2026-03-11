import { useState } from "react";

const emojis = ["👍", "❤️", "😂", "😮", "🎉", "🔥"];

export default function CommentSystem() {

    const [comments, setComments] = useState([
        {
            id: 1,
            user: "Alex",
            text: "This design system looks great.",
            reactions: { "👍": 2, "❤️": 1 },
            replies: [
                {
                    id: 11,
                    user: "Sam",
                    text: "Agree — super clean."
                }
            ]
        }
    ]);

    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);

    function addComment() {
        if (!input) return;

        setComments([
            ...comments,
            {
                id: Date.now(),
                user: "You",
                text: input,
                reactions: {},
                replies: []
            }
        ]);

        setInput("");
    }

    function react(commentId, emoji) {

        setComments(comments.map(c => {

            if (c.id !== commentId) return c;

            const count = c.reactions[emoji] || 0;

            return {
                ...c,
                reactions: {
                    ...c.reactions,
                    [emoji]: count + 1
                }
            };

        }));
    }

    function addReply(commentId, text) {

        setComments(comments.map(c => {

            if (c.id !== commentId) return c;

            return {
                ...c,
                replies: [
                    ...c.replies,
                    {
                        id: Date.now(),
                        user: "You",
                        text
                    }
                ]
            };

        }));
    }

    return (

        <div className="max-w-xl mx-auto space-y-6">

            {/* Comment Composer */}

            <div className="flex gap-3">

                <input
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setTyping(true);
                    }}
                    placeholder="Write a comment..."
                    className="flex-1 border rounded-xl px-4 py-2"
                />

                <button
                    onClick={addComment}
                    className="bg-blue-500 text-white px-4 rounded-xl"
                >
                    Send
                </button>

            </div>

            {/* Typing Indicator */}

            {typing && (
                <div className="text-xs text-gray-400 flex gap-1">
                    typing
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                </div>
            )}

            {/* Comment List */}

            {comments.map(comment => (

                <CommentCard
                    key={comment.id}
                    comment={comment}
                    react={react}
                    addReply={addReply}
                />

            ))}

        </div>
    );
}



function CommentCard({ comment, react, addReply }) {

    const [showReply, setShowReply] = useState(false);
    const [reply, setReply] = useState("");
    const [picker, setPicker] = useState(false);

    return (

        <div className="flex gap-3 p-4 rounded-2xl hover:bg-gray-50 transition">

            <div className="w-8 h-8 rounded-full bg-gray-300"></div>

            <div className="flex-1">

                <div className="text-sm font-semibold">
                    {comment.user}
                </div>

                <div className="text-gray-700 mt-1">
                    {comment.text}
                </div>

                {/* Reactions */}

                <div className="flex gap-2 mt-2 items-center">

                    {Object.entries(comment.reactions).map(([emoji, count]) => (

                        <button
                            key={emoji}
                            className="flex items-center gap-1 text-sm hover:scale-110 transition"
                        >
                            {emoji}
                            {count}
                        </button>

                    ))}

                    <button
                        onClick={() => setPicker(!picker)}
                        className="text-sm text-gray-400"
                    >
                        +
                    </button>

                </div>

                {/* Reaction Picker */}

                {picker && (

                    <div className="flex gap-2 mt-2 bg-white border rounded-lg p-2 shadow">

                        {emojis.map(e => (

                            <button
                                key={e}
                                onClick={() => react(comment.id, e)}
                                className="hover:scale-125 transition"
                            >
                                {e}
                            </button>

                        ))}

                    </div>

                )}

                {/* Action Bar */}

                <div className="flex gap-4 text-xs text-gray-500 mt-2">

                    <button
                        onClick={() => setShowReply(!showReply)}
                        className="hover:text-black"
                    >
                        Reply
                    </button>

                </div>

                {/* Reply Editor */}

                {showReply && (

                    <div className="mt-2 flex gap-2">

                        <input
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                            placeholder="Write a reply..."
                            className="flex-1 border rounded-lg px-3 py-1 text-sm"
                        />

                        <button
                            onClick={() => {
                                addReply(comment.id, reply);
                                setReply("");
                            }}
                            className="text-blue-500 text-sm"
                        >
                            Send
                        </button>

                    </div>

                )}

                {/* Replies */}

                {comment.replies.length > 0 && (

                    <div className="mt-3 space-y-2 border-l pl-3">

                        {comment.replies.map(r => (

                            <div key={r.id} className="text-sm">

                                <span className="font-semibold">
                                    {r.user}
                                </span>

                                {" "}
                                {r.text}

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );
}