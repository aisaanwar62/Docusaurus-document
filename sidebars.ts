import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Get Started",
      items: [
        "Introduction", // Ensure this matches the document ID
      ],
      className: "my-4 text-base font-semibold ", // Added responsive padding-right
    },
    {
      type: "category",
      label: "Admin",
      items: [
        "Admin/Dashboard",
        "Admin/Courses",
        "Admin/Trainers",
        "Admin/Trainees",
        "Admin/Batches",
        "Admin/Modules",
        "Admin/Questions",
        "Admin/Feedback",
      ],
      className: "my-4 text-base font-semibold ", // Added responsive padding-right
    },
    {
      type: "category",
      label: "Trainer",
      items: [
        "Trainer/Dashboard",
        "Trainer/Batch",
        "Trainer/Trainee",
        "Trainer/Attendance",
        "Trainer/Schedule",
        "Trainer/Module",
        "Trainer/Submodule",
        "Trainer/Lecture",
        "Trainer/Assignment",
        "Trainer/Test",
      ],
      className: "my-4 text-base font-semibold ", // Added responsive padding-right
    },
    {
      type: "category",
      label: "Trainee",
      items: [
        "Trainee/Dashboard",
        "Trainee/Schedule",
        "Trainee/Attendance",
        "Trainee/Lecture",
        "Trainee/Assignment",
        "Trainee/Quiz",
        "Trainee/Feedback",
        "Trainee/My Progress",
      ],
      className: "my-4 text-base font-semibold ", // Added responsive padding-right
    },
  ],
};

export default sidebars;
