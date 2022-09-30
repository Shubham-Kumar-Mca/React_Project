import React from 'react'

const RightContainer = () => {
    const data = [
        { image: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_313%2Cw_500%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/5b1dc949a101e8c35fecd4af55f4be40.jpg", title: "Experts Say This Rs.2499 Smartwatch Is A Must For Seniors" },
        { image: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_313%2Cw_500%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/0721923a5f6c91a2beba83640cf137ba.png", title: "Woow! They look so happy" },
        { image: "https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_313%2Cw_500%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/80f657acaab9b7ab1f85bde4d87addcc.jpg", title: "Age between 30 - 55 Yrs ? Term Life Insurance Worth ₹1 Cr Starting at ₹1450/Mon*. Get Quote!" },
        { image: "https://images.taboola.com/taboola/image/fetch/h_313,w_500,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/c08db0c00a7ea315b4cc64a723cbd785.jpg", title: "Celebrate Apna Wala Festival" },
    ]
    return (
        <>
            <div className='BhagatSingImage'>
                <img src="https://tpc.googlesyndication.com/simgad/15977456974336300600" alt="" />
            </div>
            <div className='fivNews'>
                {data.map(item => (
                    <div className='smallNews5'>
                        <img src={item.image} alt="" />
                        <h3 className='hedlineTitle'>{item.title}</h3>
                    </div>
                ))}
            </div>
        </>
    )
}

export default RightContainer