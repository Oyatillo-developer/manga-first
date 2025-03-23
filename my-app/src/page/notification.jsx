import React, { useState } from "react";
import '../style/notification.scss';

const data = [
    { title: "Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру Я так и не смогла усмирить эту злую натуру" },
    { title: "Я стала богатой аристократкой" },
    { title: "Последний человек" },
    { title: "Дочь короля стихий" },
    { title: "Не связывай себя с этой книгой" },
    { title: "Я так и не смогла усмирить эту злую натуру" },
    { title: "Я стала богатой аристократкой" },
    { title: "Последний человек" },
    { title: "Дочь короля стихий" },
    { title: "Не связывай себя с этой книгой" },
];

const Bell = () => {
    const [expandedItems, setExpandedItems] = useState(Array(data.length).fill(false));

    const toggleExpand = (index) => {
        setExpandedItems((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    const truncateText = (text, isExpanded) => {
        return isExpanded || text.length <= 100 ? text : text.slice(0, 100) + '...';
    };

    return (
        <div className="drinking">
            <div className="moral">
                <h1>Уведомления</h1>
            </div>

            <div className="gass">
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className={`falout ${expandedItems[index] ? 'expanded' : ''}`} 
                        onClick={() => toggleExpand(index)}
                    >
                        <h1>{truncateText(item.title, expandedItems[index])}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bell;
