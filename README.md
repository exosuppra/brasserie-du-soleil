# La Brasserie du Soleil — Site vitrine (maquettes)

Trois maquettes de site pour **La Brasserie du Soleil**, brasserie · pizzeria · bar au **rond-point du Grysélis**, à **Gréoux-les-Bains** (04800).

👉 **Page de présentation :** ouvrir `index.html` (ou l'URL GitHub Pages ci-dessous).

## Les 3 propositions

| # | Nom | Direction artistique | Lien |
|---|-----|----------------------|------|
| 01 | **Affiche** | Sérigraphie / affiche de marché — bleu Marseille, rouge tomate, jaune soleil, typographie condensée grasse | [`maquette-1-affiche/`](maquette-1-affiche/index.html) |
| 02 | **Ardoise** | Ardoise de bistrot — fond ardoise texturé, écriture à la craie, polaroids scotchés, laiton | [`maquette-2-ardoise/`](maquette-2-ardoise/index.html) |
| 03 | **Comptoir** | Revue culinaire éditoriale — crème & olive profond, photo plein cadre, sommaire numéroté | [`maquette-3-comptoir/`](maquette-3-comptoir/index.html) |

Chaque direction est volontairement très éloignée des deux autres : palette, typographie, mise en page et registre de ton changent complètement d'une proposition à l'autre.

## Caractéristiques communes

- 100 % responsive (mobile → desktop), aucun débordement horizontal
- Un seul fichier `index.html` par maquette, **aucune dépendance à installer** (Google Fonts via CDN)
- Bouton **« Réserver »** → appel direct au `04 92 78 01 53` (`tel:`), + lien itinéraire Google Maps
- Animations au scroll en `IntersectionObserver` natif, avec repli si l'onglet démarre en arrière-plan
- Respect de `prefers-reduced-motion`
- Carte OpenStreetMap intégrée (sans clé API)

## Version React animée

Sources dans [`react-app/`](react-app/), build committé dans [`app/`](app/).

- Vite + Tailwind + Framer Motion + Lenis
- 3 designs en routes HashRouter : `/app/#/affiche`, `/app/#/ardoise`, `/app/#/comptoir`, landing `/app/`
- Base Vite : `/brasserie-du-soleil/app/`

Pour rebuilder :

```bash
cd react-app && npm install && npm run build
```

puis copier `react-app/dist/` → `app/`. Le build se fait de préférence **hors OneDrive** pour éviter d'y synchroniser `node_modules`.

## Données du restaurant

| | |
|---|---|
| **Adresse** | Rond-point du Grysélis, 04800 Gréoux-les-Bains |
| **Téléphone** | 04 92 78 01 53 |
| **Horaires** | Tous les jours · 7h00 – 1h00 |
| **Type** | Brasserie · Pizzeria · Bar (française, provençale, italienne) |
| **Budget** | 20 – 30 € par personne · menu du jour 16,50 € |
| **Parking** | Gratuit, Av. des Marronniers, à 95 m |

### Sources et points à confirmer

Les contenus proviennent de sources publiques (fiche Google, Tripadvisor, site de la Mairie de Gréoux-les-Bains, annuaires de restauration). **À faire valider par le restaurant avant mise en ligne :**

- **Horaires** — la fiche de la Mairie indique 7h – 1h tous les jours, la fiche Google affiche une fermeture à 22h. Les maquettes retiennent 7h – 1h.
- **Adresse** — la Mairie et l'office de tourisme indiquent « Rond-point du Grysélis » ; Google affiche « Résidence Le Griselis, chemin de la Peyresse ». Les maquettes retiennent la première.
- **Prix** — seuls les prix des pizzas (10 à 14 €), de la quiche 3 fromages (10 €) et du menu du jour (16,50 €) sont sourcés. Les autres plats sont affichés « à la carte », sans prix inventé.
- **Avis** — les extraits affichés sont des avis réellement publiés sur Google et Tripadvisor, abrégés. À remplacer ou compléter selon vos préférences.
- **Note globale** — la note publique est de 3,9/5 sur Google (1 412 avis) et 3,4/5 sur Tripadvisor (350 avis). Les maquettes mettent en avant le **volume** d'avis et les extraits positifs récents plutôt que la note moyenne.

## Photos

Les photos affichées (dossier [`photos/`](photos/)) sont de **vrais clichés de la Brasserie du Soleil**, récupérés depuis les avis publiés sur **Tripadvisor** : la terrasse sous l'olivier, les pizzas, la salade périgourdine, le carpaccio-burrata, la salle et un dessert. Elles servent de repère visuel réaliste en attendant les photos officielles du restaurant.

> ⚠ **Droits à régler avant mise en ligne définitive.** La fiche Tripadvisor n'est pas revendiquée par le restaurant : ces photos ont été prises par des clients, qui en conservent les droits d'auteur. À remplacer idéalement par les propres photos du restaurant (ou avec l'accord des auteurs) avant une exploitation commerciale.

Les références sont centralisées dans [`react-app/src/data.js`](react-app/src/data.js) (objet `PHOTOS`, importées en statique) et en `../photos/…` dans chaque maquette HTML.

## Crédit

Sites développés par **Logiq IA** — [logiq-ia.fr](https://logiq-ia.fr). Le crédit figure dans le pied de page de chaque maquette et de l'application.

---

*Maquettes de présentation — couleurs, textes et photos entièrement personnalisables.*
