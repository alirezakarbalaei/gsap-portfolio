const navLinks = [
    {
       id: "experiences",
       title: "Experiences",
    },
    {
       id: "about",
       title: "About ME",
    },
    {
       id: "art",
       title: "The Art",
    },
    {
       id: "contact",
       title: "Contact",
    },
   ];
   
   const recentExperiences = [
    {
       role: "Frontend Team-Lead",
       company: "Balam Logistics",
       period: "March 2023 – March 2026 | Full Time",
       points: [
          "Built data-heavy dashboards and operational workflows for logistics ERP",
          "Reduced pressure on business manual workflows by 63% through optimized dashboards and automated processes",
          "Implemented PWAs with real-time updates, push notifications, and live fleet maps (OpenStreetMap + Leaflet)",
          "Streamlined delivery pipeline with Git flow, CI/CD, and release management",
       ],
    },
    {
       role: "Frontend",
       company: "Badbadak",
       period: "March 2022 – March 2023 | Full Time",
       points: [
          "Supported up to +4,000 concurrent players during peak activity",
          "Developed a B2C blockchain game launched on steam and token launched on Uniswap and Binance",
          "Collaborated with cross-functional teams to deliver scalable frontend architecture",
       ],
    },
    {
       role: "Frontend",
       company: "Parax Co",
       period: "March 2019 – March 2022 | Full Time",
       points: [
          "Developed admin panels and CMS for Sarmad Insurance and Saipa operations teams",
          "Optimized complex forms, dashboards, and reporting flows",
       ],
    },
   ];
   
   const moreExperiences = [
    {
       role: "Frontend",
       company: "Gotimate",
       period: "Oman | Remote | 2020 | Freelance",
       points: [
          "Conducted blockchain network market research to inform strategic development decisions",
       ],
    },
    {
       role: "Frontend",
       company: "Loaningo",
       period: "Oman | Remote | 2020 | Freelance",
       points: [
          "Built frontend for a crypto lending platform, improving user experience and loan management flows",
       ],
    },
    {
       role: "Frontend",
       company: "Viola",
       period: "March 2017 – March 2019 | Full Time",
       points: [
          "Enhanced fintech platform for global payments and virtual cards, optimizing transaction workflows and UX",
          "Developed dedicated WordPress plugins and custom themes tailored to business requirements",
       ],
    },
    {
       role: "Fullstack",
       company: "Nagila",
       period: "March 2018 – March 2019 | Full Time",
       points: [
          "Delivered a full-featured CRM with smooth UI and backend integration for customer management",
       ],
    },
   ];
   
   const profileLists = [
    {
       imgPath: "/images/profile1.png",
    },
    {
       imgPath: "/images/profile2.png",
    },
    {
       imgPath: "/images/profile3.png",
    },
    {
       imgPath: "/images/profile4.png",
    },
   ];
   
   const featureLists =  [
      "Code that feels intuitive",
      "Interfaces that spark delight",
      "Smooth interactions every time",
      "Thoughtfully crafted experiences"
    ];
   
   const goodLists = [
      "User emotions at the core",
      "Designs that resonate deeply",
      "Empathy-driven decisions in action",
      "Moments that leave an impact"
    ];
   
   const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
       phone: "(555) 987-6543",
       email: "hello@jsmcocktail.com",
    },
   };
   
   const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
   ];
   
   const socials = [
    {
       name: "Instagram",
       icon: "/images/insta.png",
       url: "#",
    },
    {
       name: "X (Twitter)",
       icon: "/images/x.png",
       url: "#",
    },
    {
       name: "Facebook",
       icon: "/images/fb.png",
       url: "#",
    },
   ];
   
   const allCocktails = [
    {
       id: 1,
       name: "Classic Mojito",
       image: "/images/project1.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect project on summer nights.",
    },
    {
       id: 2,
       name: "Raspberry Mojito",
       image: "/images/project2.png",
       title: "A Zesty Classic That Never Fails",
       description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
       id: 3,
       name: "Violet Breeze",
       image: "/images/project3.png",
       title: "Simple Ingredients, Bold Flavor",
       description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect project on summer nights.",
    },
    {
       id: 4,
       name: "Curacao Mojito",
       image: "/images/project4.png",
       title: "Crafted With Care, Poured With Love",
       description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
   ];
   
   export {
    navLinks,
    recentExperiences,
    moreExperiences,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
   };