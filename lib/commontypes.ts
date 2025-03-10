export interface IVimeoResponse {
  uri: string;
  name: string;
  description: null;
  type: string;
  link: string;
  player_embed_url: string;
  duration: number;
  width: number;
  language: null;
  height: number;
  embed: any;
  created_time: Date;
  modified_time: Date;
  release_time: Date;
  content_rating: string[];
  content_rating_class: string;
  rating_mod_locked: boolean;
  license: null;
  privacy: any;
  pictures: any;
  tags: any[];
  stats: any;
  categories: any[];
  uploader: any;
  metadata: any;
  manage_link: string;
  user: any;
  parent_folder: any;
  last_user_action_event_date: Date;
  review_page: any;
  app: any;
  status: string;
  resource_key: string;
  upload: any;
  transcode: {status:string};
  is_playable: boolean;
  has_audio: boolean;
}


export interface IUiFile {
  ui_file?: File;
  ui_fileIsUploading?: boolean;
  ui_fileUploadPercentage?: string;

  ui_explainFile?: File;
  ui_explainFileIsUploading?: boolean;
  ui_explainFileUploadPercentage?: string;

  ui_thumbnailFile?: File;
  ui_thumbnailFileIsUploading?: boolean;

  ui_logoFile?: File;
  ui_logoFileIsUploading?: boolean;
  ui_status: string;
  ui_upload:any; // function 임
}
