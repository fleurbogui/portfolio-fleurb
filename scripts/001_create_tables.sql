-- Experiences table
CREATE TABLE IF NOT EXISTS public.experiences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT,
  description TEXT,
  technologies TEXT[] DEFAULT '{}',
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Education table
CREATE TABLE IF NOT EXISTS public.education (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  degree TEXT NOT NULL,
  school TEXT NOT NULL,
  location TEXT,
  start_date TEXT NOT NULL,
  end_date TEXT,
  description TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Projects table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  technologies TEXT[] DEFAULT '{}',
  role TEXT,
  url TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio visitors
CREATE POLICY "Anyone can view experiences" ON public.experiences FOR SELECT USING (true);
CREATE POLICY "Anyone can view education" ON public.education FOR SELECT USING (true);
CREATE POLICY "Anyone can view projects" ON public.projects FOR SELECT USING (true);

-- Authenticated users can manage all data (admin)
CREATE POLICY "Authenticated users can insert experiences" ON public.experiences FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update experiences" ON public.experiences FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete experiences" ON public.experiences FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert education" ON public.education FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update education" ON public.education FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete education" ON public.education FOR DELETE TO authenticated USING (true);

CREATE POLICY "Authenticated users can insert projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can update projects" ON public.projects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Authenticated users can delete projects" ON public.projects FOR DELETE TO authenticated USING (true);
