import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  santin,
  figma,
  docker,
  carrent,
  jobit,
  ideaforge,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiências",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Front-end",
    icon: web,
  },
  {
    title: "Desenvolvedor Back-end",
    icon: backend,
  },
  {
    title: "Aplicações com React",
    icon: mobile,
  },
  {
    title: "Integração de APIs REST",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Aprendiz Desenvolvedor Full Stack",
    company_name: "Santin – Equipamentos",
    icon: santin, 
    iconBg: "#383E56",
    date: "Outubro 2024 – Dezembro 2025",
    points: [
      "Desenvolvimento de aplicações web com HTML, CSS, React e TypeScript.",
      "Criação e ajuste de interfaces responsivas seguindo boas práticas de UI/UX.",
      "Apoio na integração de sistemas utilizando APIs REST.",
      "Suporte no desenvolvimento e manutenção de APIs em Node.js.",
      "Contato com SQL para consultas e manipulação básica de dados.",
      "Uso de Git e GitHub no versionamento de código.",
    ],
  },
];
const testimonials = [
];

const projects = [

  {
    name: "Trafego Supremo",
    description:
      "Landing page focada em conversão, criada para validar ideias de negócio antes de investir tempo e dinheiro, com layout moderno e chamadas diretas para ação.",
    tags: [
      {
        name: "wordPress",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ideaforge,
    source_code_link: "https://vendas-demo.infinityfreeapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
