import React from 'react'
import { cacheLife } from 'next/dist/server/use-cache/cache-life';

const users = async () => {

      "use cache";

        
      cacheLife("hours");

    const response = await fetch("https://randomuser.me/api/?results=5&utm_source=chatgpt.com");

    if (!response.ok) {
        throw new Error(`HTTP-Fehler: ${response.status}`);
    }

    const data = await response.json();

    const data2 = data.results;

  return (
    <div>
      {data2.map((data2: any) => {
        return <p key={data2.login.uuid}>{data2.name.first}</p>
      })
      }
    </div>
  )
}

export default users;
