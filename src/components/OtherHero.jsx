import bgimg from '../assets/jobbg.jpg'
// import ome from '../assets/jobbg'
export default function OtherHero({title}) {
    return (
      <div className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})`, backgroundColor:"rgba(0,0,0,0.4)" }}>
        <div className='w-full h-full flex items-center justify-center' style={{backgroundColor:"rgba(0,0,0,0.4)"}}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-2xl text-white text-center px-6">
          <h4 className="text-sm uppercase tracking-wide">Fit and style guarantee</h4>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">{title}</h1>
          <p className="mt-4 text-lg">Find your perfect pair</p>
          {/* <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">SHOP NOW</button> */}
        </div>
        </div>
      </div>
    );
  }
  