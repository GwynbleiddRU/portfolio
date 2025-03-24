import TLApiImage from '../assets/images/projects/tunelike-api.jpg';
import TLApiAuthImage from '../assets/images/projects/tunelike-api-auth.jpg';
import TLApiChatImage from '../assets/images/projects/tunelike-api-chat.jpg';
import TLApiDatingImage from '../assets/images/projects/tunelike-api-dating.jpg';
import TLApiEventsImage from '../assets/images/projects/tunelike-api-events.jpg';
import TLApiDataImage from '../assets/images/projects/tunelike-api-data.jpg';
import TLApiUtilitiesImage from '../assets/images/projects/tunelike-api-utilities.jpg';

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
    title: "Social platform API",
    shortDescription: "API endpoint for social platform with dating and events mechanics",
    fullDescription: `This project is the most comprehensive work I've done so far and I'm truly proud of it.

      A complete and secure API for the social platform "TuneLike" was developed based on ASP.NET Core, following the principles of clean architecture and high performance. The platform integrates multiple sophisticated systems:

      - A robust authentication system with JWT-based security, multiple login methods, and comprehensive account management
      - A real-time chat system powered by SignalR for instant messaging across private, group, and event-specific conversations
      - An intelligent dating module featuring smart matching algorithms, profile management, and interaction systems with privacy controls
      - A community-focused events discovery system with regional filtering, participation management, and user feedback mechanisms
      - Advanced data collection and analytics for personalized recommendations based on music preferences and user activity
      - Comprehensive utility services including account settings, referral systems, and psychological profiling based on music tastes

      The API was deployed on a Linux VPS using Nginx for efficient routing among service components, coordinating communication between MongoDB database, media services, and client applications. The implementation leverages modern web development practices including asynchronous programming, in-memory caching strategies, and thorough error handling with detailed logging throughout.

      This project demonstrates the successful integration of multiple complex systems into a cohesive, scalable, and secure platform designed to create meaningful social connections through shared music interests.
      `,
    technologies: ["ASP.NET Core", "REST API", "MongoDB", "Swagger/OpenAPI", "SignalR", "Background Workers", "Python Web Scraping", "JWT Authentication", "OAuth Integration", "BCrypt Password Hashing", "Dependency Injection", "In-Memory Caching", "Nginx", "Linux VPS", "Asynchronous Programming", "Rate Limiting", "Data Analytics", "Collaborative Filtering", "Email Service Integration", "Logging Framework", "Entity Relationship Management", "Message Queuing"],
    imageUrl: TLApiImage,
    images: [
      {
        url: TLApiAuthImage,
        description: `
        The authentication system in TuneLike is built with ASP.NET Core and follows modern security practices:
        
        - JWT-based Authentication: Implements secure token-based authentication with support for claims validation.
        - Multiple Login Methods: Traditional email/password authentication with BCrypt password hashing and OAuth integration with Yandex for social login
        - Account Management: User registration with username and email validation, password recovery workflow, token validation, and account settings management
        - Security Features: Rate limiting for sensitive operations, token revocation functionality, and comprehensive logging
        - User Identity: Profile linking with authentication providers and user flags system for marking account verification status
        
        The Auth controller demonstrates a clean dependency injection approach with well-defined service interfaces and comprehensive Swagger documentation.
        `
      },
      {
        url: TLApiChatImage,
        description: `
        The chat system is built with a real-time communication architecture:
        
        - Multiple Chat Types: Private one-to-one conversations, group chats with admin and moderator roles, and event-specific chats for community engagement
        - Real-time Messaging: SignalR integration for instant message delivery, connection management with unique connection IDs, and message queuing service
        - Chat Management: Comprehensive participant management, moderation capabilities, chat customization (name, avatar), and notification preferences
        - Message Features: Support for text content and attachments, pagination for message history, and metadata enrichment for sender information
        - Security: Authorization checks for all operations, participant validation for chat access, and role-based permission system
        
        The implementation follows a clean architecture with MongoDB for data storage and comprehensive input validation.
        `
      },
      {
        url: TLApiDatingImage,
        description: `
        The Dating module provides a comprehensive set of endpoints for managing user dating profiles, matches, and interactions. provides functionality for profile management, candidate discovery, matching, and user interactions including likes, dislikes, blocks, and reports. It implements caching strategies for swiped profiles and dating filters to enhance performance.

        - Profile Management: Comprehensive dating profile creation and customization, preference settings, and activity tracking
        - Smart Matching: Algorithm-based candidate discovery with filtering options, match recommendations, and event-based matching
        - Interaction System: Like/dislike functionality, mutual match detection, blocking and reporting capabilities
        - Cache Optimization: In-memory caching for swiped profiles and filters, optimized candidate retrieval, and performance enhancements
        - Privacy Controls: User blocking functionality, match removal options, and profile visibility management
        - Security: JWT-based authorization for all operations, comprehensive input validation, and robust error handling
        
        The implementation follows RESTful design principles with asynchronous operations and thorough logging throughout.
        `
      },
      {
        url: TLApiEventsImage,
        description: `
        The Events module manages event discovery, details, and user participation in a social context. New events are collected regularly from public sources of ticket aggregators by python scripts scheduled in background.
        
        - Regional Event Discovery: City-based event browsing, filtering capabilities by various criteria, and pagination for efficient loading
        - Event Details: Comprehensive event information, venue details, and participant information with avatar display
        - Participation Management: One-click participation toggling, participant tracking, and attendance verification
        - Feedback System: User reviews and ratings for attended events, feedback management, and event quality metrics
        - User Engagement: Recent participant display, participation counts, and social integration
        - Security: JWT-based authentication for participant operations and input validation for all interactions
        
        The implementation follows a service-oriented design with exception handling and detailed error logging.
        `
      },
      {
        url: TLApiDataImage,
        description: `
        The data collection system analyzes user activity and music preferences:
        
        - User Activity Tracking: Monitors platform engagement patterns, analyzes interaction with events and content, and records browsing behavior
        - Music Profile Analysis: Extracts and processes user playlist information, collects artist and track metadata, and categorizes music by various attributes
        - Recommendation Engine: Uses collected data to generate personalized event suggestions, creates customized content feeds, and implements collaborative filtering
        - Privacy Considerations: Transparent data collection policies, user control over data sharing preferences, and anonymization processes
        
        The system employs data analytics techniques to enhance user experience while maintaining appropriate privacy boundaries.
        `
      },
      {
        url: TLApiUtilitiesImage,
        description: `
        The utility services provide supporting functionality across the platform:
        
        - Account Settings: Comprehensive user preference management, notification controls, and privacy options
        - Referral System: User invitation tracking, reward mechanisms for successful referrals, and conversion analytics
        - Psychological Profiling: Analysis of music preferences to determine personality traits, behavioral pattern recognition, and creation of user preference profiles
        - Cross-cutting Concerns: Email service integration for notifications, logging and monitoring infrastructure, and settings persistence
        
        These utility services enhance the core functionality of the platform while creating a more personalized user experience.
        `
      }
    ],
    liveUrl: "",
    githubUrl: "https://github.com/TuneLike/tunelike-api",
    template: "multi-image"
  },
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
    template: "standard"
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
    template: "standard"
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
    template: "standard"
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
    template: "standard"
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjects = () => projects;