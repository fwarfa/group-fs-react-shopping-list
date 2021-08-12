function GroupControls({ deleteAll, resetAll }) {

    let clearAll = () => {
        deleteAll()
    }

    let someSuperCoolAction = () => {
        resetAll()
    }
    
    return (
        <>
            <button onClick={ someSuperCoolAction }>Reset</button>
            <button onClick={ clearAll }>Clear</button>
        </>
    )
}
export default GroupControls;