import { Button } from './Button'

const Dropdown = ({ data, onSelectChange, value, label }) => {
    function handleChange(event) {
        onSelectChange(event.target.value)
    }
    function resetDropdown() {
        onSelectChange('')
    }

    return (
        <>
            <div className="flex h-auto flex-col items-center justify-center gap-4 sm:flex-row">
                <label className="dark:text-primary">{label}</label>
                <div className="flex flex-row items-center justify-center">
                    <select
                        className="h-8 rounded-l-md bg-ternary px-2 text-primary dark:bg-secondary dark:text-quaternary"
                        value={value}
                        onChange={handleChange}
                    >
                        <option value={''}>---</option>
                        {data.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            )
                        })}
                    </select>
                    <Button
                        text={'reset'}
                        className={
                            'h-8 rounded-r-md bg-ternary p-1 px-2 font-thin'
                        }
                        onClick={resetDropdown}
                    />
                </div>
            </div>
        </>
    )
}

export default Dropdown
