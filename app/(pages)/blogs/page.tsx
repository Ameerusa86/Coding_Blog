"use client";

import React, { useEffect, useState } from "react";
import PostCard from "@/components/PostCard";
import { db } from "@/lib/firebase";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  id: string;
  author: string;
  category: string;
  createdAt: string;
}

const BlogsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const postsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            slug: data.slug,
            title: data.title,
            description: data.description,
            date: data.date,
            author: data.author,
            category: data.category,
            createdAt: (data.createdAt as Timestamp)
              .toDate()
              .toLocaleDateString(),
          };
        }) as Post[];
        setPosts(postsData);
        const uniqueCategories = Array.from(
          new Set(postsData.map((post) => post.category))
        );
        setCategories(["All", ...uniqueCategories]);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      {error && (
        <div className="text-red-500 text-center mb-4">
          <p>Error fetching posts: {error}</p>
        </div>
      )}
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mx-2 rounded-full ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.createdAt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
