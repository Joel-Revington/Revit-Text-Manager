export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      acc_users: {
        Row: {
          created_at: string
          Email: string | null
          id: string
          Password: string | null
        }
        Insert: {
          created_at?: string
          Email?: string | null
          id?: string
          Password?: string | null
        }
        Update: {
          created_at?: string
          Email?: string | null
          id?: string
          Password?: string | null
        }
        Relationships: []
      }
      attendance: {
        Row: {
          batch: string | null
          batch_code: string | null
          batch_time: string | null
          created_at: string
          end_date: string | null
          end_time: string | null
          faculty: string | null
          id: string
          marked_status: Json[] | null
          name: string | null
          projects: Json[] | null
          specific_course: string | null
          start_date: string | null
          start_time: string | null
          status: Json[] | null
          test_scores: Json[] | null
          type: string | null
          user_id: string
        }
        Insert: {
          batch?: string | null
          batch_code?: string | null
          batch_time?: string | null
          created_at?: string
          end_date?: string | null
          end_time?: string | null
          faculty?: string | null
          id?: string
          marked_status?: Json[] | null
          name?: string | null
          projects?: Json[] | null
          specific_course?: string | null
          start_date?: string | null
          start_time?: string | null
          status?: Json[] | null
          test_scores?: Json[] | null
          type?: string | null
          user_id: string
        }
        Update: {
          batch?: string | null
          batch_code?: string | null
          batch_time?: string | null
          created_at?: string
          end_date?: string | null
          end_time?: string | null
          faculty?: string | null
          id?: string
          marked_status?: Json[] | null
          name?: string | null
          projects?: Json[] | null
          specific_course?: string | null
          start_date?: string | null
          start_time?: string | null
          status?: Json[] | null
          test_scores?: Json[] | null
          type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      batches: {
        Row: {
          batch: string | null
          course_duration: number | null
          courses: string[] | null
          created_at: string
          id: string
        }
        Insert: {
          batch?: string | null
          course_duration?: number | null
          courses?: string[] | null
          created_at?: string
          id?: string
        }
        Update: {
          batch?: string | null
          course_duration?: number | null
          courses?: string[] | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      courses: {
        Row: {
          course: string | null
          course_duration: number | null
          course_type: string | null
          created_at: string
          id: string
          units: Json[] | null
        }
        Insert: {
          course?: string | null
          course_duration?: number | null
          course_type?: string | null
          created_at?: string
          id?: string
          units?: Json[] | null
        }
        Update: {
          course?: string | null
          course_duration?: number | null
          course_type?: string | null
          created_at?: string
          id?: string
          units?: Json[] | null
        }
        Relationships: []
      }
      Gallery: {
        Row: {
          created_at: string
          date: string | null
          filePath: string | null
          id: string
          image_url: string | null
          student_name: string | null
          trainer: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          filePath?: string | null
          id?: string
          image_url?: string | null
          student_name?: string | null
          trainer?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          filePath?: string | null
          id?: string
          image_url?: string | null
          student_name?: string | null
          trainer?: string | null
        }
        Relationships: []
      }
      QuizData: {
        Row: {
          course_name: string | null
          created_at: string
          id: string
          test_data: Json[] | null
          test_name: string | null
        }
        Insert: {
          course_name?: string | null
          created_at?: string
          id?: string
          test_data?: Json[] | null
          test_name?: string | null
        }
        Update: {
          course_name?: string | null
          created_at?: string
          id?: string
          test_data?: Json[] | null
          test_name?: string | null
        }
        Relationships: []
      }
      Sheet: {
        Row: {
          adoption: string | null
          "adoption call": string | null
          "adoption report 2024": string | null
          "assigned to": string | null
          city: string | null
          comment: string | null
          company: string | null
          contactname: string | null
          contractnumber: number | null
          created_at: string
          email: string | null
          enddate: string | null
          expand: string | null
          id: string
          "installation done": number | null
          "last triggered": string | null
          "license usage": string | null
          mobile: string | null
          month: string | null
          "nature of business": string | null
          newrenewal: string | null
          onboarding: string | null
          orderreceived: string | null
          productdescription: string | null
          quantity: number | null
          remarks: string | null
          "renewal status": string | null
          "serial no.": string | null
          startdate: string | null
          status: string | null
          term: string | null
          "tools used": string | null
          "user assigned": number | null
          "user details": string | null
          "user status": string | null
        }
        Insert: {
          adoption?: string | null
          "adoption call"?: string | null
          "adoption report 2024"?: string | null
          "assigned to"?: string | null
          city?: string | null
          comment?: string | null
          company?: string | null
          contactname?: string | null
          contractnumber?: number | null
          created_at?: string
          email?: string | null
          enddate?: string | null
          expand?: string | null
          id?: string
          "installation done"?: number | null
          "last triggered"?: string | null
          "license usage"?: string | null
          mobile?: string | null
          month?: string | null
          "nature of business"?: string | null
          newrenewal?: string | null
          onboarding?: string | null
          orderreceived?: string | null
          productdescription?: string | null
          quantity?: number | null
          remarks?: string | null
          "renewal status"?: string | null
          "serial no."?: string | null
          startdate?: string | null
          status?: string | null
          term?: string | null
          "tools used"?: string | null
          "user assigned"?: number | null
          "user details"?: string | null
          "user status"?: string | null
        }
        Update: {
          adoption?: string | null
          "adoption call"?: string | null
          "adoption report 2024"?: string | null
          "assigned to"?: string | null
          city?: string | null
          comment?: string | null
          company?: string | null
          contactname?: string | null
          contractnumber?: number | null
          created_at?: string
          email?: string | null
          enddate?: string | null
          expand?: string | null
          id?: string
          "installation done"?: number | null
          "last triggered"?: string | null
          "license usage"?: string | null
          mobile?: string | null
          month?: string | null
          "nature of business"?: string | null
          newrenewal?: string | null
          onboarding?: string | null
          orderreceived?: string | null
          productdescription?: string | null
          quantity?: number | null
          remarks?: string | null
          "renewal status"?: string | null
          "serial no."?: string | null
          startdate?: string | null
          status?: string | null
          term?: string | null
          "tools used"?: string | null
          "user assigned"?: number | null
          "user details"?: string | null
          "user status"?: string | null
        }
        Relationships: []
      }
      SubmittedTests: {
        Row: {
          created_at: string
          date: string | null
          id: string
          marks: number | null
          status: string | null
          student_name: string | null
          test_data: Json[] | null
          test_name: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          id?: string
          marks?: number | null
          status?: string | null
          student_name?: string | null
          test_data?: Json[] | null
          test_name?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          id?: string
          marks?: number | null
          status?: string | null
          student_name?: string | null
          test_data?: Json[] | null
          test_name?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      Users: {
        Row: {
          about: string | null
          account_status: string | null
          batch: string | null
          "company/college": string | null
          created_at: string
          dob: string | null
          email: string | null
          id: string
          name: string | null
          password: string | null
          phone_number: number | null
          profession: string | null
          profile_image: string | null
          role: string | null
          status: string | null
        }
        Insert: {
          about?: string | null
          account_status?: string | null
          batch?: string | null
          "company/college"?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          id?: string
          name?: string | null
          password?: string | null
          phone_number?: number | null
          profession?: string | null
          profile_image?: string | null
          role?: string | null
          status?: string | null
        }
        Update: {
          about?: string | null
          account_status?: string | null
          batch?: string | null
          "company/college"?: string | null
          created_at?: string
          dob?: string | null
          email?: string | null
          id?: string
          name?: string | null
          password?: string | null
          phone_number?: number | null
          profession?: string | null
          profile_image?: string | null
          role?: string | null
          status?: string | null
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
