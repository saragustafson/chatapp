import React, {useState, useRef, useEffect} from 'react'

function NamePicker(props){
    const [editName, setEditName] = useState(false)
    const [name, setName] = useState('')
    const inputEl = useRef(null)

    function save(){
        if(name && !editName) {
          props.onSave(name)
          localStorage.setItem('name',name)
        }
        setEditName(!editName)
    }

    return (
        <namepicker className="namepicker">

            <div className="user-edit">
                {/* <input className="name-input" 
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    placeholder="Type a username"
                    onKeyPress={e=> {
                        if(e.key==='Enter' && name) {
                            setName(name)
                            console.log(name)
                        }
                    }}
                /> */}

            <input value={name} ref={inputEl}
                className="name-input"
                placeholder="Type a username"
                style={{display: editName ? 'none' : 'flex'}}
                onChange={e=> setName(e.target.value)}
                onKeyPress={e=> {
                    if(e.key==='Enter') save()
                }}
            />

            {editName && <div >{name}</div>}

            <button onClick={save} className="edit-button">
                {editName ? <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/> : "+" }
            </button>

                {/* <button className="add-button" 
                    onClick={()=> {
                        if(name.length>0) {
                            setName(name)
                            console.log(name)
                        }
                    }}>
                    +
                </button> */}
            </div>

            {/* <div className="user-show">
                <div className="current-username">
                        {name}
                </div>

                <button className="edit-button" 
                    onClick={()=> {
                        if(name.length>0) {
                            setName(name='')
                            console.log(name)
                        }
                    }}>
                    <img src="https://image.flaticon.com/icons/svg/61/61456.svg"/>
                </button>

            </div> */}

        </namepicker>
    )
}



export default NamePicker