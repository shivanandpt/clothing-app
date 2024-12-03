import CommonSlider from "../slider/CommonSlider";
import "./Panel.css"
interface panelProps {

    images: {
        image: string
        id: number
    }[];
}

const Panel: React.FC<panelProps> = ({ images }) => {
    return (
        <CommonSlider items={images}></CommonSlider>
        /*  <div className="panel">
             <div className="panel-slider">
                 {images.map((image, index) => (
                     <div className="panel-item" key={index + 1}>
                         <img src={image} alt={`SHowcase ${index + 1}`} />
                     </div>
                 ))}
             </div>
         </div> */
    );
}

export default Panel;