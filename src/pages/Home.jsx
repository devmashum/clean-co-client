import heroImg from '../assets/images/chef-5993951_1920.jpg'

const Home = () => {
    return (
        <div className="flex justify-center items-center w-[1200px] mx-auto mt-10 ">
            <div >
                <div>
                    <div>
                        <h1 className='text-6xl' text-3xl>Quality Cleaning for your Home</h1>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius. Optio quo repudiandae dolore nam! A, quasi. In vitae quidem, quaerat optio dolor unde modi praesentium? Sunt quo veritatis eos?</p>
                    </div>

                </div>
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Home;