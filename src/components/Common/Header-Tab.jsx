import PropTypes from "prop-types"
import "../../styles/boxes.css"

const HeaderTab = ({header}) => {
    return (
        <>
            <div className="hero-sub m-bot-ne5">
                <div className="divide-10">
                    <div className="icon-center">
                        {/* <i className="fa-solid fa-circle-xmark fa-lg"></i> */}
                    </div>
                </div>
                <div className="divide-80 icon-center">
                    <h3 className="title-font">
                        {header}
                    </h3>
                </div>
                <div className="divide-10">
                    <div className="icon-center m-top-15">
                        <i className="fa-solid fa-circle-xmark fa-lg"></i>
                    </div>
                </div>
            </div>
            <div className="divider-line"></div>
        </>
    )
}

HeaderTab.propTypes = {
    header: PropTypes.string
}

export default HeaderTab