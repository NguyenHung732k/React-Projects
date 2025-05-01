import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Card from './Card'

const MasonryGrid = () => {
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setItems([
                { id: 1, title: 'Item 1', description: 'Description 1', image: 'https://via.placeholder.com/300x200' },
                { id: 2, title: 'Item 2', description: 'Description 2', image: 'https://via.placeholder.com/300x200' },
                { id: 3, title: 'Item 3', description: 'Description 3', image: 'https://via.placeholder.com/300x200' },
            ])
            setLoading(false)
        }, 1500)
    }, [])

    const loadMoreData = () => {
        if (loading) return

        setLoading(true)
        setTimeout(() => {
            setItems((prevItems) => [
                ...prevItems,
                { id: 4, title: 'Item 4', description: 'Description 4', image: 'https://via.placeholder.com/300x200' },
                { id: 5, title: 'Item 5', description: 'Description 5', image: 'https://via.placeholder.com/300x200' },
            ])
            setLoading(false)
        }, 1500)
    }

    const onDragEnd = (result) => {
        const { destination, source } = result
        if (!destination) return

        const reorderedItems = [...items]
        const [movedItem] = reorderedItems.splice(source.index, 1)
        reorderedItems.splice(destination.index, 0, movedItem)

        setItems(reorderedItems)
    }

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Masonry Grid</h1>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                        >
                            {loading ? (
                                // Show skeleton loaders when data is loading
                                <>
                                    {Array(6)
                                        .fill()
                                        .map((_, index) => (
                                            <div
                                                key={index}
                                                className="bg-gray-200 animate-pulse rounded-xl p-4 h-64"
                                            >
                                                <div className="bg-gray-300 rounded-lg w-full h-48 mb-4"></div>
                                                <div className="bg-gray-300 h-6 mb-2"></div>
                                                <div className="bg-gray-300 h-4 w-3/4"></div>
                                            </div>
                                        ))}
                                </>
                            ) : (
                                items.map((item, index) => (
                                    <Card key={item.id} content={item} index={index} />
                                ))
                            )}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            {/* Infinite Scroll */}
            <InfiniteScroll
                dataLength={items.length}
                next={loadMoreData}
                hasMore={hasMore}
                loader={
                    <div className="text-center mt-8">
                        <svg
                            className="animate-spin h-6 w-6 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                            <path
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v16a8 8 0 01-8-8z"
                                className="opacity-75"
                            />
                        </svg>
                        <p className="text-gray-600 mt-2">Loading more...</p>
                    </div>
                }
                endMessage={<div className="text-center mt-8 text-gray-600">No more items to load.</div>}
            />
        </div>
    )
}

export default MasonryGrid