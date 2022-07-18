import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    //con if validamos si el array ya inlcuye esa categoria , asi no se repite y simplemente se sale con el return
    if (categories.includes(newCategory)) return;

    //console.log(newCategory)
    setCategories([newCategory, ...categories]);
    };
    

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input  */}

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

          {/* list */}
      {categories.map((category) => (
          <GifGrid
              key={category}
              category={category} />
      ))}
    </>
  );
};
