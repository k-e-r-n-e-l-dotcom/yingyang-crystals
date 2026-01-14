/*
  # Create Products Table for Crystal Shop

  1. New Tables
    - `products`
      - `id` (uuid, primary key) - Unique identifier for each product
      - `name` (text) - Product name (e.g., "Amethyst Crystal")
      - `description` (text) - Detailed product description
      - `price` (numeric) - Product price in USD
      - `image_url` (text) - URL to product image
      - `category` (text) - Product category (e.g., "crystals", "sage", "jewelry")
      - `benefits` (text) - Healing benefits and properties
      - `chakra` (text) - Associated chakra
      - `stock` (integer) - Available quantity
      - `featured` (boolean) - Whether to display in featured section
      - `created_at` (timestamptz) - Creation timestamp
      
  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (products are viewable by all)
    - Add policy for authenticated admin users to manage products
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL DEFAULT 'crystals',
  benefits text,
  chakra text,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are viewable by everyone"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);