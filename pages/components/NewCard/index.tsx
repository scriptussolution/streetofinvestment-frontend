import React from "react";



const NewCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="image/Cover Image for all blog/4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This lorem54 is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
                <div>
                  <span className="" role={"button"}>
                    {/* TODO: Add Blog Link */}
                    <a
                      onClick={() =>{}
                        // handleClick(
                        //   article?.attributes?.slug
                        //     ? `article/${article?.attributes?.slug}`
                        //     : "/"
                        // )
                      }
                    >
                      Read More {">>"}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;

function handleClick(arg0: string): void {
  throw new Error("Function not implemented.");
}
