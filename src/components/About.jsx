import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
    return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                CS Master's Grad | Backend, Cloud & Android Engineer
              </h3>
  
              <p className="text-muted-foreground">
                I'm a Software Engineer with hands-on experience in backend development, cloud-native architecture, and Android app development using Kotlin and Jetpack Compose.
              </p>
  
              <p className="text-muted-foreground">
                I’ve contributed to scalable microservices at Mercedes-Benz R&D and built robust data platforms on AWS, Kubernetes, and PostgreSQL. I'm passionate about ML platform engineering and continuously seek to deliver clean, maintainable, and impactful solutions.
              </p>
  
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">Get In Touch</a>
                <a
                  href="/KomalResumeM.pdf"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
  
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Backend Engineering</h4>
                    <p className="text-muted-foreground">
                      Building reliable microservices with Python, Go, PostgreSQL, and gRPC.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Android Development</h4>
                    <p className="text-muted-foreground">
                      Crafting modern mobile apps with Kotlin, Jetpack Compose & Firebase.
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Cloud Platforms</h4>
                    <p className="text-muted-foreground">
                      Deploying cloud-native apps using AWS, Kubernetes, and Terraform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };