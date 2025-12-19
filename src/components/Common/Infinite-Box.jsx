import ItemBox from "./Item-Box"

const InfiniteBox = () => {
    return (
        <>
            <section className="infinite-box">
                <section className="cards">
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                    <ItemBox></ItemBox>
                </section>
            </section>
        </>
    )
}

export default InfiniteBox