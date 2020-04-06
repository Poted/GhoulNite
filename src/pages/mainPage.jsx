import React, { useState, useEffect } from 'react';

function MainPage() {
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

    };

    return (
        <div>
            <h1>elo</h1>
        </div>
    );
}

export default MainPage;