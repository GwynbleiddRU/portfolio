import TLApiImage from '../assets/images/projects/tunelike-api/tunelike-api.avif';
import TLApiAuthImage from '../assets/images/projects/tunelike-api/tunelike-api-auth.avif';
import TLApiChatImage from '../assets/images/projects/tunelike-api/tunelike-api-chat.avif';
import TLApiDatingImage from '../assets/images/projects/tunelike-api/tunelike-api-dating.avif';
import TLApiEventsImage from '../assets/images/projects/tunelike-api/tunelike-api-events.avif';
import TLApiDataImage from '../assets/images/projects/tunelike-api/tunelike-api-data.avif';
import TLApiUtilitiesImage from '../assets/images/projects/tunelike-api/tunelike-api-utilities.avif';

import MediaStorageImage from '../assets/images/projects/media-storage/simple-media-storage.avif';
import MediaStorageApiImage from '../assets/images/projects/media-storage/media-storage-images.avif';
import MediaStorageCropImage from '../assets/images/projects/media-storage/media-storage-crops.avif';

import DBClientImage from '../assets/images/projects/dbclient.avif';
import ObjectEditorImage from '../assets/images/projects/object-editor.avif';
import NodesImage from '../assets/images/projects/nodes.avif';
import SVOManagementImage from '../assets/images/projects/svo-management.avif';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  images?: ProjectImage[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  template: 'standard' | 'multi-image';
}


export interface ProjectImage {
  url: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "tunelike-api",
    title: "projects.tunelike-api.title",
    shortDescription: "projects.tunelike-api.shortDescription",
    fullDescription: "projects.tunelike-api.fullDescription",
    technologies: ["ASP.NET Core", "REST API", "MongoDB", "Swagger/OpenAPI", "SignalR", "Background Workers", "Python Web Scraping", "JWT Authentication", "OAuth Integration", "BCrypt Password Hashing", "Dependency Injection", "In-Memory Caching", "Nginx", "Linux VPS", "Asynchronous Programming", "Rate Limiting", "Data Analytics", "Collaborative Filtering", "Email Service Integration", "Logging Framework", "Entity Relationship Management", "Message Queuing"],
    imageUrl: TLApiImage,
    images: [
      {
        url: TLApiAuthImage,
        description: "projects.tunelike-api.images.auth.description"
      },
      {
        url: TLApiChatImage,
        description: "projects.tunelike-api.images.chat.description"
      },
      {
        url: TLApiDatingImage,
        description: "projects.tunelike-api.images.dating.description"
      },
      {
        url: TLApiEventsImage,
        description: "projects.tunelike-api.images.events.description"
      },
      {
        url: TLApiDataImage,
        description: "projects.tunelike-api.images.data.description"
      },
      {
        url: TLApiUtilitiesImage,
        description: "projects.tunelike-api.images.utilities.description"
      }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/TuneLike/tunelike-api",
    demoUrl: "https://www.youtube.com/watch?v=-gg0hxVYrOU",
    template: "multi-image"
  },
  {
    id: "simple-media-storage",
    title: "projects.simple-media-storage.title",
    shortDescription: "projects.simple-media-storage.shortDescription",
    fullDescription: "projects.simple-media-storage.fullDescription",
    technologies: ["ASP.NET Core", "MongoDB", "ImageMagick", "SixLabors.ImageSharp", "JWT Authentication", "Swagger/OpenAPI"],
    imageUrl: MediaStorageImage,
    images: [
      {
        url: MediaStorageApiImage,
        description: "projects.simple-media-storage.images.imageProcessing.description"
      },
      {
        url: MediaStorageCropImage,
        description: "projects.simple-media-storage.images.cropSpecification.description"
      }
    ],
    liveUrl: "",
    githubUrl: "",
    featured: true,
    template: "multi-image"
  },
  {
    id: "dbclient",
    title: "projects.dbclient.title",
    shortDescription: "projects.dbclient.shortDescription",
    fullDescription: "projects.dbclient.fullDescription",
    technologies: ["C#", ".NET", "WPF", "MSSQL", "ADO.NET", "EntityFramework", "RDLC Reports"],
    imageUrl: DBClientImage,
    liveUrl: "",
    demoUrl: "https://www.youtube.com/watch?v=VNeDhh1Ge9U",
    githubUrl: "https://github.com/GwynbleiddRU/DBClient",
    featured: true,
    template: "standard"
  },
  {
    id: "wpf-diagram-editor",
    title: "projects.wpf-diagram-editor.title",
    shortDescription: "projects.wpf-diagram-editor.shortDescription",
    fullDescription: "projects.wpf-diagram-editor.fullDescription",
    technologies: ["C#", "WPF", "XAML", "XML", "SVG"],
    imageUrl: NodesImage,
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/Nodes",
    featured: false,
    template: "standard"
  },
  {
    id: "3dstruct-editor",
    title: "projects.3dstruct-editor.title",
    shortDescription: "projects.3dstruct-editor.shortDescription",
    fullDescription: "projects.3dstruct-editor.fullDescription",
    technologies: ["OpenGL", "C++", "3D Modeling", "Spline Technology", "Matrix Transformations"],
    imageUrl: ObjectEditorImage,
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/3DStruct",
    featured: true,
    template: "standard"
  },
  {
    id: "svo-airport-personnel-management",
    title: "projects.svo-airport-personnel-management.title",
    shortDescription: "projects.svo-airport-personnel-management.shortDescription",
    fullDescription: "projects.svo-airport-personnel-management.fullDescription",
    technologies: ["C#", "Windows Application Development", "Mobile Development", "GPS Integration", "iBeacon Technology"],
    imageUrl: SVOManagementImage,
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/SVO_Management",
    featured: true,
    template: "standard"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjects = () => projects;