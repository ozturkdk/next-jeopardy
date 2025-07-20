import React, { useState } from 'react';

const categories = [
    'Science',
    'History',
    'Literature',
    'Geography',
    'Sports',
    'Music',
    'Movies',
    'Technology',
    'Art',
    'Politics',
];

export default function StartGame() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCheckboxChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else if (selectedCategories.length < 6) {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isDisabled = (category: string) =>
        !selectedCategories.includes(category) && selectedCategories.length >= 6;

    return (
        <div>
            <h1>Select 6 Categories</h1>
            <form>
                {categories.map((category) => (
                    <div key={category}>
                        <label>
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCheckboxChange(category)}
                                disabled={isDisabled(category)}
                            />
                            {category}
                        </label>
                    </div>
                ))}
            </form>
            <p>
                Selected Categories: {selectedCategories.join(', ')} ({selectedCategories.length}/6)
            </p>
        </div>
    );
};
