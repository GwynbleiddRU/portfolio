
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dbclient",
    title: "DBClient",
    shortDescription: "A powerful C# database management client for a metallurgic factory",
    fullDescription: `
 DBClient is a comprehensive database management solution I developed specifically for PROMEKZ metallurgic factory.
 
 The application provides a complete suite of tools for managing inventory, client relationships, and financial transactions. Users can track goods sold, monitor storage levels, maintain client records, calculate bills and debts, and provide credits all within a single interface.
 
 A key feature is the robust reporting system that auto-generates professional reports in multiple formats (doc, xlsx, PDF) using the RDLC report plugin.
 
 I also implemented a session journal that logs all system changes for accountability and security purposes, along with customizable color schemes to improve user experience.
 `,
    technologies: ["C#", ".NET", "WPF", "MSSQL", "ADO.NET", "EntityFramework", "RDLC Reports"],
    imageUrl: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    demoUrl: "https://www.youtube.com/watch?v=VNeDhh1Ge9U",
    githubUrl: "https://github.com/GwynbleiddRU/DBClient",
    featured: true,
  },
  {
    id: "wpf-diagram-editor",
    title: "WPF Diagram Editor",
    shortDescription: "A flexible tool for creating diagrams and visual representations",
    fullDescription: `
 The WPF Diagram Editor is a versatile application I built using Windows Presentation Foundation that enables users to create professional diagrams and visual representations.
 
 This editor offers a comprehensive set of features including adding and resizing shapes, placing and customizing text, connecting shapes with lines and arrows, and importing custom shapes from uploaded images.
 
 One of the most powerful aspects of this project is its export flexibility - diagrams can be saved as XML files for future editing, or exported as PNG and SVG files for sharing and presentations.
 
 I developed this project during my 3rd year of studies at HSE University as part of the "Software Systems Architecture Design" discipline, applying advanced concepts from Microsoft's WPF documentation, SVG path tutorials, and other professional resources.
 `,
    technologies: ["C#", "WPF", "XAML", "XML", "SVG"],
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/Nodes",
    featured: false,
  },
  {
    id: "3dstruct-editor",
    title: "3DStruct Editor",
    shortDescription: "A 3D modeling tool for creating round objects using splines",
    fullDescription: `
 3DStruct is an advanced 3D modeling editor I created that specializes in building round objects from simple lines using splines.
 
 Built with OpenGL, this application enables users to create complex 3D structures with an intuitive interface accessible even to beginners. The editor supports matrix conversions to modify objects and provides direct matrix manipulation for advanced users seeking precise control.
 
 What sets 3DStruct apart is its focus on transforming simple 2D lines into sophisticated 3D rounded objects through spline technology, making it particularly valuable for designers working with organic shapes and curved surfaces.
 
 The software was designed with both usability and power in mind, featuring a clean interface for newcomers while offering deep mathematical controls for experienced 3D modelers.
 `,
    technologies: ["OpenGL", "C++", "3D Modeling", "Spline Technology", "Matrix Transformations"],
    imageUrl: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/3DStruct",
    featured: true,
  },
  {
    id: "svo-airport-personnel-management",
    title: "Airport Personnel Management System",
    shortDescription: "A real-time system that connects airport personnel to relevant tasks based on proximity and skills",
    fullDescription: `
 Developed during a hackathon, the SVO Airport Personnel Management System is an innovative solution designed to optimize airport operations by quickly matching personnel with tasks based on proximity and competencies.
 
 The system features a Windows application with a comprehensive map view that displays real-time personnel locations throughout the airport. When issues arise, managers can use this interface to identify and notify the closest qualified staff members instantly.
 
 I implemented a complementary mobile application that handles notifications and precise location tracking using a combination of GPS and iBeacon technology. This dual-technology approach enables accurate positioning even within complex multi-floor airport environments.
 
 By reducing response times and optimizing resource allocation, this system significantly improves operational efficiency and enhances the airport's ability to quickly resolve security issues, maintenance problems, and other challenges that arise in the fast-paced airport environment.
 `,
    technologies: ["C#", "Windows Application Development", "Mobile Development", "GPS Integration", "iBeacon Technology"],
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "https://github.com/GwynbleiddRU/SVO_Management",
    featured: true,
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
