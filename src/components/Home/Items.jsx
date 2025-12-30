import ItemBox from "../Common/Item-Box"

const Items = () => {
    const items = [
        {
            id: 'item1',
            title: 'ITEM1',
            description: `This is item1's description`
        }, {
            id: 'item2',
            title: 'ITEM2',
            description: `This is item2's description`
        }, {
            id: 'item3',
            title: 'ITEM3',
            description: `This is item3's description`
        }
    ]

    return (
        <>
            <section className="cards">
                {items.map((item) => 
                    <ItemBox key={item.id} item={item}></ItemBox>
                )}
            </section>
        </>
    )
}

export default Items