import { QuizSet } from './enhancedQuizStructure';

// Computer Graphics - Easy Set 1
export const computerGraphicsEasySet1: QuizSet = {
  id: 'graphics-easy-1',
  setNumber: 1,
  title: 'Computer Graphics Fundamentals - Set 1',
  subject: 'Computer Graphics',
  difficulty: 'EASY',
  totalTimeLimit: 30,
  questions: [
    {
      id: 'graphics-e1-1',
      question: 'What is computer graphics?',
      options: ['Computer drawings', 'The creation and manipulation of visual content using computers', 'Computer art', 'Digital images'],
      correctAnswer: 1,
      explanation: 'Computer graphics is the field of creating, manipulating, and displaying visual content using computers and specialized software.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-2',
      question: 'What is a pixel?',
      options: ['A small picture', 'The smallest unit of a digital image', 'A graphics tool', 'A color dot'],
      correctAnswer: 1,
      explanation: 'A pixel (picture element) is the smallest controllable element of a digital image or display, typically represented as a colored dot.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-3',
      question: 'What is resolution in computer graphics?',
      options: ['Problem solving', 'The number of pixels in an image or display', 'Image quality', 'Screen size'],
      correctAnswer: 1,
      explanation: 'Resolution refers to the number of pixels in an image or display, typically expressed as width × height (e.g., 1920×1080).',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-4',
      question: 'What are the primary colors in RGB?',
      options: ['Red, Green, Blue', 'Red, Yellow, Blue', 'Red, Green, Black', 'Rainbow, Green, Blue'],
      correctAnswer: 0,
      explanation: 'RGB stands for Red, Green, and Blue - the three primary colors of light used in digital displays and computer graphics.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-5',
      question: 'What is 2D graphics?',
      options: ['Two-dimensional graphics', 'Graphics with width and height only', 'Flat graphics', 'Simple graphics'],
      correctAnswer: 1,
      explanation: '2D graphics are images that have only two dimensions: width and height, without depth or volume.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-6',
      question: 'What is 3D graphics?',
      options: ['Three-dimensional graphics', 'Graphics with width, height, and depth', 'Realistic graphics', 'Advanced graphics'],
      correctAnswer: 1,
      explanation: '3D graphics are images that have three dimensions: width, height, and depth, creating the illusion of volume and space.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-7',
      question: 'What is a vector graphic?',
      options: ['A directional graphic', 'Graphics defined by mathematical equations and geometric shapes', 'A moving graphic', 'A line graphic'],
      correctAnswer: 1,
      explanation: 'Vector graphics are defined by mathematical equations and geometric shapes, making them scalable without loss of quality.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-8',
      question: 'What is a raster graphic?',
      options: ['A grid graphic', 'Graphics made up of individual pixels in a grid', 'A pattern graphic', 'A textured graphic'],
      correctAnswer: 1,
      explanation: 'Raster graphics (bitmap images) are made up of individual pixels arranged in a rectangular grid, like photographs.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-9',
      question: 'What is rendering?',
      options: ['Giving back', 'The process of generating an image from a 3D model', 'Image creation', 'Graphics processing'],
      correctAnswer: 1,
      explanation: 'Rendering is the process of generating a 2D image from a 3D model using computer algorithms and lighting calculations.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-10',
      question: 'What is animation?',
      options: ['Making things alive', 'Creating the illusion of movement through sequential images', 'Moving pictures', 'Dynamic graphics'],
      correctAnswer: 1,
      explanation: 'Animation creates the illusion of movement by displaying a sequence of images (frames) in rapid succession.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-11',
      question: 'What is a frame rate?',
      options: ['Picture frame speed', 'The number of images displayed per second in animation', 'Animation speed', 'Video quality'],
      correctAnswer: 1,
      explanation: 'Frame rate is the number of individual images (frames) displayed per second in animation or video, measured in FPS (frames per second).',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-12',
      question: 'What is a polygon in 3D graphics?',
      options: ['A many-sided shape', 'A flat surface with multiple sides used to build 3D models', 'A geometric figure', 'A 3D shape'],
      correctAnswer: 1,
      explanation: 'A polygon is a flat surface with multiple sides (usually triangles or quadrilaterals) used as building blocks for 3D models.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-13',
      question: 'What is texture in computer graphics?',
      options: ['Surface feel', 'A 2D image applied to 3D surfaces to add detail', 'Material property', 'Surface pattern'],
      correctAnswer: 1,
      explanation: 'Texture is a 2D image that is applied to the surface of 3D objects to add visual detail, color, and realism.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-14',
      question: 'What is lighting in 3D graphics?',
      options: ['Illumination', 'Simulating how light interacts with 3D objects', 'Brightness control', 'Scene illumination'],
      correctAnswer: 1,
      explanation: 'Lighting in 3D graphics simulates how light sources interact with objects to create realistic shadows, highlights, and depth.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-15',
      question: 'What is a camera in 3D graphics?',
      options: ['A recording device', 'A virtual viewpoint that determines what is visible in the scene', 'An observation tool', 'A perspective controller'],
      correctAnswer: 1,
      explanation: 'A camera in 3D graphics is a virtual viewpoint that determines the perspective and what portion of the 3D scene is visible.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-16',
      question: 'What is a shader?',
      options: ['A shadow maker', 'A program that controls how surfaces are rendered', 'A coloring tool', 'A lighting effect'],
      correctAnswer: 1,
      explanation: 'A shader is a computer program that controls how the surface of 3D objects is rendered, including color, lighting, and effects.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-17',
      question: 'What is anti-aliasing?',
      options: ['Against aliases', 'A technique to reduce jagged edges in digital images', 'Smoothing technique', 'Edge improvement'],
      correctAnswer: 1,
      explanation: 'Anti-aliasing is a technique used to reduce jagged edges (aliasing) in digital images by smoothing the transitions between colors.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-18',
      question: 'What is a graphics card?',
      options: ['A card with graphics', 'Specialized hardware for processing graphics and visual data', 'A display device', 'A graphics tool'],
      correctAnswer: 1,
      explanation: 'A graphics card (GPU) is specialized hardware designed to accelerate the processing of graphics and visual data.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-19',
      question: 'What is OpenGL?',
      options: ['Open Graphics Library', 'A cross-platform API for rendering 2D and 3D graphics', 'A graphics standard', 'A programming interface'],
      correctAnswer: 1,
      explanation: 'OpenGL (Open Graphics Library) is a cross-platform API that provides a standard interface for rendering 2D and 3D graphics.',
      timeLimit: 60
    },
    {
      id: 'graphics-e1-20',
      question: 'What is the main purpose of computer graphics?',
      options: ['Entertainment', 'Creating and displaying visual content for communication and interaction', 'Art creation', 'Image processing'],
      correctAnswer: 1,
      explanation: 'The main purpose of computer graphics is to create and display visual content that can communicate information, entertain, or enable interaction.',
      timeLimit: 60
    }
  ]
};

