import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://unwvirebcjidnznxmxwl.supabase.co";
const supabaseKey = "sb_publishable_o1p-72EA5vFSvJ_gTM7qUw_SYSFXT36";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);