/*
  # Admin Read Access for Analytics

  Allows authenticated users (admin) to read page_views and click_events.
  The admin dashboard authenticates via Supabase Auth before querying.
*/

CREATE POLICY "Authenticated users can read page views"
  ON page_views FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can read click events"
  ON click_events FOR SELECT
  TO authenticated
  USING (true);
