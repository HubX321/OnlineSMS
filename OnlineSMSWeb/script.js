// ye cards bne chye aur unka data wghera ye h 
const tablesData = {
    //card ka nam
    customers: {
        name: "Customers",
        icon: "👤",
        data: [
            { customer_id: 101, first_name: "Rajasdasd", last_name: "Verma", email: "raj.verma@email.com", phone: "9123456780", address: "Kolkata", join_date: "2023-01-10" },
            { customer_id: 102, first_name: "Priya", last_name: "Sharma", email: "priya.sharma@mail.com", phone: "9876543210", address: "Delhi", join_date: "2023-01-15" },
            { customer_id: 103, first_name: "Amit", last_name: "Patel", email: "amit.patel@example.com", phone: "9765432109", address: "Mumbai", join_date: "2023-02-01" },
            { customer_id: 104, first_name: "Sneha", last_name: "Singh", email: "sneha.singh@web.com", phone: "9654321098", address: "Bangalore", join_date: "2023-02-10" },
            { customer_id: 105, first_name: "Vikram", last_name: "Malhotra", email: "vikram@xyz.com", phone: "9543210987", address: "Chennai", join_date: "2023-03-05" },
            { customer_id: 106, first_name: "Ananya", last_name: "Gupta", email: "ananya.g@mail.com", phone: "9432109876", address: "Hyderabad", join_date: "2023-03-12" },
            { customer_id: 107, first_name: "Rohan", last_name: "Mehta", email: "rohan.m@email.com", phone: "9321098765", address: "Pune", join_date: "2023-04-01" },
            { customer_id: 108, first_name: "Ishita", last_name: "Reddy", email: "ishita.r@example.com", phone: "9210987654", address: "Ahmedabad", join_date: "2023-04-18" },
            { customer_id: 109, first_name: "Arjun", last_name: "Kumar", email: "arjun.k@web.com", phone: "9109876543", address: "Jaipur", join_date: "2023-05-02" },
            { customer_id: 110, first_name: "Divya", last_name: "Joshi", email: "divya.j@mail.com", phone: "9098765432", address: "Lucknow", join_date: "2023-05-20" },
            { customer_id: 111, first_name: "Karan", last_name: "Thakur", email: "karan.t@email.com", phone: "8987654321", address: "Chandigarh", join_date: "2023-06-05" },
            { customer_id: 112, first_name: "Pooja", last_name: "Mishra", email: "pooja.m@example.com", phone: "8897654321", address: "Bhopal", join_date: "2023-06-15" },
            { customer_id: 113, first_name: "Ravi", last_name: "Yadav", email: "ravi.y@web.com", phone: "8796543210", address: "Patna", join_date: "2023-07-01" },
            { customer_id: 114, first_name: "Neha", last_name: "Desai", email: "neha.d@mail.com", phone: "8695432109", address: "Surat", join_date: "2023-07-22" },
            { customer_id: 115, first_name: "Sanjay", last_name: "Rao", email: "sanjay.r@email.com", phone: "8594321098", address: "Kanpur", join_date: "2023-08-10" },
            { customer_id: 116, first_name: "Meera", last_name: "Chauhan", email: "meera.c@example.com", phone: "8493210987", address: "Nagpur", join_date: "2023-08-28" },
            { customer_id: 117, first_name: "Vivek", last_name: "Saxena", email: "vivek.s@web.com", phone: "8392109876", address: "Indore", join_date: "2023-09-05" },
            { customer_id: 118, first_name: "Shruti", last_name: "Sinha", email: "shruti.s@mail.com", phone: "8291098765", address: "Thane", join_date: "2023-09-18" },
            { customer_id: 119, first_name: "Alok", last_name: "Trivedi", email: "alok.t@email.com", phone: "8190987654", address: "Visakhapatnam", join_date: "2023-10-01" },
            { customer_id: 120, first_name: "Bhavna", last_name: "Shah", email: "bhavna.s@example.com", phone: "8098765432", address: "Coimbatore", join_date: "2023-10-15" }
        ],
        //ye ye cols hn ge card k data mai
        columns: ["Customer ID", "First Name", "Last Name", "Email", "Phone", "Address", "Join Date"]
    },

    products: {
        name: "Products",
        icon: "📑",
        data: [
            { product_id: 1001, name: "Wireless Earbuds", description: "Bluetooth 5.0, 20hr battery", price: 1999.99, stock: 50, category_id: 17 },
            { product_id: 1002, name: "Cotton T-Shirt", description: "Men's round neck, medium", price: 599.50, stock: 100, category_id: 8 },
            { product_id: 1003, name: "Non-Stick Fry Pan", description: "24cm, induction compatible", price: 899.00, stock: 30, category_id: 12 },
            { product_id: 1004, name: "Mystery Novel", description: "Bestseller thriller", price: 299.00, stock: 80, category_id: 13 },
            { product_id: 1005, name: "Face Moisturizer", description: "SPF 30, 50ml", price: 449.75, stock: 60, category_id: 15 },
            { product_id: 1006, name: "Smartphone X", description: "6.5\" display, 128GB", price: 18999.00, stock: 25, category_id: 6 },
            { product_id: 1007, name: "Laptop Pro", description: "Intel i7, 16GB RAM", price: 74999.00, stock: 15, category_id: 7 },
            { product_id: 1008, name: "Women's Jeans", description: "Slim fit, blue", price: 1299.00, stock: 40, category_id: 9 },
            { product_id: 1009, name: "Running Shoes", description: "Men's size 9, black", price: 1999.00, stock: 35, category_id: 10 },
            { product_id: 1010, name: "Coffee Table", description: "Wooden, 90x50cm", price: 5999.00, stock: 10, category_id: 11 },
            { product_id: 1011, name: "Cookware Set", description: "5 pieces, stainless steel", price: 3999.00, stock: 20, category_id: 12 },
            { product_id: 1012, name: "Science Encyclopedia", description: "Illustrated edition", price: 999.00, stock: 50, category_id: 14 },
            { product_id: 1013, name: "Lipstick Set", description: "6 matte shades", price: 1199.00, stock: 45, category_id: 16 },
            { product_id: 1014, name: "Tablet Mini", description: "8\" display, 64GB", price: 14999.00, stock: 18, category_id: 18 },
            { product_id: 1015, name: "Kids T-Shirt", description: "Cotton, cartoon print", price: 399.00, stock: 70, category_id: 19 },
            { product_id: 1016, name: "Wall Clock", description: "Modern design, silent", price: 1299.00, stock: 25, category_id: 20 },
            { product_id: 1017, name: "Gaming Headset", description: "7.1 surround sound", price: 2999.00, stock: 30, category_id: 17 },
            { product_id: 1018, name: "Formal Shirt", description: "Men's slim fit", price: 899.00, stock: 55, category_id: 8 },
            { product_id: 1019, name: "Sunscreen Lotion", description: "SPF 50+, 100ml", price: 599.00, stock: 65, category_id: 15 },
            { product_id: 1020, name: "Desk Lamp", description: "LED, adjustable", price: 799.00, stock: 40, category_id: 20 }
        ],
        columns: ["Product ID", "Name", "Description", "Price (₹)", "Stock", "Category ID"]
    },
    categories: {
        name: "Categories",
        icon: "📋",
        data: [
            { category_id: 1, category_name: "Electronics", parent_category_id: null },
            { category_id: 2, category_name: "Fashion", parent_category_id: null },
            { category_id: 3, category_name: "Home & Kitchen", parent_category_id: null },
            { category_id: 4, category_name: "Books", parent_category_id: null },
            { category_id: 5, category_name: "Beauty", parent_category_id: null },
            { category_id: 6, category_name: "Mobiles", parent_category_id: 1 },
            { category_id: 7, category_name: "Laptops", parent_category_id: 1 },
            { category_id: 8, category_name: "Men's Clothing", parent_category_id: 2 },
            { category_id: 9, category_name: "Women's Clothing", parent_category_id: 2 },
            { category_id: 10, category_name: "Footwear", parent_category_id: 2 },
            { category_id: 11, category_name: "Furniture", parent_category_id: 3 },
            { category_id: 12, category_name: "Cookware", parent_category_id: 3 },
            { category_id: 13, category_name: "Fiction", parent_category_id: 4 },
            { category_id: 14, category_name: "Non-Fiction", parent_category_id: 4 },
            { category_id: 15, category_name: "Skincare", parent_category_id: 5 },
            { category_id: 16, category_name: "Makeup", parent_category_id: 5 },
            { category_id: 17, category_name: "Headphones", parent_category_id: 1 },
            { category_id: 18, category_name: "Tablets", parent_category_id: 1 },
            { category_id: 19, category_name: "Kids' Fashion", parent_category_id: 2 },
            { category_id: 20, category_name: "Decor", parent_category_id: 3 }
        ],
        columns: ["Category ID", "Category Name", "Parent Category ID"]
    },
    orders: {
        name: "Orders",
        icon: "🛍️",
        data: [
            { order_id: 5001, customer_id: 101, order_date: "2023-05-01 14:30:00", total_amount: 1999.99, status: "Delivered" },
            { order_id: 5002, customer_id: 102, order_date: "2023-05-02 11:20:00", total_amount: 599.50, status: "Shipped" },
            { order_id: 5003, customer_id: 103, order_date: "2023-05-03 09:45:00", total_amount: 899.00, status: "Pending" },
            { order_id: 5004, customer_id: 104, order_date: "2023-05-05 16:15:00", total_amount: 299.00, status: "Delivered" },
            { order_id: 5005, customer_id: 105, order_date: "2023-05-07 13:20:00", total_amount: 449.75, status: "Cancelled" },
            { order_id: 5006, customer_id: 106, order_date: "2023-05-10 10:30:00", total_amount: 18999.00, status: "Delivered" },
            { order_id: 5007, customer_id: 107, order_date: "2023-05-12 17:45:00", total_amount: 1299.00, status: "Shipped" },
            { order_id: 5008, customer_id: 108, order_date: "2023-05-15 14:00:00", total_amount: 1999.00, status: "Delivered" },
            { order_id: 5009, customer_id: 109, order_date: "2023-05-18 11:10:00", total_amount: 5999.00, status: "Pending" },
            { order_id: 5010, customer_id: 110, order_date: "2023-05-20 09:30:00", total_amount: 3999.00, status: "Delivered" },
            { order_id: 5011, customer_id: 111, order_date: "2023-05-22 15:20:00", total_amount: 999.00, status: "Shipped" },
            { order_id: 5012, customer_id: 112, order_date: "2023-05-25 12:40:00", total_amount: 1199.00, status: "Delivered" },
            { order_id: 5013, customer_id: 113, order_date: "2023-05-28 10:15:00", total_amount: 14999.00, status: "Cancelled" },
            { order_id: 5014, customer_id: 114, order_date: "2023-06-01 14:50:00", total_amount: 399.00, status: "Delivered" },
            { order_id: 5015, customer_id: 115, order_date: "2023-06-05 16:30:00", total_amount: 1299.00, status: "Pending" },
            { order_id: 5016, customer_id: 116, order_date: "2023-06-10 11:45:00", total_amount: 2999.00, status: "Shipped" },
            { order_id: 5017, customer_id: 117, order_date: "2023-06-15 13:20:00", total_amount: 899.00, status: "Delivered" },
            { order_id: 5018, customer_id: 118, order_date: "2023-06-20 09:10:00", total_amount: 599.00, status: "Delivered" },
            { order_id: 5019, customer_id: 119, order_date: "2023-06-25 17:30:00", total_amount: 799.00, status: "Cancelled" },
            { order_id: 5020, customer_id: 120, order_date: "2023-07-01 10:00:00", total_amount: 74999.00, status: "Shipped" }
        ],
        columns: ["Order ID", "Customer ID", "Order Date", "Total Amount (₹)", "Status"]
    },
    order_items: {
        name: "Order Items",
        icon: "📦",
        data: [
            { order_item_id: 7001, order_id: 5001, product_id: 1001, quantity: 1, unit_price: 1999.99 },
            { order_item_id: 7002, order_id: 5002, product_id: 1002, quantity: 1, unit_price: 599.50 },
            { order_item_id: 7003, order_id: 5003, product_id: 1003, quantity: 1, unit_price: 899.00 },
            { order_item_id: 7004, order_id: 5004, product_id: 1004, quantity: 1, unit_price: 299.00 },
            { order_item_id: 7005, order_id: 5005, product_id: 1005, quantity: 1, unit_price: 449.75 },
            { order_item_id: 7006, order_id: 5006, product_id: 1006, quantity: 1, unit_price: 18999.00 },
            { order_item_id: 7007, order_id: 5007, product_id: 1008, quantity: 1, unit_price: 1299.00 },
            { order_item_id: 7008, order_id: 5008, product_id: 1009, quantity: 1, unit_price: 1999.00 },
            { order_item_id: 7009, order_id: 5009, product_id: 1010, quantity: 1, unit_price: 5999.00 },
            { order_item_id: 7010, order_id: 5010, product_id: 1011, quantity: 1, unit_price: 3999.00 },
            { order_item_id: 7011, order_id: 5011, product_id: 1012, quantity: 1, unit_price: 999.00 },
            { order_item_id: 7012, order_id: 5012, product_id: 1013, quantity: 1, unit_price: 1199.00 },
            { order_item_id: 7013, order_id: 5013, product_id: 1014, quantity: 1, unit_price: 14999.00 },
            { order_item_id: 7014, order_id: 5014, product_id: 1015, quantity: 1, unit_price: 399.00 },
            { order_item_id: 7015, order_id: 5015, product_id: 1016, quantity: 1, unit_price: 1299.00 },
            { order_item_id: 7016, order_id: 5016, product_id: 1017, quantity: 1, unit_price: 2999.00 },
            { order_item_id: 7017, order_id: 5017, product_id: 1018, quantity: 1, unit_price: 899.00 },
            { order_item_id: 7018, order_id: 5018, product_id: 1005, quantity: 1, unit_price: 449.75 },
            { order_item_id: 7019, order_id: 5018, product_id: 1019, quantity: 1, unit_price: 599.00 },
            { order_item_id: 7020, order_id: 5020, product_id: 1007, quantity: 1, unit_price: 74999.00 }
        ],
        columns: ["Order Item ID", "Order ID", "Product ID", "Quantity", "Unit Price (₹)"]
    },
    cart: {
        name: "Shopping Cart",
        icon: "🛍️",
        data: [
            { cart_id: 4001, customer_id: 101, created_date: "2023-05-01" },
            { cart_id: 4002, customer_id: 102, created_date: "2023-05-02" },
            { cart_id: 4003, customer_id: 103, created_date: "2023-05-03" },
            { cart_id: 4004, customer_id: 104, created_date: "2023-05-05" },
            { cart_id: 4005, customer_id: 105, created_date: "2023-05-07" },
            { cart_id: 4006, customer_id: 106, created_date: "2023-05-10" },
            { cart_id: 4007, customer_id: 107, created_date: "2023-05-12" },
            { cart_id: 4008, customer_id: 108, created_date: "2023-05-15" },
            { cart_id: 4009, customer_id: 109, created_date: "2023-05-18" },
            { cart_id: 4010, customer_id: 110, created_date: "2023-05-20" },
            { cart_id: 4011, customer_id: 111, created_date: "2023-05-22" },
            { cart_id: 4012, customer_id: 112, created_date: "2023-05-25" },
            { cart_id: 4013, customer_id: 113, created_date: "2023-05-28" },
            { cart_id: 4014, customer_id: 114, created_date: "2023-06-01" },
            { cart_id: 4015, customer_id: 115, created_date: "2023-06-05" },
            { cart_id: 4016, customer_id: 116, created_date: "2023-06-10" },
            { cart_id: 4017, customer_id: 117, created_date: "2023-06-15" },
            { cart_id: 4018, customer_id: 118, created_date: "2023-06-20" },
            { cart_id: 4019, customer_id: 119, created_date: "2023-06-25" },
            { cart_id: 4020, customer_id: 120, created_date: "2023-07-01" }
        ],
        columns: ["Cart ID", "Customer ID", "Created Date"]
    },
    cart_items: {
        name: "Cart Items",
        icon: "🛒",
        data: [
            { cart_item_id: 6001, cart_id: 4001, product_id: 1001, quantity: 1 },
            { cart_item_id: 6002, cart_id: 4002, product_id: 1002, quantity: 2 },
            { cart_item_id: 6003, cart_id: 4003, product_id: 1003, quantity: 1 },
            { cart_item_id: 6004, cart_id: 4004, product_id: 1004, quantity: 3 },
            { cart_item_id: 6005, cart_id: 4005, product_id: 1005, quantity: 1 },
            { cart_item_id: 6006, cart_id: 4006, product_id: 1006, quantity: 1 },
            { cart_item_id: 6007, cart_id: 4007, product_id: 1008, quantity: 1 },
            { cart_item_id: 6008, cart_id: 4008, product_id: 1009, quantity: 1 },
            { cart_item_id: 6009, cart_id: 4009, product_id: 1010, quantity: 1 },
            { cart_item_id: 6010, cart_id: 4010, product_id: 1011, quantity: 1 },
            { cart_item_id: 6011, cart_id: 4011, product_id: 1012, quantity: 2 },
            { cart_item_id: 6012, cart_id: 4012, product_id: 1013, quantity: 1 },
            { cart_item_id: 6013, cart_id: 4013, product_id: 1014, quantity: 1 },
            { cart_item_id: 6014, cart_id: 4014, product_id: 1015, quantity: 2 },
            { cart_item_id: 6015, cart_id: 4015, product_id: 1016, quantity: 1 },
            { cart_item_id: 6016, cart_id: 4016, product_id: 1017, quantity: 1 },
            { cart_item_id: 6017, cart_id: 4017, product_id: 1018, quantity: 3 },
            { cart_item_id: 6018, cart_id: 4018, product_id: 1019, quantity: 1 },
            { cart_item_id: 6019, cart_id: 4019, product_id: 1020, quantity: 1 },
            { cart_item_id: 6020, cart_id: 4020, product_id: 1007, quantity: 1 }
        ],
        columns: ["Cart Item ID", "Cart ID", "Product ID", "Quantity"]
    },
    payments: {
        name: "Payments",
        icon: "💳",
        data: [
            { payment_id: 9001, order_id: 5001, amount: 1999.99, payment_method: "Credit Card", transaction_id: "TXN10001", payment_date: "2023-05-01 14:35:00" },
            { payment_id: 9002, order_id: 5002, amount: 599.50, payment_method: "UPI", transaction_id: "TXN10002", payment_date: "2023-05-02 11:25:00" },
            { payment_id: 9003, order_id: 5003, amount: 899.00, payment_method: "COD", transaction_id: null, payment_date: "2023-05-03 09:45:00" },
            { payment_id: 9004, order_id: 5004, amount: 299.00, payment_method: "Wallet", transaction_id: "TXN10004", payment_date: "2023-05-05 16:20:00" },
            { payment_id: 9005, order_id: 5005, amount: 449.75, payment_method: "Credit Card", transaction_id: "TXN10005", payment_date: "2023-05-07 13:22:00" },
            { payment_id: 9006, order_id: 5006, amount: 18999.00, payment_method: "Net Banking", transaction_id: "TXN10006", payment_date: "2023-05-10 10:35:00" },
            { payment_id: 9007, order_id: 5007, amount: 1299.00, payment_method: "UPI", transaction_id: "TXN10007", payment_date: "2023-05-12 17:50:00" },
            { payment_id: 9008, order_id: 5008, amount: 1999.00, payment_method: "Credit Card", transaction_id: "TXN10008", payment_date: "2023-05-15 14:05:00" },
            { payment_id: 9009, order_id: 5009, amount: 5999.00, payment_method: "COD", transaction_id: null, payment_date: "2023-05-18 11:10:00" },
            { payment_id: 9010, order_id: 5010, amount: 3999.00, payment_method: "Wallet", transaction_id: "TXN10010", payment_date: "2023-05-20 09:35:00" },
            { payment_id: 9011, order_id: 5011, amount: 999.00, payment_method: "UPI", transaction_id: "TXN10011", payment_date: "2023-05-22 15:25:00" },
            { payment_id: 9012, order_id: 5012, amount: 1199.00, payment_method: "Credit Card", transaction_id: "TXN10012", payment_date: "2023-05-25 12:45:00" },
            { payment_id: 9013, order_id: 5013, amount: 14999.00, payment_method: "Net Banking", transaction_id: "TXN10013", payment_date: "2023-05-28 10:20:00" },
            { payment_id: 9014, order_id: 5014, amount: 399.00, payment_method: "UPI", transaction_id: "TXN10014", payment_date: "2023-06-01 14:55:00" },
            { payment_id: 9015, order_id: 5015, amount: 1299.00, payment_method: "COD", transaction_id: null, payment_date: "2023-06-05 16:30:00" },
            { payment_id: 9016, order_id: 5016, amount: 2999.00, payment_method: "Credit Card", transaction_id: "TXN10016", payment_date: "2023-06-10 11:50:00" },
            { payment_id: 9017, order_id: 5017, amount: 899.00, payment_method: "Wallet", transaction_id: "TXN10017", payment_date: "2023-06-15 13:25:00" },
            { payment_id: 9018, order_id: 5018, amount: 1048.75, payment_method: "UPI", transaction_id: "TXN10018", payment_date: "2023-06-20 09:15:00" },
            { payment_id: 9019, order_id: 5019, amount: 599.00, payment_method: "Credit Card", transaction_id: "TXN10019", payment_date: "2023-06-25 17:35:00" },
            { payment_id: 9020, order_id: 5020, amount: 74999.00, payment_method: "Net Banking", transaction_id: "TXN10020", payment_date: "2023-07-01 10:05:00" }
        ],
        columns: ["Payment ID", "Order ID", "Amount (₹)", "Payment Method", "Transaction ID", "Payment Date"]
    },
    reviews: {
        name: "Reviews",
        icon: "⭐",
        data: [
            { review_id: 3001, product_id: 1001, customer_id: 101, rating: 5, comment: "Excellent sound quality!", review_date: "2023-05-05" },
            { review_id: 3002, product_id: 1002, customer_id: 102, rating: 4, comment: "Comfortable fit", review_date: "2023-05-07" },
            { review_id: 3003, product_id: 1003, customer_id: 103, rating: 3, comment: "Average non-stick coating", review_date: "2023-05-10" },
            { review_id: 3004, product_id: 1004, customer_id: 104, rating: 5, comment: "Page-turner thriller!", review_date: "2023-05-12" },
            { review_id: 3005, product_id: 1005, customer_id: 105, rating: 2, comment: "Caused skin irritation", review_date: "2023-05-15" },
            { review_id: 3006, product_id: 1006, customer_id: 106, rating: 5, comment: "Best phone under 20k", review_date: "2023-05-18" },
            { review_id: 3007, product_id: 1008, customer_id: 107, rating: 4, comment: "Good quality denim", review_date: "2023-05-20" },
            { review_id: 3008, product_id: 1009, customer_id: 108, rating: 3, comment: "Sole wears out quickly", review_date: "2023-05-25" },
            { review_id: 3009, product_id: 1010, customer_id: 109, rating: 5, comment: "Sturdy and beautiful", review_date: "2023-05-28" },
            { review_id: 3010, product_id: 1011, customer_id: 110, rating: 4, comment: "Complete kitchen solution", review_date: "2023-06-01" },
            { review_id: 3011, product_id: 1012, customer_id: 111, rating: 5, comment: "Great for students", review_date: "2023-06-05" },
            { review_id: 3012, product_id: 1013, customer_id: 112, rating: 1, comment: "Colors not as shown", review_date: "2023-06-10" },
            { review_id: 3013, product_id: 1014, customer_id: 113, rating: 4, comment: "Good for media consumption", review_date: "2023-06-15" },
            { review_id: 3014, product_id: 1015, customer_id: 114, rating: 5, comment: "My kid loves it!", review_date: "2023-06-20" },
            { review_id: 3015, product_id: 1016, customer_id: 115, rating: 3, comment: "Slightly noisy mechanism", review_date: "2023-06-25" },
            { review_id: 3016, product_id: 1017, customer_id: 116, rating: 5, comment: "Perfect for gaming", review_date: "2023-07-01" },
            { review_id: 3017, product_id: 1018, customer_id: 117, rating: 4, comment: "Value for money", review_date: "2023-07-05" },
            { review_id: 3018, product_id: 1005, customer_id: 118, rating: 3, comment: "Average moisturizer", review_date: "2023-07-10" },
            { review_id: 3019, product_id: 1019, customer_id: 119, rating: 5, comment: "Best sunscreen!", review_date: "2023-07-15" },
            { review_id: 3020, product_id: 1020, customer_id: 120, rating: 4, comment: "Bright LED light", review_date: "2023-07-20" }
        ],
        columns: ["Review ID", "Product ID", "Customer ID", "Rating", "Comment", "Review Date"]
    },
    shippers: {
        name: "Shippers",
        icon: "🚚",
        data: [
            { shipper_id: 2001, shipper_name: "BlueDart", phone: "1800-102-304", service_area: "Pan India" },
            { shipper_id: 2002, shipper_name: "Delhivery", phone: "1800-258-258", service_area: "North & West" },
            { shipper_id: 2003, shipper_name: "DTDC", phone: "1800-111-222", service_area: "South India" },
            { shipper_id: 2004, shipper_name: "FedEx", phone: "1800-123-456", service_area: "Metro Cities" },
            { shipper_id: 2005, shipper_name: "DHL", phone: "1800-121-212", service_area: "International" },
            { shipper_id: 2006, shipper_name: "Ecom Express", phone: "1800-200-300", service_area: "East India" },
            { shipper_id: 2007, shipper_name: "XpressBees", phone: "1800-400-500", service_area: "West India" },
            { shipper_id: 2008, shipper_name: "Shadowfax", phone: "1800-600-700", service_area: "Bangalore/Hyd" },
            { shipper_id: 2009, shipper_name: "Gati", phone: "1800-800-900", service_area: "Tier 1 Cities" },
            { shipper_id: 2010, shipper_name: "SafeExpress", phone: "1800-369-369", service_area: "Pan India" },
            { shipper_id: 2011, shipper_name: "Trackon", phone: "1800-222-333", service_area: "North India" },
            { shipper_id: 2012, shipper_name: "Professional", phone: "1800-444-555", service_area: "South India" },
            { shipper_id: 2013, shipper_name: "DotZot", phone: "1800-666-777", service_area: "West India" },
            { shipper_id: 2014, shipper_name: "Elite", phone: "1800-888-999", service_area: "East India" },
            { shipper_id: 2015, shipper_name: "SpeedPost", phone: "1800-123-789", service_area: "Pan India" },
            { shipper_id: 2016, shipper_name: "Amazon Transport", phone: "1800-258-147", service_area: "All India" },
            { shipper_id: 2017, shipper_name: "Ekart", phone: "1800-456-789", service_area: "Metro Cities" },
            { shipper_id: 2018, shipper_name: "Udaan", phone: "1800-369-258", service_area: "Tier 2/3 Cities" },
            { shipper_id: 2019, shipper_name: "ShipRocket", phone: "1800-147-258", service_area: "Metro Cities" },
            { shipper_id: 2020, shipper_name: "Pickrr", phone: "1800-789-456", service_area: "Pan India" }
        ],
        columns: ["Shipper ID", "Shipper Name", "Phone", "Service Area"]
    }
};