// Computer Graphics - Medium Set 1
export const computerGraphicsMediumSet1: QuizSet = {
  id: 'graphics-medium-1',
  setNumber: 1,
  title: 'Graphics Algorithms and Techniques - Set 1',
  subject: 'Computer Graphics',
  difficulty: 'MEDIUM',
  totalTimeLimit: 35,
  questions: [
    {
      id: 'graphics-m1-1',
      question: 'What is the Z-buffer algorithm?',
      options: [
        'A depth testing algorithm',
        'An algorithm for determining which surfaces are visible by comparing depth values',
        'A sorting algorithm',
        'A rendering technique'
      ],
      correctAnswer: 1,
      explanation: 'The Z-buffer algorithm determines which surfaces are visible by storing and comparing depth (Z) values for each pixel.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-2',
      question: 'What is ray tracing?',
      options: [
        'Tracing light rays',
        'A rendering technique that simulates light paths to create realistic images',
        'Following rays',
        'Light simulation'
      ],
      correctAnswer: 1,
      explanation: 'Ray tracing is a rendering technique that simulates the path of light rays to create highly realistic images with accurate reflections and shadows.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-3',
      question: 'What is rasterization?',
      options: [
        'Creating rasters',
        'Converting vector graphics into pixel-based images',
        'Grid creation',
        'Pixel generation'
      ],
      correctAnswer: 1,
      explanation: 'Rasterization is the process of converting vector graphics (geometric shapes) into pixel-based raster images for display.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-4',
      question: 'What is texture mapping?',
      options: [
        'Mapping textures',
        'Applying 2D images to 3D surfaces to add detail',
        'Surface decoration',
        'Image projection'
      ],
      correctAnswer: 1,
      explanation: 'Texture mapping is the technique of applying 2D images (textures) to 3D surfaces to add visual detail and realism.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-5',
      question: 'What is bump mapping?',
      options: [
        'Creating bumps',
        'A technique to simulate surface irregularities without changing geometry',
        'Surface modification',
        'Texture enhancement'
      ],
      correctAnswer: 1,
      explanation: 'Bump mapping simulates surface irregularities and details by modifying surface normals without actually changing the geometry.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-6',
      question: 'What is the graphics pipeline?',
      options: [
        'A graphics tube',
        'The sequence of stages that transform 3D models into 2D images',
        'A rendering process',
        'A graphics workflow'
      ],
      correctAnswer: 1,
      explanation: 'The graphics pipeline is the sequence of computational stages that transform 3D models and scenes into 2D images for display.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-7',
      question: 'What is clipping in computer graphics?',
      options: [
        'Cutting graphics',
        'Removing parts of objects that fall outside the viewing area',
        'Trimming images',
        'Boundary cutting'
      ],
      correctAnswer: 1,
      explanation: 'Clipping is the process of removing or cutting away parts of objects that fall outside the defined viewing area or boundaries.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-8',
      question: 'What is transformation in 3D graphics?',
      options: [
        'Changing shape',
        'Mathematical operations to move, rotate, or scale objects in 3D space',
        'Object modification',
        'Geometric changes'
      ],
      correctAnswer: 1,
      explanation: 'Transformation involves mathematical operations (translation, rotation, scaling) to manipulate the position, orientation, and size of 3D objects.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-9',
      question: 'What is a normal vector?',
      options: [
        'A regular vector',
        'A vector perpendicular to a surface used for lighting calculations',
        'A standard vector',
        'A surface vector'
      ],
      correctAnswer: 1,
      explanation: 'A normal vector is perpendicular to a surface and is used in lighting calculations to determine how light interacts with the surface.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-10',
      question: 'What is interpolation in computer graphics?',
      options: [
        'Data insertion',
        'Calculating intermediate values between known data points',
        'Value estimation',
        'Data smoothing'
      ],
      correctAnswer: 1,
      explanation: 'Interpolation calculates intermediate values between known data points, used for smooth color transitions and surface properties.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-11',
      question: 'What is Gouraud shading?',
      options: [
        'A person\'s shading method',
        'A shading technique that interpolates colors across polygon surfaces',
        'A lighting model',
        'A color blending method'
      ],
      correctAnswer: 1,
      explanation: 'Gouraud shading is a technique that interpolates colors across polygon surfaces to create smooth color transitions.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-12',
      question: 'What is Phong shading?',
      options: [
        'Another person\'s method',
        'A shading technique that interpolates surface normals for realistic lighting',
        'A reflection model',
        'A lighting calculation'
      ],
      correctAnswer: 1,
      explanation: 'Phong shading interpolates surface normals across polygons to achieve more realistic lighting and smoother surfaces.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-13',
      question: 'What is ambient lighting?',
      options: [
        'Environmental lighting',
        'Uniform background lighting that illuminates all surfaces equally',
        'Room lighting',
        'General illumination'
      ],
      correctAnswer: 1,
      explanation: 'Ambient lighting provides uniform background illumination that affects all surfaces equally, simulating indirect light.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-14',
      question: 'What is specular reflection?',
      options: [
        'Mirror-like reflection',
        'Reflection of light in a specific direction creating highlights',
        'Shiny reflection',
        'Direct reflection'
      ],
      correctAnswer: 1,
      explanation: 'Specular reflection occurs when light reflects off a surface in a specific direction, creating bright highlights on shiny objects.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-15',
      question: 'What is diffuse reflection?',
      options: [
        'Scattered reflection',
        'Reflection of light scattered in all directions from rough surfaces',
        'Soft reflection',
        'Distributed reflection'
      ],
      correctAnswer: 1,
      explanation: 'Diffuse reflection scatters light in all directions from rough surfaces, creating the basic color appearance of objects.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-16',
      question: 'What is level of detail (LOD)?',
      options: [
        'Detail level',
        'Using different complexity models based on viewing distance',
        'Quality setting',
        'Resolution control'
      ],
      correctAnswer: 1,
      explanation: 'Level of Detail (LOD) uses different complexity versions of 3D models based on viewing distance to optimize performance.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-17',
      question: 'What is culling in 3D graphics?',
      options: [
        'Removing objects',
        'Eliminating objects or surfaces that are not visible to improve performance',
        'Object filtering',
        'Visibility testing'
      ],
      correctAnswer: 1,
      explanation: 'Culling eliminates objects or surfaces that are not visible (back-facing, outside view frustum) to improve rendering performance.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-18',
      question: 'What is mipmapping?',
      options: [
        'Map creation',
        'Pre-calculated texture images at different resolutions for efficient rendering',
        'Texture scaling',
        'Image optimization'
      ],
      correctAnswer: 1,
      explanation: 'Mipmapping uses pre-calculated texture images at different resolutions to improve rendering quality and performance at various distances.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-19',
      question: 'What is alpha blending?',
      options: [
        'Letter mixing',
        'Combining colors based on transparency values to create translucent effects',
        'Color mixing',
        'Transparency control'
      ],
      correctAnswer: 1,
      explanation: 'Alpha blending combines colors based on alpha (transparency) values to create translucent and semi-transparent visual effects.',
      timeLimit: 90
    },
    {
      id: 'graphics-m1-20',
      question: 'What is tessellation?',
      options: [
        'Tile arrangement',
        'Subdividing surfaces into smaller polygons for increased detail',
        'Surface division',
        'Mesh refinement'
      ],
      correctAnswer: 1,
      explanation: 'Tessellation subdivides surfaces into smaller polygons to increase geometric detail and create smoother curved surfaces.',
      timeLimit: 90
    }
  ]
};

export const computerGraphicsEasySets: QuizSet[] = [computerGraphicsEasySet1];
export const computerGraphicsMediumSets: QuizSet[] = [computerGraphicsMediumSet1];
export const computerGraphicsHardSets: QuizSet[] = [];
