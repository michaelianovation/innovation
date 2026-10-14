# IA NOVATION

Site vitrine statique en français, sans compilation ni dépendance d’exécution.

## Démarrage

Depuis `/workspace/innovation` :

```sh
python -m http.server 3000 --bind 0.0.0.0
```

Cinq pages HTML, mise en page dans `style.css`, typographie dans `typography.css`, interactions dans `app.js`. Police Poppins hébergée localement sous licence OFL (voir `assets/FONT-LICENSE`).

## Livraison à compléter

- Remplacer la signature typographique provisoire et le favicon par les fichiers officiels du logo. Les images visibles dans la conversation ne sont pas disponibles comme fichiers dans le dépôt.
- Ajouter les photos, les logos partenaires et leurs liens, ainsi que les destinations officielles Humanova, prospection et Morpheus. Aucun lien externe n’a été inventé.
- Le formulaire valide les champs et prépare un e-mail. Il n’envoie rien automatiquement et ne conserve aucune donnée. Un service d’envoi reste nécessaire pour une soumission directe.
- Ajouter les mentions légales avec les coordonnées juridiques validées avant publication.
- Les pourcentages de bénéfices de formation reprennent ceux du document client ; leurs sources restent à confirmer avant publication.
- L’accueil suit la composition de la maquette complète reçue : hero spatial et bénéfices à droite, solutions sur fond clair, méthode en frise à droite, bénéfices sur paysage sombre, engagements sur fond montagne clair, partenaires et CTA spatial.
- `assets/background-atlas.png` contient des illustrations de remplacement générées à partir de la référence. Elles doivent être remplacées par les fonds originaux pour une reproduction exacte. Les partenaires sont affichés en texte en attendant leurs logos officiels.

Les textes proviennent du document « texte site master V1 ». Mise en page inspirée de l’arborescence et des chartes fournies : navigation 80 px, hero 770 px (850 px navigation comprise), CTA 550 px sur ordinateur ; marges de section 120 px. Adaptation sur tablette et mobile.

## Charte typographique

`typography.css` centralise les valeurs de la charte fournie. Aucun style de section ne redéfinit les tailles, graisses, interlignes ou espacements des rôles de texte.

- H1 : 42 / 36 / 30 px (ordinateur / tablette / mobile), graisse 600, interligne 1,12, espacement −0,8 px.
- H2 : 34 / 30 / 26 px, graisse 600, interligne 1,18, espacement −0,5 px.
- H3 : 18 / 17 / 17 px, graisse 600, interligne 1,35, espacement −0,2 px.
- H4 : 16 px, graisse 500 ; H5 : 14 px, graisse 600 ; H6 : 12 px (11 sur mobile), graisse 600.
- Paragraphes : 15 px / 400 / 1,55 ; introductions : 17 px sur ordinateur et 15 px sur tablette et mobile.
- Texte de carte : 13 px / 400 / 1,5 ; petites mentions : 12 px / 400 / 1,45.
- Boutons : 14 px / 600 / 1,2 ; navigation : 13 px / 500 / 1,2.
- Rubriques : 12 px (11 sur mobile) / 600 / 1,4, espacement 3 px.

La marque provisoire conserve son traitement de logo. Son slogan reste affiché en pied de page à 12 px et est masqué dans l’en-tête sur mobile pour éviter de réduire sa taille.
