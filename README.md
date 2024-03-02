# Markdown Renderer

Markdown Renderer is a React application designed to fetch and render Markdown files from a GitHub repository. By simply providing the `username` and `repo` attributes, users can seamlessly navigate through directories and view Markdown content within their browser.

## How it Works

### Dynamic Fetching

The application leverages React components, primarily the **AccordionMenu** and **MarkdownRenderer**, to dynamically fetch and render Markdown files from a GitHub repository.

#### 1. AccordionMenu Component

The AccordionMenu component is responsible for constructing a hierarchical menu structure based on the directory contents of the specified GitHub repository. This menu allows users to navigate through folders and files conveniently.

#### 2. MarkdownRenderer Component

The MarkdownRenderer component fetches the Markdown content of the selected file from the GitHub repository. It utilizes the `marked` library to convert the Markdown content into HTML, providing a readable rendering for users.

### Customization with Username and Repo Attributes

By changing the `username` and `repo` attributes provided to the components, users can seamlessly switch between different GitHub repositories. This simple modification allows the application to fetch and render Markdown files from the specified repository, enabling versatile use cases.

### Fetching Data

Both components utilize the `fetch` API to retrieve data from the GitHub repository. The constructed GitHub API URLs are based on the provided `username`, `repo`, and file paths, ensuring accurate data retrieval.

### Running the Application Locally

To run Markdown Renderer locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Start the development server using `npm start`.
5. Open `http://localhost:3000` in your web browser to view the application.

### Contributions

Contributions to Markdown Renderer are encouraged! Users are welcome to submit suggestions, bug reports, or enhancements via GitHub issues or pull requests.

### License

This project is licensed under the [MIT License](LICENSE).
