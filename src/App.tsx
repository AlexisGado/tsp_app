import React from 'react';
import { TspInstance } from './instance/instance';
import { TspCanvas } from './tsp-canvas';

const exampleInstance: TspInstance = new TspInstance('testInstance', [
    { id: '1', x: 0, y: 12 },
    { id: '2', x: -6, y: 22 },
    { id: '3', x: 37, y: 2 },
    { id: '4', x: 8, y: -4 },
]);

function App() {
    return <TspCanvas instance={exampleInstance} />;
}

export default App;
