const Card: React.FC =()=>{
    return(
        <div className="flex justify-center gap-5">
        <div className="flex-x">
        <div className="max-w-sm mx-auto flex-2 bg-pink-500 rounded-lg text-black shadow-md p-10 m-5 overflow-hidden">
       <h1 className="text-black text-center ">card 1</h1>
        </div>
        <div className="max-w-sm mx-auto flex-2 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-blue-500 overflow-hidden">
        <h1 className="text-black text-center ">card 2</h1>
        </div>
        </div>
        <div className="flex-y">
        <div className="max-w-sm mx-auto flex-1 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-white overflow-hidden">
        <h1 className="text-black text-center ">card 3</h1>
        </div>
        <div className="max-w-sm mx-auto flex-1 bg-blue-500 rounded-lg shadow-md p-10 m-5 text-white overflow-hidden">
        <h1 className="text-black text-center ">card 4</h1>
         </div>
         </div>
         </div>
         );
        };
        
        export default Card;