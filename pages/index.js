import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function Home() {
    const [category, setCategory] = useState('Top U.S. Headlines');
    return (
        <div>
            <Navbar setCategory={setCategory} />
            <Main category={category} />
        </div>
    );
}
