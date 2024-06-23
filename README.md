# 2i-test-engineering-challenge

## Setup

1. Install dependencies:

Ensure you have Node.js installed. Then, navigate to the project directory in your terminal and run the following command to install the necessary dependencies:

```bash
npm install

2. To be able to run the test

```bash
npx ts-node src/test.ts 
```bash

## Description
This project includes a script that finds and returns the largest sum of digits within a string from an array of strings. Each string is composed of a combination of letters and digits. The script processes the array to identify the string with the highest sum of its individual digits and returns this sum.

## Example Usage
Given an input array:
```bash
const inputArray = ["dh7js4jf", "or2rjvn2w", "h1n36mfl", "a7e6fw"];
const result = findLargestSumOfDigits(inputArray);
console.log(result); // Output: 13
```bash

The script calculates the sums of digits for each string as follows:
```bash
	•	"dh7js4jf": 7 + 4 = 11
	•	"or2rjvn2w": 2 + 2 = 4
	•	"h1n36mfl": 1 + 3 + 6 = 10
	•	"a7e6fw": 7 + 6 = 13
```bash
The largest sum of digits is 13, which corresponds to the string "a7e6fw".

Assumptions and Design Choices
```bash
	•	Each digit within a string is considered as an individual 1-digit number.
	•	The input array can have up to 10 strings, each up to 12 characters long.
	•	Strings may contain letters and digits, with no guaranteed digit presence.
```bash