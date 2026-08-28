# Sorties Photos

Application Vite + TypeScript pour préparer des sorties de photographie animalière, avec Leaflet/OpenStreetMap et synchronisation Supabase.

## Installation

```bash
pnpm install
cp .env.example .env
pnpm dev
```

1. Créez un projet Supabase gratuit.
2. Exécutez `supabase/schema.sql` dans le SQL Editor.
3. Copiez l’URL du projet et la clé publique `anon` dans `.env`.
4. Dans Vercel, importez ce dépôt, ajoutez les deux variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`, puis déployez. Les futurs commits seront déployés automatiquement.

Sans variables Supabase, l’application fonctionne en mode démonstration en mémoire et l’indique clairement.

