import { useState } from "react"

export const AddCategory = ({ onNewCategory, onCleanCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInput = inputValue.trim();
        console.log(cleanInput);

        if (cleanInput.length == 0) { return; }

        setInputValue('');
        onNewCategory(cleanInput);
    }

    const onClean = (event) => {
        event.preventDefault();
        console.log("onClean");
        onCleanCategories();
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    onChange={onInputChange}
                    value={inputValue}
                />
            </form>
            <input type="button" value="Limpiar" onClick={onClean} />
        </>
    )
}
