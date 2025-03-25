import { useState, useEffect } from 'react'
import Post from './Post'

const fakeHeadlines = [
    { headline: 'Man Eats Entire Pizza in One Bite While Skydiving', detail: 'In a world first, a man ate an entire pizza in a single bite while plummeting toward the Earth. Experts call it "impossible" but he did it.' },
    { headline: 'Dog Becomes World Leader After Winning Election', detail: 'In a stunning turn of events, a Golden Retriever has been elected as the new President of the United States. The nation is still in shock.' },
    { headline: 'Aliens Visit Earth, Demand Pizza and Wi-Fi', detail: 'Extraterrestrials land in Times Square and immediately ask for a large pepperoni pizza and the Wi-Fi password. They refuse to leave without both.' },
    { headline: 'Man Claims to Have Found the Secret to Eternal Happiness', detail: 'The secret is... to simply stop caring about anything. In a philosophical breakthrough, he now spends all day napping.' },
    { headline: 'A Cat Takes Over Major Stock Exchange, Declares New Currency', detail: 'In a bizarre financial move, a cat has assumed control of Wall Street and introduced "catnip" as the global currency.' },
];

const Newsfeed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const shuffledPosts = [...fakeHeadlines].sort(() => Math.random() - 0.5)
        setPosts(shuffledPosts)
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
                <Post key={index} headline={post.headline} detail={post.detail} />
            ))}
        </div>
    )
}

export default Newsfeed