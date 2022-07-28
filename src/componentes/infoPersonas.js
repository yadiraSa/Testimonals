import React, { useState} from "react";
import Testimonio from "./Testimonio";

const InfoPersonas = () => {
    const [personas, setPersonas] = useState([
      {
        id:'p1',    
        nombre: "Shawn Wang",
        pais: "Singapur",
        imagen: 1,
        cargo: "Ingeniero de Software",
        empresa: "Amazon",
        ntesti: "Shawn",
        testimonio:
          "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.",
      },
      {
        id:'p2', 
        nombre: "Sarah Chima",
        pais: "Nigeria",
        imagen: 2,
        cargo: "Ingeniera de Software",
        empresa: "ChatDesk",
        ntesti: "Sarah",
        testimonio:
          "freeCodeCamp was the gateway to my careeras a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.",
      },
      {
        id:'p3', 
        nombre: "Emma Bostian",
        pais: "Suecia",
        imagen: 3,
        cargo: "Ingeniera de Software",
        empresa: "Spotify",
        ntesti: "Emma",
        testimonio:
          "I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on and confidence I needed to land my dream job as a software engineer at Spotify.",
      },
    ]); 


    return (
      <div>
        {personas.map((persona) => {
          return (
            <Testimonio
              key={persona.id}
              nombre={persona.nombre}
              pais={persona.pais}
              imagen={persona.imagen}
              cargo={persona.cargo}
              empresa={persona.empresa}
              ntesti={persona.testimonio}
              testimonio={persona.testimonio}  
            />
          );
        })}
      </div>
    );
};

export default InfoPersonas;