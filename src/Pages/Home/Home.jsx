import React, { useState } from 'react';
import AccordionMenu from '../../Components/AccordionMenu/AccordionMenu';
import MarkdownRenderer from '../../Components/MarkdownRenderer/MarkdownRenderer';
import './Home.css';

const Home = ({ username, repository }) => {
  const [selectedFilePath, setSelectedFilePath] = useState(null);

  const handleFileClick = (filePath) => {
    setSelectedFilePath(filePath);
  };

  return (
    <div>
      <h1>Frontend Dictionary</h1>
      <div className="container">
        <AccordionMenu username={username} repository={repository} handleFileClick={handleFileClick} />
        {selectedFilePath && <MarkdownRenderer username={username} repository={repository} filePath={selectedFilePath} />}
      </div>
    </div>
  );
};

export default Home;
