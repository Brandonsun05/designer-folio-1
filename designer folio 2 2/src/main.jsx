import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Matter from 'matter-js';
import {
  Box,
  Code2,
  Film,
  Layers3,
  Linkedin,
  Mail,
  MousePointer2,
  Music2,
  PenTool,
  Sparkles,
  Video,
} from 'lucide-react';
import { websiteCategories, websiteWorks } from './websiteWorks.generated';
import './styles.css';

const categories = [
  { id: 'All', label: 'All Works' },
  { id: '3D', label: '3D Works' },
  { id: 'Virtual', label: 'Virtual Environments' },
  { id: 'Sound', label: 'Sound Design' },
  { id: 'UI/UX', label: 'UI/UX' },
  { id: 'Video', label: 'Video Works' },
  { id: '2D', label: '2D Works' },
  { id: 'Photography', label: 'Photography' },
];

const works = [
  {
    title: 'Digital Sunflower',
    category: '3D',
    year: '2024',
    image: '/art/digital-sunflower.jpg',
    description: 'A 3D object and rendering study exploring playful product-like digital form.',
  },
  {
    title: 'Musical Planet',
    category: '3D',
    year: '2024',
    image: '/art/musical-planet.jpg',
    description: 'A speculative 3D interface concept combining music, weather, and screen-based objects.',
  },
  {
    title: 'Phonebooth Diorama',
    category: '3D',
    year: '2024',
    image: '/art/vcr-cover.jpg',
    description: 'A compact 3D scene study focused on scale, atmosphere, and object storytelling.',
  },
  {
    title: 'AI Biospheres (Metro Morphosis)',
    category: '3D',
    year: '2024',
    image: '/art/musical-planet.jpg',
    description: 'AI-generated biosphere concepts developed as part of the Metro Morphosis world.',
  },
  {
    title: '3D Works',
    category: '3D',
    year: '2024',
    image: '/art/hand-sunflower.jpg',
    description: 'A collection of 3D experiments across digital objects, rendering, and environments.',
  },
  {
    title: 'Introspective Exhibition',
    category: 'Virtual',
    year: '2024',
    image: '/art/ocean.jpg',
    description: 'A virtual exhibition concept built around mood, reflection, and spatial interaction.',
  },
  {
    title: 'A Game About Changes',
    category: 'Virtual',
    year: '2024',
    image: '/art/ding-city.jpg',
    description: 'An environment-led game concept about transition, transformation, and navigation.',
  },
  {
    title: 'Metro Morphosis',
    category: 'Virtual',
    year: '2024',
    image: '/art/digital-sunflower.jpg',
    description: 'An AI, 3D, and Unity AR project that turns metro systems into personalized living environments.',
  },
  {
    title: 'Application Earcons',
    category: 'Sound',
    year: '2023',
    image: '/art/ocean.jpg',
    description: 'A sound-design system for small application moments, feedback, and interface cues.',
  },
  {
    title: 'Cartoon Sound Design',
    category: 'Sound',
    year: '2023',
    image: '/art/hand-sunflower.jpg',
    description: 'A characterful sound-design exercise focused on timing, exaggeration, and motion.',
  },
  {
    title: 'Music Creation',
    category: 'Sound',
    year: '2023',
    image: '/art/musical-planet.jpg',
    description: 'Audio composition and sequencing experiments for screen-based media.',
  },
  {
    title: 'MCG AR Application',
    category: 'UI/UX',
    year: '2024',
    image: '/art/ding-city.jpg',
    description: 'A mobile AR interface concept for venue-based wayfinding and engagement.',
  },
  {
    title: 'PAVA: Personal AI Voice Assistance',
    category: 'UI/UX',
    year: '2024',
    image: '/art/vcr-cover.jpg',
    description: 'A personal assistant interface exploring voice-led support and everyday utility.',
  },
  {
    title: 'CashSwipe: Regenerative APP',
    category: 'UI/UX',
    year: '2024',
    image: '/art/digital-sunflower.jpg',
    description: 'A regenerative finance app concept with flows for spending, tracking, and impact.',
  },
  {
    title: 'Publication UI/UX',
    category: 'UI/UX',
    year: '2023',
    image: '/art/hand-sunflower.jpg',
    description: 'A publication interface study focused on readable hierarchy and editorial browsing.',
  },
  {
    title: 'Stones',
    category: 'Video',
    year: '2023',
    image: '/art/ocean.jpg',
    description: 'A video work exploring rhythm, texture, and quiet visual sequencing.',
  },
  {
    title: 'Moon',
    category: 'Video',
    year: '2023',
    image: '/art/musical-planet.jpg',
    description: 'A short screen-based study built around atmosphere, pacing, and night imagery.',
  },
  {
    title: 'Flagstaff Magic',
    category: 'Video',
    year: '2023',
    image: '/art/ding-city.jpg',
    description: 'A location-based motion piece exploring urban details through a magical lens.',
  },
  {
    title: 'APPLECORE',
    category: 'Video',
    year: '2023',
    image: '/art/vcr-cover.jpg',
    description: 'An experimental moving-image work using bold cuts and symbolic visual fragments.',
  },
  {
    title: 'Algorithms of Disrespect',
    category: 'Video',
    year: '2023',
    image: '/art/ding-city.jpg',
    description: 'A critical video work about digital systems, visibility, and social behavior.',
  },
  {
    title: 'SKO Publication',
    category: '2D',
    year: '2024',
    image: '/art/hand-sunflower.jpg',
    description: 'A publication and layout project shaped through typography, pacing, and visual systems.',
  },
  {
    title: 'Logo: Identity',
    category: '2D',
    year: '2024',
    image: '/art/vcr-cover.jpg',
    description: 'Identity and mark-making studies for clear, flexible visual communication.',
  },
  {
    title: 'Lyka Advertising Campaign',
    category: '2D',
    year: '2024',
    image: '/art/digital-sunflower.jpg',
    description: 'A campaign design project exploring layout, message, image, and brand energy.',
  },
  {
    title: 'Landscape',
    category: 'Photography',
    year: '2023',
    image: '/art/ocean.jpg',
    description: 'Landscape photography focused on composition, atmosphere, and natural scale.',
  },
  {
    title: 'Street',
    category: 'Photography',
    year: '2023',
    image: '/art/ding-city.jpg',
    description: 'Street photography capturing visual rhythm, everyday movement, and urban detail.',
  },
];

