import bannerPic from "../../images/coffee_foam_cup_140184_1600x900.jpg"
const Banner = () => {
    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundImage: `url(${bannerPic})`,
                    backgroundSize: "auto",
                    backgroundRepeat:"no-repeat",
                    backgroundPosition:"center",
                    Width:"1320px",
                    height:"880px"
                }}>
                <div className="bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="max-w-3xl bg-[#c5d3e8ae] p-7 font-lexend  rounded-xl text-[#1d1b1b]">
                        <h1 className="mb-5 text-5xl   font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn mr-4 bg-[#0BE58A] border-none hover:bg-[#0BE58A]">Explore Now</button>
                        <button className="btn ">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;