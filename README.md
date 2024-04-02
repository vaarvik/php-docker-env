# PHP Docker Environment

This project provides a Docker-based environment for PHP development with Nginx and MariaDB. It offers a convenient setup for running PHP applications in a local development environment using Docker containers.

## Prerequisites

Before getting started, make sure you have Docker and Docker Compose installed on your system. If not, you can download and install them from the official Docker website:

-   [Docker Installation Guide](https://docs.docker.com/get-docker/)
-   [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

Also make sure you have the latest LTS version of Node.js installed and added npm to your PATH:

-   [Node.js Download](https://nodejs.org/en/download)

## Getting Started

To set up the PHP Docker environment, follow these steps:

1. **Clone the Repository:** Clone this repository to your local machine.

2. **Navigate to the Project Directory:** Open a terminal window and change the directory to the root of the cloned repository.

3. **Start Docker Containers:** Run the following command to start the Docker containers defined in the `docker-compose.yml` file:

    ```
    docker-compose up -d
    ```

4. **Access the Application:** Once the containers are up and running, you can access your PHP application via a web browser at `http://127.0.0.1`. Note that Nginx's welcome screen may be displayed at `http://localhost`.
5. **Navigate to your theme folder:** In the same terminal window, change the directory to the mytheme theme folder:
    ```
    cd app/public/wp-content/themes/mytheme
    ```
6. **Install dependencies:** Use npm (Node Package Manager) to install the necessary dependencies for the theme located in directory. These dependencies typically include libraries and tools required for tasks like compiling Sass to CSS, minifying JavaScript, and optimizing images.

    ```
    npm i
    ```

7. **Run gulp and live server:** Execute the gulp command to run Gulp tasks configured for your theme. Gulp automates various development tasks such as compiling SASS to CSS and minifying JavaScript. Additionally, it starts a live server, enabling real-time updates and browser synchronization during development.

    ```
    npm start
    ```

A new window should open, showing a live server of http://127.0.0.1.

1. **Setup WordPress:** If the website is new and don't have a wp-config.php (not yet linked to a database), you'll need to provide database information found in `docker-compose.yaml` for the initial WordPress setup. Remember, the username and password provided are for local development only:

    - Database Name: `wp`
    - Database Username: `wp`
    - Database Password: `secret`
    - Database Host: `mysql`

## Configuration

-   **Nginx Configuration:** You can customize the Nginx configuration by modifying the `nginx.conf` file located in the project directory. Changes made to this file will be reflected in the Nginx container.

-   **PHP Configuration:** PHP configuration can be adjusted by modifying the `PHP.Dockerfile` located in the project directory. This file defines the PHP Docker image used and allows for additional PHP extensions or configurations to be included.

-   **MySQL Configuration:** MySQL database credentials and settings can be modified in the `docker-compose.yml` file under the `mysql` service section. You can change the database name, user credentials, and other settings as needed.

## Services

-   **web:** Nginx web server container exposing port 80.
-   **php:** PHP-FPM container with PHP application files mounted.
-   **mysql:** MariaDB container providing the database service, accessible on port 3306.

## Persistence

Persistent data for the MySQL database is stored in a Docker volume named `mysqldata`. This ensures that data persists between container restarts.

## Cleanup

To stop and remove the Docker containers created by this environment, run the following command in the project directory:
`docker-compose down`.

## Acknowledgments

Special thanks to Tom Butler for his article "[Setting Up a Modern PHP Development Environment with Docker](https://www.sitepoint.com/docker-php-development-environment/)." This project is based on his setup.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute it according to your needs.
