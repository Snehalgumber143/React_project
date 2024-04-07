import React, { useState } from 'react';

function Databinding() {
    const [data, setData] = useState({
        name: "mohan",
        age: 24
    });

    const handleChange = (event) => {
        setData({
            ...data,
            name: event.target.value
        });
    }

    return (
        <div>
            <h2>Databinding</h2>
            <h4>One way Binding: {data.name} {data.age}</h4>
            <div>
                <input type='text' value={data.name} onChange={handleChange} />
            </div>
        </div>
    );
}

export default Databinding;