# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Mila Massaro

  #### Je startniveau:
  Rood

  #### Je focus:
  Surface Plane
 
</details>





## Je website

!!! WANNEER IK MIJN ORIGIN WIL PUSHEN OP GITHUB KRIJG IK EEN ERROR: your remote is disconnected. Check your internetconnection and try again. HIERDOOR KUNNEN DE AFBEELDINGEN IN DE README OOK NIET GEZIEN WORDEN...!!!

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.rcarecords.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home  
  <img src="readme-images/rca_records_home1" width="375px" alt="Home-pagina (1)">
  <img src="readme-images/rca_records_home2" width="375px" alt="Home-pagina (1)">

  #### Screenshot(s) van de tweede pagina (small screen):
  About  
  <img src="readme-images/rca_records_about" width="375px" alt="Home-pagina (1)">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  . Reageert niet goed op mobiele telefoon >> doordat je "horizontaal" kan scrollen loopt hij vast.
  . De meeste images hebben geen alt tekst of aria-hidden, terwijl ze wel belangrijk zijn.
  . Decoratieve images hebben ook geen alt-tekst, wat wel goed is.
  . Er is een banner die voorbij blijft komen, maar bij gebruik van een screenreader wordt die tekst 5x achter elkaar opgelezen.
  . Er zijn veel animaties, wat niet echt toegankelijk is en geen manier om deze uit te zetten. Op de instellingen op de laptop wordt niet gereageerd door de site >> niet toegankelijk bij default.
  . Er is niet goed door de site te navigeren bij gebruik van screenreader.
  . Slordige HTML met veel divs, uitgecommende stukken code...
  . Autoplay van video's wanneer je hovert (wat niet toegankelijk is).
  . Website is niet erg responsive.
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown_pagina_home.png" width="375px" alt="breakdown van de hele pagina">
  
  ### dynamisch deel (bijv menu): 
  <img src="readme-images/breakdown_navigatie.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">
  *** nog niet aan toegekomen
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Mila                                                    | Jean-Carlos                  | Teun                             | Philene                                                  |
  | ---                                                     | ---                          | ---                              | ---                                                      |  
  | Hoe kan ik de css het best opdelen? (volgorde)          | HTML structuur nakijken      | Bij tekst die afgakapt wordt met "lees meer" wel hele tekst?     | Hoe maak je op juiste manier gebruik van de screenreader?|
  | HTML structuur bekijken?                                | CSS checken                  |                                  |                                                          |
  | Hoe werkt de navigatie van de screenreader?             |

Specifieke vragen: 
.Hoe werkt de navigatie van de screenreader? >> hoe kan ik ervoor zorgen dat mijn site goed navigeerbaar is met de screenreader? (ik heb bijna geen p en vooral plaatjes...)
.De afbeelding is erg groot (breed) en overflow hidden werkt niet... Hoe zorg ik ervoor dat deze afbeelding wordt afgesneden? 
.Moet je wél sections hebben? Of moest je dit juist vermijden?
.Kan images het best downloaden of door middel van een link bij de source toevoegen?
.Ik heb een automatische carousel op mijn website; Hoe zorg ik ervoor dat de juiste tekst op het juiste moment wordt gelezen met de screenreader? 

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - ./ aan images toevoegen als img niet upload
  - HTML structuur bepaalt hoe makkelijk er genavigeerd kan worden
  - Ook bij de automatische carousel is het van de HTML structuur afhankelijk welke voorgelezen wordt.
  - Ja, je moet sections hebben
  - Images downloaden!!!
  - Screenreader kan makkelijk van header naar header

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | CSS verwijzingen  | en dit             | en ik dit    | en dan ik dat    |
  | Upload github | dit als er tijd is | nog een punt | dit wil ik zeker |
  | before en after         | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik gebruik de juiste manier van verwijzen in css, maar misschien problemen wanneer ik de footer ga maken.
  - Github desktop afsluiten en openen om error te verhelpen
  - Het is een goed idee om bij een probleem eerst goed naar de structuur van de html te kijken voordat je naar de css gaat kijken.
  - Eerst zorgen dat de basis goed is, voordat je de echt moeilijke animaties gaat uitwerken. Dit kan op het einde.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Mila           | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | Menu           | en dit             | en ik dit    | en dan ik dat    |
  | Links VS buttons SR | dit als er tijd is | nog een punt | dit wil ik zeker |
  | High contrast mode  | ...                | ...          | ...              |

  - Is het oke om een pagina surface plane en de andere pagina responsive te doen? (de tweede pagina heeft minder animaties etc, en degene die het heeft heb ik al uitgewerkt. Maar ik kan hem wel heel goed responsive maken en zo oefen ik met beide)
  - Hoe selecteer je elementen als je twee verschillende HTML pagina's hebt met Javascript? Heb je dan ook twee javascript nodig?
  - Moet ik "menu" van hamburgermenu ook een duidelijke button maken?
  - Hoe zorg ik ervoor dat ik een h1 heb die wel voorgelezen wordt met de screenreader, maar niet te zien is op de pagina? (bij mijn tweede pagina heb ik nu een h1 die eigenlijk niet de pagina omschrijft en dus ook niet goed is als h1)
  - De darkmode is me niet gelukt om uit te werken. Ik heb wel alle kleuralternatieven toegevoegd, maar een deel wordt niet opgepakt.
  - Hoe werkt before en after precies? wat doet het?


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen


</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
