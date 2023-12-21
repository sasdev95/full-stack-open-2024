const Filter = ({ value, onChange }) => (
    <div>
        find countries &nbsp;
        <input 
            value={value}
            onChange={onChange}
        />
    </div>
)

export default Filter