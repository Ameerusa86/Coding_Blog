import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { img1 } from "@/public/images";

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  slug,
  date,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-transform"
      style={{ height: "450px" }} // Set fixed height for the card
    >
      <Link href={`/posts/${slug}`} passHref>
        <div className="flex flex-col h-full">
          <div className="relative w-full h-48">
            {" "}
            {/* Fixed height for the image */}
            <Image
              className="object-cover"
              src={img1}
              alt="Blog image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">
                {date}
              </div>
              <h1 className="block mt-1 text-xl leading-tight font-bold text-black hover:underline">
                {title}
              </h1>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
