1. '3' is printed. Because the latest value of i within the for loop is 3 and because if i is 3, it breaks the for loop to get to line 12, the value printed by i is 3. Furthermore, i here is declared using the `var` keyword meaning it has a function scope so that it can be used anywhere within `discountPrices()`.
   
2. '150' is printed. This is because based on the latest value discountedPrice is 150. Also this is coincidentally the same value from the array which makes sense as its the most recent value added to the array. Furthermore, discountedPrice here is declared using the `var` keyword meaning it has a function scope so that it can be used anywhere within `discountPrices()`.
   
3. '150' is printed. finalPrice is equal to the latest calculated value within the array which is 150. Furthermore, finalPrice here is declared using the `var` keyword meaning it has a function scope so that it can be used anywhere within `discountPrices()`.
   
4. This function will return an array of 3 element each with the new discounted value from the array provided as parameters. It would return the array [50, 100, 150]. 
   
5. This produces an error. This is because i becomes out-of-context on its block scope as i can only be used within the for loop.
   
6. This produces an error. Because discountedPrice is declared using the `let` keyword, it has a block scope and remains inacessible outside of the for loop. As line 13 is outside of this loop, it doesn't have access to discountedPrice and thus produces an error. 
   
7. '150' is printed. finalPrice is declared outside of the for loop but still inside the function so the print function is in the same block scope. Similar to 3, the latest value for finalPrice is used which is given by the array as 150.
   
8. An array of 3 elements will be returned containing the 3 elements [50,100,150]. This is based on the similar formula used in problem 4 where an array is provided and multiplied by the discount parameter. Thus, the same result is returned following the command. 
   
9.  This produces an error. Similar to question 5, i is declared using the let keyword and becomes out-of-context block scope wise, where it returns an undefined value.
    
10. '3' is printed. The value of length is calculated based on the number of elements in prices, which is 3. As it's const, length never changes till its printed which gets outputted as 3. 
    
11. An array of 3 elements containing the elements [50,100,150] is printed. The const keyword may confuse the results but because it gets redefined everytime the line gets executed, a new value appears in the array and thus the returned array has 3 different values. Furthermore, discounted is a const array meaning that values within the array can be added, changed or removed but discounted in its entireity can't be reassigned to another array.
    
12. 
```
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student['Favorite Teacher'].name
E. student.courseLoad[0]
```

13. 
'''
A. ‘3’ + 2 = '32'. Integers map to their string representation which results in a simple concatenation equation resulting in '32'.
B. ‘3’ - 2 = 1. When subtracted, the string maps to its integer representation which results in a simple arithmetic equation resulting in 1.
C. 3 + null = 3. null acts as 0 when its a part of a addition equation. null is converted to an integer as 3 is an integer.
D. ‘3’ + null = '3null'. This acts as a string concatenation statement as '3' is a string. null is converetd to its string representation.
E. true + 3 = 4. Because 3 is a number, true converts to its numeric representation to then result in 4.
F. false + null = 0. Because the + indicates the equation is an arithmetic equation, false is converted to its numeric form and so is null which results in 0+0 which is nothing but 0.
G. '3' + undefined = '3undefined'. Becuase '3' is a string, undefined is converted to its string represenation to then be a simple string concatenation statement.
H. '3' - undefined = NaN. Because the - sign hints at a numeric equation, '3' is converted to its numberic form and undefined isn't a number so any equation with NaN, results in a Nan result.
'''

14. 
'''
A. ‘2’ > 1 = true. '2' is converted to its numeric form and when comparing the two numbers, the result is obvious.
B. ‘2’ < ‘12’ = false. When two strings are compared, they are compared by their ASCII codes and since '2' > '1', the statement becomes false.
C. 2 == ‘2’ = true. Here since a number and string are being compared, '2' is converted to its numeric form and when comparing the two numbers, the result is that they're both the same.
D. 2 === ‘2’ = false. When the typings of a string and number are being compared using the '===' operator, which checks typings as well, the result is false as the two sides aren't the same.
E. true == 2 = false. true is converted to a number because of the right hand side and since true's value is 1, the values aren't the same.
F. true === Boolean(2) = true. The boolean() function is used to convert any other type to a boolean() value and since 2 has a value in a numerical aspect, it's value is true. So when we use the '===' operator, the result when comparing two true values is true.
'''

15. The similarity between the '==' and the '===' operator is that they are used to compare values. The '==' operator can be considered a more basic version as it returns whether two values are equal regardless of typing. In a more expansive version, the '===' operator checks if the values are the same and if the typing are also the same.

17. The value returned from calling the statement is an array of 3 elements containing the values [2, 4, 6]. The value array stores the array passed in by the argument and so does callback. doSomething() is a function that multiplies the values by 2. So when [1,2,3] are passed, the results are its multiple which are seen by the value which gets returned.

19. In different lines, the output are in the following order 1, 4, 3, 2. 