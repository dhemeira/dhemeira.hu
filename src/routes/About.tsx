export function About() {
  return (
    <>
      <div className="container">
        <div className="row gx-2 mb-10">
          <h1 className="text-5xl">About Page</h1>
        </div>
        <div className="row gy-2">
          <div className="col text-dark-text bg-dark-background">
            <p> text-dark-text </p>
            <p> bg-dark-background</p>
          </div>
          <div className="col text-dark-background bg-dark-primary">
            <p> text-dark-background</p>
            <p> bg-dark-primary</p>
          </div>
          <div className="col text-dark-text bg-dark-secondary">
            <p> text-dark-text</p>
            <p> bg-dark-secondary</p>
          </div>
          <div className="col text-dark-background bg-dark-accent">
            <p> text-dark-background </p>
            <p> bg-dark-accent</p>
          </div>
        </div>
        <div className="row">
          <div className="col text-light-text bg-light-background">
            <p> text-light-text</p>
            <p> bg-light-background</p>
          </div>
          <div className="col text-light-text bg-light-primary">
            <p> text-light-text</p>
            <p> bg-light-primary</p>
          </div>
          <div className="col text-light-text bg-light-secondary">
            <p> text-light-text </p>
            <p> bg-light-secondary</p>
          </div>
          <div className="col text-light-text bg-light-accent">
            <p> text-light-text</p>
            <p> bg-light-accent</p>
          </div>
        </div>
      </div>
    </>
  );
}
