export const projects = [
  {
    title: 'Chess AI',
    description:
      'Desktop chess application developed in Python without using an external chess library, focused on custom game logic and AI decision-making.',
    tags: ['Python', 'Pygame', 'Minimax', 'Alpha-Beta Pruning', 'Algorithms'],
    githubUrl: 'https://github.com/grishkosofi/chess',
    demoUrl: '',
    status: '',
    highlights: [
      'Playable human vs AI chess with complete custom rule implementation',
      'Move generation and validation for legal gameplay',
      'Minimax search with Alpha-Beta Pruning for stronger and faster AI decisions',
      'Board evaluation system with Pygame-based interactive interface',
    ],
  },
  {
    title: 'Tradix',
    description:
      'Market-tracking web application with a frontend dashboard and backend API layer for stock data, search, and portfolio insights.',
    tags: ['JavaScript', 'Node.js', 'Express', 'HTML', 'Bootstrap'],
    githubUrl: 'https://github.com/grishkosofi/TRADE',
    demoUrl: '',
    status: '',
    highlights: [
      'Frontend dashboard with watchlist, market, portfolio, and profile views',
      'Backend API endpoints for health checks, stock data, history, news, and search',
      'Environment-based API key handling so secrets stay on the backend',
      'Basic in-memory caching to reduce repeated external API calls',
    ],
  },
  {
    title: 'Interactive Control Panel',
    description:
      'Interactive browser-based control panel that simulates a microwave-style interface with configurable modes, settings, and countdown behavior.',
    tags: ['JavaScript', 'HTML', 'CSS', 'UI Prototyping'],
    githubUrl: 'https://github.com/grishkosofi/GUI',
    demoUrl: '',
    status: '',
    highlights: [
      'Clickable buttons and rotatable knobs for mode and setting changes',
      'Display updates that reflect the current control state',
      'Countdown-based cooking simulation behavior',
      'Custom icon-based control panel layout styled for a hardware-inspired UI',
    ],
  },
  {
    title: 'PetLink',
    description:
      'Multi-page pet care prototype for managing pet profiles, daily care flows, memories, appointments, and health records in the browser.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    githubUrl: 'https://github.com/grishkosofi/PetLink',
    demoUrl: '',
    status: '',
    highlights: [
      'Covers onboarding, pet creation, profiles, care reminders, memories, and appointments',
      'Persists demo user and pet data in localStorage across pages',
      'Includes page-specific navigation and workflow handling in a shared frontend script',
      'Designed around a friendly pet-product user experience',
    ],
  },
]

export const projectsSection = {
  title: 'Projects',
  subtitle:
    'Selected software engineering projects with a focus on practical implementation, architecture and algorithmic thinking.',
  githubProfile: 'https://github.com/grishkosofi',
}
