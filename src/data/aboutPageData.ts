interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aminul Islam Sagor",
    role: "CEO & Gardening Expert",
    description:
      "With years of hands-on gardening experience, Sagor leads TriGardening with passion and expertise, ensuring our customers always get the best advice, experience and quality",
    image: "/images/expert (1).jpg",
  },
  {
    id: 2,
    name: "Marium Nipu",
    role: "Plant Care Specialist",
    description:
      "From creative gardening blogs to personalized plant consultations, Nipu helps our community learn, grow, and stay inspired",
    image: "/images/expert (2).jpg",
  },
  {
    id: 3,
    name: "Another Person",
    role: "Designation",
    description:
      "With years of hands-on gardening experience, Sagor leads TriGardening with passion and expertise, ensuring our customers always get the best advice, experience and quality",
    image: "/images/expert (1).jpg",
  },
];


