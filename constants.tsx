import { NavLink, ServiceItem } from './types';
import { Trees, Paintbrush, Snowflake, Wrench, Hammer, BrickWall } from 'lucide-react';
import React from 'react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Ydelser', href: '#services' },
  { label: 'Om Os', href: '#about' },
  { label: 'Booking', href: '#booking' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'green',
    title: 'Grønne Områder',
    description: 'Græsslåning, hækklipning og ukrudtsbekæmpelse med miljøvenlige el-maskiner.',
    icon: 'tree',
  },
  {
    id: 'cleaning',
    title: 'Rengøring',
    description: 'Grundig rengøring af fællesarealer, trappevask og ejendomsrens med fokus på detaljen.',
    icon: 'broom',
  },
  {
    id: 'winter',
    title: 'Vinterservice',
    description: 'Saltning og snerydning 24/7. Vi sikrer, at beboerne kan færdes sikkert uanset vejret.',
    icon: 'snowflake',
  },
  {
    id: 'maintenance',
    title: 'Drift & Vedligeholdelse',
    description: 'Løbende tilsyn, udskiftning af lyskilder og generel teknisk vedligeholdelse af ejendommen.',
    icon: 'wrench',
  },
  {
    id: 'carpentry',
    title: 'Tømrerarbejde',
    description: 'Opsætning af hegn, reparation af træværk, udhæng og diverse småreparationer.',
    icon: 'hammer',
  },
  {
    id: 'paving',
    title: 'Brolægning',
    description: 'Etablering og opretning af flisebelægning, terrasser, gangstier og indkørsler.',
    icon: 'brick',
  },
];

export const ICONS = {
  tree: <Trees className="w-8 h-8 text-[#00d66b]" />,
  broom: <Paintbrush className="w-8 h-8 text-[#00d66b]" />,
  snowflake: <Snowflake className="w-8 h-8 text-[#00d66b]" />,
  wrench: <Wrench className="w-8 h-8 text-[#00d66b]" />,
  hammer: <Hammer className="w-8 h-8 text-[#00d66b]" />,
  brick: <BrickWall className="w-8 h-8 text-[#00d66b]" />,
};