// types/blog.ts
export interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: {
      name: string;
      email: string;
      avatar: string;
    };
    category: string;
    summary: string;
    content: BlogContent[];
  }
  
  export type BlogContent = 
    | { type: "text"; content: string }
    | { type: "code"; language: string; content: string }
    | { type: "image"; src: string; alt: string; caption?: string };
  
  export interface FormData {
    email: string;
    secretCode: string;
    title: string;
    category: string;
    summary: string;
    authorName: string;
    contentBlocks: {
      type: "text" | "code" | "image";
      content: string;
      language?: string;
      src?: string;
      alt?: string;
      caption?: string;
    }[];
  }