"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { posts } from "@/data/blog";
import { BlogHeader, BlogFilterBar, BlogFeaturedPost, BlogPostGrid, BlogEmptyState } from "@/components/features/blog";
import type { BlogPost } from "@/types/blog";

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch = !normalizedSearch ||
      `${post.title} ${post.excerpt} ${post.category} ${post.tags?.join(" ") ?? ""}`.toLowerCase().includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  const featuredPost: BlogPost | undefined =
    (activeCategory === "Todos" && !normalizedSearch) ? posts.find(p => p.featured) || posts[0] : undefined;
  const gridPosts = featuredPost ? filteredPosts.filter(p => p.id !== featuredPost.id) : filteredPosts;

  return (
    <div className="py-24 lg:py-40 bg-white">
      <div className="container">
        <BlogHeader />
        <BlogFilterBar
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchTerm}
        />
        {featuredPost && <BlogFeaturedPost post={featuredPost} />}
        {gridPosts.length > 0 ? <BlogPostGrid posts={gridPosts} /> : <BlogEmptyState />}
      </div>
    </div>
  );
}
