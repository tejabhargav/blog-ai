import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, FileText } from 'lucide-react'

type Blog = {
  id: string
  title: string
  summary: string
  image: string
}

interface BlogCardProps {
  blog: Blog
  onReadMore: (id: string) => void
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onReadMore }) => (
  <Card className="w-full h-full flex flex-col">
    <CardHeader className="p-0">
      <Image src={blog.image} alt={blog.title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <CardTitle className="text-lg mb-2">{blog.title}</CardTitle>
      <p className="text-sm text-muted-foreground">{blog.summary}</p>
    </CardContent>
    <CardFooter className="flex justify-between p-4">
      <div className="flex space-x-2">
        <Button variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </Button>
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </Button>
        <Button variant="outline" size="icon">
          <FileText className="h-4 w-4" />
          <span className="sr-only">View as text</span>
        </Button>
      </div>
      <Button size="sm" onClick={() => onReadMore(blog.id)}>
        Preview
      </Button>
    </CardFooter>
  </Card>
)
