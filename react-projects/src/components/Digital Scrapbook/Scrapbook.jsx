import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Page from './Page'

const Scrapbook = ({ pages, setPages }) => {
    const onDragEnd = (result) => {
        if (!result.destination) return
        const reorderedPages = Array.from(pages)
        const [movedPage] = reorderedPages.splice(result.source.index, 1)
        reorderedPages.splice(result.destination.index, 0, movedPage)
        setPages(reorderedPages)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        className="flex flex-wrap"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {pages.map((page, index) => (
                            <Draggable key={page.id} draggableId={String(page.id)} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="m-2"
                                    >
                                        <Page page={page} pages={pages} setPages={setPages} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Scrapbook
