import Container from '../UI/Container';
import heroImg from '../assets/images/chef-5993951_1920.jpg'

const Home = () => {
    return (
        <Container> <div className="lg:flex justify-center items-center w-[1200px] mx-auto mt-10 ">
            <div className='flex-[1]'>
                <div>
                    <div>
                        <h1 className='text-6xl font-bold' >Quality Cleaning <br /><span className=' text-purple-600 '>for Your Home</span></h1>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius. Optio quo repudiandae dolore nam! A, quasi. In vitae quidem, quaerat optio dolor unde modi praesentium? Sunt quo veritatis eos?</p>
                    </div>
                    <button className='btn btn-primary mr-2 mt-10'>Book a Service</button>
                    <button className='btn btn-secondary'>Read More</button>

                </div>
                <hr />
                <div className='flex gap-2 items-center mt-10'>
                    <div>   <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img src={heroImg} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={heroImg} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={heroImg} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={heroImg} />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img src={heroImg} />
                            </div>
                        </div>

                    </div></div>
                    <div>5 Rated out of 5</div>
                </div>

            </div>
            <div className='flex-[1]'>
                <img className='w-full h-full object-cover rounded-xl' src={heroImg} alt="" />
            </div>
        </div></Container>
    );
};

export default Home;