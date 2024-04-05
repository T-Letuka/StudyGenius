const quiz = [
  {
    question:
      "When studying for multiple courses, how do you prefer to organize your notes and study materials?",
    options: [
      {
        text: "Create visual mind maps or diagrams to connect concepts and ideas.",
        value: "visual",
      },
      {
        text: "Record lectures or discussions to listen to later for auditory reinforcement.",
        value: "auditory",
      },
      {
        text: "Compile detailed written notes and summaries to review.",
        value: "reading",
      },
      {
        text: "Engage in hands-on activities or practical exercises to understand concepts.",
        value: "kinesthetic",
      },
      {
        text: "Form study groups or engage in collaborative learning environments.",
        value: "social",
      },
    ],
  },
  {
    question:
      "How do you prefer to review course content when preparing for exams?",
    options: [
      {
        text: "Utilize flashcards, charts, or graphs to visually review key information.",
        value: "visual",
      },
      {
        text: "Listen to recorded lectures or discussions while reviewing other materials.",
        value: "auditory",
      },
      {
        text: " Re-read textbooks or written notes to reinforce understanding.",
        value: "reading",
      },
      {
        text: "Actively participate in practice exams or hands-on simulations.",
        value: "kinesthetic",
      },
      {
        text: "Discuss and teach concepts to peers or study partners in group settings.",
        value: "social",
      },
    ],
  },
  {
    question:
      "When it comes to learning new concepts, what method resonates with you the most?",
    options: [
      {
        text: "Watching videos or animations that demonstrate the concept visually.",
        value: "visual",
      },
      {
        text: "Listening to recorded lectures or discussions",
        value: "auditory",
      },
      {
        text: "Participating in group discussions or listening to lectures.",
        value: "reading",
      },
      {
        text: "Engaging in hands-on activities or experiments to experience the concept.",
        value: "kinesthetic",
      },
      {
        text: " Collaborating with others through discussions or online forums to grasp the concept socially.",
        value: "social",
      },
    ],
  },

  {
    question: "How do you prefer to study for exams?",
    options: [
      { text: "Using diagrams and charts", value: "visual" },
      {
        text: "Listening to recorded lectures or discussions",
        value: "auditory",
      },
      { text: "Reading and summarizing textbooks", value: "reading" },
      {
        text: "Practicing hands-on activities or experiments",
        value: "kinesthetic",
      },
      { text: "Studying in groups or with a study buddy", value: "social" },
    ],
  },
  {
    question: "How do you prefer to prepare for a presentation or speech?",
    options: [
      {
        text: "Creating visually appealing slides or presentations",
        value: "visual",
      },
      {
        text: "Practicing speaking aloud and refining delivery",
        value: "auditory",
      },
      {
        text: "Writing out the entire speech and rehearsing it multiple times",
        value: "reading",
      },
      {
        text: "Using props or interactive elements during the presentation",
        value: "kinesthetic",
      },
      {
        text: " Collaborating with peers or seeking feedback from others",
        value: "social",
      },
    ],
  },
  {
    question:
      "What type of learning environment do you find most conducive to your learning style?",
    options: [
      {
        text: "Visual-rich environments with posters and displays",
        value: "visual",
      },
      {
        text: " Discussions and group activities",
        value: "auditory",
      },
      {
        text: "Quiet spaces for reading and studying independently",
        value: "reading",
      },
      {
        text: "Hands-on workshops or laboratories",
        value: "kinesthetic",
      },
      {
        text: "Social settings with opportunities for interaction and collaboration",
        value: "social",
      },
    ],
  },
  {
    question: "How do you prefer to organize your study materials?",
    options: [
      {
        text: "Using color-coded notes, diagrams, and highlighters",
        value: "visual",
      },
      {
        text: "Recording lectures or discussions to listen to later",
        value: "auditory",
      },
      {
        text: " Creating outlines or written summaries of key points",
        value: "reading",
      },
      {
        text: "Using flashcards or interactive study tools",
        value: "kinesthetic",
      },
      {
        text: "Sharing notes and collaborating with classmates",
        value: "social",
      },
    ],
  },
  {
    question: "How do you prefer to receive feedback on your work?",
    options: [
      {
        text: "Visual feedback such as annotated diagrams or charts",
        value: "visual",
      },
      {
        text: "Verbal feedback through discussions or one-on-one meetings",
        value: "auditory",
      },
      {
        text: "Written feedback with detailed comments or suggestions",
        value: "reading",
      },
      {
        text: " Hands-on demonstrations or examples",
        value: "kinesthetic",
      },
      { text: "Feedback from peers or group evaluations", value: "social" },
    ],
  },
  {
    question: "How do you prefer to study for exams?",
    options: [
      { text: "Using diagrams and charts", value: "visual" },
      {
        text: "Listening to recorded lectures or discussions",
        value: "auditory",
      },
      { text: "Reading and summarizing textbooks", value: "reading" },
      {
        text: "Practicing hands-on activities or experiments",
        value: "kinesthetic",
      },
      { text: "Studying in groups or with a study buddy", value: "social" },
    ],
  },
  {
    question: "What type of educational videos do you find most engaging?",
    options: [
      { text: "Those with lots of animations and graphics", value: "visual" },
      {
        text: "Lectures or talks given by knowledgeable speakers",
        value: "auditory",
      },
      {
        text: "Tutorials or instructional videos with clear explanations",
        value: "reading",
      },
      {
        text: "Demonstrations or practical applications of concepts",
        value: "kinesthetic",
      },
      {
        text: "Collaborative videos featuring group discussions or debates",
        value: "social",
      },
    ],
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      {
        text: "Visualizing different solutions or drawing diagrams",
        value: "visual",
      },
      {
        text: "Talking through the problem with someone else",
        value: "auditory",
      },
      {
        text: "Reading through similar problems and their solutions",
        value: "reading",
      },
      {
        text: " Trying different approaches or experimenting",
        value: "kinesthetic",
      },
      { text: "Brainstorming ideas with a group", value: "social" },
    ],
  },
  {
    question:
      "When memorizing information, what technique do you find most helpful?",
    options: [
      {
        text: "Creating colorful mind maps or visual associations",
        value: "visual",
      },
      {
        text: "Reciting information aloud or listening to recordings",
        value: "auditory",
      },
      { text: " Re-reading and writing down key points", value: "reading" },
      {
        text: "Acting out scenarios or physically manipulating objects",
        value: "kinesthetic",
      },
      {
        text: "Discussing with classmates or teaching others",
        value: "social",
      },
    ],
  },
  {
    question: "How do you prefer to understand complex concepts?",
    options: [
      { text: "Through visual diagrams or infographics", value: "visual" },
      {
        text: "By listening to explanations or lectures",
        value: "auditory",
      },
      {
        text: " Reading detailed explanations or textbooks",
        value: "reading",
      },
      {
        text: "By engaging in hands-on experiments or demonstrations",
        value: "kinesthetic",
      },
      { text: "Discussing with peers or teaching others", value: "social" },
    ],
  },
  {
    question:
      "When learning a new language, what method would you find most effective?",
    options: [
      { text: "Flashcards with pictures and symbols", value: "visual" },
      {
        text: "Listening to native speakers and repeating phrases",
        value: "auditory",
      },
      {
        text: "Reading grammar rules and vocabulary lists",
        value: "reading",
      },
      {
        text: "Engaging in conversations or language immersion experiences",
        value: "kinesthetic",
      },
      {
        text: "Joining language exchange clubs or conversation groups",
        value: "social",
      },
    ],
  },
];

export default quiz;
