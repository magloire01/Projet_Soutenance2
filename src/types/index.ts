export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  created_at: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  is_new?: boolean;
  is_popular?: boolean;
  created_at: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  template_id?: string;
  user_id: string;
  content: any;
  published_url?: string;
  created_at: string;
  updated_at: string;
}

export interface DragBlock {
  id: string;
  type: 'text' | 'image' | 'button' | 'form' | 'section' | 'video';
  content: any;
  styles: any;
  position: { x: number; y: number };
}

export interface AIResponse {
  code: string;
  explanation: string;
  suggestions: string[];
}