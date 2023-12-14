import React, { useState } from 'react'
import './Project.css'


const list = [
    {
        name: "Commatecs",
        description: "Commatecs is a Software House We do all kind of Software Solutions Á& Artificial Intelligence (AI)",
        detail: "Commatecs is a Software House",
        link: "https://commatecs.com/"
    },
    {
        name: "CooTecStore",
        description: "To provide the technology devices to serve the business community in the easiest, cheapest and most guaranteed way.",
        detail: "Online Store (Soon)",
        link: "https://cotecstore.com/"

    },
    {
        name: "CooHosting",
       description:"We will provide a free platform for teaching accounts and auditing to prepare new generations to be ready for the best job opportunity in the labor market ",
        detail:"For Hosting Services",
        link: "https://coohosting.com/"

    },
    {
        name:"ExaSpeed",
        description:"ExaSpeed is a Team who Supports Companies on The IT Department by Consulting Contracts & Infrastructure of Data and Connections",
        detail:"For The All IT Solutions",
        link: "https://exaspeed-it.com/"

    },
    {
        name:"Faathorh",
        description:"e will provide a free platform for teaching accounts and auditing to prepare new generations to be ready for the best job opportunity in the labor market",
        detail:"Faathorh Platform",
        link: "https://faatorh.com/"

    },
    {
        name:"Madical mail",
        description:"will be soon (We will announce the details later)",
        detail:"Soon",
        link: "#"

    },
]

export const Project = () => {
    const [index, setIndex] = useState(0)
    const [current, setCurrent] = useState(list[0])

    const change = (i) => {
        let idx = index
        idx += i
        if(idx < 0)
        {
            idx = list.length -1
        }
        else if(idx >= list.length)
        {
            idx = 0
        }
        setIndex(idx)
        setCurrent(list[idx])
    }
  return (
    <div id='project'>
        
    </div>
  )
}