window.onload = function () {
  showCards();
};

function showCards() {
  var container = document.getElementById("tables-container");
  container.innerHTML = "";

  for (var key in tablesData) {
    var table = tablesData[key];
    var div = document.createElement("div");
    div.className = "col-md-4 mb-3";
    div.innerHTML = `
      <div class="card">
        <div class="card-body text-center">
          <div style="font-size: 2.5rem;">${table.icon}</div>
          <h5>${table.name}</h5>
          <p>Total: ${table.data.length} records</p>
          <div class="d-flex g-4 justify-content-around">
            <button onclick="showTable('${key}')" class="btn btn-primary btn-sm">View Table</button>
            <button onclick="addNewRecord('${key}')" class="btn btn-success btn-sm">Add Record</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  }
}

async function showTable(tableName) {
  try {
    const response = await fetch(`http://127.0.0.1:5002/${tableName}`);
    const data = await response.json();

    let rows = data;
    if (data.data) rows = data.data;

    if (!rows.length) {
      document.getElementById("table-section").innerHTML = "<p>No data available.</p>";
      return;
    }

    const columns = Object.keys(rows[0]);

    // Assume primary key wo column hoga jis mein 'id' shamil ho
    let primaryKey = columns.find(col => col.toLowerCase().includes('id'));

    if (!primaryKey) {
      alert("Primary key (id) column nahi mila!");
      return;
    }

    let html = "<table class='table table-bordered'><thead><tr>";
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    html += "<th>Actions</th></tr></thead><tbody>";

    rows.forEach(row => {
      html += "<tr>";
      columns.forEach(col => {
        html += `<td>${row[col] || ""}</td>`;
      });

      // Primary key ke naam se id pass karen
      const recordId = row[primaryKey];
      if (recordId === undefined) {
        html += `<td><em>ID missing!</em></td>`;
      } else {
        html += `<td><button onclick="deleteRecord('${tableName}', ${recordId})" class="btn btn-danger btn-sm">Delete</button></td>`;
      }
      html += "</tr>";
    });

    html += "</tbody></table>";

    document.getElementById("table-section").innerHTML = html;

    const myModal = new bootstrap.Modal(document.getElementById("dataModal"));
    myModal.show();

  } catch (error) {
    console.error("Error fetching table data:", error);
    alert("Failed to load table data.");
  }
}



