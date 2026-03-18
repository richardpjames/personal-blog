export default function NavBar() {
  return (
    <>
      <div className="py-5 px-2 flex flex-row items-center justify-between mx-auto max-w-5xl">
        <div>
          <h1 className="font-bold text-3xl uppercase">
            <a href="/">Bite by Byte</a>
          </h1>
        </div>
        <div>
          <ul className="uppercase font-bold flex flex-row">
            <li className="mx-4">Food and Recipes</li>
            <li className="mx-4">Technology</li>
          </ul>
        </div>
      </div>
    </>
  );
}
