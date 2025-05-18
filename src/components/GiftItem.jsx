import PropTypes from "prop-types";

export const GiftItem = ({url, title, id}) => {
    return (
        <div className="card">
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    );
}

GiftItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}