"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, getDoc, Timestamp } from "firebase/firestore";

interface Post {
  title: string;
  description: string;
  date: string;
  author: string;
  createdAt: string;
  content: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blogs", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const postData: Post = {
            title: data.title,
            description: data.description,
            date: data.date,
            author: data.author,
            createdAt: (data.createdAt as Timestamp)
              .toDate()
              .toLocaleDateString(),
            content: data.content,
          };
          setPost(postData);
        } else {
          setError("Post not found");
        }
      } catch (error: any) {
        setError(error.message);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto p-4">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg  mt-10">
      <h1 className="text-5xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-500 text-center mb-4">
        Published on {post.createdAt} by {post.author}
      </p>
      <hr className="my-4" />
      <div className="prose prose-lg mx-auto">
        <p className="text-lg mb-4">{post.description}</p>
        <div className="content">
          {post.content?.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