const categoryFocus = {
  '3D': '3D modelling, rendering, object studies, and speculative digital form.',
  Virtual: 'Spatial interaction, virtual environments, atmosphere, and world-building.',
  Sound: 'Interface sound, timing, feedback, composition, and audio identity.',
  'UI/UX': 'User flows, interface systems, mobile concepts, and experience prototyping.',
  Video: 'Moving image, editing rhythm, visual sequencing, and motion-led storytelling.',
  '2D': 'Publication, identity, campaign graphics, and visual communication.',
  Photography: 'Composition, urban observation, landscape, and image-led atmosphere.',
  Interactive: 'Interactive media, playful systems, participation, and digital experience.',
};

const getWorkDetail = (work) => ({
  focus: categoryFocus[work.category] ?? 'Digital media design, visual systems, and interactive storytelling.',
  role:
    work.category === 'Sound'
      ? 'Sound design, editing, sequencing'
      : work.category === 'UI/UX'
        ? 'Research, interface design, prototyping'
        : work.category === 'Video'
          ? 'Direction, editing, motion composition'
          : work.category === 'Photography'
            ? 'Photography, selection, visual editing'
            : 'Visual design, production, art direction',
  tools:
    work.category === '3D'
      ? 'Blender, Maya, Adobe tools'
      : work.category === 'UI/UX'
        ? 'Figma, prototyping, Adobe tools'
        : work.category === 'Sound'
          ? 'Reaper, Premiere Pro, sound libraries'
          : work.category === 'Video'
            ? 'Premiere Pro, After Effects'
            : work.category === 'Photography'
              ? 'Camera, Lightroom, Photoshop'
              : 'Illustrator, InDesign, Procreate',
});

