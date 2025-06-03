import aboutImage from '../assets/about.webp';


const About = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">

            <h2 className="text-xl lg:text-3xl tracking-tighter text-center uppercase mb-12 mx-4">
                About Us
            </h2>

            <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">

                <div className="mb-8 lg:mb-0">
                    <img src={aboutImage} alt="About VastuSpace" className='w-full h-auto'/>
                </div>

                <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum dignissimos eum repellendus! Amet temporibus tempore exercitationem at, magnam dolorum labore soluta hic ut tempora, ratione deserunt voluptate dignissimos. Inventore dicta odit ipsum aliquam labore esse mollitia eum perspiciatis non temporibus? Reiciendis sit possimus nobis laboriosam fugit, excepturi, harum provident, beatae dolorem sequi aliquid? Mollitia saepe quibusdam ducimus assumenda, aperiam officiis labore nihil amet. Quisquam, dolorem. Enim, dolores sint nam ullam temporibus voluptatibus est dolorum et perspiciatis iusto harum itaque at eligendi cupiditate debitis nostrum molestias, alias aut excepturi porro minima odio? Explicabo in cumque nisi, modi atque expedita enim?
                </p>

            </div>

        </section>
    )
}

export default About