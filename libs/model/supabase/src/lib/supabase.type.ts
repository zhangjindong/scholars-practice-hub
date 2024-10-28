export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  pgbouncer: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_auth: {
        Args: {
          p_usename: string
        }
        Returns: {
          username: string
          password: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  pgtle: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  preference: {
    Tables: {
      content_detail: {
        Row: {
          content_id: string
          createdAt: string
          favorite: boolean | null
          interval: string | null
          layout: Json[] | null
          period_end_date: string | null
          period_end_time_period: string | null
          period_start_date: string | null
          period_start_time_period: string | null
          schema_version: string | null
          sql: string | null
          updatedAt: string
        }
        Insert: {
          content_id?: string
          createdAt: string
          favorite?: boolean | null
          interval?: string | null
          layout?: Json[] | null
          period_end_date?: string | null
          period_end_time_period?: string | null
          period_start_date?: string | null
          period_start_time_period?: string | null
          schema_version?: string | null
          sql?: string | null
          updatedAt: string
        }
        Update: {
          content_id?: string
          createdAt?: string
          favorite?: boolean | null
          interval?: string | null
          layout?: Json[] | null
          period_end_date?: string | null
          period_end_time_period?: string | null
          period_start_date?: string | null
          period_start_time_period?: string | null
          schema_version?: string | null
          sql?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      user_content: {
        Row: {
          content_id: string
          createdAt: string
          description: string | null
          id: string
          inserted_at: string | null
          name: string
          owner_id: string | null
          type: Database["preference"]["Enums"]["enum_user_content_type"]
          updated_at: string | null
          updatedAt: string
          visibility:
            | Database["preference"]["Enums"]["enum_user_content_visibility"]
            | null
        }
        Insert: {
          content_id: string
          createdAt: string
          description?: string | null
          id?: string
          inserted_at?: string | null
          name: string
          owner_id?: string | null
          type: Database["preference"]["Enums"]["enum_user_content_type"]
          updated_at?: string | null
          updatedAt: string
          visibility?:
            | Database["preference"]["Enums"]["enum_user_content_visibility"]
            | null
        }
        Update: {
          content_id?: string
          createdAt?: string
          description?: string | null
          id?: string
          inserted_at?: string | null
          name?: string
          owner_id?: string | null
          type?: Database["preference"]["Enums"]["enum_user_content_type"]
          updated_at?: string | null
          updatedAt?: string
          visibility?:
            | Database["preference"]["Enums"]["enum_user_content_visibility"]
            | null
        }
        Relationships: [
          {
            foreignKeyName: "user_content_content_id_fkey"
            columns: ["content_id"]
            referencedRelation: "content_detail"
            referencedColumns: ["content_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      enum_user_content_type: "sql" | "report" | "log_sql"
      enum_user_content_visibility: "user" | "project" | "org" | "public"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      autoGrading: {
        Row: {
          answer_id: number | null
          correct_ratio: number | null
          feedback: string | null
          grading_id: number
          grading_status: string | null
          grading_time: string | null
          id: number
        }
        Insert: {
          answer_id?: number | null
          correct_ratio?: number | null
          feedback?: string | null
          grading_id: number
          grading_status?: string | null
          grading_time?: string | null
          id?: number
        }
        Update: {
          answer_id?: number | null
          correct_ratio?: number | null
          feedback?: string | null
          grading_id?: number
          grading_status?: string | null
          grading_time?: string | null
          id?: number
        }
        Relationships: []
      }
      mistakes: {
        Row: {
          id: number
          is_resolved: boolean | null
          last_review_date: string | null
          mistake_id: number
          mistake_reason: string | null
          question_id: number | null
          review_count: number | null
          user_id: number | null
        }
        Insert: {
          id?: number
          is_resolved?: boolean | null
          last_review_date?: string | null
          mistake_id: number
          mistake_reason?: string | null
          question_id?: number | null
          review_count?: number | null
          user_id?: number | null
        }
        Update: {
          id?: number
          is_resolved?: boolean | null
          last_review_date?: string | null
          mistake_id?: number
          mistake_reason?: string | null
          question_id?: number | null
          review_count?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      photoUploads: {
        Row: {
          id: number
          is_corrected: boolean | null
          ocr_text: string | null
          photo_id: string
          photo_url: string | null
          question_id: number | null
          upload_time: string | null
          user_id: number | null
        }
        Insert: {
          id?: number
          is_corrected?: boolean | null
          ocr_text?: string | null
          photo_id?: string
          photo_url?: string | null
          question_id?: number | null
          upload_time?: string | null
          user_id?: number | null
        }
        Update: {
          id?: number
          is_corrected?: boolean | null
          ocr_text?: string | null
          photo_id?: string
          photo_url?: string | null
          question_id?: number | null
          upload_time?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          chapter: string | null
          correct_answer: string | null
          created_at: string | null
          difficulty: Database["public"]["Enums"]["difficulty"] | null
          explanation: string | null
          id: number
          options: Json | null
          question_content: string | null
          question_id: number
          question_type: Database["public"]["Enums"]["question_type"] | null
          subject: Database["public"]["Enums"]["subject"] | null
          updated_at: string | null
        }
        Insert: {
          chapter?: string | null
          correct_answer?: string | null
          created_at?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          explanation?: string | null
          id?: number
          options?: Json | null
          question_content?: string | null
          question_id: number
          question_type?: Database["public"]["Enums"]["question_type"] | null
          subject?: Database["public"]["Enums"]["subject"] | null
          updated_at?: string | null
        }
        Update: {
          chapter?: string | null
          correct_answer?: string | null
          created_at?: string | null
          difficulty?: Database["public"]["Enums"]["difficulty"] | null
          explanation?: string | null
          id?: number
          options?: Json | null
          question_content?: string | null
          question_id?: number
          question_type?: Database["public"]["Enums"]["question_type"] | null
          subject?: Database["public"]["Enums"]["subject"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      userAnswers: {
        Row: {
          answer_id: number
          answer_time: string | null
          id: number
          is_correct: boolean | null
          question_id: number | null
          time_spent: number | null
          user_answer: string | null
          user_id: number | null
        }
        Insert: {
          answer_id: number
          answer_time?: string | null
          id?: number
          is_correct?: boolean | null
          question_id?: number | null
          time_spent?: number | null
          user_answer?: string | null
          user_id?: number | null
        }
        Update: {
          answer_id?: number
          answer_time?: string | null
          id?: number
          is_correct?: boolean | null
          question_id?: number | null
          time_spent?: number | null
          user_answer?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      difficulty: "1" | "2" | "3" | "4" | "5"
      question_type: "Chinese" | "Mathematics" | "English" | "Science"
      subject: "Chinese" | "Mathematics" | "English" | "Science"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  sqlj: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  tiger: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  topology: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
