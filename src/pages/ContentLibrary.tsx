import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  FileText, 
  Search, 
  Filter, 
  Upload,
  Download,
  Eye,
  Edit,
  Trash2,
  BookOpen,
  Headphones,
  Video,
  FileCheck
} from "lucide-react"

const ContentLibrary = () => {
  const contentTypes = [
    {
      icon: BookOpen,
      title: "Text Documents",
      count: "15,847",
      description: "Training manuals, guides, and documentation"
    },
    {
      icon: Headphones,
      title: "Audio Files",
      count: "4,238",
      description: "Voice recordings and audio lessons"
    },
    {
      icon: Video,
      title: "Video Content",
      count: "2,156",
      description: "Training videos and demonstrations"
    },
    {
      icon: FileCheck,
      title: "Assessments",
      count: "8,924",
      description: "Quizzes, tests, and evaluation forms"
    }
  ]

  const recentContent = [
    {
      id: 1,
      title: "Electrical Safety Training Module",
      type: "Document",
      languages: ["English", "Hindi", "Tamil"],
      status: "Translated",
      lastModified: "2 hours ago"
    },
    {
      id: 2,
      title: "Automotive Repair Basics",
      type: "Video",
      languages: ["English", "Bengali"],
      status: "Processing",
      lastModified: "5 hours ago"
    },
    {
      id: 3,
      title: "Healthcare Assistant Assessment",
      type: "Assessment",
      languages: ["English", "Malayalam", "Kannada"],
      status: "Completed",
      lastModified: "1 day ago"
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      type: "Audio",
      languages: ["English", "Gujarati"],
      status: "Review",
      lastModified: "2 days ago"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success text-success-foreground'
      case 'Translated': return 'bg-primary text-primary-foreground'
      case 'Processing': return 'bg-warning text-warning-foreground'
      case 'Review': return 'bg-accent text-accent-foreground'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Content Library</h1>
          <p className="text-muted-foreground">Manage and organize your training materials</p>
        </div>
        <Button className="gradient-primary text-white flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload Content
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search content, materials, translations..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Types Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentTypes.map((type, index) => (
          <Card key={index} className="hover:shadow-elegant transition-spring cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                <type.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{type.count}</p>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Content */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Recent Content
          </CardTitle>
          <CardDescription>
            Recently added or modified training materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentContent.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/40 transition-smooth">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{item.title}</h4>
                    <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Languages: {item.languages.join(", ")}</span>
                    <span>•</span>
                    <span>Modified {item.lastModified}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common content management tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Upload className="w-6 h-6" />
              Bulk Upload
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Download className="w-6 h-6" />
              Export All
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <FileCheck className="w-6 h-6" />
              Quality Check
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ContentLibrary