const customWorkDetails = {
  'Digital Sunflower': {
    intro:
      'Digital Sunflower is a 3D composition that turns a sunflower into a social-media object: glossy petals, a reflective centre, hand-drawn annotations, butterflies, flowers, and a phone-post frame are layered into a playful digital scene.',
    focus: '3D object design, digital collage, social interface aesthetics, and final image composition.',
    role: '3D modelling, rendering, image composition, visual direction',
    tools: 'Blender, Adobe Photoshop, image compositing',
    sections: [
      {
        kicker: 'Final Composition',
        title: 'A sunflower staged as a digital post',
        text:
          'The final image combines a crystalline 3D sunflower with an Instagram-like post frame, glowing type, butterflies, and landscape textures. The piece treats the flower as something between an object, a memory, and a screen-based identity.',
        images: [
          '/website/3d/digital-sunflower/01-cover-image.jpg',
          '/website/3d/digital-sunflower/02-assignment-1-1.jpg',
        ],
      },
      {
        kicker: 'Form Development',
        title: 'Building the sunflower through material and shape',
        text:
          'The process images show the sunflower moving through different compositions and render tests. Petals, stem, reflective centre, and colour shifts are adjusted until the object feels synthetic, delicate, and slightly unreal.',
        images: [
          '/website/3d/digital-sunflower/03-assignment-1-2.png',
          '/website/3d/digital-sunflower/04-assignment-1-3.png',
          '/website/3d/digital-sunflower/05-assignment-1-5.png',
          '/website/3d/digital-sunflower/06-assignment-1-7.png',
          '/website/3d/digital-sunflower/07-assignment-1-8.png',
        ],
      },
      {
        kicker: 'Production Process',
        title: 'Testing camera, lighting, and compositing',
        text:
          'The screenshots document the practical production process: scene setup, lighting, material adjustments, camera framing, and final composition decisions before the image becomes a polished folio piece.',
        images: [
          '/website/3d/digital-sunflower/08-screenshot-2024-03-05-at-4-45-59-pm.png',
          '/website/3d/digital-sunflower/09-screenshot-2024-03-18-at-4-05-37-pm.png',
          '/website/3d/digital-sunflower/10-screenshot-2024-03-26-at-12-33-33-am.png',
          '/website/3d/digital-sunflower/11-screenshot-2024-03-26-at-12-42-44-am.png',
          '/website/3d/digital-sunflower/12-screenshot-2024-03-27-at-12-36-59-am.png',
          '/website/3d/digital-sunflower/13-screenshot-2024-04-08-at-2-40-51-pm-copy.png',
        ],
      },
    ],
  },
};

