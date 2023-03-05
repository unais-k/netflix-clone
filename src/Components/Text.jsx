import React, { useState } from "react";

function Text() {
    const [color, setColor] = useState("black");
    return (
        <div>
            <button onClick={() => setColor(color + 1)}>Click Me</button>
            <h1>Hello</h1>
        </div>
    );
}

export default Text;
