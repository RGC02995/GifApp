import { useState } from "react";
import { AddCategory } from "./assets/components/AddCategory";
import { GifGrid } from "./assets/components/GifGrid";

export const GitExpertApp = () => {
  const API_KEY = "EbMIXdHpfx0LikocDofy0SEb3c6pXNlH";

  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory onNewCategory={(e) => onAddCategory(e)} type="text" />

      {categories.map((category, index) => {
        return (
          <GifGrid
            key={category}
            category={category}
            index={index}
            api_key={API_KEY}
          />
        );
      })}
    </>
  );
};
