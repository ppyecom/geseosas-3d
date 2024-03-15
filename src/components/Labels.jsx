import React from 'react'

const Labels = () => {

    const cards = [{
        id: "Principal1",
        title: "Bienvenido",
        subheader: "PYECOM",
        descrition: `Esta presentacion esta realizada con tecnologias React, Gsap, Blender, etc.`,
        ml: "1k",
        points: ["extreme", "extreme", "extreme"],
      },
      {
        id: "Principal2",
        title: "3D",
        subheader: "PYECOM",
        descrition: `Creado por Piero Guere Arzapalo - ImpulsoSmart`,
        ml: "1k",
        points: ["extreme", "extreme", "extreme"],
      },
      {
        id: "Classic_Card",
        title: "Classic",
        subheader: "Nuka-cola",
        descrition: `Sumérgete en una experiencia efervescente con nuestra gaseosa única que combina la frescura de cítricos selectos. Cada sorbo es como un estallido de energía refrescante que revitaliza tus sentidos y te transporta a un mundo lleno de sabores vibrantes.`,
        ml: "350 ml",
        points: ["extreme", "extreme", "extreme"],
      },
      {
        id: "Quantum_Card",
        title: "Quantum",
        subheader: "Nuka-cola",
        descrition: `Descubre el encanto de nuestras burbujas danzantes en esta gaseosa que fusiona la efervescencia con la exótica mezcla de frutas. Cada burbuja es una explosión de sabor, creando una sinfonía refrescante que te transporta a un paraíso tropical con cada sorbo.`,
        ml: "350 ml",
        points: ["extreme", "extreme", "extreme"],
      },
      {
        id: "Sunset_Card",
        title: "Sunset",
        subheader: "Zarzaparrilla",
        descrition: `Sumérgete en la suavidad y el deleite con nuestra gaseosa única que combina la cremosidad de la vainilla con la dulzura del caramelo. Cada sorbo es como un abrazo reconfortante de sabores indulgentes que te envuelve en una experiencia efervescente de placer puro.`,
        ml: "350 ml",
        points: ["extreme", "extreme", "extreme"],
      },
    ]

  return (
    <div className="labels_container">
        <div className="labels_wrapper">
            {cards.map( (card) => (
                <div id={card.id} key={card.id} className="label_card label_card--hidden">
                    <div>
                        <h1 id={card.title} className="text_header">{card.title}</h1>
                        <p className="text_subheader">{card.subheader}</p>
                        <p className="text_body">{card.descrition}</p>
                    </div>
                    <div>
                        <h1 className="text_subheader">{card.ml}</h1>
                    </div>
                    <div>
                        <ul>
                            {card.points.map((point, index) => {
                                if (index === card.points.length){
                                    return (
                                        <li key={index} className="text_item_des">
                                            <p className="text_body text_item_des text_item_des_border_top text_item_des_border_bottom">
                                                {point}
                                            </p>
                                        </li>
                                    )
                                }else{
                                    return (
                                        <li key={index} className="text_body text_item_des text_item_des_border_top">
                                            <p>{point}</p>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Labels