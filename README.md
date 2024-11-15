---

# GitHub Repo Metrics

This Node.js application fetches key GitHub repository metrics, such as deployment frequency and lead time to change. It leverages the GitHub API and can be customized to fetch data for different repositories by specifying a GitHub username and repository name.

## Features

- Fetches repository list for a user
- Calculates:
  - **Deployment Frequency**: Number of deployments over a defined period
  - **Lead Time to Change**: Average time between the first commit and the deployment
- Configurable through environment variables
- Includes unit and integration tests

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or above)
- [GitHub Personal Access Token](https://github.com/settings/tokens) with `repo` permissions
- [Git](https://git-scm.com/) (for version control)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root to store sensitive information:

```bash
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_API_URL=https://api.github.com
```

### 4. Run the Application

You can start the application with:

```bash
npm start
```

This will start the server on `http://0.0.0.0:3000`. To change the port, modify the `PORT` environment variable.

### 5. Build the Project

To build the project, run:

```bash
npm run build
```

This will create a `dist` folder containing all application files.

## Usage

- **View Repository Metrics**: Visit `http://0.0.0.0:3000/repos` to get metrics for repositories owned by the specified GitHub user.
- **API Endpoint**: Pass the repository name and username as parameters in the request to get specific metrics.

### Example Request

```bash
curl http://0.0.0.0:3000/repos?username=YOUR_GITHUB_USERNAME
```

## Testing

The application includes unit and integration tests using Jest and Supertest. To run tests:

- **All tests**:

  ```bash
  npm test
  ```

- **Unit tests**:

  ```bash
  npm run test:unit
  ```

- **Integration tests**:

  ```bash
  npm run test:integration
  ```

### Sample Test Commands

Run integration tests and confirm that the deployment frequency and lead time to change metrics are computed correctly for a test repository.

## Project Structure

```
|-- src
|   |-- app.js                  # Entry point of the application
|   |-- services
|       |-- metricsService.js   # Logic for calculating deployment frequency and lead time
|-- tests
|   |-- unit
|       |-- metricsService.test.js  # Unit tests for metrics calculations
|   |-- integration
|       |-- app.test.js             # Integration tests for API endpoints
|-- package.json                  # Lists dependencies and scripts
|-- README.md                     # Documentation for the project
```

## Dependencies

- **axios**: For making HTTP requests to the GitHub API
- **dotenv**: To manage environment variables
- **express**: For creating the server and handling routes
- **jest**: For unit and integration testing
- **supertest**: For testing HTTP requests

## License

This project is licensed under the MIT License.

---
