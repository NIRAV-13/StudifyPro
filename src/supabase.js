// src/supabase.js

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ficibnzriqbhxhxwsemj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpY2libnpyaXFiaHhoeHdzZW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk4MzAxNzMsImV4cCI6MTk4NTQwNjE3M30.Mp5k7K-xriDgYodKpEhgFi4XNHjxSF6lN7wvhq3FyEw"
);

export { supabase };
