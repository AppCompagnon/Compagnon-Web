import React, { useState, useEffect } from 'react';
import '../App.css';

// Exemple de données de cours pour une semaine
const semaines = [
  {
    nom: 'Semaine du 30 mars au 3 avril',
    jours: [
      {
        jour: 'lundi',
        date: '30 mars',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PERMANENCE', salle: 'Salle d\'études 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '31 mars',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'PERMANENCE', salle: 'Salle poly', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'EMI', prof: 'Mme DUBOIS', salle: 'CDI', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Annulé' },
        ],
      },
      {
        jour: 'mercredi',
        date: '1er avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Déplacé' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '2 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Devoir' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: 'Évaluation' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Évaluation' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
        ],
      },
      {
        jour: 'vendredi',
        date: '3 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'Mme FAUCHEZ, M. PAPINSAC', salle: '11, 12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PERMANENCE', salle:'Foyer',},
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'PERMANENCE', salle:'Salle d\'études 1' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Évaluation' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 6 avril au 10 avril',
    jours: [
      {
        jour: 'lundi',
        date: '6 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' }
        ]
      },
      {
        jour: 'mardi',
        date: '7 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE ET TERRE', prof: 'M. MULLER', salle: 'SC4', details: 'Annulé' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' }
        ]
      },
      {
        jour: 'mercredi',
        date: '8 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' }
        ]
      },
      {
        jour: 'jeudi',
        date: '9 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' }
        ]
      },
      {
        jour: 'vendredi',
        date: '10 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' }
        ]
      }
    ]
  },

