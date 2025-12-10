import Carousel from "../Common/Carousel"
import InfiniteBox from "../Common/Infinite-Box"
import LocationBox from "../Common/Location-Box"
import MainTitle from "../Common/Main-Title"
import SearchBox from "../Common/Search-Box"

const HomePage = () => {
    return (
        <>
            <MainTitle></MainTitle>
            <LocationBox></LocationBox>
            <SearchBox></SearchBox>
            <Carousel></Carousel>
            <InfiniteBox></InfiniteBox>
        </>
    )
}

export default HomePage