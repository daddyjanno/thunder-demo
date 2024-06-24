import { useState } from 'react'

const Dropdown = ({ data, onSelectChange, value, label }) => {
    function handleChange(event) {
        onSelectChange(event.target.value)
    }
    function resetDropdown() {
        onSelectChange('')
    }

    return (
        <div className="flex flex-row justify-center gap-2">
            <label>{label}</label>
            <div className="h-6">
                <select
                    className="h-full"
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
                <button
                    onClick={resetDropdown}
                    className="cursor-pointer bg-white px-2"
                >
                    x
                </button>
            </div>
        </div>
    )
}

export default Dropdown