const notionWorkAssets = {
  'Digital Sunflower': {
    completed: [{ label: 'Final video', type: 'youtube', url: 'https://www.youtube.com/watch?v=2-VGhc7fL40' }],
  },
  'Musical Planet': {
    completed: [
      { label: 'Final video', type: 'youtube', url: 'https://www.youtube.com/watch?v=Y97bGL37BNw' },
      { label: 'Interactive Spline file', type: 'external', url: 'https://app.spline.design/file/62ab74bd-91a3-49e8-87d7-6e283b9e14e9' },
    ],
    prototypes: [
      { label: 'Prototype 01', type: 'youtube', url: 'https://www.youtube.com/watch?v=bp0Gl5VLnvI' },
      { label: 'Prototype 02', type: 'youtube', url: 'https://www.youtube.com/watch?v=mWygChv12Xs' },
      { label: 'Prototype 03', type: 'youtube', url: 'https://www.youtube.com/watch?v=SGgawGYy4Qk' },
      { label: 'YouTube channel archive', type: 'external', url: 'https://www.youtube.com/channel/UCouPFi8qVfia9-qlZ3WfAIg' },
    ],
  },
  'Phonebooth Diorama': {
    completed: [
      {
        label: 'Interactive Sketchfab model',
        type: 'sketchfab',
        url: 'https://sketchfab.com/models/56f6c8fa708144198ca3a0aeec08f3d9/embed',
      },
    ],
  },
  AIAR: {
    completed: [
      {
        label: 'Melbourne in a biosphere',
        type: 'sketchfab',
        url: 'https://sketchfab.com/models/fd5d6312ca0a4cbc980a8d3d86d4a188/embed',
      },
      {
        label: 'Beijing in a biosphere',
        type: 'sketchfab',
        url: 'https://sketchfab.com/models/73b49e0ed7db4a2e867c23babf88f35f/embed',
      },
      {
        label: 'Japan in a biosphere',
        type: 'sketchfab',
        url: 'https://sketchfab.com/models/0e174023c86640c39447e6f25f000e94/embed',
      },
    ],
  },
  'Introspective exhibition': {
    completed: [
      { label: 'Exhibition video', type: 'youtube', url: 'https://www.youtube.com/watch?v=x1it-VlPQ04' },
      { label: 'Walkthrough video', type: 'youtube', url: 'https://www.youtube.com/watch?v=C9nKksn8Wvg' },
    ],
  },
  'A Game About Changes': {
    completed: [
      { label: 'Gameplay video', type: 'youtube', url: 'https://www.youtube.com/watch?v=BDLyqqY5HFc' },
      { label: 'Downloadable game folder', type: 'external', url: 'https://drive.google.com/drive/folders/115LUpK4piLGhrBcF0yUUiR-TOJv5LVZF' },
    ],
  },
  'Metro Morphosis': {
    completed: [{ label: 'Metro Morphosis video', type: 'youtube', url: 'https://www.youtube.com/watch?v=dmx5_lZITjk' }],
  },
  'Application Earcons': {
    completed: [{ label: 'Application earcons video', type: 'youtube', url: 'https://www.youtube.com/watch?v=hFjLpSS4gAc' }],
  },
  'Cartoon Sound design': {
    completed: [{ label: 'Cartoon sound design video', type: 'youtube', url: 'https://www.youtube.com/watch?v=oXpIXt_1z1E' }],
  },
  'Music creation': {
    completed: [
      { label: 'Music creation 01', type: 'youtube', url: 'https://www.youtube.com/watch?v=DQkwHwo2Mlw' },
      { label: 'Music creation 02', type: 'youtube', url: 'https://www.youtube.com/watch?v=cUAOtSx9XzQ' },
      { label: 'Music creation 03', type: 'youtube', url: 'https://www.youtube.com/watch?v=3sm2KzawWWw' },
      { label: 'Music creation 04', type: 'youtube', url: 'https://www.youtube.com/watch?v=X7KJSslUUw8' },
    ],
  },
  'interactive media': {
    completed: [
      { label: 'Assignment 1 playable link', type: 'external', url: 'https://brandonsun05.github.io/assignment1/' },
      { label: 'Assignment 2 playable link', type: 'external', url: 'https://brandonsun05.github.io/assignment2/' },
      { label: 'Assignment 3 playable link', type: 'external', url: 'https://brandonsun05.github.io/assignment3/' },
    ],
    prototypes: [
      { label: 'Assignment 1 video', type: 'youtube', url: 'https://www.youtube.com/watch?v=YWGCXCguM1Y' },
      { label: 'Assignment 2 video', type: 'youtube', url: 'https://www.youtube.com/watch?v=yFQ7vyJk_zk' },
      { label: 'Assignment 3 video', type: 'youtube', url: 'https://www.youtube.com/watch?v=cz4ABUJZiAc' },
    ],
  },
  'MCG AR Application': {
    completed: [{ label: 'MCG AR application video', type: 'youtube', url: 'https://www.youtube.com/watch?v=ocn6m2KfHjw' }],
  },
  PAVA: {
    completed: [{ label: 'PAVA video', type: 'youtube', url: 'https://www.youtube.com/watch?v=8Gk0Nplkf4w' }],
  },
  CashSwipe: {
    completed: [{ label: 'CashSwipe video', type: 'youtube', url: 'https://www.youtube.com/watch?v=fllhBb0dISg' }],
  },
  Stones: {
    completed: [{ label: 'Stones video', type: 'youtube', url: 'https://www.youtube.com/watch?v=WgcYBNQ_qiU' }],
    prototypes: [{ label: 'Stones iteration', type: 'youtube', url: 'https://www.youtube.com/watch?v=STn6x4qry_s' }],
  },
  Moon: {
    completed: [{ label: 'Moon final video', type: 'youtube', url: 'https://www.youtube.com/watch?v=F4k2-3qYNiM' }],
    prototypes: [
      { label: 'Moon iteration 01', type: 'youtube', url: 'https://www.youtube.com/watch?v=Lz0pQc11n3M' },
      { label: 'Moon iteration 02', type: 'youtube', url: 'https://www.youtube.com/watch?v=859vMRUP7DA' },
      { label: 'Moon iteration 03', type: 'youtube', url: 'https://www.youtube.com/watch?v=1Om-gS4DJz0' },
      { label: 'Moon iteration 04', type: 'youtube', url: 'https://www.youtube.com/watch?v=Oi2hLlkGaH8' },
    ],
  },
  'Flagstaff Magic': {
    completed: [{ label: 'Flagstaff Magic final', type: 'youtube', url: 'https://www.youtube.com/watch?v=DS73ME7Z-7E' }],
    prototypes: [
      { label: 'Flagstaff Magic iteration 01', type: 'youtube', url: 'https://www.youtube.com/watch?v=a0C8VaK-lks' },
      { label: 'Flagstaff Magic iteration 02', type: 'youtube', url: 'https://www.youtube.com/watch?v=l6cVz8eOt4Y' },
    ],
  },
  APPLECORE: {
    completed: [{ label: 'APPLECORE video', type: 'youtube', url: 'https://www.youtube.com/watch?v=l6cVz8eOt4Y' }],
  },
  'Algorithms of Disrespect': {
    completed: [{ label: 'Algorithms of Disrespect final', type: 'youtube', url: 'https://www.youtube.com/watch?v=6K8LBn14CIs' }],
    prototypes: [
      { label: 'Algorithms of Disrespect iteration 01', type: 'youtube', url: 'https://www.youtube.com/watch?v=8xhMKO8em3s' },
      { label: 'Algorithms of Disrespect iteration 02', type: 'youtube', url: 'https://www.youtube.com/watch?v=u2lSTTy6QCM' },
    ],
  },
};

