import React from "react";
import Accordion from "./Accordion";

const FAQBlog = () => {
  const items = [
    {
      title: "How do I create a blog post?",
      description: "Navigate to the 'Add Blog' section, write your content, upload images if needed, and publish it.",
    },
    {
      title: "Can I edit my published blog posts?",
      description: "Yes, you can edit or delete your blogs anytime from your dashboard.",
    },
    {
      title: "Can others comment on my blog posts?",
      description: "Yes, visitors can leave comments on your blog posts, and you can moderate them.",
    },
    {
      title: "Can I add images and videos to my blog posts?",
      description: "Yes, you can easily upload images and embed videos into your blog content.",
    },
    {
      title: "How can I share my blog post on social media?",
      description:
        "Each blog post includes social sharing options, allowing you to share them directly to platforms like Facebook, Twitter, and LinkedIn.",
    },
  ];

  return (
    <div className="animate-appear mt-4 md:mt-12">
      {items.map((item, index) => (
        <Accordion key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default FAQBlog;
