/*
  # Create Customer Feedback Table

  1. New Tables
    - `customer_feedback`
      - `id` (uuid, primary key) - Unique identifier for each feedback
      - `name` (text) - Customer's name
      - `email` (text, optional) - Customer's email
      - `service` (text, optional) - Service they used
      - `rating` (integer) - Rating from 1-5 stars
      - `feedback_text` (text) - Their feedback message
      - `is_approved` (boolean) - Admin approval status
      - `created_at` (timestamptz) - When feedback was submitted

  2. Security
    - Enable RLS on `customer_feedback` table
    - Add policy for anyone to insert feedback (public submission)
    - Add policy for anyone to read approved feedback only
    - Future: Admin policies can be added for approval workflow

  3. Important Notes
    - Public can submit feedback without authentication
    - Only approved feedback is visible to public
    - All feedback starts as not approved by default
*/

CREATE TABLE IF NOT EXISTS customer_feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text,
  service text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  feedback_text text NOT NULL,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE customer_feedback ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit feedback (public submission)
CREATE POLICY "Anyone can submit feedback"
  ON customer_feedback
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to view approved feedback only
CREATE POLICY "Anyone can view approved feedback"
  ON customer_feedback
  FOR SELECT
  TO anon, authenticated
  USING (is_approved = true);

-- Create an index for faster queries on approved feedback
CREATE INDEX IF NOT EXISTS idx_customer_feedback_approved 
  ON customer_feedback(is_approved, created_at DESC);
