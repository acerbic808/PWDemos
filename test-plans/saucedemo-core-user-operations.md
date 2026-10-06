# SauceDemo Core User Operations Test Plan

## Application Overview

Test the five core customer operations on the SauceDemo Swag Labs demo storefront: sign in, browse and sort products, manage the cart, enter checkout details and review an order, and place an order. Use a fresh browser context and application state for each test. The standard demo account is standard_user with password secret_sauce; test data is disposable.

## Test Scenarios

### 1. Account Access

**Seed:** `tests/seed.spec.ts`

#### 1.1. Sign in with valid credentials and reject invalid credentials

**File:** `tests/saucedemo/account-access.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com in a fresh browser context.
    - expect: The Swag Labs login form is displayed with username and password fields and a Login button.
  2. Enter an invalid username and password, then select Login.
    - expect: The user remains on the login page.
    - expect: A visible login error is displayed and no inventory page is opened.
  3. Replace the values with standard_user and secret_sauce, then select Login.
    - expect: The user is signed in and navigated to the inventory page.
    - expect: The Products heading and product catalog are visible.

### 2. Product Discovery

**Seed:** `tests/seed.spec.ts`

#### 2.1. Browse products, sort by price, and inspect product details

**File:** `tests/saucedemo/product-discovery.spec.ts`

**Steps:**
  1. Open the site in a fresh context and sign in with standard_user / secret_sauce.
    - expect: The inventory page displays six product items and a sort control.
  2. Choose Price (low to high) in the product sort control.
    - expect: Products are ordered by ascending displayed price; Sauce Labs Onesie ($7.99) appears before Sauce Labs Bike Light ($9.99), and Sauce Labs Fleece Jacket ($49.99) appears last.
  3. Open the Sauce Labs Backpack product details.
    - expect: The product detail page shows the matching product name, description, price, image, Add to cart button, and Back to products navigation.
  4. Return to the inventory page.
    - expect: The catalog is displayed again and the cart remains empty.

### 3. Cart Management

**Seed:** `tests/seed.spec.ts`

#### 3.1. Add multiple products, verify cart contents, remove one, and continue shopping

**File:** `tests/saucedemo/cart-management.spec.ts`

**Steps:**
  1. Open the site in a fresh context and sign in with standard_user / secret_sauce.
    - expect: The inventory page is displayed and the cart badge is empty.
  2. Add Sauce Labs Backpack and Sauce Labs Bike Light to the cart.
    - expect: Each product action changes to Remove.
    - expect: The cart badge shows 2.
  3. Open the cart.
    - expect: The cart lists exactly the Backpack and Bike Light, each with quantity 1 and the correct displayed price.
  4. Remove the Bike Light.
    - expect: Only the Backpack remains in the cart and the badge updates to 1.
  5. Select Continue Shopping.
    - expect: The inventory page is shown and the Backpack remains in the cart.

### 4. Checkout Details and Review

**Seed:** `tests/seed.spec.ts`

#### 4.1. Validate required checkout information and review order totals

**File:** `tests/saucedemo/checkout-validation-review.spec.ts`

**Steps:**
  1. Open the site in a fresh context, sign in with standard_user / secret_sauce, add the Backpack, open the cart, and select Checkout.
    - expect: Checkout: Your Information is displayed with First Name, Last Name, Zip/Postal Code, Cancel, and Continue controls.
  2. Leave all checkout fields blank and select Continue.
    - expect: Checkout does not advance.
    - expect: A visible validation error indicates that First Name is required.
  3. Enter Alex as First Name, Tester as Last Name, and 10001 as Zip/Postal Code, then select Continue.
    - expect: The checkout overview is displayed.
    - expect: The overview contains the Backpack with quantity 1 and its $29.99 item price.
    - expect: Payment and shipping information are displayed, along with item total, tax, and final total.
    - expect: For the Backpack-only cart, the displayed total is $32.39.

### 5. Order Completion

**Seed:** `tests/seed.spec.ts`

#### 5.1. Complete a purchase and verify the confirmation state

**File:** `tests/saucedemo/order-completion.spec.ts`

**Steps:**
  1. Open the site in a fresh context and sign in with standard_user / secret_sauce.
    - expect: The inventory page is displayed with an empty cart.
  2. Add Sauce Labs Backpack, open the cart, select Checkout, enter Alex / Tester / 10001, and continue to the overview.
    - expect: The overview shows the Backpack, quantity 1, and total $32.39.
  3. Select Finish.
    - expect: The Checkout: Complete! page is displayed with the Thank you for your order! heading and dispatch confirmation message.
    - expect: The cart badge is empty after placing the order.
  4. Select Back Home.
    - expect: The inventory page is displayed and the cart remains empty.
