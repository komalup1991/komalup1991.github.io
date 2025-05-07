// import { useState } from "react";
// import { cn } from "@/lib/utils";

export const SkillsSection = () => {
    const skills = [
      {
        category: "Languages & Frameworks",
        items: [
          "Go", "Python", "Kotlin", "TypeScript", "Java", "Jetpack Compose", "React", "Android SDK"
        ],
      },
      {
        category: "Backend & Databases",
        items: [
          "PostgreSQL", "Redis", "Kafka", "Firebase","MongoDb"
        ],
      },
      {
        category: "Cloud & DevOps",
        items: [
          "AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Azure", "GPC"
        ],
      },
      {
        category: "Tools & Platforms",
        items: [
          "Linux", "Git", "Postman", "Jira", "DataDog"
        ],
      },
    ];
  
    return (
      <section id="skills" className="py-24 px-4 bg-muted/40">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
  
          <div className="grid md:grid-cols-2 gap-10">
            {skills.map((group, idx) => (
              <div key={idx} className="bg-background p-6 rounded-2xl shadow-sm border">
                <h3 className="font-semibold text-xl mb-4 text-primary">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };