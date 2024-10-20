import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react'

type Blog = {
  id: string
  title: string
  summary: string
  content: string
  image: string
  category: string
  resourceType: string
  contentType: string
}

interface BlogDetailViewProps {
  blog: Blog
  onClose: () => void
}

export const BlogDetailView: React.FC<BlogDetailViewProps> = ({ blog, onClose }) => (
  <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
    <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
      <CardHeader className="p-0">
        <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full h-64 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-3xl mb-4">{blog.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{blog.summary}</p>
        <div className="prose max-w-none">
          {blog.content}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-6">
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
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
        <Button onClick={onClose}>Close</Button>
      </CardFooter>
    </Card>
  </div>
)
