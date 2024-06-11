### API Setup

The API needed for these labs can be started using the following steps.

> Note: You may already have it running, please check before attempting to start it again.

1. Open a terminal in the `learn-to-code\api` directory
1. Run the command.
   ```
   npm run placeholder
   ```
1. Your API should now be available at:
   ```
   http://localhost:3000/users/
   ```

### Lab Exercise 1: Displaying User Data in a Table

**Objective:** Create an `index.html` page that fetches and displays user data from a REST API in the form of rows in a table.

**Requirements:**

1. **HTML Structure (`index.html`):**

   - Create an HTML file named `index.html`.
   - Set up the basic HTML structure with a `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags.
   - Include a `<table>` element within the body to display the user data.

2. **CSS Styling (`bootstrap.css`):**

   - Link the bootstrap CSS file to the HTML file.
   - Style the table to have a clean and readable layout by adding the appropriate bootstrap classes. Consider using alternating row colors for better visibility.

3. **JavaScript Logic (`index.js`):**

   - Create a new file named `index.js`.
   - Link the JavaScript file to the HTML file.
   - Write a JavaScript function named `fetchAndDisplayUserData()` that:
     - Makes a GET request to your provided API endpoint.
     - Retrieves the user data.
     - Dynamically generates HTML table rows for each user.
     - Appends the generated rows to the table in the HTML.
   - Call this function when the page loads to fetch and display the initial user data.

4. **Testing:**

   - Open the HTML file in a web browser.
   - Verify that the user data is fetched and displayed in rows within the table.

5. **Optional Enhancements:**
   - Add loading indicators while waiting for the API response.
   - Handle errors gracefully, displaying a message if the API request fails.

**Submission with Git:**

- Commit your changes with meaningful messages.
- Push the changes to your existing GitHub repository.

---

### Lab Exercise 2: Adding Navigation Links in `index.html`

**Objective:** Enhance the `index.html` page by adding navigation links to `add.html`, `edit.html`, and `delete.html` pages.

**Requirements:**

1. **HTML Structure (`index.html`):**

   - Open the existing `index.html` file.
   - Above the user table, add a link to navigate to the `add.html` page. For example: `[Add User](add.html)`.
   - In each row of the user table, add links to navigate to the `edit.html` and `delete.html` pages for the corresponding user. For example:
     ```html
     <tr>
       <!-- User Data Cells -->
       <td>John Doe</td>
       <td>john.doe@example.com</td>
       <!-- Add Edit and Delete Links, there will need to be an `a` tag to correctly create the link -->
       <td>[Edit](edit.html?id=1)</td>
       <td>[Delete](delete.html?id=1)</td>
     </tr>
     ```

2. **JavaScript Logic (`index.js`):**

   - No significant changes needed for this step.
   - Ensure that the links in the user table are properly formatted with the user's `id` parameter.

3. **Testing:**

   - Open the `index.html` file in a web browser.
   - Verify that the "Add User" link above the table correctly navigates to the `add.html` page.
   - Verify that the "Edit" and "Delete" links in each row navigate to the respective `edit.html` and `delete.html` pages, passing the user's `id` as a parameter.

**Submission with Git:**

- Commit your changes with meaningful messages.
- Push the changes to your existing GitHub repository.

---

### Lab Exercise 3: Adding User Data via Form

**Objective:** Create an `add.html` page with a form that allows users to enter information. Use JavaScript to handle the client-side processing, make an HTTP POST request to save the data to the API, and redirect the user to the `index.html` page on success.

**Requirements:**

1. **HTML Structure (`add.html`):**

   - Create an HTML file named `add.html`.
   - Set up the basic HTML structure with a `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags.
   - Include a `<form>` element within the body to collect user information.
   - Add input fields for each piece of user information (name, username, email, etc.).
     > DO NOT include form fields for the child objects of the user (address, company)
   - Include a save button.
     > Hint: the `button` should have an explicit `type="button"` attribute so the form doesn't submit the data to the web server. We will handle the data in the browser using JavaScript

2. **JavaScript Logic (`add.js`):**

   - Create a new file named `add.js`.
   - Link the JavaScript file to the HTML file.
   - Update the `add.js` file to include a new function, `addUserData()`.
   - Write the `addUserData()` function to:
     - Capture the values entered in the form fields and display it in the browser's console.
   - Have the function run when the user clicks the save button.

