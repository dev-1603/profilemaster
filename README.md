# Profile Master 
# Profile Master

Profile Master is a web application that displays user profiles and their respective posts fetched from the JSONPlaceholder API. It provides a comprehensive view of user information along with their posts, making it easy to browse and manage user data.

## Features

- **User Profiles**: View detailed information about each user, including name, email, and address.
- **User Posts**: Browse posts made by each user, with titles and content displayed in an organized manner.
- **Responsive Design**: Optimized for both desktop and mobile viewing experiences.
- **API Integration**: Seamlessly fetches data from the JSONPlaceholder API to ensure up-to-date information.

## Technologies Used

- **Frontend**: Built with Vue.js for a reactive and dynamic user interface.
- **Styling**: Utilizes Vuetify for a consistent and visually appealing design.
- **State Management**: Managed with Pinia for efficient and modular state handling.
- **Routing**: Implemented with Vue Router for smooth navigation between user profiles and posts.

## Getting Started

To get started with Profile Master, follow the development setup instructions below to clone the repository, install dependencies, and run the development server.

## API Reference

Profile Master uses the following endpoints from the JSONPlaceholder API:

- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Posts**: `https://jsonplaceholder.typicode.com/posts`

These endpoints provide the necessary data to populate user profiles and their respective posts within the application.

## Development Setup

To set up the development environment for this repository, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary environment variables as specified in the `.env.example` file.

4. **Run the development server:**
    ```sh
    npm run dev
    ```

## Commands

- **Start the development server:**
  ```sh
  npm run dev
  ```

- **Build the project for production:**
  ```sh
  npm run build
  ```

- **Run tests:**
  ```sh
  npm test
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

- **Format the code:**
  ```sh
  npm run format
  ```

## Important Note

I have used Pinia for state management instead of Vuex due to some reactivity issues with Vuex getters when used with the Composition API. However, if you would like to check the implementation, you can see the folder `vuexstores`.


## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
