import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const queryClient = new QueryClient();

export default function Home() {
    const [category, setCategory] = useState('Top U.S. Headlines');
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar setCategory={setCategory} />
                <Main category={category} />
            </div>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
