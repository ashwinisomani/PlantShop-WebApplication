import React, { useState } from "react";

import '../styles/Accordion.css'

function Accordion({title, content}) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div className="accordion-container">
            <div className="accordion-header" onClick={() => setIsSelected(!isSelected)}>
                <div className="accordion-title">{title}</div>
                <div className="accordion-control">{isSelected ? '-' : '+'}</div>
            </div>
            { isSelected && 
                <div className="accordion-content">
                    <ul className="accordion-content-list">
                        {
                            content.map((item, index) => {
                                return (
                                    <li className="accordion-content-list-item">{item.product} - ${item.value}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Accordion;