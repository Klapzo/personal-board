import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://ontiayxfnkmrsxsnlryt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udGlheXhmbmttcnN4c25scnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NjYzNDYsImV4cCI6MjAwODI0MjM0Nn0.VRmr8T0tj95vG1OFrowQPgX1xDGnKYaHnnjAec7bULg'
)

export default supabase