3. **Testing:**

   - Open the `add.html` file in a web browser.
   - Open the browser's developer tools and go to the console tab.
   - Fill out the form.
   - Click the save button.
   - Verify that the data entered on the form is logged to the console.

4. **Additional JavaScript Logic (`add.js`):**
   - Update the `addUserData()` function to:
     - make an HTTP POST request to save the data to the API, and redirect the user to the `index.html` page on success
5. **Testing:**

   - Open the `add.html` file in a web browser.
   - Open the browser's developer tools and go to the console tab.
   - Fill out the form.
   - Click the save button.
   - Verify that the user is redirected to `index.html` and that the new user is displayed in a table row.

6. **Optional Enhancements:**
   - Display a message that the data was successfully saved on the `index.html` page.
   - Handle errors gracefully, displaying a message on `add.html` if the API request fails.

### Lab Exercise 4: Editing User Data via Form

**Objective:** Create an `edit.html` page that allows users to edit existing user data. Use a form for data input, handle client-side processing with JavaScript, make an HTTP PUT request to update the data on the API, and redirect to `index.html` on success.

**Requirements:**

1. **HTML Structure (`edit.html`):**

   - Create an HTML file named `edit.html`.
   - Set up the basic HTML structure with a `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags.
   - Include a `<form>` element within the body to edit user information.
   - Include a save button.
     > Hint: the `button` should have an explicit `type="button"` attribute so the form doesn't submit the data to the web server. We will handle the data in the browser using JavaScript
   - Pre-fill the form fields with the existing user data.

2. **JavaScript Logic (`edit.js`):**

   - Create a new file named `edit.js`.
   - Link the JavaScript file to the HTML file.
   - Update the `edit.js` file to include a new function, `loadUserData()`.
   - Write the `loadUserData()` function to:
     - Fetch the existing user data using the provided `id` parameter.
     - Populate the form fields with the fetched user data.
   - Call the function

   - Update the `edit.js` file to include a new function, `editUserData()`.
   - Write the `editUserData()` function to:
     - Capture the edited values from the form fields.
     - Make an HTTP PUT request to your API endpoint to update the user data.
     - Redirect the user to `index.html` on success.

3. **Testing:**

   - Open the `edit.html` file in a web browser, passing a sample `id` parameter in the URL.
   - Verify that the form is pre-filled with existing user data.
   - Edit the information in the form and submit it.
   - Ensure redirection to `index.html` after a successful submission.
   - Confirm that the edited data is successfully displayed in the table.

4. **Optional Enhancements:**
   - Implement form validation to ensure all required fields are filled before submission.
   - Provide feedback to the user after a successful submission.
   - Handle cases where the user data to be edited does not exist.

**Submission with Git:**

- Commit your changes with meaningful messages.
- Push the changes to your existing GitHub repository.

---

### Lab Exercise 5: Deleting User Data via Confirmation

**Objective:** Create a `delete.html` page that asks users for confirmation before deleting a user. Upon confirmation, use JavaScript to make an HTTP DELETE request to remove the user data from the API and redirect to `index.html` on success.

**Requirements:**

1. **HTML Structure (`delete.html`):**

   - Create an HTML file named `delete.html`.
   - Set up the basic HTML structure with a `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags.
   - Display a confirmation message asking, "Are you sure you want to delete this user?"
   - Include buttons for "Yes" and "Cancel."

2. **JavaScript Logic (`delete.js`):**

   - Create a new file named `delete.js`.
   - Link the JavaScript file to the HTML file.
   - Update the `delete.js` file to include a new function, `deleteUserData()`.
   - Write the `deleteUserData()` function to:
     - Fetch the existing user data using the provided `id` parameter.
     - Display the confirmation message.
     - If the user clicks "Yes," make an HTTP DELETE request to your API endpoint to delete the user data.
     - Redirect the user to `index.html` on success.

3. **Testing:**

   - Open the `delete.html` file in a web browser, passing a sample `id` parameter in the URL.
   - Confirm that the confirmation message is displayed.
   - Click "Yes" to trigger the deletion.
   - Confirm redirection to `index.html` after a successful deletion.
   - Verify that the user is no longer displayed in the table.

4. **Optional Enhancements:**
   - Display a message that the data was successfully deleted on the `index.html` page.
   - Handle errors gracefully, displaying a message on `delete.html` if the API request fails.

**Submission with Git:**

- Commit your changes with meaningful messages.
- Push the changes to your existing GitHub repository.

---
