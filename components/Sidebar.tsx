import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Upload, Sliders } from 'lucide-react'
import { FilterBlogs } from './FilterBlogs'

type FilterType = 'contentType' | 'resourceType' | 'keywords' | 'website' | 'pdf' | 'youtube' | 'docs'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  contentTypeFilter: string[]
  resourceTypeFilter: string[]
  keywordsFilter: string[]
  websiteFilter: string[]
  pdfFilter: string[]
  youtubeFilter: string[]
  docsFilter: string[]
  handleFilterChange: (filterType: FilterType, value: string) => void
  clearAllFilters: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  contentTypeFilter,
  resourceTypeFilter,
  keywordsFilter,
  websiteFilter,
  pdfFilter,
  youtubeFilter,
  docsFilter,
  handleFilterChange,
  clearAllFilters
}) => {
  return (
    <aside className="w-64 border-r h-screen flex flex-col overflow-hidden">
      <div className="p-4 flex-shrink-0">
        <h1 className="cursor-pointer text-4xl font-extrabold hover-transition hover:scale-105" onClick={() => setActiveTab('dashboard')}>
          BlogAI
        </h1>
      </div>
      <nav className="mt-8 flex-shrink-0 space-y-4 px-4 mb-8">
        <Button
          variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-4 font-semibold hover-transition hover:translate-x-2"
          onClick={() => setActiveTab('dashboard')}
        >
          <Home className="mr-3 h-5 w-5" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === 'my-blogs' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-4 font-semibold hover-transition hover:translate-x-2"
          onClick={() => setActiveTab('my-blogs')}
        >
          <BookOpen className="mr-3 h-5 w-5" />
          My Blogs
        </Button>
        <Button
          variant={activeTab === 'resources' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-4 font-semibold hover-transition hover:translate-x-2"
          onClick={() => setActiveTab('resources')}
        >
          <Upload className="mr-3 h-5 w-5" />
          Resources
        </Button>
        <Button
          variant={activeTab === 'preferences' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-4 font-semibold hover-transition hover:translate-x-2"
          onClick={() => setActiveTab('preferences')}
        >
          <Sliders className="mr-3 h-5 w-5" />
          Preferences
        </Button>
      </nav>
      <div className="flex-grow overflow-y-auto">
        <FilterBlogs
          contentTypeFilter={contentTypeFilter}
          resourceTypeFilter={resourceTypeFilter}
          keywordsFilter={keywordsFilter}
          websiteFilter={websiteFilter}
          pdfFilter={pdfFilter}
          youtubeFilter={youtubeFilter}
          docsFilter={docsFilter}
          handleFilterChange={handleFilterChange}
          clearAllFilters={clearAllFilters}
        />
      </div>
    </aside>
  )
}