{
    nom: 'Semaine du 13 avril au 17 avril',
    jours: [
      {
        jour: 'lundi',
        date: '13 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure : 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure : 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure : 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
          { heure : 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure : 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
      {
        jour: 'mardi',
        date: '14 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
      {
        jour: 'mercredi',
        date: '15 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: 'Vacances' },
        ],
      },
      {
        jour: 'jeudi',
        date: '16 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },

        ],
      },
      {
        jour: 'vendredi',
        date: '17 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
    ],
  },

{
    nom: 'Semaine du 20 avril au 24 avril',
    jours: [
      {
        jour: 'lundi',
        date: '20 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure : 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure : 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure : 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
          { heure : 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure : 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
      {
        jour: 'mardi',
        date: '21 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
      {
        jour: 'mercredi',
        date: '22 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: 'Vacances' },
        ],
      },
      {
        jour: 'jeudi',
        date: '23 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: 'Vacances' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Vacances' },

        ],
      },
      {
        jour: 'vendredi',
        date: '24 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Vacances' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: 'Vacances' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Vacances' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Vacances' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 27 avril au 1er mai',
    jours: [
      {
        jour: 'lundi',
        date: '27 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure : 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure : 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure : 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure : 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure : 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '28 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'EMI', prof: 'Mme DUBOIS', salle: 'CDI', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '29 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '30 avril',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },

        ],
      },
      {
        jour: 'vendredi',
        date: '1er mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Férié' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: 'Férié' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 4 mai au 8 mai',
    jours: [
      {
        jour: 'lundi',
        date: '4 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '5 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'EMI', prof: 'Mme DUBOIS', salle: 'CDI', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '6 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '7 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: '' },
        ],
      },
      {
        jour: 'vendredi',
        date: '8 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Férié' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: 'Férié' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 11 mai au 15 mai',
    jours: [
      {
        jour: 'lundi',
        date: '11 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '12 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '13 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: 'Annulé' },
        ],
      },
      {
        jour: 'jeudi',
        date: '14 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Férié' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: 'Férié' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Férié' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Férié' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Férié' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Férié' },
        ],
      },
      {
        jour: 'vendredi',
        date: '15 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Férié' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: 'Férié' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 18 mai au 22 mai',
    jours: [
      {
        jour: 'lundi',
        date: '18 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '19 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '12', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '20 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: '', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: '', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '21 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: '' },
        ],
      },
      {
        jour: 'vendredi',
        date: '22 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PERMANENCE', details: 'Annulé' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé' },
          { heure: 'S2 (14h30-15h30)', matiere: 'PERMANENCE', details: 'Annulé' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 25 mai au 29 mai',
    jours: [
      {
        jour: 'lundi',
        date: '25 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Férié' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Férié' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Férié' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: 'Férié' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Férié' },
        ],
      },
      {
        jour: 'mardi',
        date: '26 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '27 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '28 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
        ],
      },
      {
        jour: 'vendredi',
        date: '29 mai',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 1er juin au 5 juin',
    jours: [
      {
        jour: 'lundi',
        date: '1er juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '2 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '3 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '4 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Maintenu' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: '' },
        ],
      },
      {
        jour: 'vendredi',
        date: '5 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 8 juin au 12 juin',
    jours: [
      {
        jour: 'lundi',
        date: '8 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '9 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '10 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '11 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
        ],
      },
      {
        jour: 'vendredi',
        date: '12 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 15 juin au 19 juin',
    jours: [
      {
        jour: 'lundi',
        date: '15 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '16 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '17 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '18 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: '' },
        ],
      },
      {
        jour: 'vendredi',
        date: '19 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 22 juin au 26 juin',
    jours: [
      {
        jour: 'lundi',
        date: '22 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé (part. grp.)' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: 'Annulé' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '23 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: 'Annulé (part. grp.)' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: 'Annulé' },
          { heure: 'S1 (13h30-14h30)', matiere: 'EMI', prof: 'Mme DUBOIS', salle: 'CDI', details: 'Annulé' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: 'Annulé' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: 'Annulé (part. grp.)' },
        ],
      },
      {
        jour: 'mercredi',
        date: '24 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: 'Annulé' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: 'Annulé' },
        ],
      },
      {
        jour: 'jeudi',
        date: '25 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: 'Annulé' },
        ],
      },
      {
        jour: 'vendredi',
        date: '26 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },

  {
    nom: 'Semaine du 29 juin au 3 juillet',
    jours: [
      {
        jour: 'lundi',
        date: '29 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'S1 (13h-14h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S2 (14h-15h)', matiere: 'DEVOIRS FAITS', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S3 (15h-16h)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mardi',
        date: '30 juin',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'SCIENCES VIE & TERRE', prof: 'M. MULLER', salle: 'SC4', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'ARTS PLASTIQUES', prof: 'M. BERTHEAU', salle: 'Arts plastiques', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
      {
        jour: 'mercredi',
        date: '1er juillet',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'PHYSIQUE-CHIMIE', prof: 'Mme CHEVALIER', salle: 'Poly Tec1', details: '' },
        ],
      },
      {
        jour: 'jeudi',
        date: '2 juillet',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'EDUCATION MUSICALE', prof: 'Mme HANC', salle: 'Musique', details: '' },
          { heure: 'M3 (10h-11h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'ED.PHYSIQUE & SPORT.', prof: 'Mme DRUBAY', salle: 'Gymnase 1', details: '' },
          { heure: 'S1 (13h30-14h30)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC', salle: '12', details: '' },
          { heure: 'S2 (14h30-15h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'VIE DE CLASSE', prof: 'M. PAPINSAC', salle: '12', details: '' },
        ],
      },
      {
        jour: 'vendredi',
        date: '3 juillet',
        cours: [
          { heure: 'M1 (8h-9h)', matiere: 'HISTOIRE-GÉOGRAPHIE', prof: 'Mme CHERIF-KHANNOUSSI', salle: 'Poly Tec4', details: '' },
          { heure: 'M2 (9h-10h)', matiere: 'ANGLAIS LV1', prof: 'M. PAPINSAC, Mme FAUCHEZ', salle: '11, 12', details: '' },
          { heure: 'M4 (11h-12h)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'Midi', matiere: 'EMI', prof: 'Mme REIBEL', salle:'CDI', details: 'Exceptionnel'},
          { heure: 'S1 (13h30-14h30)', matiere: 'MATHÉMATIQUES', prof: 'Mme CHARPENTIER', salle: '2', details: '' },
          { heure: 'S3 (15h30-16h30)', matiere: 'FRANÇAIS', prof: 'M. BERTRAND', salle: '9', details: '' },
        ],
      },
    ],
  },
];

// Fonction pour déterminer la classe couleur selon la matière/prof/salle/détails
function getCouleurCours(cours) {
  if (!cours) return '';
  const mat = cours.matiere.toLowerCase();
  if (mat.includes('math')) return 'cours-math';
  if (mat.includes('anglais')) return 'cours-anglais';
  if (mat.includes('histoire')) return 'cours-histoire';
  if (mat.includes('français')) return 'cours-francais';
  if (mat.includes('devoirs faits')) return 'cours-devoirs';
  if (mat.includes('sciences vie')) return 'cours-svt';
  if (mat.includes('sport')) return 'cours-sport'; // sport AVANT physique
  if (mat.includes('physique')) return 'cours-physique';
  if (mat.includes('vie de classe')) return 'cours-vie';
  if (mat.includes('emi')) return 'cours-emi';
  if (mat.includes('arts')) return 'cours-arts';
  if (mat.includes('music')) return 'cours-arts';
  if (mat.includes('perm')) return 'cours-permanence';
  return '';
}

  // Si plusieurs cours au même créneau → empilement vertical
function CoursCell({ cours, colspan, onClick }) {
  if (!cours || (Array.isArray(cours) && cours.length === 0)) {
    return <td className="cours-vide" colSpan={colspan}></td>;
  }

  // Si plusieurs cours, prends le premier pour la couleur et les détails
  const c = Array.isArray(cours) ? cours[0] : cours;

  const opacity = c.details && (c.details.toLowerCase().includes('annulé') || c.details.toLowerCase().includes('férié') || c.details.toLowerCase().includes('déplacé') || c.details.toLowerCase().includes('vacances') || c.details.toLowerCase().includes('sortie scolaire') || c.details.toLowerCase().includes('en attente')) ? 0.5 : 1;

  return (
    <td
      className={`cours-cell ${getCouleurCours(c)}`}
      colSpan={colspan}
      style={{
        verticalAlign: 'middle',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        opacity,
        padding: '8px',
        borderRadius: '10px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
        textAlign: 'center',
        minHeight: '60px',
      }}
      onClick={onClick ? () => onClick({ cours }) : undefined}
    >
      <strong style={{ fontWeight: '600', display: 'block', marginBottom: 4 }}>
        {c.matiere}
      </strong>
      <span style={{ fontSize: '0.85rem', opacity: 0.85, display: 'block' }}>
        {c.prof}
      </span>
      {(c.salle || c.details) && (
        <span style={{ fontSize: '0.85rem', display: 'block' }}>
          {c.salle}
          {c.salle && c.details && ' - '}
          <span
            style={{
              color: c.details && c.details.toLowerCase().includes('annulé')
                ? 'red'
                : '#555',
            }}
          >
            {c.details}
          </span>
        </span>
      )}
    </td>
  );
}

// Composant principal pour l'emploi du temps
function Cours() {
  // Sélection pour vue détaillée
  const [selectedDay, setSelectedDay] = useState(null); // index du jour
  const [selectedCours, setSelectedCours] = useState(null); // {cours, jour, creneau}
  const [joursAffiches, setJoursAffiches] = useState([0,1,2,3,4]);
  const [semaineIndex, setSemaineIndex] = useState(0);
  const donneesCours = semaines[semaineIndex].jours;

  // Responsive: masquer les jours si la largeur est trop faible
  useEffect(() => {
    function handleResize() {
      const minColWidth = 140; // px
      const total = window.innerWidth;
      let maxJours = Math.max(1, Math.floor((total - 100) / minColWidth));
      if (maxJours > 5) maxJours = 5;
      // Affiche les jours du début (lundi) jusqu'à maxJours
      setJoursAffiches(Array.from({length: maxJours}, (_, i) => i));
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Liste des créneaux horaires (matin/après-midi)
  const creneaux = ['M1 (8h-9h)', 'M2 (9h-10h)', 'M3 (10h-11h)', 'M4 (11h-12h)', 'Midi', 'S1 (13h30-14h30)', 'S2 (14h30-15h30)', 'S3 (15h30-16h30)'];

  // Construction d'une matrice [creneau][jour] (pour chaque créneau, chaque jour)
const matrice = creneaux.map((creneau) =>
  donneesCours.map((jour) => {
    const cours = jour.cours.filter((c) => c.heure === creneau);
    return cours.length ? cours : null;
  })
);

  // Regroupement des cours de 2 heures consécutives (même matière, prof, salle, détails), sauf entre M4 et S1
  function regrouperCoursParJour(jourCours) {
    const groupes = [];
    let i = 0;
    while (i < jourCours.length) {
      const courant = jourCours[i];
      if (!courant) {
        groupes.push({ cours: null, span: 1 });
        i++;
        continue;
      }

      // Regroupement (max 2h)
      let span = 1;
      while (
        span < 2 &&
        i + span < jourCours.length &&
        ![3, 4].includes(i + span) && // ne pas regrouper entre M4 et S1
        JSON.stringify(jourCours[i + span]) === JSON.stringify(courant)
      ) {
        span++;
      }
      groupes.push({ cours: courant, span });
      i += span;
    }
    return groupes;
  }

  // Pour chaque ligne (créneau), on va regrouper les cours consécutifs par jour
  // Mais il est plus simple de parcourir par colonne (jour)
  // On va donc transposer la matrice pour travailler par jour
  const joursTransposes = donneesCours.map((_, j) => matrice.map((ligne) => ligne[j]));
  const groupesParJour = joursTransposes.map(jour =>
  jour.map(c => ({ cours: c, span: 1 }))
);

  // Vue détaillée d'un jour
  if (selectedDay !== null) {
    const jour = donneesCours[selectedDay];
    return (
      <div className="emploi-du-temps">
        <button onClick={() => setSelectedDay(null)} style={{marginBottom: 16}}>← Retour à l'emploi du temps</button>
        <h2>{jour.jour.charAt(0).toUpperCase() + jour.jour.slice(1)} {jour.date}</h2>
        <table>
          <thead>
            <tr><th>Créneau</th><th>Cours</th></tr>
          </thead>
          <tbody>
            {creneaux.map((creneau, i) => {
              const cours = jour.cours.find(c => c.heure === creneau);
              return (
                <tr key={creneau}>
                  <td className="creneau">{creneau}</td>
                  <CoursCell cours={cours} colspan={1} onClick={cours ? () => setSelectedCours({cours, jour: selectedDay, creneau}) : undefined} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  // Vue détaillée d'un cours
  if (selectedCours) {
    const { cours, jour, creneau } = selectedCours;
    return (
      <div className="emploi-du-temps">
        <button onClick={() => setSelectedCours(null)} style={{marginBottom: 16}}>← Retour à l'emploi du temps</button>
        <h2>Détail du cours</h2>
        <div style={{maxWidth: 600, margin: '2rem auto', padding: 24, borderRadius: 16, boxShadow: '0 2px 12px #0002', background: '#fff'}}>
          <div className={`cours-cell ${getCouleurCours(cours)}`} style={{fontSize: '1.2rem auto', margin: 'auto'}}>
            <strong>{cours.matiere}</strong><br />
            <span>{cours.prof}</span>
            {cours.salle && <span>- {cours.salle}<br /></span>}
            {cours.details && <span>{cours.details}</span>}
          </div>
          <div style={{marginTop: 16, color: '#555'}}>Jour : <b>{donneesCours[jour].jour} {donneesCours[jour].date}</b><br/>Créneau : <b>{creneau}</b></div>
        </div>
      </div>
    );
  }

  // Emploi du temps classique
  return (
    <div className="emploi-du-temps">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
  <button onClick={() => setSemaineIndex(prev => Math.max(0, prev - 1))}>
    ←
  </button>

  <h2>{semaines[semaineIndex].nom}</h2>

  <button onClick={() => setSemaineIndex(prev => Math.min(semaines.length - 1, prev + 1))}>
    →
  </button>
</div>
      <table>
        <thead>
          <tr>
            <th>Créneau</th>
            {donneesCours.map((jour, idx) => (
              joursAffiches.includes(idx) && (
                <th key={jour.jour} onClick={() => setSelectedDay(idx)} style={{cursor: 'pointer'}}>
                  {jour.jour.charAt(0).toUpperCase() + jour.jour.slice(1)}<br />
                  <span className="date">{jour.date}</span>
                </th>
              )
            ))}
          </tr>
        </thead>
        <tbody>
          {creneaux.map((creneau, i) => (
            <React.Fragment key={creneau}>
              {/* Ajoute une ligne séparatrice après M4 (i=3) */}
              {i === 4 && (
                <tr className="separateur-matin-aprem">
                  <td colSpan={joursAffiches.length + 1} style={{ height: 10, background: 'transparent', border: 'none' }}></td>
                </tr>
              )}
              <tr>
                <td className="creneau">{creneau}</td>
                {groupesParJour.map((groupes, j) => {
                  if (!joursAffiches.includes(j)) return null;
                  // Cherche si ce groupe commence à ce créneau
                  let index = 0, pos = 0;
                  while (index < groupes.length && pos < i) {
                    pos += groupes[index].span;
                    index++;
                  }
                  if (pos === i && groupes[index]) {
                    const { cours, span } = groupes[index];
                    return <CoursCell key={j + '-' + i} cours={cours} colspan={span} onClick={cours ? () => setSelectedCours({cours, jour: j, creneau}) : undefined} />;
                  }
                  // Sinon, cellule déjà fusionnée
                  return null;
                })}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {/*
        Ce composant affiche l'emploi du temps de la semaine, similaire à l'image fournie.
        Les données sont fictives et peuvent être reliées à un backend plus tard.
      */}
    </div>
  );
}

export default Cours;
