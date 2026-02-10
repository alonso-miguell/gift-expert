import PropTypes from "prop-types";
import {GifElement} from "../helpers/api";

export const GiftItem = ({url, title, id, width, height}  : GifElement) => {
    return (
        <div className="card">
            <img src={url} alt={title} width={width} height={height} />
            {/*<p> {title} </p>*/}
        </div>
    );
}

GiftItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}