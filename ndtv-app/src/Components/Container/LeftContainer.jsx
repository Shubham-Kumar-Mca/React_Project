import React from 'react'

const LeftContainer = () => {
    const data = [
        { image: "https://c.ndtvimg.com/2022-09/c7pof4gc_sonia-gandhi-ashok-gehlot-rahul-gandhi-getty-240_120x91_29_September_22.jpg?downsize=105:79", title: "Opinion: Ignore The Apology. Ashok Gehlot Has Made It Work." },
        { image: "https://c.ndtvimg.com/2022-09/ct6dupoo_blade-india-helicopter_120x90_29_September_22.jpg?downsize=105:79", title: "Bengaluru City-Airport Chopper To Cut Travel Time From 120 To 15 Minutes" },
        { image: "https://c.ndtvimg.com/2022-09/70h5eqq8_aravali-generic-aravalis-gurgaon-generic_120x90_29_September_22.jpg?downsize=105:79", title: 'Gurugram To Get "Worlds Largest Safari", Park To Cover Over 10,000 Acres' },
        { image: "https://c.ndtvimg.com/2022-09/vj09l5i8_jairamramesh_160x120_29_September_22.jpg?downsize=105:79", title: '"Aukat Samajhta Hoon": J Ramesh On Not Being In Congress President Race' },
        { image: "https://c.ndtvimg.com/2022-09/ib9blfho_biden_120x90_22_September_22.jpg?downsize=105:79", title: '"Wheres Jackie?", President Biden Asks About Dead Lawmaker At Conference' },
        { image: "https://c.ndtvimg.com/2022-09/0uvj6mp_babar-azam-afp_625x300_29_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=105,height=79", title: '"He Is Not One-Dimensional": Former India Cricketer Defends Babar Azam' },
        { image: "https://i.ndtvimg.com/i/2016-06/morgue-generic_240x180_41466428738.jpg?downsize=105:79", title: 'Maruti Suzuki Intern In Gurugram Dies After Jab, Quack Seen Dumping Body' },
        { image: "https://c.ndtvimg.com/2020-02/5n4452a_isha-ambani_120x90_16_February_20.jpg?downsize=105:79", title: 'With Mukesh Ambanis Daughter In Charge, Reliance To Take On Zara, Mango' },
        { image: "https://c.ndtvimg.com/2022-09/dn533j8g_jasprit-bumrah-bcci_625x300_29_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=105,height=79", title: 'Jasprit Bumrah Ruled Out Of T20 World Cup Due To Stress Fracture: Report' },
        { image: "https://i.ndtvimg.com/i/2016-09/abortion_650x400_41474431116.jpg?downsize=105:79", title: 'On Abortion And Marital Rape, Supreme Courts Massive Order' },
        { image: "https://c.ndtvimg.com/2022-09/pf7oc1fo_harsha-bhogle-bcci_625x300_30_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=105,height=79", title: 'Harsha Bhogle Slams English Media For Targeting Deepti Sharma Over Run-Out' },
      ]
    return (
        <>
            <div className='bigStory'>
                <h3 className='title'>Big Story</h3>
                <img src="https://c.ndtvimg.com/2019-01/vb61sj78_mukul-wasnik-congress-twitter_625x300_10_January_19.jpg?downsize=340:209" />
                <p className='description'>After Ashok Gehlot Fiasco, Congress Considering "G-23" Leader Mukul Wasnik</p>
            </div>
            <div className="toStories">
                <h3 className='stories'>Top Stories</h3>
                {data.map(item => (
                    <div className='smallNews'>
                        <img src={item.image} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default LeftContainer