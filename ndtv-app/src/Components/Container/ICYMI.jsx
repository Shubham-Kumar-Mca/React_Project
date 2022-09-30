import React from 'react'
import "../CSS/ICYMI.css"

const ICYMI = () => {
    const data = [
        { image: "https://c.ndtvimg.com/2022-09/v81ksjr_asha-parekh_295x200_30_September_22.jpg?downsize=315:350", title: "National Awards: Asha Parekh Receives Dadasaheb Phalke Award", subTitle: "Entertainment" },
        { image: "https://c.ndtvimg.com/2022-08/mfpm0p2_joe-biden_295x200_02_August_22.jpg", title: "Video: US President Joe Biden Appears Lost After Speech", subTitle: "World News" },
        { image: "https://c.ndtvimg.com/2022-09/b5tq63j8_ajay-devgn_295x200_30_September_22.jpg?downsize=315:350", title: "National Awards: What Ajay Devgn Posted After His Third Best Actor Win", subTitle: "Bollywood" }, { image: "https://c.ndtvimg.com/2022-09/bpph19i8_ali-fazal_295x200_30_September_22.jpg?downsize=315:350", title: "Richa Chadha And Ali Fazal Share First Pic From Wedding Festivities", subTitle: "celeb" }, { image: "https://c.ndtvimg.com/2022-09/tne6r7i8_andreev-moutet-270_295x200_30_September_22.jpg?downsize=315:350", title: "Watch: Tennis Stars Get Into Physical Altercation After Match In France", subTitle: "Sports" }
    ]
    return (
        <div className='ICYMI_Container'>
            <div className='span'>
                <span>ICYMI</span>
            </div>
            <div className='icymi_Div'>
                {data.map(item => (
                    <div className='newsHeading'>
                        <img src={item.image} alt="" />
                        <div className='marginTop'>
                            <span>{item.subTitle}</span>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ICYMI