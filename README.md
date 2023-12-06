# Hotel Management System
This is a Hotel Management System Web application using MERN Stack. JavaScript is used for the Client Side and TypeScript is used in Backend/Server Side for build API.


## Website Live Link:
https://hotel-redisons.web.app/

## Admin Credential
email: uttamsdev@gmail.com
password: uttamsaha
## Project Features

### User and Authentication Features
1. **User Roles:**
   - Two types of roles: user/customer and administrator.

2. **Account Management:**
   - Create a new user account.
   - Verify email during the account creation process.

3. **Authentication Options:**
   - Login with email and password.
   - Login with Google.

4. **Password Management:**
   - Reset password functionality.
5. **Authorization:**
    - Require Auth, isAdmin Check
### Room Booking System Features
5. **Dynamic Room Booking:**
   - Handle room booking dynamically.

6. **Availability Checking:**
   - Users can check available rooms for a selected Check-In and Check-Out date range.
   - Display only available room options for the selected dates.
   - Lastly Users can order/book room from the available room result list.

7. **Booking Confirmation:**
   - Users receive instant confirmation emails for room bookings.

8. **Room Exploration:**
   - Users can explore and check the availability of all rooms from all room navigation.
   - Check availability for a specific single room for a given date range.

### Food Booking Features
9. **Food Ordering:**
   - Users can order food.

10. **Food Booking Confirmation:**
    - Users receive confirmation emails for food bookings.

###  Dashboard Features
11. **Dashboard Overview:**
    - Beautiful user dashboard.
    - Beautiful admin dashboard.

12. **Account Information:**
    - Users and admin both can view their account-related information from the dashboard.

13. **Order History:**
    - Users can see their ordered rooms and foods from their dashboard.

14. **Order Management:**
    - Users can cancel/delete their orders that they had done previously.

### Admin Dashboard Features
15. **Order Tracking:**
    - Admin can view all room booking and food booking orders/records.

16. **Order Management (Admin):**
    - Admin can delete any room and food booking order.

17. **Room and Food Management (Admin):**
    - Admin can view all rooms and foods offered by the hotel.
    - Admin can delete a room and food.
    - Admin can update rooms and foods information.

18. **Addition and Deletion (Admin):**
    - Admin can add new rooms and new foods, including uploading photos functionality.

19. **User Management (Admin):**
    - Admin can see all users of the system from the dashboard.

## Technologies Used:
* HTML
* Tailwind CSS
* ReactJS
* JavaScript(Client Side)
* TypeScript(for building api/backend)
* Express JS
* Mongoose (Modular Pattern, Interface, Schema, Model, Data Validation)
* MongoDB
* Firebase
* React Firebase Hooks
* React Router
* SweetAlert
* NodeMailer
* ESLint for find and fix problems

# API Endpoints
### Add Room:
```bash
POST /api/v1/products/add-room
```
### Get all room:
```bash
GET /api/v1/products/rooms
```
## Get single Room:
```bash
GET /api/v1/products/rooms/roomId
```
### Delete a room:
```bash
DELETE /api/v1/products/rooms/:roomId
```
### Search Room Availability:
```bash
GET /api/v1/products/search-available-rooms
```

### Update room:
```bash
PUT /api/v1/products/rooms/:roomId
```

### Order room:
```bash
POST /api/v1/orders/order-room
```

### Get all room order:
```bash
GET /api/v1/orders/room-orders
```
### Get all room by email::
```bash
GET /api/v1/orders/room/:email
```

### Delete room order:
```bash
DELETE /api/v1/orders/delete-room-order/:roomId
```

### Store User info
```bash
POST /api/v1/users/store-user
```

### Get a single user:
```bash
GET /api/v1/users/:email
```

### Get all users:
```bash
GET /api/v1/users/get-users
```

### Check Admin:
```bash
GET /api/v1/users/admin/:email
```

### Add Food
```bash
POST /api/v1/foods/add-food
```

### Get all foods:
```bash
GET /api/v1/foods/all-foods
```

### Get single Food:
```bash
GET /api/v1/foods/:foodId
```

### Delete food:
```bash
DELETE /api/v1/foods/:foodId
```

### Update food:
```bash
PUT /api/v1/foods/:foodId
```

### Order food:
```bash
POST /api/v1/order-food/create-order
```

### Get all food orders
```bash
GET /api/v1/order-food/all-foods-orders
```

### Get particular users food order:
```bash
GET /api/v1/order-food/:email
```
### Delete food order:
```bash
DELETE /api/v1/order-food/:foodId
```

### Search Single Room Available:
```bash
GET /api/v1/products/search-single-available-rooms
```