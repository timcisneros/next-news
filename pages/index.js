import React, { useState } from 'react';

import Navbar from '../Components/Navbar';
import Main from '../Components/Main';

export default function Home() {
    const [category, setCategory] = useState('Top U.S. Headlines');
    return (
        <div>
            <Navbar setCategory={setCategory} />
            <Main category={category} />
        </div>
    );
}
