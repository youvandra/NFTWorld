import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Ally } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { coverflow_data } from "../../data/coverflow_data";
import Link from "next/link";
import Image from "next/image";
<<<<<<< HEAD
<<<<<<< HEAD
// import { useAuctionHouse } from "../../metaplex/useAuctionHouse";
=======
import { useAuctionHouse } from "../../metaplex/useAuctionHouse";
>>>>>>> origin/anas-dev
=======
import { useAuctionHouse } from "../../metaplex/useAuctionHouse";
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
import axios from "axios";

const CoverflowCarousel = () => {
  const [nfts, setNFTs] = useState(coverflow_data);

  async function getFeaturedNFTs() {
    const { data } = await axios.get("/api/getFeaturedNFTs");

    if (data) {
      const formatedData = data.map(
        ({ address, creator: { name, profilePhoto }, ...nft }) => ({
          id: address,
          authorImage: profilePhoto,
          authorName: name,
          ...nft,
        })
      );
      setNFTs(formatedData);
    }
  }

  useEffect(() => {
    getFeaturedNFTs();
  }, []);

  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      <div className="relative px-6 pb-16 sm:px-0">
        {/* <!-- Slider --> */}
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            100: {
              // width: 640,
              slidesPerView: 1,
            },
            575: {
              // width: 640,
              slidesPerView: 3,
            },
            // when window width is >= 768px
            992: {
              // width: 768,
              slidesPerView: 5,
            },
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-4",
            prevEl: ".swiper-button-prev-4",
          }}
          className="swiper coverflow-slider !py-5"
        >
          {nfts.map((item) => {
<<<<<<< HEAD
<<<<<<< HEAD
            const { img, id, authorImage, authorName, title } = item;
=======
            const { img, id, authorImage, authorName, title, creatorAddress } =
              item;
>>>>>>> origin/anas-dev
=======
            const { img, id, authorImage, authorName, title, creatorAddress } =
              item;
>>>>>>> 024efb6e90ce52d92cd3b794071f1630206a98aa
            const itemLink = id;
            return (
              <SwiperSlide key={id}>
                <article>
                  <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                    <figure className="relative">
                      <Link href={"/item/" + itemLink}>
                        <a>
                          <img
                            src={img}
                            alt={title}
                            className="swiper-lazy h-[430px] w-full object-cover"
                            height={"430px"}
                            width={"379px"}
                          />
                        </a>
                      </Link>
                    </figure>
                    <div className="p-6">
                      <div className="flex">
                        <Link href="/user/avatar_6">
                          <a className="shrink-0">
                            <img
                              src={authorImage}
                              alt="avatar"
                              className="mr-4 h-10 w-10 rounded-full"
                            />
                          </a>
                        </Link>
                        <div>
                          <Link href={"/item/" + itemLink}>
                            <a className="block">
                              <span className="font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {title}
                              </span>
                            </a>
                          </Link>
                          <Link href={`/user/${creatorAddress}`}>
                            <a className="text-2xs text-accent">{authorName}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
          </svg>
        </div>
        <div className="swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="fill-jacarta-700 group-hover:fill-accent"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </div>

        {/* <!-- end coverflow slider --> */}
      </div>
    </>
  );
};

export default CoverflowCarousel;
