const Activity = ({ actividad: { pic, title } }) => {


    return (
        <div>
            <h1>{title}</h1>
            <div className="cuadro" style={{ backgroundImage: `url("${pic}")` }}></div>
        </div>
    )

}

export default Activity