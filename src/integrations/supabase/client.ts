import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wkaqcktvsjnuigbzsrvi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrYXFja3R2c2pudWlnYnpzcnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNjAzMzksImV4cCI6MjA3OTkzNjMzOX0.ajC6u_mYHHqyPZdHFyou7qxxFCOUaADs1LMzc5qFUSQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)