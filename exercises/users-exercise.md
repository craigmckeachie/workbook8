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

2. **CSS Styling (`styles.css`):**

   - Create a new file named `styles.css`.
   - Link the CSS file to the HTML file.
   - Style the table to have a clean and readable layout. Consider using alternating row colors for better visibility.

3. **JavaScript Logic (`script.js`):**

   - Create a new file named `script.js`.
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
   - Explore additional API endpoints or features to fetch more user details.

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
       <!-- Add Edit and Delete Links -->
       <td>[Edit](edit.html?id=1)</td>
       <td>[Delete](delete.html?id=1)</td>
     </tr>
     ```

2. **JavaScript Logic (`script.js`):**

   - No significant changes needed for this step.
   - Ensure that the links in the user table are properly formatted with the user's `id` parameter.

3. **Testing:**

   - Open the `index.html` file in a web browser.
   - Verify that the "Add User" link above the table correctly navigates to the `add.html` page.
   - Verify that the "Edit" and "Delete" links in each row navigate to the respective `edit.html` and `delete.html` pages, passing the user's `id` as a parameter.

4. **Optional Enhancements:**
   - Style the links for better visibility.
   - Consider adding confirmation dialogs for delete links to confirm user intentions.

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
   - Include a save button.
     > Hint: the `button` should have an explicit `type="button"` attribute so the form doesn't submit the data to the web server. We will handle the data in the browser using JavaScript

2. **JavaScript Logic (`script.js`):**
   - Update the existing `script.js` file to include a new function, `addUserData()`.
   - Write the `addUserData()` function to:
     - Capture the values entered in the form fields.

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

2. **JavaScript Logic (`script.js`):**

   - Update the existing `script.js` file to include a new function, `editUserData()`.
   - Write the `editUserData()` function to:
     - Fetch the existing user data using the provided `id` parameter.
     - Populate the form fields with the fetched user data.
     - Capture the edited values from the form fields.
     - Make an HTTP PUT request to your API endpoint to update the user data.
     - Redirect the user to `index.html` on success.

3. **Testing:**

   - Open the `edit.html` file in a web browser, passing a sample `id` parameter in the URL.
   - Verify that the form is pre-filled with existing user data.
   - Edit the information in the form and submit it.
   - Confirm that the edited data is successfully updated on the API.
   - Ensure redirection to `index.html` after a successful submission.

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

2. **JavaScript Logic (`script.js`):**

   - Update the existing `script.js` file to include a new function, `deleteUserData()`.
   - Write the `deleteUserData()` function to:
     - Fetch the existing user data using the provided `id` parameter.
     - Display the confirmation message.
     - If the user clicks "Yes," make an HTTP DELETE request to your API endpoint to delete the user data.
     - Redirect the user to `index.html` on success.

3. **Testing:**

   - Open the `delete.html` file in a web browser, passing a sample `id` parameter in the URL.
   - Confirm that the confirmation message is displayed.
   - Click "Yes" to trigger the deletion.
   - Verify that the user data is removed from the API.
   - Confirm redirection to `index.html` after a successful deletion.

4. **Optional Enhancements:**
   - Style the confirmation message for better visibility.
   - Consider adding a timer to automatically redirect to `index.html` after a certain period if the user does not respond.

**Submission with Git:**

- Commit your changes with meaningful messages.
- Push the changes to your existing GitHub repository.

---
