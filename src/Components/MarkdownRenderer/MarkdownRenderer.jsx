import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ username, repository, filePath }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/${username}/${repository}/main/${filePath}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown content`);
        }
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [username, repository, filePath]);

  return (
    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked(markdownContent) }} />
  );
};

export default MarkdownRenderer;
