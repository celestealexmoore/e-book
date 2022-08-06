import "../assets/css-styles/Recipes.css";

export default function Recipes() {
  return (
    // <div className="recipeContainer">
    //   <h1 className="d-flex justify-content-center">Looking for recipes?</h1>
    //   <br />
    //   <ul>
    //     <li>Yield: Unlimited</li>
    //     <li>Prep Time: About 2 Months</li>
    //     <li>Total Time: Come Back 8/1/2022</li>
    //     <br />
    //     <li>A Cup'l Pleases</li>
    //     <li>1 Large Thank You</li>
    //     <li>4 All Your</li>
    //     <li>Pinch of Patience</li>
    //   </ul>
    //   <br />
    //   <p>
    //     This page is going through a 180°.
    //     <br />
    //     <br />
    //     But don't you worry. I've got a whole catalog of content coming your
    //     way. Problem is, it's all scattered up across old backpacks and stacks
    //     of notebooks.
    //     <br />
    //     <br />
    //     So while I sort through all these loose papers, gimme chance small.
    //   </p>
    // </div>

    <div className="recipesParent">
      <div className="paper pink">
        <div className="top-tape"></div>
        <p>
          <span>Looking for Recipes?</span>
          <br />
          Don't you worry. I've got a whole catalog of content coming your way.
          Problem is, it's all scattered up across old backpacks and stacks of
          notebooks.
          <br />
          So while I sort through the loose papers, enjoy the available
          books and subscribe!
        </p>
      </div>
    </div>
  );
}
