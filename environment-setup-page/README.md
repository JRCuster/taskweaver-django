# Environment Setup Page

## Overview
The Environment Setup Page is a web application designed to simplify the process of generating Docker configuration files. It provides a user-friendly interface for inputting environment variables, which are then used to create a `docker-compose-services.yml` and a `Dockerfile.1`.

## Setup

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository or download the source code.
2. Navigate to the `environment-setup-page` directory.
3. Run `npm install` to install the required dependencies.

### Running the Application
1. Start the server by running `npm start`.
2. Open a web browser and navigate to `http://localhost:3000`.
3. Fill out the form with the necessary Docker configuration details.
4. Submit the form to generate the `docker-compose-services.yml` and `Dockerfile.1`.
5. The generated configuration will be displayed on the page.

## Usage
The application currently supports the following fields for Docker configuration:
- Service Name: The name of the Docker service.
- Image Name: The Docker image to use for the service.
- Port Mapping: The port mapping for the service (e.g., `80:80`).
- Environment Variable: An environment variable for the service (e.g., `NODE_ENV=production`).

Additional fields and features can be added as needed by modifying the `index.ejs` form and the server logic in `app.js`.

## Contributing
Contributions to the project are welcome. Please ensure that your code adheres to the existing style and that all tests pass before submitting a pull request.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.