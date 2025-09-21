import { useState } from "react"
import { 
  Home, 
  LayoutDashboard, 
  Languages, 
  FileText, 
  BarChart3, 
  Settings, 
  User,
  BookOpen,
  Headphones,
  Video,
  FileCheck
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Translation Hub", url: "/translate", icon: Languages },
  { title: "Content Library", url: "/content", icon: FileText },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
]

const contentItems = [
  { title: "Text Content", url: "/content/text", icon: BookOpen },
  { title: "Audio Content", url: "/content/audio", icon: Headphones },
  { title: "Video Content", url: "/content/video", icon: Video },
  { title: "Assessments", url: "/content/assessments", icon: FileCheck },
]

const accountItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isCollapsed = state === "collapsed"
  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium shadow-sm" : "hover:bg-muted/60 transition-smooth"

  return (
    <Sidebar className="border-r border-border/60 bg-card/50 backdrop-blur-sm">
      <SidebarContent className="p-4">
        {/* Logo Section */}
        <div className="mb-6 px-2">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Languages className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-sm">NCVET</h2>
                <p className="text-xs text-muted-foreground">AI Localization</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center mx-auto">
              <Languages className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          {!isCollapsed && <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2">Main</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`${isCollapsed ? "mx-auto" : "mr-3"} h-4 w-4`} />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Content Management */}
        <SidebarGroup className="mt-6">
          {!isCollapsed && <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2">Content</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {contentItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className={`${isCollapsed ? "mx-auto" : "mr-3"} h-4 w-4`} />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Section */}
        <SidebarGroup className="mt-6">
          {!isCollapsed && <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-2 mb-2">Account</SidebarGroupLabel>}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className={`${isCollapsed ? "mx-auto" : "mr-3"} h-4 w-4`} />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}