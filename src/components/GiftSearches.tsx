interface GiftSearchesProps {
    giftSearches: string[]
}

export const GiftSearches = ({giftSearches}: GiftSearchesProps) => {

    return (
        <div className="previous-searches">
            <h2>Gif Searches</h2>
            <ul className="previous-searches-list">
                {
                    giftSearches.map(gift => <li key={gift}> {gift}</li>)
                }

            </ul>


        </div>

    )
}