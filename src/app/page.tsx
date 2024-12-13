type Artist = {
  name: string
  imageUrl: string

}

export default async function Home() {
  const url =  "https://sternstunde.fly.dev" // "http://localhost:8080" //
  const headers = { Accept: "application/json" };
  const response = await fetch(`${url}/get-artists`, { headers });
  const artists: Artist[] = await response.json();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sternstunden deploy test site!</h1>
      {artists.map(a => (
        <div key={a.name}>
          <img src={a.imageUrl} alt={a.name} />
          {a.name}</div>
      ))}
    </div>
  );
}
