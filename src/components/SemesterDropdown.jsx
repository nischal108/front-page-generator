import React, { useState, useRef, useEffect } from 'react';
import './StudentDropdown.css';

const SemesterDropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0].title);
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setSearchText(selectedOption);
            setHighlightedIndex(-1);
        } else {
            setSearchText('');
        }
    };

    const handleOptionClick = (optionTitle) => {
        setSelectedOption(optionTitle);
        setIsOpen(false);
        setSearchText('');
        setHighlightedIndex(-1);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        setHighlightedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (!isOpen) {
            return;
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
            );
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHighlightedIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : prevIndex
            );
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
            handleOptionClick(filteredOptions[highlightedIndex].title);
        }
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const filteredOptions = options.filter((option) =>
        option.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="custom-dropdown w-4/5 relative flex justify-between items-center" ref={dropdownRef}>
            <input
                type="text"
                className={`selected-option ${isOpen ? 'selected-option-open' : ''} shadow-sm w-full form-input border border-gray-300 h-10 rounded-lg hover:border hover:border-slate-200 px-2 outline-0 focus:ring focus:ring-slate-100 text-slate-600`}
                placeholder="Select a semester or search"
                value={isOpen ? searchText : selectedOption}
                name="title"
                onChange={handleSearchChange}
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
            />
            <img src='../../cross.svg'
                className={` ${isOpen ? "block" : "hidden"} absolute h-1/3 right-4 opacity-80 hover:scale-95 cursor-pointer`}
                onClick={closeDropdown}
            />
            {isOpen && (
                <ul className={`dropdown-list ${isOpen ? 'show' : ''}`}>
                    {filteredOptions.map((option, index) => (
                        <li
                            key={option.title}
                            className={`dropdown-option text-sm ${highlightedIndex === index ? 'highlighted' : ''
                                } ${option.title === selectedOption ? "text-blue-500 font-bold" : "bg-white"}`}
                            onClick={() => handleOptionClick(option.title)}
                        >
                            {option.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SemesterDropdown;