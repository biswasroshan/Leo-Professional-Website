import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Projects & Achievements | Leo Club of Biratnagar Central Megha",
  description:
    "Explore our past and ongoing community service projects and achievements at Leo Club of Biratnagar Central Megha.",
}

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects & Achievements</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our past and ongoing community service projects and the impact we've made in Biratnagar.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Clean Water Initiative"
                description="Providing clean drinking water to underserved communities in Biratnagar."
                imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCzpO3ZdBzI-EXWYWQvf3JNR9q93bExYvvA&sheight=200&width=300"
                date="Ongoing since March 2023"
              />
              <ProjectCard
                title="Youth Leadership Workshop"
                description="Training the next generation of community leaders through interactive workshops."
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432893399.jpg"
                date="Ongoing since May 2023"
              />
              <ProjectCard
                title="Food Donation"
                description="Providing nutritious meals and food packages to underprivileged families and communities in need."
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432691941.jpg"
                date="Ongoing since September 2023"
              />
              <ProjectCard
                title="Community Health Awareness"
                description="Raising awareness about preventive healthcare and hygiene practices."
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432733977.jpg"
                date="Ongoing since January 2024"
              />
              <ProjectCard
                title="Tree Plantation Drive"
                description="Planted over 500 trees to combat deforestation and promote environmental sustainability."
                imageSrc="/Slideshow and teamwork/IMG-20240809-WA0048.jpg"
                date="July 2023 - October 2023"
              />
              <ProjectCard
                title="School Supplies Distribution"
                description="Distributed educational materials to 200+ students from low-income families."
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432796752.jpg"
                date="February 2023 - March 2023"
              />
              <ProjectCard
                title="Basic Life Support Training"
                description="Providing essential life-saving skills training including CPR and first aid to community members and students."
                imageSrc="/Slideshow and teamwork/FB_IMG_1744432788513.jpg"
                date="November 2022 - January 2023"
              />
              <ProjectCard
                title="Raksha Bandhan Celebration with National Heroes"
                description="Celebrating Raksha Bandhan with police officers to honor their service and dedication to the community."
                imageSrc="/Slideshow and teamwork/IMG-20240819-WA0003.jpg"
                date="August 2023"
              />
              <ProjectCard
                title="Blood Donation Camp"
                description="Organized a community blood donation drive in partnership with local hospitals."
                imageSrc="/placeholder.svg?height=200&width=300"
                date="August 2022"
              />
              <ProjectCard
                title="Career Guidance Seminar"
                description="Helped high school students explore career options through expert-led sessions."
                imageSrc="/placeholder.svg?height=200&width=300"
                date="May 2022 - June 2022"
              />
            </div>
          </TabsContent>
          <TabsContent value="achievements" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Best Leo Club Award",
                  description: "Recognized as the Best Leo Club in District 325B1 for outstanding community service.",
                  year: "2023",
                },
                {
                  title: "Environmental Excellence Award",
                  description: "Received for our Tree Plantation Drive and sustainable development initiatives.",
                  year: "2022",
                },
                {
                  title: "Community Impact Recognition",
                  description: "Honored by the Biratnagar Municipality for our Clean Water Initiative.",
                  year: "2023",
                },
                {
                  title: "Youth Leadership Award",
                  description: "Awarded to our club president for exemplary leadership in community service.",
                  year: "2022",
                },
                {
                  title: "Membership Growth Achievement",
                  description: "Recognized for 40% growth in active membership over the past year.",
                  year: "2023",
                },
                {
                  title: "COVID-19 Response Recognition",
                  description: "Acknowledged for our timely and effective pandemic relief efforts.",
                  year: "2021",
                },
              ].map((achievement, index) => (
                <div key={index} className="flex flex-col overflow-hidden rounded-lg border bg-background p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {achievement.year}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">{achievement.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

