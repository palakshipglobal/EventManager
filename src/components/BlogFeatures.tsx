import React from "react";
import cloud from "../assets/cloud.png";
import writing from "../assets/creative-writing.png";
import reviews from "../assets/customer-reviews.png";
import edit from "../assets/edit.png";
import web from "../assets/web.png";
import metrics from "../assets/performance-metrics.png";
import management from "../assets/management.png";
import template from "../assets/template.png";
import BenefitCard from "./BenefitCard";

const BlogFeatures = () => {
  const benefits = [
    {
      label: "Effortless Writing",
      description: "Create and format blog posts with an intuitive editor for rich text, images, and media.",
      Icon: writing,
      className: "bg-pink-100",
    },
    {
      label: "SEO Optimization",
      description: "Optimize your blog with meta tags, keywords, and SEO-friendly structures for better visibility.",
      Icon: web,
      className: "bg-yellow-100",
    },
    {
      label: "Customizable Templates",
      description: "Choose from a variety of templates to match your style and branding.",
      Icon: template,
      className: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      label: "Audience Engagement",
      description: "Enable comments and social sharing to interact with your readers.",
      Icon: reviews,
      className: "bg-green-100",
    },
    {
      label: "Scheduling Options",
      description: "Plan and schedule blog posts to publish at your preferred time.",
      Icon: management,
      className: "bg-red-100",
    },
    {
      label: "Media Integration",
      description: "Enhance your posts with images, videos, and links to create engaging content.",
      Icon: cloud,
      className: "bg-orange-100",
    },
    {
      label: "Analytics Tracking",
      description: "Gain insights into your blog's performance with visitor analytics and engagement metrics.",
      Icon: metrics,
      className: "bg-pink-100",
    },
    {
      label: "Easy Editing & Updates",
      description: "Edit and update your blogs anytime with a user-friendly dashboard.",
      Icon: edit,
      className: "bg-indigo-100",
    },
  ];

  return (
    <div className="md:mt-10 mt-6 flex flex-col items-center justify-center">
      <p className=" md:text-2xl text-xl font-medium animate-appear">
        Express your ideas and share valuable <span className="text-blue-600 md:text-3xl text-2xl">insights</span> with
        our blogging feature. Whether you’re a hobbyist, professional, or business owner, our platform makes content
        creation <span className="text-blue-600 md:text-3xl text-2xl">easy and engaging</span>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-14 md:gap-8 gap-x-10 mt-10 md:mt-16">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            label={benefit.label}
            description={benefit.description}
            Icon={benefit.Icon}
            className={benefit.className}
          />
        ))}
      </div>
      <p className="md:text-2xl text-xl mt-8 md:mt-14 text-center font-medium">
        With our blogging feature, you can{" "}
        <span className="font-bold md:text-3xl text-2xl">establish your online presence</span> and
        <span className="font-bold md:text-3xl text-2xl"> connect with your audience effortlessly</span>.
      </p>
    </div>
  );
};

export default BlogFeatures;
