import "../scss/card.scss"

const Card = ({ veri }) => {
  return (
    <div>
      {veri.map(({ id, name, job, comment, img }) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>{job}</h3>
          <img src={img} alt="img" width={"100px"} />
          <p>{comment}</p>
          <div>
            <button>Small</button>
            <button>Large</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
