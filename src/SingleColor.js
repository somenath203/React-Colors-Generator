import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import rgbToHex from './utils';


const SingleColor = ({ rgb, weight, index }) => {

    const bcg = rgb.join(',');

    const hex = rgbToHex(...rgb);


    return (
        <>
            <article
                className={`color ${index > 10 && 'color-light'}`}
                style={{ backgroundColor: `rgb(${bcg})` }}
                onClick={() => {

                    navigator.clipboard.writeText(hex);

                    toast.success(`Hex value ${hex} has been copied to clipboard`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });


                }}
            >
                <p className='percent-value'>{weight}%</p>
                <p className="color-value">{hex}</p>

            </article>

        </>
    )
}

export default SingleColor;