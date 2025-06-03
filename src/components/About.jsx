import aboutImage from '../assets/about.webp';


const About = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">

            <h2 className="text-xl lg:text-3xl tracking-tighter text-center uppercase mb-12 mx-4">
                About Us
            </h2>

            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">

                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="" />
                </div>

            </div>

        </section>
    )
}

export default About