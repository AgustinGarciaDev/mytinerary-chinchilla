const Activity = ({ actividad: { pic, title } }) => {


    return (
        <div>
            <div className="activityCuadro" style={{ backgroundImage: `url("${pic}")` }}>
                <div className="textActivity">
                    <h1 >{title}</h1>
                </div>
            </div>
        </div>
    )

}

export default Activity