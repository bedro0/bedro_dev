export default function Projects(){
    const projects = [
        {
            title: "GTA San Andreas Radio",
            description: `Web based application that implements radio stations from the popular videogame Grand Theft Auto: San Andreas`
        },
        {
            title: "QR You (WIP)",
            description: `Mobile app to save your contact cards and share them with others using QR codes.`
        }
    ]
    const content = projects.map(({title, description})=>(
        <div key={title}>
            <h2 className="text-2xl my-4">{title}</h2>
            <p className="text-xl">{description}</p>
        </div>
    ))
    return (
        <div>
            <a href="#projects"><h1 className="my-8 text-4xl">Projects:</h1></a>
            {content}
        </div>
    );
}