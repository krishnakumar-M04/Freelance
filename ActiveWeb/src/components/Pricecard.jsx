const Pricecard = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="text-center pt-20" data-aos="fade-up">
        <h4 className="text-xl">Plans</h4>
        <h1 className="text-2xl font-semibold">Pricing Table</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className="w-[410px] h-[510px] bg-white text-center mt-20 shadow-sm mb-10 "
          data-aos="fade-up"
        >
          <h1 className="text-3xl pt-16">Free</h1>
          <p className="text-4xl pt-6  text-green-400">
            <sup className=" text-green-400">$</sup>0
            <sub className="text-gray-400">/Month</sub>
          </p>
          <h2 className="text-sm pt-6">Aida dere</h2>
          <h2 className="text-sm pt-6 ">Nec feugiat nisl</h2>
          <h2 className="text-sm pt-6">Nulla at volutpat dola</h2>
          <h2 className="text-sm pt-6">
            <del>Pharetra massa</del>
          </h2>
          <h2 className="text-sm pt-6">
            <del>Massa ultricies mi</del>
          </h2>
          <button className=" rounded-full border-green-600 bg-green-400 text-white text-xl w-40 h-12 mt-5  hover:bg-white hover:text-black">
            BUY NOW
          </button>
        </div>
        <div
          className="w-[410px] h-[510px] bg-white text-center ml-5 mt-20 shadow-sm mb-10 "
          data-aos="fade-up"
        >
          <p className="text-2xl pt-3 pl-9  text-green-400 border-green-500">
            <sup>*</sup>Recommended <sup>*</sup>
          </p>
          <h1 className="text-3xl pt-5">Bussiness</h1>
          <p className="text-4xl pt-6  text-green-400">
            <sup className=" text-green-400">$</sup>20
            <sub className="text-gray-400">/Month</sub>
          </p>
          <h2 className="text-sm pt-6">Aida dere</h2>
          <h2 className="text-sm pt-6 ">Nec feugiat nisl</h2>
          <h2 className="text-sm pt-6">Nulla at volutpat dola</h2>
          <h2 className="text-sm pt-6">Pharetra massa</h2>
          <h2 className="text-sm pt-6">
            <del>Massa ultricies mi</del>
          </h2>
          <button className=" rounded-full border-green-600 bg-green-400 text-white text-xl w-40 h-12 mt-5  hover:bg-white hover:text-black">
            BUY NOW
          </button>
        </div>
        <div
          className="w-[410px] h-[510px] bg-white text-center mt-20 ml-5 shadow-sm mb-10 "
          data-aos="fade-up"
        >
          <h1 className="text-3xl pt-16">Developer</h1>
          <p className="text-4xl pt-6  text-green-400">
            <sup className=" text-green-400">$</sup>39
            <sub className="text-gray-400">/Month</sub>
          </p>
          <h2 className="text-sm pt-6">Aida dere</h2>
          <h2 className="text-sm pt-6 ">Nec feugiat nisl</h2>
          <h2 className="text-sm pt-6">Nulla at volutpat dola</h2>
          <h2 className="text-sm pt-6">Pharetra massa</h2>
          <h2 className="text-sm pt-6">Massa ultricies mi</h2>
          <button className=" rounded-full border-green-600 bg-green-400 text-white text-xl w-40 h-12 mt-5 hover:bg-white hover:text-black">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricecard;
