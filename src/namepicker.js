import React, {useState} from 'react'

function NamePicker(props){
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState('')

    function saveName(){
        if(name && !editName) {
          props.onSave(name)
        }
        setEditName(!editName)
    }

    return (
        <namepicker className="namepicker">

            <div className="user-edit">

            <input value={name}
                className="name-input"
                placeholder="Type a username"
                style={{display: editName ? 'none' : 'flex'}}
                onChange={e=> setName(e.target.value)}
                onKeyPress={e=> {
                    if(e.key==='Enter') saveName()
                }}
            />

            {editName && <div className="current-username">{name}</div>}

            <button onClick={saveName} className="edit-button">
                {editName ? <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/> : "+" }
            </button>

            </div>

        </namepicker>
    )
}

export default NamePicker