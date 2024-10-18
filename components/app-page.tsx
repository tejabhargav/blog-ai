'use client'

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Sidebar } from './Sidebar'
import { TopNavigation } from './TopNavigation'
import { DashboardContent } from './DashboardContent'
import { MyBlogsContent } from './MyBlogsContent'
import { ResourcesContent } from './ResourcesContent'
import { PreferencesContent } from './PreferencesContent'
import { BlogDetailView } from './BlogDetailView'
import { blogs, Blog, FilterType } from '../data/blogs'

export function AppPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [contentTypeFilter, setContentTypeFilter] = useState<string[]>([])
  const [resourceTypeFilter, setResourceTypeFilter] = useState<string[]>([])
  const [keywordsFilter, setKeywordsFilter] = useState<string[]>([])
  const [websiteFilter, setWebsiteFilter] = useState<string[]>([])
  const [pdfFilter, setPdfFilter] = useState<string[]>([])
  const [youtubeFilter, setYoutubeFilter] = useState<string[]>([])
  const [docsFilter, setDocsFilter] = useState<string[]>([])
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)
  const [showSignUp, setShowSignUp] = useState(false)
  const [isPreferredContent, setIsPreferredContent] = useState(false)
  const [preferredContentSettings, setPreferredContentSettings] = useState({
    contentType: [],
    resourceType: [],
    keywords: []
  })

  const togglePreferredContent = () => {
    setIsPreferredContent((prev) => {
      if (!prev) {
        // Load preferred content settings
        setContentTypeFilter(preferredContentSettings.contentType)
        setResourceTypeFilter(preferredContentSettings.resourceType)
        setKeywordsFilter(preferredContentSettings.keywords)
      } else {
        // Reset filters when switching to all content
        setContentTypeFilter([])
        setResourceTypeFilter([])
        setKeywordsFilter([])
      }
      return !prev
    })
  }

  const handleFilterChange = (filterType: FilterType, value: string) => {
    const filterMap: Record<FilterType, Dispatch<SetStateAction<string[]>>> = {
      contentType: setContentTypeFilter,
      resourceType: setResourceTypeFilter,
      keywords: setKeywordsFilter,
      website: setWebsiteFilter,
      pdf: setPdfFilter,
      youtube: setYoutubeFilter,
      docs: setDocsFilter,
    }
    const setFilter = filterMap[filterType]
    setFilter((prev: string[]) => {
      const newFilter = prev.includes(value) ? prev.filter((item: string) => item !== value) : [...prev, value]
      if (isPreferredContent) {
        setIsPreferredContent(false)
      }
      return newFilter
    })
  }

  useEffect(() => {
    const filtered = blogs.filter(blog => 
      (contentTypeFilter.length === 0 || contentTypeFilter.includes(blog.contentType)) &&
      (resourceTypeFilter.length === 0 || resourceTypeFilter.includes(blog.resourceType)) &&
      (keywordsFilter.length === 0 || keywordsFilter.some(keyword => blog.keywords.includes(keyword)))
    )
    setFilteredBlogs(filtered)
  }, [contentTypeFilter, resourceTypeFilter, keywordsFilter, websiteFilter, pdfFilter, youtubeFilter, docsFilter])

  const handleReadMore = (id: string) => {
    const blog = blogs.find(b => b.id === id)
    if (blog) {
      setSelectedBlog(blog)
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        contentTypeFilter={contentTypeFilter}
        resourceTypeFilter={resourceTypeFilter}
        keywordsFilter={keywordsFilter}
        websiteFilter={websiteFilter}
        pdfFilter={pdfFilter}
        youtubeFilter={youtubeFilter}
        docsFilter={docsFilter}
        handleFilterChange={handleFilterChange}
      />
      <main className="flex-1 overflow-y-auto">
        <TopNavigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
          isPreferredContent={isPreferredContent}
          togglePreferredContent={togglePreferredContent}
        />
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <DashboardContent
              filteredBlogs={filteredBlogs}
              handleReadMore={handleReadMore}
            />
          )}
          {activeTab === 'my-blogs' && (
            <MyBlogsContent
              filteredBlogs={filteredBlogs}
              handleReadMore={handleReadMore}
            />
          )}
          {activeTab === 'resources' && <ResourcesContent />}
          {activeTab === 'preferences' && <PreferencesContent />}
        </div>
      </main>
      {selectedBlog && (
        <BlogDetailView blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </div>
  )
}
