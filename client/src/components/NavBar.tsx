export default function NavBar() {
  return (
    <>
      <div className="flex items-center w-full justify-between py-10">
        <div>
          <h1 className="font-bold text-3xl uppercase">
            <a href="/">✍️ Bite by Byte</a>
          </h1>
        </div>
        <div>
          <ul className="uppercase font-bold flex flex-row">
            <li className="mx-4">🍔 Food and Recipes</li>
            <li className="mx-4">💾 Technology</li>
          </ul>
        </div>
      </div>
    </>
  );
}
