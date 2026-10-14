# IA NOVATION

Site vitrine statique en français, sans compilation ni dépendance d’exécution.

## Démarrage

Depuis `/workspace/innovation` :

```sh
python -m http.server 3000 --bind 0.0.0.0
```

Cinq pages HTML, styles dans `style.css`, interactions dans `app.js`. Police Poppins hébergée localement sous licence OFL (voir `assets/FONT-LICENSE`).

## Livraison à compléter

- Remplacer la signature typographique provisoire et le favicon par les fichiers officiels du logo. Les images visibles dans la conversation ne sont pas disponibles comme fichiers dans le dépôt.
- Ajouter les photos, les logos partenaires et leurs liens, ainsi que les destinations officielles Humanova, prospection et Morpheus. Aucun lien externe n’a été inventé.
- Le formulaire valide les champs et prépare un e-mail. Il n’envoie rien automatiquement et ne conserve aucune donnée. Un service d’envoi reste nécessaire pour une soumission directe.
- Ajouter les mentions légales avec les coordonnées juridiques validées avant publication.
- Les pourcentages de bénéfices de formation reprennent ceux du document client ; leurs sources restent à confirmer avant publication.
- L’accueil suit la composition de la maquette complète reçue : hero spatial et bénéfices à droite, solutions sur fond clair, méthode en frise à droite, bénéfices sur paysage sombre, engagements sur fond montagne clair, partenaires et CTA spatial.
- `assets/background-atlas.png` contient des illustrations de remplacement générées à partir de la référence. Elles doivent être remplacées par les fonds originaux pour une reproduction exacte. Les partenaires sont affichés en texte en attendant leurs logos officiels.

Les textes proviennent du document « texte site master V1 ». Mise en page inspirée de l’arborescence et des chartes fournies : navigation 80 px, hero 770 px (850 px navigation comprise), CTA 550 px sur ordinateur ; marges de section 120 px. Adaptation sur tablette et mobile.
