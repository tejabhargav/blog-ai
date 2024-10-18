 

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BlogCard } from './BlogCard'

export const MyBlogsContent = ({ filteredBlogs, handleReadMore }) => (
  <div>
    <h1 className="text-3xl font-bold mb-6">My Blogs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {filteredBlogs.slice(0, 3).map(blog => (
        <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
      ))}
    </div>
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <Tabs defaultValue="manual">
        <TabsList>
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
        </TabsList>
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Create Blog Manually</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="title">Blog Title</Label>
                    <Input id="title" placeholder="Enter blog title" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="content">Blog Content</Label>
                    <Textarea id="content" placeholder="Write your blog content here" rows={10} />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input id="keywords" placeholder="Enter keywords (comma-separated)" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Create Blog</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="ai-generated">
          <Card>
            <CardHeader>
              <CardTitle>Generate Blog with AI</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="topic">Blog Topic</Label>
                    <Input id="topic" placeholder="Enter the main topic for your blog" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="keywords">Keywords</Label>
                    <Input id="keywords" placeholder="Enter relevant keywords (comma-separated)" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="tone">Writing Tone</Label>
                    <Input id="tone" placeholder="e.g., Professional, Casual, Humorous" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Generate Blog</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
)