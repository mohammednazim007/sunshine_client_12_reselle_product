import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-center h-screen">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm ">Jun 1, 2020</span>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-2 py-1 font-bold"
              >
                Deshboard
              </a>
            </div>
            <div className="mt-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-2xl font-bold hover:underline"
              >
                Welcome to your deshboard
              </a>
              <p className="mt-2">
                Tamquam ita veritas res equidem. Ea in ad expertus paulatim
                poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae
                athei spero. Tantumdem naturales excaecant notaverim etc cau
                perfacile occurrere. Loco visa to du huic at in dixi aër.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-400"
              >
                Read more
              </a>
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src="https://source.unsplash.com/50x50/?portrait"
                    alt="avatar"
                    className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-400">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
