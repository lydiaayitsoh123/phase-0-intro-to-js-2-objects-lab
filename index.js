// Write your solution in this file!

// Initialize the employee object
const employee = {
    name: "Alice",
    streetAddress: "123 Main St"
};

// Function to update employee without mutating the original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, // Copy existing properties
        [key]: value // Update or add the new key-value pair
    };
}

// Function to update employee destructively (mutates the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the existing object directly
    return employee;
}

// Function to delete a key from employee without mutating the original object
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Copy the employee object
    delete newEmployee[key]; // Remove the specified key
    return newEmployee;
}

// Function to delete a key from employee destructively (mutates the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modify the existing object directly
    return employee;
}
