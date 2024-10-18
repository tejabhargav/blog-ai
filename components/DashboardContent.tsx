import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlogCard } from './BlogCard'
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { Label } from './ui/label'

export const DashboardContent = ({ filteredBlogs, handleReadMore}) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    <Tabs defaultValue="recent">
      <TabsList>
        <TabsTrigger value="recent">Recent</TabsTrigger>
        <TabsTrigger value="popular">Most Shared</TabsTrigger>
        <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
      </TabsList>
      <TabsContent value="recent" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs.filter(blog => blog.category === 'recent').map(blog => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="popular" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs.filter(blog => blog.category === 'popular').map(blog => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="ai-generated" className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBlogs.filter(blog => blog.category === 'ai-generated').map(blog => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  </div>
)
