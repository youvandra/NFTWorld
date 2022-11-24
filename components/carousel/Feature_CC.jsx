import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "tippy.js/dist/tippy.css";
import { MdKeyboardrrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Feature_collections_data from "../../data/Feature_collections_data";
import Link from "next/link";
import axios from "axios";

const Feature_collections_carousel = () => {
    const [data, setData] = useState(Feature_collections_data);

    async function getCollections() {
        const collections = await axios.get("/api/getCollections");
        if (collections.data) {
            const formatedCollections = collections.data.map(
                ({
                    title,

                    address: id,
                    creator: { name: userName, profilePhoto: userImage },
                    itemsCount,
                    bigImage,
                    subImage1,
                    subImage2,
                    subImage3,
                }) => ({
                    title,
                    id,
                    itemCount,
                    userName,
                    bigImage,
                    subImage1,
                    subImage2,
                    subImage3,
                    userImage,
                })
            );
            setData(formatedCollections);
        }
    }

    useEffect(() => {
        getCollections();
    }, []);

}