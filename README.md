## Install Dependencies

Run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#Solution Explanation

The application uses React for building a dynamic and responsive user interface. It consists of three main components: App, TaskList, and TaskCard. The App component serves as the parent component, managing the state of task lists and implementing core functionalities like adding, updating, deleting, and moving tasks. The TaskList component displays individual task lists and delegates tasks to the TaskCard component.

The TaskCard component represents each task with its title, description, and buttons for updating, deleting, and moving. The user can interact with these buttons to perform the respective actions on tasks.

The integration of the xlsx library allows the application to export the entire task list to an Excel file. When the "Export to Excel" button is clicked, the data is collected, transformed into Excel format, and then downloaded as an Excel file.

In summary, this application offers a streamlined way to manage tasks in different stages while providing a convenient export feature for reporting and record-keeping.
