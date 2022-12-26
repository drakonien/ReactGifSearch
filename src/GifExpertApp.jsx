import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) { return; }

        setCategories([newCategory, ...categories]);
    }

    const onCleanCategories = () => {
        setCategories([]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}
                onCleanCategories={onCleanCategories}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    );
}