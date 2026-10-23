import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import resumeData from './resumeData';
import CProgramming from './components/CProgramming';
import WebExperiment from './components/webexperiments';
import Blender from './components/blender';
import Streaming from './components/streaming';

function App() {
    return (
        <div className="App">
            <Header resumeData={resumeData}/>
            <WebExperiment resumeData={resumeData}/>
            <CProgramming resumeData={resumeData}/>
            <Streaming resumeData={resumeData}/>
            <Blender resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
        </div>
    );
}

export default App;