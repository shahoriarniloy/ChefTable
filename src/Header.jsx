
const header = () => {
    return (
        <div className="mb-8">

            <div className="navbar bg-base-100 mb-8  lg:mx-24 mx-auto max-w-[1320px]">
                <div className="navbar-start">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Recipe Calories</a>
                    </div>
                </div>

                <div className="navbar-center lg:block hidden">
                    <ul className="flex ">
                        <li className="mx-2">Home</li>
                        <li  className="mx-2">Recipes</li>
                        <li  className="mx-2">About</li>
                        <li  className="mx-2">Search</li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                        <div className="form-control lg:block hidden">
                            <input type="text" placeholder="Search" className="input input-bordered lg:w-48 w-auto" />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Profile Picture" src="/public/image/profile.svg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] lg:h-[600px] h-fit bg-gradient-to-t from-slate-900 to-slate-900 rounded-3xl lg:mx-24 mx-6 flex justify-center items-center" style={{backgroundImage: 'url(/image/banner.jpeg)'}}>
                <div className="flex flex-col justify-center items-center">
                <h1 className="w-4/6 text-center text-white text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="w-4/6 text-center text-white text-lg font-normal ">Embark on a culinary journey with our bespoke cooking classes, meticulously crafted to suit your preferences and skill level. Discover the joy of cooking as you explore a world of flavors and techniques in our personalized culinary experiences.</p>
                <div className="flex lg:flex-row flex-col gap-x-4 mt-4">
                    <button className="btn btn-success rounded-3xl w-48">Explore Now</button>
                    <button className="btn btn-outline rounded-3xl w-48 border-white text-white mb-4">Our Feedback</button>
                </div>
                </div>
     
            </div>

        </div>
    );
};

export default header;