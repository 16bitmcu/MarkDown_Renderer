import React, { useState, useEffect } from 'react';

const AccordionMenu = ({ username, repository, handleFileClick }) => {
  const [repoContents, setRepoContents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoContents = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repository}/contents`);
        if (!response.ok) {
          throw new Error(`Failed to fetch repository contents`);
        }
        const data = await response.json();
        setRepoContents(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchRepoContents();
  }, [username, repository]);

  const fetchFolderContents = async (folderPath) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repository}/contents/${folderPath}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch contents of folder: ${folderPath}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return [];
    }
  };

  const toggleFolder = async (folder) => {
    if (!folder.contents) {
      const contents = await fetchFolderContents(folder.path);
      folder.contents = contents;
      setRepoContents([...repoContents]);
    } else {
      folder.contents = null;
      setRepoContents([...repoContents]);
    }
  };

  const renderFolder = (folder) => (
    <li key={folder.path}>
      <div onClick={() => toggleFolder(folder)}>
        {folder.contents ? '▼' : '▶'} {folder.name}
      </div>
      {folder.contents && (
        <ul>
          {folder.contents.map(item => (
            <li key={item.path}>
              {item.type === 'file' ? (
                <span onClick={() => handleFileClick(item.path)}>{item.name.replace(/\.md$/, '')}</span>
              ) : (
                renderFolder(item)
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="menu">
      <ul>
        {repoContents.map(item => (
          <li key={item.path}>
            {item.type === 'dir' ? renderFolder(item) : (
              <span onClick={() => handleFileClick(item.path)}>{item.name.replace(/\.md$/, '')}</span>
            )}
          </li>
        ))}
      </ul>
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
};

export default AccordionMenu;