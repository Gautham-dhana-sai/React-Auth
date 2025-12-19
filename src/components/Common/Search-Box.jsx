import "../../styles/inputs.css"

const SearchBox = () => {
    return (
        <>
            <section className="box">
                <div className="small-row">
                    <div className="small-square box icon-center">
                        <i className="fa-solid fa-filter fa-xl"></i>
                    </div>
                    <div className="small-rect box">
                        <div className="input-wrapper">
                            <input type="text" placeholder="Search..." className="form-control"/>
                            <i className="fa-duotone fa-solid fa-magnifying-glass fa-xl input-icon"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SearchBox