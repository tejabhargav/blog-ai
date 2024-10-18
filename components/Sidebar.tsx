import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, BookOpen, Upload, Sliders } from 'lucide-react'
import { FilterDropdown } from './FilterDropdown'

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
  handleFilterChange
}) => {
  const showWebsiteFilter = resourceTypeFilter.includes('website');
  const showPDFFilter = resourceTypeFilter.includes('pdf');
  const showYouTubeFilter = resourceTypeFilter.includes('youtube');
  const showDocsFilter = resourceTypeFilter.includes('docs');

  return (
    <aside className="w-64 border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold">BlogAI</h1>
      </div>
      <nav className="mt-6 flex-grow space-y-2">
        <Button
          variant={activeTab === 'dashboard' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-3"
          onClick={() => setActiveTab('dashboard')}
        >
          <Home className="mr-2 h-5 w-5" />
          Dashboard
        </Button>
        <Button
          variant={activeTab === 'my-blogs' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-3"
          onClick={() => setActiveTab('my-blogs')}
        >
          <BookOpen className="mr-2 h-5 w-5" />
          My Blogs
        </Button>
        <Button
          variant={activeTab === 'resources' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-3"
          onClick={() => setActiveTab('resources')}
        >
          <Upload className="mr-2 h-5 w-5" />
          Resources
        </Button>
        <Button
          variant={activeTab === 'preferences' ? 'secondary' : 'ghost'}
          className="w-full justify-start text-lg py-3"
          onClick={() => setActiveTab('preferences')}
        >
          <Sliders className="mr-2 h-5 w-5" />
          Preferences
        </Button>
      </nav>
      <div className="mt-auto p-4 border-t">
        <h3 className="font-semibold mb-2">Filter Blogs</h3>
        <div className="space-y-4">
          <FilterDropdown
            title="Content Type"
            options={['technology', 'productivity', 'lifestyle']}
            selected={contentTypeFilter}
            onSelect={(value) => handleFilterChange('contentType', value)}
            onRemove={(value) => handleFilterChange('contentType', value)}
          />
          <FilterDropdown
            title="Resource Type"
            options={['website', 'pdf', 'youtube', 'docs']}
            selected={resourceTypeFilter}
            onSelect={(value) => handleFilterChange('resourceType', value)}
            onRemove={(value) => handleFilterChange('resourceType', value)}
          />
          <FilterDropdown
            title="Keywords"
            options={['AI', 'Machine Learning', 'Web Development', 'Data Science']}
            selected={keywordsFilter}
            onSelect={(value) => handleFilterChange('keywords', value)}
            onRemove={(value) => handleFilterChange('keywords', value)}
          />
          <FilterDropdown
            title="Select Website"
            options={['Website 1', 'Website 2', 'Website 3']}
            selected={websiteFilter}
            onSelect={(value) => handleFilterChange('website', value)}
            onRemove={(value) => handleFilterChange('website', value)}
            visible={showWebsiteFilter}
          />
          <FilterDropdown
            title="Select PDFs"
            options={['PDF 1', 'PDF 2', 'PDF 3']}
            selected={pdfFilter}
            onSelect={(value) => handleFilterChange('pdf', value)}
            onRemove={(value) => handleFilterChange('pdf', value)}
            visible={showPDFFilter}
          />
          <FilterDropdown
            title="Select YouTube Links"
            options={['YouTube 1', 'YouTube 2', 'YouTube 3']}
            selected={youtubeFilter}
            onSelect={(value) => handleFilterChange('youtube', value)}
            onRemove={(value) => handleFilterChange('youtube', value)}
            visible={showYouTubeFilter}
          />
          <FilterDropdown
            title="Select Google Docs"
            options={['Doc 1', 'Doc 2', 'Doc 3']}
            selected={docsFilter}
            onSelect={(value) => handleFilterChange('docs', value)}
            onRemove={(value) => handleFilterChange('docs', value)}
            visible={showDocsFilter}
          />
        </div>
      </div>
    </aside>
  )
}
