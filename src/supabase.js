import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ruyargrcffvttabtjcyz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1eWFyZ3JjZmZ2dHRhYnRqY3l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNjI1MjEsImV4cCI6MjA0ODgzODUyMX0.zLw9VGpR31qyeUNLlyn5TnM35zs0uMMifkAXcmik0Zs';
export const supabase = createClient(supabaseUrl, supabaseKey);
