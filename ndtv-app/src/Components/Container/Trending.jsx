import React from 'react'
import "../CSS/Trending.css"

const Trending = () => {
    const data = [
        { image: "https://c.ndtvimg.com/2022-03/j4t2ftg_russia-ukraine-tank_120x90_02_March_22.jpg", title: "Ukraine's NATO Move As Russia Annexes 4 Regions" },
        { image: "https://c.ndtvimg.com/2022-09/ec3n6dko_shashi-tharoor-manifesto-new_120x90_30_September_22.jpg", title: '"Apologise Unconditionally": Shashi Tharoor On Map Blunder In Manifesto' },
        { image: "https://c.ndtvimg.com/2022-01/dt097lm_pakistan-international-airlines_120x90_21_January_22.jpg", title: "Pakistan Airlines' 'Wear Underwear' Dress Code. Then, A Clarification" },
        { image: "https://c.ndtvimg.com/2022-09/ba79ikfk_ashok-gehlot-pti_625x300_30_September_22.jpg?im=FaceCrop,algorithm=dnn,width=240,height=180", title: "Photo Reveals Ashok Gehlot's Cheat-Sheet For Meeting With Sonia Gandhi" },
        { image: "https://c.ndtvimg.com/2021-02/gvgu5fhc_ocean-generic_120x90_11_February_21.jpg", title: 'Scientists Discover Massive "Ocean" Near Earths Core' },
        { image: "https://c.ndtvimg.com/2022-09/mtkvkc1s_gujarat-auto-driver-bjp_120x90_30_September_22.jpg", title: "After Dinner For Arvind Kejriwal, Gujarat Auto Driver's U-Turn For PM Modi" },
    ]
    return (
        <div className='TrendingContainer'>
            <div className='span'>
                <span>TRENDING</span>
            </div>
            <div className='Trending_Div'>
                {data.map(item => (
                    <div className='newsHeading'>
                        <img src={item.image} alt="" />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending