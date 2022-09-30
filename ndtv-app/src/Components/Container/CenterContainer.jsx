import React from 'react'

const CenterContainer = () => {
    const data1 = [
        { title: '"Priority To Win 2023": Sachin Pilot After Meeting Sonia Gandhi', image: "https://c.ndtvimg.com/2021-10/tn3olmok_sachin-pilot-pti-photo_120x90_06_October_21.jpg?downsize=100:75" },
        { title: '"Did not Go To Fight": Bihar Girl Who Got "Condoms" Reply From Officer', image: "https://c.ndtvimg.com/2022-09/384nlrqg_riya-kumari-ani_120x90_29_September_22.jpg?downsize=100:75" },
        { title: 'For US Visa, Over 2-Year Wait For New Delhi, Just 2 Days For Beijing', image: "https://c.ndtvimg.com/2022-09/45rfmv4g_jaishankar-blinken_120x90_29_September_22.jpg?downsize=100:75" },
    ];

    const data2 = [
        { imgage: "https://c.ndtvimg.com/2022-03/i4r4j27s_himanta-sarma-270_295x200_14_March_22.jpg?downsize=212:236", title: '"Leaves Meet In Between, Goes For Jogging": Himanta Sarma On Rahul Gandhi' },
        { imgage: "https://c.ndtvimg.com/2022-09/jsull94_sanjay-manjrekar-twitter-_295x200_30_September_22.jpg?downsize=212:236", title: '"Watching My Dear Friend": Ravindra Jadeja Shares Pic Of Sanjay Manjrekar' },
        { imgage: "https://c.ndtvimg.com/2022-09/rk3i6c6g_abhiyuday-mishra_295x200_29_September_22.jpg?downsize=212:236", title: 'Indian YouTuber "Skylord", With Millions Of Fans, Dies In Accident' },
    ];

    const data3 = [
        { image: "https://c.ndtvimg.com/2022-08/fgueqjb_bobby-kataria-smoking_120x90_11_August_22.jpg?downsize=105:79", title: "Influencer Who Smoked Inside SpiceJet Plane Arrested, Released On Bail" },
        { image: "https://c.ndtvimg.com/2022-09/hhplo3n_ameesha_120x90_29_September_22.jpg?downsize=100:75", title: '"It is Crazy And...": Ameesha On Dating Rumours With Pakistani Actor Imran' },
        { image: "https://c.ndtvimg.com/2022-04/svgfge8_rbi-reuters-reserve-bank-of-india-reuters_120x90_30_April_22.jpg?downsize=105:79", title: 'RBI Certain To Raise Rates Today, The Question Is How Much' },

    ];
    
    return (
        <>
            <div className='fNews'>
                <img src="https://c.ndtvimg.com/2022-09/ngging6k_digvijayasingh_640x480_29_September_22.jpg?downsize=570:351" />
                <h3 className='heding1'>"When Ashok Gehlot...": Digvijaya Singh On Why He Decided To Contest</h3>
            </div>

            <div className='sNews'>
                <div className='news1'>
                    <img src="https://c.ndtvimg.com/2021-06/bi03lleo_chidambaram-_650x400_14_June_21.jpg?downsize=277:170" />
                    <p className='title1'>"Don't Know How Many MLAs Support Sachin Pilot": P Chidambaram</p>
                </div>
                <div className='advertisment'>
                    <img src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_200%2Cw_340%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//justdigital.site/assets/images/banner-right-image.png" />
                    <p className='title2'>Just Digital Site - </p>
                    <p className='title3'>justdigital.site</p>
                </div>
            </div>

            <div className='tNews'>
                <div className='dataMaping'>
                    {data1.map(item => (
                        <div className='smallNews2'>
                            <p>{item.title}</p>
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>
                <div className='fNews'>
                    <img src="https://c.ndtvimg.com/2022-09/61pf5ioo_blade-india-helicopter_295x200_29_September_22.jpg?downsize=212:236" alt="" />
                    <p className='desc'>Bengaluru City-Airport Chopper To Cut Travel Time From 120 to 15 Minutes</p>
                </div>
            </div>

            <div className='fouNews'>
                {data2.map(item => (
                    <div className='smallNews3'>
                        <img src={item.imgage} alt="" />
                        <h3 className='newTitls'>{item.title}</h3>
                    </div>
                ))}
            </div>

            <div className='tNews'>
                <div className='fNews1'>
                    <img src="https://c.ndtvimg.com/2022-09/vpeqi3jo_lml-e-bikes_270x300_30_September_22.jpeg?downsize=212:236" alt="" />
                    <p className='desc1'>LML Reveals Three E-Bike Concepts In India. Launch In 2023</p>
                </div>
                <div className='dataMaping'>
                    {data3.map(item => (
                        <div className='smallNews4'>
                            <p>{item.title}</p>
                            <img src={item.image} alt="" />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default CenterContainer