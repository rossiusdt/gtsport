/*
  # Analytics Tables

  1. New Tables
    - `page_views` — records each visit to the landing page
      - `id` (uuid, pk)
      - `session_id` (text) — anonymous session identifier
      - `referrer` (text) — where the visitor came from
      - `user_agent` (text)
      - `created_at` (timestamptz)

    - `click_events` — records button/link clicks
      - `id` (uuid, pk)
      - `session_id` (text)
      - `event_type` (text) — e.g. 'checkout_orange', 'checkout_platinum', 'cta_banner'
      - `plan_id` (text, nullable)
      - `created_at` (timestamptz)

  2. Security
    - RLS enabled on both tables
    - Anon users can INSERT only (for tracking)
    - No SELECT for anon (admin reads via service role)
*/

CREATE TABLE IF NOT EXISTS page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL DEFAULT '',
  referrer text NOT NULL DEFAULT '',
  user_agent text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert page views"
  ON page_views FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE TABLE IF NOT EXISTS click_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL DEFAULT '',
  event_type text NOT NULL DEFAULT '',
  plan_id text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert click events"
  ON click_events FOR INSERT
  TO anon
  WITH CHECK (true);
