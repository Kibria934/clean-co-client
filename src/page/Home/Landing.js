import React from "react";
import girl from "../../Assete/image/bucketgirl.png";

const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[60vh] mt-16 bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          <div  className=" ">
            <p  data-aos="fade-down"data-aos-delay="1200" data-aos-duration="1400">Best Quality</p>
            <h1 data-aos="fade-down"data-aos-delay="1000" data-aos-duration="1000" class="text-5xl font-bold">Professional Cleaning Service</h1>
            <p data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000" class="py-6 w-3xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button data-aos="zoom-out-up" data-aos-delay="300" data-aos-duration="3000" class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] relative z-10 shrink-0">
            <img data-aos="fade-down"data-aos-delay="800" data-aos-duration="2000" src={girl} class="h-full" alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="2400" data-aos-duration="1000" className="w-5/6 mx-auto shadow-lg relative z-50 mt-[-50px] bg-base-200 rounded-md p-10">
        <h1 className="text-3xl text-primary font-semibold mb-4">Get Free Estimate</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered  w-full max-w-xs "
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
