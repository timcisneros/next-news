import React, { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../components/Main';

export default function Home() {
    const [category, setCategory] = useState({ title: 'Top U.S. Headlines' });
    return (
        <div>
            <Head>
                <title>{`${category.title} - Next News`}</title>
            </Head>
            <Navbar setCategory={setCategory} />
            <Main category={category} />
        </div>
    );
}
