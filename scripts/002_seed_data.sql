-- Seed experiences
INSERT INTO public.experiences (title, company, location, start_date, end_date, description, technologies, display_order) VALUES
(
  'Stagiaire Developpeuse Full Stack',
  'ASSURLAND',
  'Abidjan',
  'Juin 2025',
  'Mai 2026',
  'Conception, developpement, test et maintenance d''applications web et logicielles. Modelisation et gestion des bases de donnees. Developpement et integration d''API securisees. Optimisation des performances, de la securite et de l''experience utilisateur.',
  ARRAY['Angular', 'Laravel', 'MySQL'],
  1
),
(
  'Stagiaire Developpeuse Full Stack',
  'OMNIA GROUP',
  'Abidjan',
  'Avril 2025',
  'Janvier 2026',
  'Participation a la refonte complete d''une application web existante. Creation d''une application vitrine pour la presentation de la structure. Creation et gestion des bases de donnees.',
  ARRAY['NextJS', 'Laravel', 'React', 'MySQL', 'WordPress'],
  2
);

-- Seed education
INSERT INTO public.education (degree, school, location, start_date, end_date, display_order) VALUES
(
  'Formation Lead Tech Developer',
  'WECODE',
  'Cocody',
  'Février 2026',
  'Juillet 2026',
  1
),
(
  'Licence 3 professionnelle en reseau et genie logiciel',
  'PIGIER',
  'Plateau',
  'Janvier 2026',
  'Septembre 2026',
  2
),
(
  'Formation Fullstack Developer',
  'WECODE',
  'Yopougon',
  'Octobre 2024',
  'Mai 2025',
  3
),
(
  'Formation DigiFemme Learn Cohorte 4',
  'DigiFemme',
  'Online',
  'Janvier 2025',
  'Fevrier 2025',
  4
),
(
  'BTS Informatique Developpement d''Application',
  'PIGIER',
  'Plateau',
  'Aout 2024',
  NULL,
  5
),
(
  'Licence 2 professionnelle en reseau et genie logiciel',
  'PIGIER',
  'Plateau',
  'Octobre 2023',
  'Aout 2024',
  6
);

-- Seed projects
INSERT INTO public.projects (title, description, technologies, role, url, featured, display_order) VALUES
(
  'Fricash (en cours de developpement)',
  'Application de transfert entre agrégateurs de paiement',
  ARRAY['Fast API', 'Nextjs', 'TailwindCSS', 'Firebase', 'Jeko API'],
  'Conception de toutes l''application',
  'https://freecash-olive.vercel.app/',
  true,
  1
),
(
  'TrellTech',
  'Application mobile de gestion de workspace Trello',
  ARRAY['React Native', 'TailwindCSS', 'JavaScript', 'MongoDB'],
  'Conception de l''interface et gestion des CRUD',
  NULL,
  true,
  2
),
(
  'Rotten Tomatoes',
  'Application web d''evaluation de films',
  ARRAY['NextJS', 'TailwindCSS', 'MongoDB'],
  'Conception de l''interface, gestion des appels API, gestion des CRUD, gestion de l''admin',
  'https://rotten-tomatoes-beta.vercel.app/',
  true,
  3
),
(
  'Eazy-chain',
  'Application web de reservation de fret',
  ARRAY['NextJS', 'Firebase', 'Stripe', 'Paypal'],
  'Conception de l''interface, gestion des services et reservations',
  'https://www.eazy-chain.com',
  true,
  4
)
