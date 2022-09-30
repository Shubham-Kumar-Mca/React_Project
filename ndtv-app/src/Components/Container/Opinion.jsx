import React from 'react'
import "../CSS/Opinion.css"

const Opinion = () => {
    return (
        <div className='OpinionContainer'>
            <div className='opinionDiv'>
                <div className='heading'>
                    <h4>Opinion</h4>
                    <p>More</p>
                </div>
                <div className='opinionDiv2 borderBottom'>
                    <div className='OpinionImageContainer sec'>
                        <div className='opinionImage'>
                            <img src="https://c.ndtvimg.com/2022-09/jko96suk_sc-livestreaming-650_625x300_30_September_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: Supreme Court's Live Stream - Sunlight As Disinfectant</p>
                        </div>
                        <p className='writerName'>Derek O'Brien</p>
                    </div>
                    <div className='OpinionImageContainer sec borderLeft'>
                        <div className='opinionImage'>
                            <img src="https://c.ndtvimg.com/2022-09/lh3bbf7g_social-media-generic-bloomberg_120x91_30_September_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: India's Internet Bill Is Straight Out of Beijing's Playbook</p>
                        </div>
                        <p className='writerName'>Andy Mukherjee</p>
                    </div>
                    <div className='OpinionImageContainer sec borderLeft'>
                        <div className='opinionImage'>
                            <img src="https://c.ndtvimg.com/2022-09/c7pof4gc_sonia-gandhi-ashok-gehlot-rahul-gandhi-getty-240_120x91_29_September_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: Ignore The Apology. Ashok Gehlot Has Made It Work.</p>
                        </div>
                        <p className='writerName'>Swati Chaturvedi</p>
                    </div>
                </div>

                <div className='opinionDiv2 '>
                    <div className='OpinionImageContainer sec'>
                        <div className='opinionImage paddingTop'>
                            <img src="https://c.ndtvimg.com/2022-07/9emkgmig_hyundai-logo_120x90_13_July_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: Oops, Wrong Hyundai. India's Industrial Policy Misfires - Again</p>
                        </div>
                        <p className='writerName paddinBottom'>Andy Mukherjee</p>
                    </div>
                    <div className='OpinionImageContainer sec borderLeft'>
                        <div className='opinionImage paddingTop'>
                            <img src="https://c.ndtvimg.com/2022-09/cj5ga4ns_sonia-gandhi-getty-240_120x91_27_September_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: With Rajasthan Mishandling, Sonia Gandhi Delivers A Massive Mistake</p>
                        </div>
                        <p className='writerName paddinBottom'>Ashutosh</p>
                    </div>
                    <div className='OpinionImageContainer sec borderLeft'>
                        <div className='opinionImage paddingTop'>
                            <img src="https://c.ndtvimg.com/2022-09/1csbb1k_ashok-gehlot-rahul-gandhi-ani-240_240x180_20_September_22.jpg?downsize=100:75" alt="" />
                            <p>Opinion: Ashok Gehlot Goes From "Preferred Candidate" To Full-Blown Rebel</p>
                        </div>
                        <p className='writerName paddinBottom'>Swati Chaturvedi</p>
                    </div>
                </div>
            </div>

            <div className='advertismnt'>
                <img src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_313%2Cw_500%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/ff56858c61e6d666ffc5f80bb090e170.jpg" alt="" />
                <h3>Every Indian Should Get This Incredible Rs.2499 Smartwatch</h3>
            </div>
        </div>
    )
}

export default Opinion