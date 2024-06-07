import { React, useState } from "react";

import data from "./accordionData.js";
import "./AccordionStyles.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);

    // Accordion is selected one by one
    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    // Accordion is selected multiple
    const handleMultipleSelection = (getCurrentId) => {
        let cpyMutiple = [...multiple];

        const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
        else cpyMutiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMutiple);
    };

    return (
        <div className="accordion-container">
            <div className="accordion-wrapper">
                <div className="main-title">Accordion</div>
                <label class="toggle">
                    <input class="toggle-checkbox" type="checkbox"
                        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
                    />
                    <div class="toggle-switch"></div>
                    <span class="toggle-label">Multiple Selections</span>
                </label>

                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={
                                    enableMultipleSelection
                                        ? () => handleMultipleSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                            >
                                <div className="accordion">
                                    <p>{dataItem.question}</p>
                                </div>
                            </div>
                            {enableMultipleSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="answer">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="answer">{dataItem.answer}</div>
                                )}
                        </div>
                    ))
                ) : (
                    <div>No Data Found !</div>
                )}
            </div>
        </div>
    );
};

export default Accordion;
