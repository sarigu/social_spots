export interface Image {
  id?: string;
  alt?: string;
  permalink?: string;
  url?: string;
  api_url?: string;
}

export interface GeneralSettings {
  contact?: string;
  instagram? : string;
  disclaimer?: string;
  logo?: Image;
}

interface Blueprint{
  handle: string;
  title: string;
}

interface Collection{
  handle: string;
  title: string;
}

interface Author{
  api_url: string;
  email: string;
  id: string;
  name: string;
}

type BlockBase = {
  id: string;
  type: string;
};

export type BlockHero = BlockBase & {
  type: 'hero';
  headline: string;
  image: Image;
};

export type BlockHeadlineText = BlockBase & {
  type: 'headline_and_text';
  headline: string;
  text: string;
  text_on_the_right?: boolean;
};

export type BlockImageText = BlockBase & {
  type: 'image_and_text';
  headline?: string;
  text: string;
  image: Image;
  text_on_the_right?: boolean;
};

export type BlockHighlight = BlockBase & {
  type: 'highlight';
  text: string;
};

export type BlockInteractiveSpots = BlockBase & {
  type: 'interactive_spots';
  headline?: string;
};

interface CodeSnippet{
  code: string;
  mode: string;
  value: string;
}

export type BlockEmbed = BlockBase & {
  type: 'embed';
  headline?: string;
  code_snippet: CodeSnippet;
};

export type Block =
  BlockHero |
  BlockHeadlineText |
  BlockImageText |
  BlockHighlight |
  BlockInteractiveSpots |
  BlockEmbed;

export interface Page{
  api_url: string;
  author: string;
  blueprint: Blueprint;
  collection: Collection;
  date?: string;
  description?: string;
  edit_url: string;
  entry_id?: string;
  id: string;
  is_entry: boolean;
  last_modified: string;
  locale: string;
  mount: any;
  order: number
  origin_id: string
  page_builder: any[];
  permalink: string;
  private: boolean;
  published: boolean;
  slug: string;
  status: string;
  title: string;
  updated_at: string;
  uri: string;
  url: string;
  updated_by: Author;
}

export interface NavLinks {
  children?: React.ReactNode;
  depth: number;
  page: Page;
}

export interface FooterLinks {
  children?: React.ReactNode;
  depth: number;
  page: Page;
}

export type SpotTypeValue = 'food' | 'sports' | 'gardening' | 'volunteering' | 'culture_house' | 'games' | 'creativity';

export interface SpotType {
  key: string;
  value: SpotTypeValue;
  label: string;
}

export interface LanguageType {
  key: string;
  value: string;
  label: string;
}

export interface SocialSpot {
  id: string;
  title: string;
  type: SpotType[];
  description?: string;
  time_details?: string;
  cost?: string;
  language?: LanguageType[];
  website?: string;
  instagram?: string;
  facebook?: string;
  street?: string;
  street_number?: number;
  postal_code?: number;
  latitude?: number;
  longitude?: number;
  neighborhood?: string; 
}