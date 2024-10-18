export type Blog = {
  id: string
  title: string
  summary: string
  content: string
  image: string
  category: string
  resourceType: string
  contentType: string
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "The Future of AI in Content Creation",
    summary: "Exploring how artificial intelligence is revolutionizing the way we create and consume content.",
    content: "Artificial Intelligence is rapidly changing the landscape of content creation. From automated writing assistants to AI-generated art, the possibilities are expanding every day. This article delves into the current state of AI in content creation and explores its potential future impacts on various industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "recent",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "2",
    title: "10 Tips for Effective Remote Work",
    summary: "Maximize your productivity and maintain work-life balance while working from home.",
    content: "Remote work has become the new normal for many. This article provides practical tips to help you stay productive, maintain a healthy work-life balance, and thrive in a remote work environment. From setting up an ergonomic home office to managing your time effectively, these tips will help you succeed in your remote work journey.",
    image: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f",
    category: "popular",
    resourceType: "pdf",
    contentType: "productivity"
  },
  {
    id: "3",
    title: "The Rise of Sustainable Fashion",
    summary: "How eco-friendly practices are reshaping the fashion industry.",
    content: "Sustainable fashion is more than just a trend; it's a movement that's changing the way we think about clothes. This article explores the innovative practices and materials being used to create eco-friendly fashion, and how consumers can make more sustainable choices in their wardrobes.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    category: "recent",
    resourceType: "website",
    contentType: "lifestyle"
  },
  {
    id: "4",
    title: "Blockchain Technology: Beyond Cryptocurrency",
    summary: "Exploring the diverse applications of blockchain in various industries.",
    content: "While blockchain is often associated with cryptocurrencies, its potential extends far beyond. This article delves into how blockchain technology is being applied in fields such as supply chain management, healthcare, and voting systems, revolutionizing data security and transparency.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "6",
    title: "The Impact of 5G on IoT",
    summary: "How 5G is set to revolutionize the Internet of Things.",
    content: "The rollout of 5G networks is set to supercharge the Internet of Things (IoT). This article explores how the increased speed and capacity of 5G will enable new IoT applications, from smart cities to autonomous vehicles, and the potential challenges that come with this technological leap.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "7",
    title: "Mastering the Art of Public Speaking",
    summary: "Techniques to overcome stage fright and deliver powerful presentations.",
    content: "Public speaking is a crucial skill in many professions. This comprehensive guide offers strategies to conquer stage fright, structure your presentations effectively, and engage your audience. Whether you're speaking to a small group or a large crowd, these tips will help you communicate with confidence and impact.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
    category: "recent",
    resourceType: "pdf",
    contentType: "productivity"
  },
  {
    id: "8",
    title: "The Science of Sleep: Optimizing Your Rest",
    summary: "Understanding sleep cycles and how to improve your sleep quality.",
    content: "Quality sleep is essential for physical and mental health. This article delves into the science of sleep cycles, the impact of sleep on cognitive function and overall health, and provides practical tips for improving your sleep hygiene and getting the most out of your rest.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55",
    category: "popular",
    resourceType: "website",
    contentType: "lifestyle"
  },
  {
    id: "9",
    title: "Machine Learning in Healthcare",
    summary: "How AI is transforming diagnosis, treatment, and patient care.",
    content: "Machine learning is revolutionizing healthcare, from improving diagnostic accuracy to personalizing treatment plans. This article explores current applications of machine learning in medicine and discusses the potential future impacts on patient care and the healthcare industry as a whole.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    category: "recent",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "10",
    title: "The Art of Time Management",
    summary: "Strategies for maximizing productivity and achieving work-life balance.",
    content: "Effective time management is key to both professional success and personal well-being. This article presents a range of time management techniques, from the Pomodoro Technique to time blocking, and discusses how to tailor these strategies to your personal work style and life circumstances.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    category: "popular",
    resourceType: "pdf",
    contentType: "productivity"
  },
  {
    id: "11",
    title: "Sustainable Living: Small Changes, Big Impact",
    summary: "Practical tips for reducing your environmental footprint.",
    content: "Living sustainably doesnt have to mean drastic lifestyle changes. This article provides easy-to-implement tips for reducing waste, conserving energy, and making more eco-friendly choices in your daily life. Learn how small changes can add up to a significant positive impact on the environment.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    category: "recent",
    resourceType: "website",
    contentType: "lifestyle"
  },
  {
    id: "12",
    title: "The Future of Work: Adapting to AI and Automation",
    summary: "How to future-proof your career in the age of artificial intelligence.",
    content: "As AI and automation reshape the job market, it's crucial to adapt and evolve. This article explores the skills that will be in high demand in the future job market, discusses strategies for continuous learning, and provides insights on how to collaborate effectively with AI in the workplace.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "13",
    title: "The Psychology of Habit Formation",
    summary: "Understanding how habits work and how to build positive ones.",
    content: "Habits shape a large part of our daily lives. This article delves into the psychology behind habit formation, explains the habit loop, and provides strategies for breaking bad habits and forming positive ones. Learn how to harness the power of habits to improve your life and achieve your goals.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    category: "recent",
    resourceType: "pdf",
    contentType: "productivity"
  },
  {
    id: "14",
    title: "Cybersecurity in the Age of Remote Work",
    summary: "Essential practices for keeping your data safe while working from home.",
    content: "With the rise of remote work, cybersecurity has become more important than ever. This article covers essential cybersecurity practices for remote workers, from setting up a secure home network to recognizing phishing attempts. Learn how to protect your personal and professional data in the digital age.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "15",
    title: "The Art of Mindful Eating",
    summary: "How to develop a healthier relationship with food through mindfulness.",
    content: "Mindful eating is about more than just what you eat; its about how you eat. This article explores the principles of mindful eating, its benefits for physical and mental health, and provides practical tips for incorporating mindfulness into your meals and snacks.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    category: "recent",
    resourceType: "website",
    contentType: "lifestyle"
  },
  {
    id: "16",
    title: "The Rise of No-Code Development",
    summary: "How no-code platforms are democratizing software development.",
    content: "No-code development platforms are changing the landscape of software creation, allowing non-programmers to build complex applications. This article explores the capabilities of no-code platforms, their impact on the tech industry, and how theyre empowering a new generation of creators.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "17",
    title: "The Power of Deep Work",
    summary: "Strategies for achieving intense focus and boosting productivity.",
    content: "In a world full of distractions, the ability to focus deeply is becoming increasingly valuable. This article explores the concept of deep work, its benefits for productivity and creativity, and provides practical strategies for incorporating deep work into your daily routine.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "recent",
    resourceType: "pdf",
    contentType: "productivity"
  },
  {
    id: "18",
    title: "The Future of Renewable Energy",
    summary: "Exploring innovations in sustainable power generation.",
    content: "As the world shifts towards sustainable energy sources, new technologies are emerging. This article examines cutting-edge innovations in renewable energy, from advanced solar cells to tidal power, and discusses their potential impact on our energy future.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7",
    category: "popular",
    resourceType: "website",
    contentType: "technology"
  },
  {
    id: "19",
    title: "The Art of Digital Minimalism",
    summary: "How to declutter your digital life and regain focus.",
    content: "Digital clutter can be just as overwhelming as physical clutter. This article introduces the concept of digital minimalism, provides strategies for decluttering your digital spaces, and explores how a minimalist approach to technology can improve focus and well-being.",
    image: "https://images.unsplash.com/photo-1507297230445-ff678f10b524",
    category: "recent",
    resourceType: "website",
    contentType: "lifestyle"
  },
  {
    id: "20",
    title: "The Ethics of Artificial Intelligence",
    summary: "Exploring the moral implications of AI development and deployment.",
    content: "As AI becomes more advanced and widespread, ethical considerations are more important than ever. This article delves into key ethical issues surrounding AI, from bias in algorithms to the potential impact on employment, and discusses frameworks for responsible AI development and use.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    category: "popular",
    resourceType: "pdf",
    contentType: "technology"
  }
]
