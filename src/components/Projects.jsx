import { ArrowRight, ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
      {
        title: "Nomscape",
        description:
          "Android recipe discovery app built with Kotlin and Jetpack Compose, featuring MVVM architecture, RESTful API integration with Retrofit, and reactive data handling using Coroutines and LiveData",
        link: "https://github.com/komalup1991/Nomscape",
      },
      {
        title: "AutoPurgeX",
        description:
          "A serverless system that monitors and enforces S3 storage quotas in real time using AWS services.",
        link: "https://github.com/komalup1991/cdkProject",
      },
      {
        title: "Quirky Cart",
        description:
          "A full-stack e-commerce platform built with React and Node.js, featuring secure user roles, responsive design, and optimized database performance.",
        link: "https://github.com/komalup1991/quirky-cart",
      },
      {
        title: "Pawsome Pals",
        description:
          "Location-based social media Android app built with Java and Firebase, enabling real-time content sharing, secure authentication, Showcases animations and responsive layouts",
        link: "https://github.com/komalup1991/PawsomePals",
      },
    ];
  
    return (
      <section id="projects" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-primary hover:underline font-medium text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };