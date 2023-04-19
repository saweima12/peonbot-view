export interface ChatDetail {
    chat_id: string,
    chat_name: string,
}

export interface MarkedPageDetail {
    metadata: Record<string, string>,
    content: string,
    slugKey: string,
    headings: Record<string, string>
}

export interface DeleteMessageDetail {
    content_type: string,
    full_name: string,
    raw: Record<string, string>,
    record_time: string,
    user_id: string
}

export interface MemberDetail {
    full_name: string,
    point: number,
    last_updated: string
}

export interface TabItem {
    id: string;
    label: string;
    link: string
  }