import React, {useState, useEffect} from 'react'

function NamePicker(props){
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState('')

    useEffect(()=>{
        const storedName = localStorage.getItem('name')
        if(storedName) {
          setName(storedName)
          props.onSave(storedName)
        }
    }, [])

    return <div className="name-picker">

        {editName && <>
            <input className="name-input" 
            value={name}
            placeholder="Type a username"
            onKeyPress={e=> {
                if(e.key==='Enter') {
                    if(name && !editName) {
                    props.onSave(name)
                    }
                    setEditName(!editName)
            }}}
            onChange={e=> setName(e.target.value)}
            />

            <button className="edit-button"
                onClick={()=> {
                setEditName(!editName)
                props.onSave(name)
                localStorage.setItem('name',name)
                }}
            >
                <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/>
            </button>
        </>}

        {!editName && <>
            <div className="current-username">{name}</div>

            <button className="add-button"
                onClick={()=> {
                setEditName(!editName)
                }}
            >
                +
            </button>
        </>}


    </div>

    // return (
    //     <namepicker className="namepicker">

    //         <div className="user-edit">

    //         <input value={name}
    //             className="name-input"
    //             placeholder="Type a username"
    //             style={{display: editName ? 'none' : 'flex'}}
    //             onChange={e=> setName(e.target.value)}
    //             onKeyPress={e=> {
    //                 if(e.key==='Enter') saveName()
    //             }}
    //         />

    //         {editName && <div className="current-username">{name}</div>}

    //         <button onClick={saveName} className="edit-button">
    //             {editName ? <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/> : "+" }
    //         </button>

    //         </div>

    //     </namepicker>
    // )
}

export default NamePicker