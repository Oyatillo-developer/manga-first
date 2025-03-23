import { useEffect, useState } from "react";
import axios from "axios";
import "../style/riding.scss";

function Reading() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=1&limit=10")
            .then(response => {
                setImages(response.data.map(img => img.download_url));
            })
            .catch(error => console.error("Error fetching images:", error));
    }, []);

    return (
        <div className="reading-container">
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Random ${index + 1}`} />
            ))}
        </div>
    );
}

export default Reading;
