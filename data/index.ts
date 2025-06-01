export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Travel", link: "#travel" },
    { name: "Academics", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an AI Chatbot",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to get in touch?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Fitsera",
      des: "An AI assisted home workout model based on Tensorflow and dynamic time warping",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/",
    },
    {
      id: 2,
      title: "Face-Crypt Messenger",
      des: "A secure messaging tool that requires facial authentication for sensitive messages.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/",
    },
    {
      id: 3,
      title: "Care-Link",
      des: "A Flutter based mobile app to assist and tract activities of Dementia Patients.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com",
    },
    {
      id: 4,
      title: "My Portfolio",
      des: "Created a portfolio website from scratch based on NextJS.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com",
    },
  ];
  
  export const testimonials = [
    {
      quote: "Incoming MS student at Carnegie Mellon University starting August 2025.",
      name: "Carnegie Mellon University",
      profile: "profile4.svg",
      title: "MS in Information Systems Management",
    },
    {
      quote: "Actively participated in campus initiatives, including marathons and cyclothons, fostering a spirit of teamwork and community engagement. Contributed to social impact as a key member of the NGO Helphen India, where I led initiatives aimed at improving education for underprivileged children. Built and implemented multiple projects, honing my technical and problem-solving skills. Published my first AI-based research paper at IEEE's 6th ICCMC conference, marking a significant milestone in my academic journey. Additionally, I presented cutting-edge research on the DST-funded Indo-Russian Project at the prestigious 2023 3rd International Conference on Advanced Research in Computing (ICARC) in Sri Lanka, culminating in a publication in IEEE.",
      name: "Vellore Institute of Technology",
      profile: "profile1.ico",
      title: "B.Tech in Computer Science and Engineering (CGPA - 9.09)",
    },
    {
      quote: "Maintained consistent academic excellence throughout my education, demonstrating a strong commitment to learning and achievement. Led my house to victory in the annual athletics meet, showcasing leadership, strategic thinking, and team motivation. Represented my school in football, where I had the honor of captaining my team, further developing my leadership, teamwork, and decision-making skills on and off the field.",
      name: "D.A.V Public School",
      profile: "profile2.ico",
      title: "Science - Physics, Chemistry, Mathematics (CBSE XII - 90.0)",
    },
    {
      quote: "Achieved 4th rank in my cohort in the 2016 ICSE board exams. Represented my school as part of the tennis team, competing at district, state, and national levels. Secured medals in athletics and swimming, showcasing versatility in sports. Honored with the prestigious Commendable Progress in Academics award by the Head of School, recognizing my dedication and achievements in academics.",
      name: "The Assam Valley School",
      profile: "profile3.ico",
      title: "High School (ICSE X - 95.6)",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "google cloud",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "nextJS",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "terraform",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "kubernetes",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineer - Deutsche Bank",
      desc: "Lead the development of an internal tool serving over 60,000 users. Also developed a dashboard for monitoring SLAs and integrated an AI chatbot.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Development Intern - ABST Global",
      desc: "Designed and developed a plug and play solution for restraunts to ensure smooth booking and billing.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "App Development - N.K. Productions",
      desc: "Lead the development and launch their first OTT app NK Big Star serving over 10 million users.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp4.svg",
    },
    {
      id: 4,
      title: "Core Committee Member - Helphen India (NGO)",
      desc: "Served in the events division of Helphen India for 2 years organizing various charity events.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
