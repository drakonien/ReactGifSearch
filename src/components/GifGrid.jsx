import { GifItem } from "./GifItem";
import { useState } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    const [open, setOpen] = useState(true);

    const onExpandCollapse = () => {
        setOpen(!open);
    }
    const expand = <FontAwesomeIcon icon={faCircleChevronDown} size="xs" />
    const collapse = <FontAwesomeIcon icon={faCircleChevronUp} size="xs" />

    return (
        <>
            <h3 className="card-click" onClick={onExpandCollapse}>{open ? collapse : expand}{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className={open ? "card-grid" : "card-grid-hidden"}>
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </>
    )
}
