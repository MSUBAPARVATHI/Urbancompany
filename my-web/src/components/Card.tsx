const Card: React.FC =()=>{
    return(
        //4 containers 
        <div className="flex justify-left m-5 gap-5">
        <div className="flex-x">
        <div className="card bg-white shadow-md rounded max-w-sm mx-auto flex-2  text-black shadow-md p-10 m-5 overflow-hidden">
            <div className="m-2 justify-left">
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg' alt='demoimage'></img>
            </div>
       <h1 className="text-black text-center text-xl font-bold ">card 1</h1><br/>
       <p className="text-gray-700 text-center">Description for card 1.</p><br/>
       <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 width-5 height-5 m-5 p-5 ...">
  Save Changes
</button>
        </div>

        <div className="card bg-white shadow-md rounded max-w-sm mx-auto flex-2 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-blue-500 overflow-hidden">
        <div className="m-2 justify-left">
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg' alt='demoimage'></img>
            </div>
        <h1 className="text-black text-center text-xl font-bold  ">card 2</h1><br/>
        <p className="text-gray-700 text-center">Description for card 2.</p><br/>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 width-5 height-5 m-5 p-5 ...">
  Save Changes
</button>
        </div>
        </div>

        <div className="flex-y">
        <div className=" card bg-white shadow-md rounded max-w-sm mx-auto flex-1 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-white overflow-hidden">
        <div className="m-2 justify-left">
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg' alt='demoimage'></img>
            </div>
        <h1 className="text-black text-center text-xl font-bold ">card 3</h1><br/>
        <p className="text-gray-700 text-center">Description for card 3.</p><br/>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 width-5 height-5 m-5 p-5 ...">
  Save Changes
</button>
        </div>

        <div className=" card bg-white shadow-md rounded max-w-sm mx-auto flex-1 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-white overflow-hidden">
        <div className="m-2 justify-left">
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1696852847761-574450.jpeg' alt='demoimage'></img>
            </div>
        <h1 className="text-black text-center text-xl font-bold ">card 4</h1><br/>
        <p className="text-gray-700 text-center">Description for card 4.</p><br/>
        <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 width-5 height-5 m-5 p-5 ...">
  Save Changes
</button>
         </div>

         </div>
         </div>
         );
        };
        
        export default Card;