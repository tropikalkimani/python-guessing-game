# Basic Calculator Program

# Function to perform the calculation
def calculate(num1, num2, operation):
    if operation == '+':
        return num1 + num2
    elif operation == '-':
        return num1 - num2
    elif operation == '*':
        return num1 * num2
    elif operation == '/':
        if num2 != 0:
            return num1 / num2
        else:
            return "Error: Division by zero is not allowed."
    else:
        return "Error: Invalid operation."

# Main program
def main():
    try:
        # Taking input from the user
        number1 = float(input("Enter the first number: "))
        number2 = float(input("Enter the second number: "))
        operation = input("Enter the operation (+, -, *, /): ")

        # Performing the calculation
        result = calculate(number1, number2, operation)

        # Displaying the result
        print(f"{number1} {operation} {number2} = {result}")

    except ValueError:
        print("Error: Please enter valid numbers.")

# Run the main function
if __name__ == "__main__":
    main()