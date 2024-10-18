export type Blog = {
  id: string
  title: string
  summary: string
  content: string
  image: string
  category: string
  resourceType: string
  contentType: string
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of AI in Content Creation',
    summary: 'Exploring how artificial intelligence is revolutionizing the way we create and consume content.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'recent',
    resourceType: 'website',
    contentType: 'technology'
  },
  {
    id: '2',
    title: '10 Tips for Effective Remote Work',
    summary: 'Maximize your productivity and maintain work-life balance while working from home.',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/placeholder.svg?height=400&width=800',
    category: 'popular',
    resourceType: 'pdf',
    contentType: 'productivity'
  },
  // Add more blog entries here
]
