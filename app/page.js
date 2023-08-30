import ProjectCard from "@/components/ProjectCard";


export default function Home() {
  
  const projects = [
    {
      id: "1",
      title: "Comming Soon",
      description: "Pending",
      image: "https://adminlte.io/wp-content/uploads/2022/02/tailwindcss-templates.png",

      longDescription: `asdasdas`
    }, 
    {
      id: "2",
      title: "Comming Soon",
      description: "Pending",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNtytowpDyjufV9n7QzMdjK-i-kYwrnIPXp0oCfSwBzugb1-Q0ecUM4wB02F1-Q2T2Kc&usqp=CAU" 
    }
    
  ];

  const Hero = () => {
    return (
      <div className="flex md:flex-row-reverse flex-col items-center justify-center gap-4 mt-10 md:mt-40">
        <img className="p-1 rounded-full ring-2 ring-gray-300" 
        style={{
          width: "350px",
          height: "350",
          objectFit: "cover",
        }}
        src="https://scontent.fcrk3-2.fna.fbcdn.net/v/t39.30808-6/359746489_6714841381899280_5397832173784774151_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH9_SPRQEbty48gFK3kXZTsV31ojF4rvrpXfWiMXiu-ulZQuCdK6YBYr2T9g-hg1WLOOvJZDyQ6hMOAyzbgfxiM&_nc_ohc=01d9ENiqRFIAX-abias&_nc_zt=23&_nc_ht=scontent.fcrk3-2.fna&oh=00_AfAjhEsDVT9eAdn5TVSP76OFlnjhK528qxh1LZeMeWn3jA&oe=64F45E9D"
        alt="Developer profile image"
        /> 

        <div className="flex flex-col gap-4 md:w-2/3">
          <p className="text-3xl md:text-5xl font-bold md:text-lef text-center">
            Hello , I'm <span className="text-blue-500">Mark Ernie</span>. I am a {" "}
             <span className="text-blue-500">Web Developer</span> from <span className="text-blue-500">Philippines</span>  
            </p>
            <p className="text-gray-500 text-lg md:text-left text-center">
              I am a Junior Web Developer with experience in Node.js nothing special but I have knowledge in web develoment.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              <a href="mailto:markernie00@gmail.com" target="_blank">Contact Me</a>
              </button>
              <button className="bg-blue-200 text-gray-600 px-4 py-2 rounded-md">
                <a href="/">Download CV</a>
              </button>
            </div>
        </div>

      </div>
    )
  };

  const Projects = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-40 mb-30 ">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div
          className="flex mt-20 flex-wrap justify-center md:justify-start"
          style={{
            gap: "2rem",
          }}
        >
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mt-10 md:mt-40 pb-10 ">
        <img
          src="https://media.licdn.com/dms/image/D5603AQEr7LcQSheOqw/profile-displayphoto-shrink_800_800/0/1692100184866?e=1698883200&v=beta&t=UMw0OhjhFLvnn_7bA6hYc3k-pov1xsAX8eHIN9vTRt8"
          alt="Developer profile image"
          style={{
            height: "500px",
            objectFit: "cover",
            width: "100%",
          }}
          className="rounded-md"
        />
        <div className="flex flex-col gap-4 md:w-2/3 md:ml-4 mt-20 md:mt-10">
          <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            reprehenderit quas voluptatibus quidem dolorum. Quisquam voluptatum,
          </p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
          <a href="/">Download CV</a>
          </button>
        </div>
      </div>
    );
  };

  
  
  return <main c
  className="min-h-screen mt-40"
  style={{
    maxWidth: "80%",
    margin: "auto",
    marginTop: "10rem",
  }}>
    <Hero/>
    <Projects/>
    <About/>  
  </main>;
  
}
