# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js applications: missing error handling in route handlers.

The `bug.js` file contains the erroneous code that lacks checks for invalid user IDs.  The `bugSolution.js` demonstrates how to properly handle such errors.

## Bug Description

The route handler for `/users/:id` directly uses the `req.params.id` without any validation or error handling. If an invalid ID is provided, the application might crash or return unexpected results.

## Solution

The solution involves adding error handling to check for invalid IDs and respond appropriately, preventing crashes and providing user-friendly error messages.

## How to reproduce the bug

1. Clone the repository
2. Run `npm install express`
3. Run `node bug.js`
4. Send a request to `/users/123` (valid id) and `/users/abc` (invalid id).  Observe the response for the second request.