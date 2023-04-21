import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "products",
    product: [
      {
        label: "Community Edition",
        icon: <FaCreditCard />,
        url: "/products",
        dsc: "The leading Open-Source Headless CMS",
      },
      {
        label: "Enterprise Edition",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "A self-hosted and Enterprise-ready Edition",
      },
      {
        label: "Market Place",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "A Marketplace of plugins to add features or integrations.",
      },
      {
        label: "Roadmap",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "A fully managed platform for your Strapi apps",
      },
    ],
    features: [
      {
        label: "Content Types Builder",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Structured yet flexible content",
      },
      {
        label: "Media Library",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Advanced Media Management",
      },
      {
        label: "Roles & Permissions",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Granular access controls",
      },
      {
        label: "Roles & Permissions",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Powerful Multilingual websites",
      },
    ],
    enterpriseEdition: [
      {
        img: "./",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Try the Enterprise edition",
      },
      {
        img: "./",
        icon: <FaCreditCard />,
        url: "/products",
        desc: "Try the Enterprise edition",
      },
    ],
  },
  {
    page: "solutions",
    TEAMS: [
      {
        label: "Developers",
        icon: <FaBook />,
        url: "/products",
        desc: "Integrate Strapi with your favorite tools",
      },
      {
        label: "Content Managers",
        icon: <FaBook />,
        url: "/products",
        desc: "Manage Content Autonomously",
      },
      {
        label: "Business teams",
        icon: <FaBook />,
        url: "/products",
        desc: "Unlock the benefit of structured content",
      },
    ],
    USECASES: [
      {
        label: "Ecommerce",
        icon: <FaBook />,
        url: "/products",
        desc: "Level up your eCommerce experiences",
      },
      {
        label: "Corporate Site",
        icon: <FaBook />,
        url: "/products",
        desc: "Manage your brand narrative",
      },
      {
        label: "Mobile applications",
        icon: <FaBook />,
        url: "/products",
        desc: "One CMS, any devices",
      },
      {
        label: "User stories",
        icon: <FaBook />,
        url: "/products",
        desc: "Discover who use Strapi",
      },
    ],
    INDUSTRIES: [
      {
        label: "Forum",
        icon: <FaBook />,
        url: "/products",
        desc: "Discuss, ask questions and find answers",
      },
      {
        label: "Tech and Business Services",
        icon: <FaBook />,
        url: "/products",
        desc: "Deliver faster digital experiences for your clients",
      },
      {
        label: "Telco, Media, and Gaming",
        icon: <FaBook />,
        url: "/products",
        desc: "Create and manage content on any platform",
      },
    ],
  },
  {
    page: "company",
    COMMUNITY: [
      {
        label: "Strapi Community Stars",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Meet the Strapi experts and top contributors",
      },
      {
        label: "Write for the Community",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Get paid to share your technical expertise",
      },
      {
        label: "Strapi Community Discord",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Connect with fellow community members",
      },
    ],
    EVENTS: [
      {
        label: "Events",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Upcoming and On-demand Events",
      },
      {
        label: "Meetup Program",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Strapi user groups to learn, share and collaborate",
      },
      {
        label: "StrapiConf",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Learn more about our annual user conference",
      },
    ],
    RESOURCES: [
      {
        label: "Forum",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Discuss, ask questions and find answers",
      },
      {
        label: "Blog",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Latest Strapi news & updates",
      },
      {
        label: "Tutorials",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "A collection of Strapi tutorials",
      },
      {
        label: "Showcase",
        icon: <FaBriefcase />,
        url: "/products",
        desc: "Get inspiration from Strapi references",
      },
    ],
  },
];

export default sublinks;