const getYoutubeEmbedUrl = (url) => {
  const match = url.match(/[?&]v=([^&]+)/) ?? url.match(/youtu\.be\/([^?&]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

function WorkAssetCard({ item }) {
  const isEmbeddable = item.type === 'youtube' || item.type === 'sketchfab';
  return (
    <article className="work-asset-card">
      <div className="work-asset-frame">
        {isEmbeddable ? (
          <iframe
            title={item.label}
            src={item.type === 'youtube' ? getYoutubeEmbedUrl(item.url) : item.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; xr-spatial-tracking"
            allowFullScreen
          />
        ) : (
          <a href={item.url} target="_blank" rel="noreferrer">
            Open link
          </a>
        )}
      </div>
      <div className="work-asset-meta">
        <span>{item.type}</span>
        <h3>{item.label}</h3>
        <a href={item.url} target="_blank" rel="noreferrer">
          Open original
        </a>
      </div>
    </article>
  );
}

const strengths = [
  {
    icon: Layers3,
    title: 'Cross-Media Thinking',
    text: 'I connect motion, interface, sound, and spatial design into coherent digital experiences.',
  },
  {
    icon: Code2,
    title: 'Interactive Prototyping',
    text: 'Comfortable using front-end code to test behavior, rhythm, and interaction before a concept becomes fixed.',
  },
  {
    icon: PenTool,
    title: 'Visual Direction',
    text: 'Bold composition, active color, and strong layout decisions that keep digital work memorable.',
  },
  {
    icon: MousePointer2,
    title: 'User-Focused Detail',
    text: 'I tune responsive layouts, readable hierarchy, and small interaction cues so the work feels easy to enter.',
  },
];

const skills = [
  'Figma',
  'Premiere Pro',
  'InDesign',
  'Blender',
  'Maya',
  'Illustrator',
  'Procreate',
  'After Effects',
  'Photography',
  'Reaper',
  'Unity',
];

function GravitySkills({ variant = 'default' }) {
  const stageRef = useRef(null);
  const chipRefs = useRef([]);
  const bodiesRef = useRef([]);
  const directDragRef = useRef(null);
  const [simulationKey, setSimulationKey] = useState(0);

  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setSimulationKey((key) => key + 1);
      }, 180);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const chips = chipRefs.current.filter(Boolean);
    if (!stage || chips.length === 0) return undefined;

    const rect = stage.getBoundingClientRect();
    const wallThickness = 80;
    const engine = Matter.Engine.create({
      enableSleeping: false,
      gravity: { x: 0, y: 1.12 },
    });

    const floorY = rect.height - 8;
    const walls = [
      Matter.Bodies.rectangle(rect.width / 2, floorY + wallThickness / 2, rect.width, wallThickness, {
        isStatic: true,
      }),
      Matter.Bodies.rectangle(rect.width / 2, -wallThickness / 2, rect.width, wallThickness, { isStatic: true }),
      Matter.Bodies.rectangle(-wallThickness / 2, rect.height / 2, wallThickness, rect.height, { isStatic: true }),
      Matter.Bodies.rectangle(rect.width + wallThickness / 2, rect.height / 2, wallThickness, rect.height, {
        isStatic: true,
      }),
    ];

    const bodies = chips.map((chip, index) => {
      const chipRect = chip.getBoundingClientRect();
      const x = 64 + ((index * 151) % Math.max(180, rect.width - chipRect.width - 128));
      const y = Math.max(4, floorY - chipRect.height - 10 - (index % 3) * 10);
      const body = Matter.Bodies.rectangle(x + chipRect.width / 2, y + chipRect.height / 2, chipRect.width, chipRect.height, {
        chamfer: { radius: chipRect.height / 2 },
        friction: 0.12,
        frictionAir: 0.012,
        restitution: 0.42,
        density: 0.001,
      });

      Matter.Body.setAngle(body, ((index % 5) * 4 - 8) * (Math.PI / 180));
      Matter.Body.setVelocity(body, { x: ((index % 2) ? -1 : 1) * (1.8 + index * 0.1), y: 0 });
      chip.style.visibility = 'visible';
      return body;
    });
    bodiesRef.current = bodies;

    Matter.Composite.add(engine.world, [...walls, ...bodies]);

    const handleMouseLeave = () => {
      if (directDragRef.current) return;
      directDragRef.current = null;
      bodiesRef.current.forEach((body) => {
        body.plugin.isDragging = false;
      });
    };
    stage.addEventListener('mouseleave', handleMouseLeave);

    let animationFrame;
    const update = () => {
      Matter.Engine.update(engine, 1000 / 60);
      bodies.forEach((body, index) => {
        const chip = chips[index];
        if (!chip) return;
        const chipRect = chip.getBoundingClientRect();
        const halfWidth = chipRect.width / 2;
        const halfHeight = chipRect.height / 2;
        const clampedX = Math.min(Math.max(body.position.x, halfWidth), rect.width - halfWidth);
        const clampedY = Math.min(Math.max(body.position.y, halfHeight), rect.height - halfHeight);
        if (clampedX !== body.position.x || clampedY !== body.position.y) {
          Matter.Body.setPosition(body, { x: clampedX, y: clampedY });
          Matter.Body.setVelocity(body, {
            x: Math.min(Math.max(body.velocity.x * -0.35, -8), 8),
            y: Math.min(Math.max(body.velocity.y * -0.35, -8), 8),
          });
        }
        chip.classList.toggle('is-dragging', Boolean(body.plugin.isDragging));
        chip.style.transform = `translate3d(${body.position.x}px, ${body.position.y}px, 0) translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      animationFrame = requestAnimationFrame(update);
    };

    update();

    return () => {
      const drag = directDragRef.current;
      if (drag?.target?.hasPointerCapture?.(drag.pointerId)) {
        drag.target.releasePointerCapture(drag.pointerId);
      }
      directDragRef.current = null;
      document.removeEventListener('pointermove', handleStagePointerMove, true);
      document.removeEventListener('pointerup', handleStagePointerEnd, true);
      document.removeEventListener('pointercancel', handleStagePointerEnd, true);
      bodiesRef.current = [];
      cancelAnimationFrame(animationFrame);
      stage.removeEventListener('mouseleave', handleMouseLeave);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [simulationKey]);

  const getStagePoint = (event) => {
    const stage = stageRef.current;
    if (!stage) return null;
    const rect = stage.getBoundingClientRect();
    const rawX = event.clientX - rect.left;
    const rawY = event.clientY - rect.top;
    return {
      x: Math.min(Math.max(0, rawX), rect.width),
      y: Math.min(Math.max(0, rawY), rect.height),
    };
  };

  const handleChipPointerDown = (event, index) => {
    const point = getStagePoint(event);
    const body = bodiesRef.current[index];
    if (!point || !body) return;

    directDragRef.current = {
      index,
      lastX: point.x,
      lastY: point.y,
      pointerId: event.pointerId,
      target: event.currentTarget,
    };
    body.plugin.isDragging = true;
    Matter.Body.setAngularVelocity(body, 0);
    Matter.Body.setVelocity(body, { x: 0, y: 0 });
    Matter.Body.setPosition(body, point);
    document.addEventListener('pointermove', handleStagePointerMove, true);
    document.addEventListener('pointerup', handleStagePointerEnd, true);
    document.addEventListener('pointercancel', handleStagePointerEnd, true);
    if (event.currentTarget.setPointerCapture) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handleStagePointerMove = (event) => {
    const drag = directDragRef.current;
    if (drag && event.pointerId !== drag.pointerId) return;
    const point = getStagePoint(event);
    if (!drag || !point) return;
    if (event.cancelable) event.preventDefault();

    const body = bodiesRef.current[drag.index];
    if (!body) return;

    const velocity = {
      x: Math.min(Math.max((point.x - drag.lastX) * 0.42, -18), 18),
      y: Math.min(Math.max((point.y - drag.lastY) * 0.42, -18), 18),
    };

    Matter.Body.setPosition(body, point);
    Matter.Body.setVelocity(body, velocity);
    Matter.Body.setAngularVelocity(body, velocity.x * 0.012);
    drag.lastX = point.x;
    drag.lastY = point.y;
  };

  const handleStagePointerEnd = () => {
    const drag = directDragRef.current;
    if (drag && bodiesRef.current[drag.index]) {
      bodiesRef.current[drag.index].plugin.isDragging = false;
    }
    if (drag?.target?.hasPointerCapture?.(drag.pointerId)) {
      drag.target.releasePointerCapture(drag.pointerId);
    }
    directDragRef.current = null;
    document.removeEventListener('pointermove', handleStagePointerMove, true);
    document.removeEventListener('pointerup', handleStagePointerEnd, true);
    document.removeEventListener('pointercancel', handleStagePointerEnd, true);
  };

  return (
    <section className={`skill-playground skill-playground-${variant}`} aria-label="Interactive skill playground">
      <div className="playground-topline">
        <span>Digital Media Toolkit</span>
        <span>Drag the skills</span>
      </div>
      <div
        key={simulationKey}
        className="skill-stage"
        ref={stageRef}
        onPointerMove={handleStagePointerMove}
        onPointerUp={handleStagePointerEnd}
        onPointerCancel={handleStagePointerEnd}
      >
        {skills.map((skill, index) => (
          <button
            className={`skill-chip skill-chip-${index % 4}`}
            key={skill}
            ref={(element) => {
              chipRefs.current[index] = element;
            }}
            onPointerDown={(event) => handleChipPointerDown(event, index)}
            onPointerMove={handleStagePointerMove}
            onPointerUp={handleStagePointerEnd}
            onPointerCancel={handleStagePointerEnd}
            type="button"
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState(null);

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') return websiteWorks;
    return websiteWorks.filter((work) => work.category === activeCategory);
  }, [activeCategory]);

  const selectedWorkDetail = selectedWork ? getWorkDetail(selectedWork) : null;
  const selectedCustomDetail = selectedWork ? customWorkDetails[selectedWork.title] : null;
  const selectedAssets = selectedWork ? notionWorkAssets[selectedWork.title] : null;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedWork(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedWork(null);
  };

  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = event.clientX / rect.width - 0.5;
    const normalizedY = event.clientY / rect.height - 0.5;
    event.currentTarget.style.setProperty('--grid-x', `${normalizedX * 32}px`);
    event.currentTarget.style.setProperty('--grid-y', `${normalizedY * 24}px`);
    event.currentTarget.style.setProperty('--grid-bg-x', `${normalizedX * -18}px`);
    event.currentTarget.style.setProperty('--grid-bg-y', `${normalizedY * -14}px`);
  };

  return (
    <>
      <header className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Brandon Sun home">
          <span>Brandon</span>
          <span>Sun</span>
        </a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#strengths">Strengths</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="contact-pill" href="mailto:brandonsun419@gmail.com">
          <Mail size={18} aria-hidden="true" />
          Contact
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <section className="hero-statement" aria-label="Folio introduction" onPointerMove={handleHeroPointerMove}>
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-poster.svg"
              aria-hidden="true"
            >
              <source src="https://cdn.pixabay.com/video/2020/03/23/34088-399409289_large.mp4" type="video/mp4" />
            </video>
            <div className="hero-scrim" />
            <div className="hero-orbit" aria-hidden="true" />
            <div className="hero-art-stack" aria-hidden="true">
              <img className="hero-art hero-art-main" src="/art/digital-sunflower.jpg" alt="" />
              <img className="hero-art hero-art-side" src="/art/ding-city.jpg" alt="" />
              <img className="hero-art hero-art-float" src="/art/musical-planet.jpg" alt="" />
              <img className="hero-butterflies" src="/art/butterflies.png" alt="" />
            </div>
            <GravitySkills variant="hero" />
            <div className="container hero-content">
              <p className="eyebrow">
                <Sparkles size={18} aria-hidden="true" />
                Digital Media Designer
              </p>
              <h1>Brandon Sun&apos;s Designer Folio.</h1>
              <div className="hero-bottom" />
            </div>
          </section>
        </section>

        <section className="showreel-section" aria-label="Showreel">
          <div className="container showreel-layout">
            <div className="showreel-copy">
              <p className="eyebrow">Showreel</p>
              <h2>Motion, media, and digital worlds in sequence.</h2>
            </div>
            <div className="showreel-frame">
              <iframe
                title="Brandon Sun showreel"
                src="https://www.youtube.com/embed/QqcwqeBUzH0?si=HkfWhkGaH55YBSft"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="work-section section-pad">
          <div className="container">
            <div id="work" className="work-browser">
              <div className="work-sidebar" aria-label="Filter work by category">
                {websiteCategories.map((category) => (
                  <button
                    key={category.id}
                    className={activeCategory === category.id ? 'active' : ''}
                    type="button"
                    onMouseEnter={() => handleCategoryChange(category.id)}
                    onFocus={() => handleCategoryChange(category.id)}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              <div className="work-panel" key={activeCategory}>
                <div className="work-grid">
                  {filteredWorks.map((work) => (
                    <button className="work-card" key={work.title} type="button" onClick={() => setSelectedWork(work)}>
                      <img src={work.image} alt={`${work.title} visual preview`} />
                      <div className="work-meta">
                        <div className="work-title-row">
                          <h3>{work.title}</h3>
                          <span>{work.year}</span>
                        </div>
                        <p className="work-category">{work.category}</p>
                        <p className="work-description">{work.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {selectedWork && (
          <div className="work-detail-overlay" role="dialog" aria-modal="true" aria-labelledby="work-detail-title">
            <button
              className="work-detail-backdrop"
              type="button"
              aria-label="Close work detail"
              onClick={() => setSelectedWork(null)}
            />
            <article className="work-detail-panel">
              <button className="work-detail-close" type="button" onClick={() => setSelectedWork(null)}>
                Close
              </button>
              <img src={selectedWork.image} alt={`${selectedWork.title} detail preview`} />
              <div className="work-detail-content">
                <div className="work-detail-intro">
                  <p className="eyebrow">{selectedWork.category}</p>
                  <h2 id="work-detail-title">{selectedWork.title}</h2>
                  <p>{selectedCustomDetail?.intro ?? selectedWork.description}</p>
                </div>
                {selectedAssets?.completed?.length > 0 && (
                  <section className="work-assets-section work-assets-completed">
                    <div className="work-assets-heading">
                      <span>Completed Work</span>
                      <h3>Open the final piece</h3>
                    </div>
                    <div className="work-assets-grid">
                      {selectedAssets.completed.map((item) => (
                        <WorkAssetCard item={item} key={`${item.label}-${item.url}`} />
                      ))}
                    </div>
                  </section>
                )}
                {selectedAssets?.prototypes?.length > 0 && (
                  <section className="work-assets-section">
                    <div className="work-assets-heading">
                      <span>Prototype / Iteration</span>
                      <h3>Process links</h3>
                    </div>
                    <div className="work-assets-grid work-assets-grid-pairs">
                      {selectedAssets.prototypes.map((item) => (
                        <WorkAssetCard item={item} key={`${item.label}-${item.url}`} />
                      ))}
                    </div>
                  </section>
                )}
                <div className="work-detail-facts">
                  <div>
                    <span>Year</span>
                    <strong>{selectedWork.year}</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>{selectedCustomDetail?.focus ?? selectedWorkDetail.focus}</strong>
                  </div>
                  <div>
                    <span>Role</span>
                    <strong>{selectedCustomDetail?.role ?? selectedWorkDetail.role}</strong>
                  </div>
                  <div>
                    <span>Tools</span>
                    <strong>{selectedCustomDetail?.tools ?? selectedWorkDetail.tools}</strong>
                  </div>
                </div>
                {selectedCustomDetail ? (
                  <div className="work-case-study">
                    {selectedCustomDetail.sections.map((section) => (
                      <section className="work-case-section" key={section.title}>
                        <div className="work-case-text">
                          <span>{section.kicker}</span>
                          <h3>{section.title}</h3>
                          <p>{section.text}</p>
                        </div>
                        <div className="work-case-images">
                          {section.images.map((item, index) => (
                            <img key={item} src={item} alt={`${selectedWork.title} ${section.kicker} ${index + 1}`} />
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                ) : selectedWork.contentImages?.length > 0 ? (
                  <div className="work-detail-gallery" aria-label={`${selectedWork.title} project images`}>
                    {selectedWork.contentImages.map((item, index) => {
                      const isVideo = /\.(mp4|mov)$/i.test(item);
                      return isVideo ? (
                        <video key={item} src={item} controls muted playsInline />
                      ) : (
                        <img key={item} src={item} alt={`${selectedWork.title} project image ${index + 1}`} />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </article>
          </div>
        )}

        <section id="strengths" className="strengths-section section-pad">
          <div className="container strengths-layout">
            <div className="section-heading sticky-heading">
              <p className="eyebrow">Personal edge</p>
              <h2>Multidisciplinary skills, tuned for digital media.</h2>
              <p className="section-copy">
                My practice blends creative direction with hands-on production. I like making ideas testable,
                visual, and alive early in the process.
              </p>
            </div>
            <div className="strength-grid">
              {strengths.map(({ icon: Icon, title, text }) => (
                <article className="strength-card" key={title}>
                  <div className="icon-box">
                    <Icon size={28} aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Let us build something active</p>
              <h2>Available for digital media, UI, motion, and interactive design collaborations.</h2>
            </div>
            <div className="contact-panel">
              <a href="mailto:brandonsun419@gmail.com">
                <Mail size={22} aria-hidden="true" />
                brandonsun419@gmail.com
              </a>
              <a href="tel:+61493769998">
                <Video size={22} aria-hidden="true" />
                0493 769 998
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <Linkedin size={22} aria-hidden="true" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/brandon_made/" target="_blank" rel="noreferrer">
                <Film size={22} aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>
          <div className="footer-marquee" aria-hidden="true">
            <span>UI/UX</span>
            <Box size={28} />
            <span>3D</span>
            <Music2 size={28} />
            <span>Motion</span>
            <Code2 size={28} />
            <span>Interactive</span>
          </div>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
