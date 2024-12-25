import Link from "next/link";
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await url.json()
  console.log(res);
  
  return (
    <div>
      {
        res.map((post: any, i: number) => (
          <div className="text-2xl py-2 font-bold ml-8 hover:text-blue-600" key={i}>
            <Link href={`/${post.id}`}>
            <h1>{post.title}</h1>
            </Link>
          </div>
        ))
      }
    </div>
  );
}
