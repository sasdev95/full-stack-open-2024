const Filter = ({ value, onChange }) => (
    <div>
        filter shown with &nbsp;
        <input 
            value={value}
            onChange={onChange}
        />
    </div>
)

export default Filter