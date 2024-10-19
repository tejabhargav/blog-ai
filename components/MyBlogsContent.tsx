import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BlogCard } from './BlogCard'

interface Blog {
  id: string;
  title: string;
  content: string;
  summary: string;
  image: string;
  isAIGenerated?: boolean;
  tags: string[];
  resourceType: string;
}

interface MyBlogsContentProps {
  filteredBlogs: Blog[];
  handleReadMore: (blogId: string) => void;
}

export const MyBlogsContent: React.FC<MyBlogsContentProps> = ({ filteredBlogs, handleReadMore }) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList>
        <TabsTrigger value="all">All Blogs</TabsTrigger>
        <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
        <TabsTrigger value="human-written">Human Written</TabsTrigger>
        <TabsTrigger value="manual">Create Manual</TabsTrigger>
        <TabsTrigger value="ai-generate">Generate with AI</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="ai-generated">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.filter(blog => blog.isAIGenerated).map((blog) => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="human-written">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.filter(blog => !blog.isAIGenerated).map((blog) => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} />
          ))}
        </div>
      </TabsContent>
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
      <TabsContent value="ai-generate">
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
  )
}
