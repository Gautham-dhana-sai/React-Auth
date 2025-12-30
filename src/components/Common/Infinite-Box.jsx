import PropTypes from "prop-types"

const InfiniteBox = ({children}) => {
    return (
        <>
            <section className="infinite-box">
                {children}
            </section>
        </>
    )
}

InfiniteBox.propTypes = {
    children: PropTypes.node
}

export default InfiniteBox