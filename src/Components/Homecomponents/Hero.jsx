function Hero () {
    return <>
    <div className="bg-blue-600 text-purple-100 w-[100%]  h-[500px] px-20 py-20 ">
        <h1 className="text-7xl font-bold ">Welcome to <br /> <span className="text-8xl">Smart Library</span></h1>
        <p className="my-10">Discover a world of knowledge at your fingertips. Browse, borrow, and <br />
         explore thousands of books, e-resources, and digital content — all in one <br />
          place.</p>
          <div className="flex gap-7">
            <button className="bg-white w-[150px] h-[50px] text-1xl font-bold rounded-lg text-black">Browser Books</button>
            <button className="bg-blue-600 font-bold w-[150px] h-[50px] border-white border-1 rounded-lg ">Join now</button>
          </div >
    </div>
    </>
}export default Hero