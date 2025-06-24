import "./InputsBiblio.css";

function InputsBiblio({ name, type, onChange }) {
    return (
        <label className="label-biblio">
            <span>{name}</span>
            <input 
                name = { name } 
                type= {type} 
                onChange={onChange}
            />
        </label>
    );
}

export default InputsBiblio;