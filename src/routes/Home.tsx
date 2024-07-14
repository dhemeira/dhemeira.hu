export function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="lg:col-1 xl:col-2"></div>
          <div className="col-12 md:col-8 lg:col-6 xl:col-5 flex flex-col items-start justify-center">
            <h1 className="text-5xl">Home Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi odio magni
              numquam maiores maxime praesentium dolor at, explicabo saepe, nobis eaque commodi
              asperiores odit omnis! Sit totam explicabo exercitationem!
            </p>
          </div>
          <div className="hidden md:flex md:col-4 lg:col-4 xl:col-3 items-center justify-center">
            <div className="aspect-square w-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"></div>
          </div>
          <div className="lg:col-1 xl:col-2"></div>
        </div>
      </div>
    </>
  );
}
