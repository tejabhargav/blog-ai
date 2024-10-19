import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, FileText, Wand2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

type Blog = {
  id: string
  title: string
  summary: string
  image: string
  isAIGenerated?: boolean
  tags: string[]
  resourceType: string
}

interface BlogCardProps {
  blog: Blog
  onReadMore: (id: string) => void
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, onReadMore }) => (
  <Card className={cn(
    "w-full h-full flex flex-col shadow-md hover-transition hover:shadow-lg relative overflow-hidden border-0 blog-card-shadow hover:scale-105",
    "bg-background dark:bg-palette-darkGray",
    blog.isAIGenerated && "ai-generated-border"
  )}>
    <CardHeader className="p-0 relative">
      <Image src={blog.image} alt={blog.title} width={300} height={200} className="w-full h-48 object-cover rounded-t-lg" />
      {blog.isAIGenerated && (
        <div className="absolute top-2 right-2 px-2 py-1 rounded-full flex items-center space-x-1 ai-generated-tag">
          <Wand2 className="h-4 w-4 text-white" />
          <span className="text-xs font-semibold text-white">AI Generated</span>
        </div>
      )}
    </CardHeader>
    <CardContent className="flex-grow p-4">
      <CardTitle className="text-lg mb-2">{blog.title}</CardTitle>
      <p className="text-sm text-muted-foreground mb-2">{blog.summary}</p>
      <Badge variant="outline" className="mb-2">{blog.resourceType}</Badge>
      <div className="w-full border-b border-dotted border-gray-300 dark:border-gray-600 my-2"></div>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map((tag, index) => (
          <Badge key={index} variant="secondary">{tag}</Badge>
        ))}
      </div>
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