// Show form to add a new record inside the modal
function showAddRecordForm(tableName) {
  const container = document.getElementById("table-section");

  // Simple form with inputs for each column (except id assuming serial)
  // For simplicity, ask user to enter JSON object (can be improved)
  container.innerHTML = `
    <h5>Add new record to ${tableName}</h5>
    <textarea id="newRecordData" class="form-control" rows="5" placeholder='Enter JSON data like {"column1": "value1", "column2": "value2"}'></textarea>
    <div class="mt-3">
      <button class="btn btn-primary" onclick="addRecord('${tableName}')">Save</button>
      <button class="btn btn-secondary" onclick="showTable('${tableName}')">Cancel</button>
    </div>
  `;
}

// Add record API call
async function addRecord(tableName) {
  try {
    const rawData = document.getElementById("newRecordData").value;
    if (!rawData) return alert("Please enter data.");

    let recordData;
    try {
      recordData = JSON.parse(rawData);
    } catch {
      return alert("Invalid JSON format.");
    }

    // Send POST request to backend (you must create this endpoint)
    const response = await fetch(`http://127.0.0.1:5002/${tableName}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recordData),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error || "Failed to add record.");
    }

    alert("Record added successfully!");
    showTable(tableName);  // reload table view

  } catch (error) {
    alert(error.message);
  }
}

function deleteRecord(tableName, id) {
  if (!confirm("Are you sure you want to delete this record?")) return;

  fetch(`http://127.0.0.1:5002/${tableName}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
    .then(res => res.json())
    .then(data => {
      alert("Record deleted!");
      showTable(tableName);
    })
    .catch(err => {
      console.error("Error deleting record:", err);
      alert("Failed to delete record.");
    });
}

// Delete record API call
// async function deleteRecord(tableName, id) {
//   if (!id) {
//     alert("Record ID missing!");
//     return;
//   }

//   const confirmDelete = confirm(`Are you sure you want to delete record ${id} from ${tableName}?`);
//   if (!confirmDelete) return;

//   try {
//     const response = await fetch(`http://127.0.0.1:5002/${tableName}/${id}`, {
//       method: 'DELETE',
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to delete record');
//     }

//     alert("Record deleted successfully!");
//     showTable(tableName);  // refresh table after deletion
//   } catch (error) {
//     console.error(error);
//     alert(`Error deleting record: ${error.message}`);
//   }
// }

