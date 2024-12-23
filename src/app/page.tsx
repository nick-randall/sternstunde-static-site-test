type Artist = {
  name: string
  imageUrl: string

}

export default async function Home() {
  // const url =  "https://sternstunde.fly.dev" 
  const url =   "http://localhost:8080" //
  const headers = { Accept: "application/json" };
  const response = await fetch(`${url}/get-artists`, { headers });
  const artists: Artist[] = await response.json();
  return (
    <div>
      <h1>Sternstunden deploy test site!</h1>
      <div className="size-full flex flex-wrap items-center gap-8">
      {artists.map(a => (
        <div key={a.name} className="size-64 overflow-hidden">
          <img src={a.imageUrl} alt={a.name} />
          {a.name}
        </div>
      ))}
    </div>
    </div>
  );
}
