import React from 'react'
import "./NewsContainer.css"

const NewsContainer = () => {
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
  ]

  const data1 = [
    {title:'"Priority To Win 2023": Sachin Pilot After Meeting Sonia Gandhi', image : "https://c.ndtvimg.com/2021-10/tn3olmok_sachin-pilot-pti-photo_120x90_06_October_21.jpg?downsize=100:75"},
    {title:'"Did not Go To Fight": Bihar Girl Who Got "Condoms" Reply From Officer', image : "https://c.ndtvimg.com/2022-09/384nlrqg_riya-kumari-ani_120x90_29_September_22.jpg?downsize=100:75"},
    {title:'For US Visa, Over 2-Year Wait For New Delhi, Just 2 Days For Beijing', image : "https://c.ndtvimg.com/2022-09/45rfmv4g_jaishankar-blinken_120x90_29_September_22.jpg?downsize=100:75"},
  ]
  return (
    <div className='NewsContainer'>
      <div className="left">
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

      </div>
      <div className="center">
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
            {data1.map(item=>(
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

        <div>
          
        </div>

      </div>
      <div className="right"></div>
    </div>
  )
}

export default NewsContainer