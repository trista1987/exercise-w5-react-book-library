

export const BookInfo = ({year, genre, rating, description}) => {
    return (
        <div>
            <p>{year}</p>
            <p>{genre}</p>
            <p>{rating}</p>
            <p>{description}</p>
        </div>
    )
}