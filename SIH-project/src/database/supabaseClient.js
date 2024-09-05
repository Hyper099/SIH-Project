// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygorfgjbbuaggvhsjepe.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlnb3JmZ2piYnVhZ2d2aHNqZXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1NDYzMDYsImV4cCI6MjA0MTEyMjMwNn0.9yvjVAc6NDf2sMoj0aWfQq3g4D15Qiimf8li_n3X9nU'; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
