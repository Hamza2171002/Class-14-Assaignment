const DynamicPost = async (props: any) => {
  const url = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.params.id}`
  );
  const res = await url.json();
  return (
    <h2 className="text-2xl font-bold text-center">
    <h1 className="text-4xl text-green-700"> ID:</h1>  {props.params.id} <br />
    <h1 className="mt-8 text-4xl text-green-700">Title:</h1>  {res.title} <br />
    <h1 className="mt-8 text-4xl text-green-700">Body:</h1>   {res.body}
    </h2>
  );
};

export default DynamicPost;
