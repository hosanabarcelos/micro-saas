import ProjectCard from "../commons/project-card";
import TotalVisits from "../commons/total-visits";
import UserCard from "../commons/user-card/user-card";
import Button from "../ui/button";
import TextInput from "../ui/text-input";
import CreateNow from "../ui/create-now";

export default function Hero() {
  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-[64px]">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques.
        </h2>
        <CreateNow />
      </div>

      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits totalVisits={1542} />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard
              name="Projeto 1"
              description="Descrição do projeto 1"
              img="https://searchengineland.com/wp-content/seloads/2020/03/code-SS_634574354-1920x1080-1.jpg"
            />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard
              name="Projeto 2"
              description="Descrição do projeto 2"
              img="https://searchengineland.com/wp-content/seloads/2020/03/code-SS_634574354-1920x1080-1.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}