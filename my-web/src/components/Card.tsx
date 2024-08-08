import collection from '../../public/collection.webp'
const Card: React.FC =()=>{
    return(
        <div>
          <div>
            <div className="flex flex-grow">
  <div className="w-1/2 card flex w-full flex-col rounded-none lg:flex-row bg-white grid h-30 flex-grow place-items-left ">

    <h1 className="text-xl text-bold text-black m-3">Home services at your doorstep</h1>

  <div className="flex-x card-bordered  h-50 p-5 m-5">
            <p className="flex text-align-center text-xl text-black">What are you looking for?</p>

            <div className="flex justify-between gap-2">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1678864013225-bfc1de.jpeg"></img>
                <p>Women's Salon & spa</p>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1710241114433-5cfa7c.jpeg"></img>
            <p>Men's Salon & massage</p>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1679292077307-6143d7.jpeg"></img>
                <p>AC & Appliance Repair</p>
            </div>
            </div>

            <div className="flex justify-between gap-2">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1681711961404-75dfec.jpeg"></img>
                <p>Cleaning & Pest Control</p>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1658402794135-faf080.png"></img>
                <p>Electrician, Plumber & Carpenter</p>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340729734-0a23f7.jpeg"></img>
                <p>Native Water Purifier</p>
            </div>
            </div>

            <div className="flex justify-between gap-5">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/luminosity/1705340800795-115b3b.jpeg"></img>
                <p>Native Smart Lock</p>
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/w_56,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1674120935535-f8d5c8.jpeg"></img>
                <p>Painting and Water Proofing</p>
            </div>
            </div>

         </div>

  </div>


  {/* <div ></div> */}
  {/* className="divider divider-horizontal" */}
  {/* <div className="card flex w-full flex-col rounded-none lg:flex-row bg-white grid h-30 flex-grow place-items-center w-1/2">

  <div className="w-1/2  ">
    <div className="flex-grow w-100 p-100 mt-2 h-100 align-center">
                <img src="/collection.webp"/>
    </div>
</div>
</div> */}

<div className='flex flex-grow w-1/2'>
  <div className='flex flex-grow w-full p-50 h-50 align-center'>
  <img src="/collection.webp"/>
  </div>
</div>
            
</div>
        
         </div>

{/* viewers and likes */}

         <div className="stats shadow m-10">
  <div className="stat m-5 justify-center">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="stat-value text-black">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <div className="stat-title">Page Views</div>
    <div className="stat-value text-black">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>

         </div>
         {/* 3 images container */}

            <div className="flex justify-between gap-5 w-full" id="slide1">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-10 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1715685371430-6b3871.jpeg"></img>
                
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg"></img>
            
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428209166-2d42c0.jpeg"></img>
            </div>
        
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>


        <div className="flex justify-between gap-5" id="slide2">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-10 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1715685371430-6b3871.jpeg"></img>
                
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg"></img>
            
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428209166-2d42c0.jpeg"></img>
          </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
        </div>


        <div className="flex justify-between gap-5" id="slide3">
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-10 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1715685371430-6b3871.jpeg"></img>
                
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1701759875987-8b654d.jpeg"></img>
            
            </div>

            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 width-5 height-5 m-5 p-5 ... ">
                <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_394,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1711428209166-2d42c0.jpeg"></img>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
           
        </div>




         {/* long images are added */}

         <div className="carousel w-50 mt-10 mb-10 ml-20 mr-30  w-50 h-50 m-10 justify-between">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-50" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

</div>
// another card


         );
        };
        
        export default Card;