"use client";

import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    return(
        <main>
            <h1>Amin is There</h1>
            <h1>
                {count}
            </h1>
            <button onClick={() => setCount(count +1 )}>
                increase
            </button>
    </main>
    )
}