#Evaluation-1

###1: Prime number:

####Algorithm:

step 1: Start a program with function with argument.

step 2: Then take a number from the function parameter.

step 3: Check the remainder value for given number using module function.

step 4: If the remainder value is zero, it will print the number is not a prime,otherwise, it will  print the number is prime.

####Psudocode:
```
FUNCTION PrimeNumber(a) {
    FOR (SET i = 2; i < a; i++) {
        SET b = a % i
        IF (b == 0) {
            PRINT("not prime")
            break
        }
        IF (i === a - 1) {
            PRINT("prime")
        }
    }
}

PrimeNumber(9)
PrimeNumber(21)
PrimeNumber(121)
PrimeNumber(111)
```

###2: Eqaual and Strict Eaual

####Algorithm:

step 1: First declare two variabes.

step 2: Then define 1234 in variable name c and define string '1234' in variable name d.  

stpe 3: Check the two variable with equality operator  

stpe 4: Check the two variable with strict equality operator.

####Psudocode:
```
SET c = 1234
SET d = '1234'
PRINT (c==d)
PRINT (c===d)
```

###3: String Reverse

####Algorithm:

step 1: Firt declare a variable with string value and create a empty string variable.

step 2: Find the variable length

step 3: Then save the index value backward, from last index to first index to the empty variable.

####Psudocode:
```
SET a = "abcdefghijklmn"
SET reverse = ""

FOR (SET i = 1; i <= a.length; i++) {
    SET b = a[a.length - i]
        reverse += b
}
PRINT(reverse)
```

###4:Word Reverse:

####Algorithm:

step 1: Firt declare a variable with string value and create a empty string variable.

step 2: Find the variable length

step 3: Then save the index value backward, from last index to space to the empty variable

step 4: This revesrse value again reverse the word using given below condtion.

step 5: Then find the next last word from string, store the value from this word last index to space.

step 6: This again reverse value one by one concatenate and store in empting string variable.

step 7: And finally, store string's in reverse. 

####Psudocode:
```
SET a = " hi i am billian"
SET b = ""
SET g = ""
SET f = ""

FOR (SET i = 1; i <=a.length; i++) {
    SET c = a[a.length - i]
        b += c 
        IF (c == " ") {
            FOR (SET j = 1; j <= b.length; j++) {
                 SET e = b[b.length - j]
                    g += e
            }
            f += g
            b = ""
            g = ""
        }
}
PRINT(f)
```

###5: Palindrome:

####Algorithm:

step 1: Declare a variable with value racecar

step 2: And store the string of each index from last to first to the emptry variable.

step 3: Then compare the reverse string value and define variable value.

steo 4: If the condtion was true, print the define variable value is a palindrome, otherwise print it's not a palindrome

####Psudocode:
```
SET a = "racecar"
SET reverse1 = ""

FOR (SET i = 1; i <= a.length; i++) {
    SET b = a[a.length - i] 
        reverse1 += b

}
PRINT (reverse1)
IF (reverse1 == a)
    PRINT (a + " is a palindrome ")
ELSE
    PRINT(a + " is not a palindrome")
```

###6: Array.forEach() vs Array.map():

####Array.forEach():

#####Algorithm:

step 1: Declare a variable with set of array value.

step 2: Here modify the array value with help of forEach() method.

step 3: The forEach method doesn’t return anything.

step 4: And it will be store the transformed value in original variable.

#####Psudocode:
```
SET a= [1,2,3,4,5]

SET foreach = a.forEach((num,index)=> {return a[index] = num * 2})
PRINT (a)
```

####Array.map():

#####Algorithm:

step 1: Declare a variable with set of array value.

step 2: Here transformed the array value by map() method.

step 3: It returns a transformed array value in  new array by applying the callback function on each element of an array.

#####Psudocode:
```
SET b=[6,7,8,9]
SET map = b.map(num=>  num * 2)
PRINT (map)
PRINT(b)
```

###7: Generate a random number:

####Algorithm:

step 1: Create a function, and pass the value 1 and 10 by function argument.

step 2: Inside the function write a logic to generate a random number with the help of math.floor and math.random function.

step 3: call the function and pass the two argument to that function.

step 4: Finally, print the random number between 1 to 10. 

####psudocode:
```
FUNCTION random(a,b){
    SET c = Math.floor(Math.random() * (b-a) + a)
    PRINT (c)
}
random(1,10)
```

###8: Remove duplicate from Array:

####Algorithm:

step 1: Declare a array with some dupllicate integer value.

step 2: create a empty array variable name b.

step 3: Finaly check the duplicate array value, if the value is not already in the array b, value is pushed to array variable b.

####psudocode:
```
SET a= [1,1,2,3,4,1,2,3,2,3,4]
SET b=[]

label1: FOR (SET i =0; i< a.length;i++){
    FOR (SET j =0; j<i; j++){
        IF (b[j]==a[i])
            continue label1
    }
    b.push(a[i])
}
PRINT (b)
```

###9: Sum of the first 10 natural numbers:

####Algorithm:

step 1: Firt declare a sum variable, then assign this value is 0.

step 2: Run the for loop from one to ten.

step 3: when each time for loop run, sum += i will execute. 

step 4: Then its added value stored in sum variable.

####psudocode:
```
SET sum=0;
FOR (SET i = 1 ; i<=10; i++)
    {
         sum += i
    }
PRINT (sum)
```

###10: Sum of the Odd number and Even number:

####Algorithm:

step 1: First assign a value 100 in n variable.

step 2: Then create a seperate variable for odd and even.

step 3: Find the given number is odd or even using module function.

step 4: If the number is even add with even variable value, otherwise add with odd variable value

step 5: Finally, print the sum of odd and even value. 

####psudocode:
```
SET n = 100
SET odd = 0
SET even = 0
SET i = 1; 
WHILE (i <= n){
  IF (i % 2 == 0){
    even += i
  } ELSE {
    odd += i
  }
  i++
}
PRINT (odd, even)
```

###11: Merge two array:

####Algorithm:

step 1: Create a two array variable b and c.

step 2: Merge this two array with help of spread operator.

step 3: Finally, the merged array value will print.

####psudocode:
```
SET b = [1,2,9,3,5,1,4,5]
SET c = [11, 54, 70, 40]

SET d = [...b,...c]
PRINT (d)
```

###12: Remove duplicate from an array of an object:

####Algorithm:

step 1: Declare a array object with some same object elements. this array name is a.

step 2: find the length of array.

step 3: Declare a empty array called b

step 4: first copy the a's first index to empty array b's 0th index.

step 5: Again i take the value from array I check the value is exist or not exist in b.

step 6: If the b not have the a's same value, Then only the value will be stored in b.

####psudocode:
```
SET a = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Stephen covey"}, {id: 3, name:"Tolstoy"},{id:3,name: "Tolstoy"}, {id: 5, name: "James clear"}]
SET b=[]

label1: FOR (SET i =0; i< a.length;i++){ 
          FOR (SET j =0; j<b.length; j++){
            IF (b[j].id==a[i].id || b[j].name==a[i].name)
              continue label1
    }
    b.push(a[i])
}
PRINT (b);
```

###13: Compare two objects:

####Algorithm:

step 1: Create some objects with some properties;

step 2: Create named function for pass the object properties by function argumengts.

step 3: Then copy the properties name into A and B variable. This properties name stored in array format.

step 4: compare the all properties on both objects.

step 5: If the properties values are equal, it wil print true, otherwise it will print false.

####Psudocode:
```
FUNCTION objcmp(a, b) {

    //copy properties into A and B
    SET A = Object.getOwnPropertyNames(a)
    SET B = Object.getOwnPropertyNames(b)
        
    //return early if number of properties is not equal
    IF (A.length != B.length)
        return false

    //compare all properties on both objects
    FOR (SET i = 0; i < A.length; i++) {
        SET propName = A[i]
        IF (a[propName] !== (b[propName]))
            return false
    }
    //objects are equal 
    return true
}

//creaate objects
SET a = { id: 1, name: "edison" }
SET b = { id: 1, name: "edison" }
SET c = { id: 1, name: "edison" }
SET d = { id: 2, name: "edison" }

PRINT (objcmp(a, b))
PRINT (objcmp(c, d))
```

###14: Array.flat():

####Algorithm:

step 1: Declare a multidimensional array.

step 2: flattening the multi-dimentional array value using flat() method.

####Psudocode:
```
SET a = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]

SET b = a.flat()
PRINT (b)
```

###15: Array.Reduce() method:

####Algorithm:

step 1: Through the array.reduce method check the id, how many id valus are same

step 2: The output is taken as a object, so declare a reduce method in variable to take a result.

step 3: First we declare a object variable, and some variable ids are same. how many times the ids are return should be stored in another object variable.

step 4: through the reduce method, the id and that keys are taken, and check any id values are same. if same the id will be increase one.

step 5: Finally, the result will be stored in object a.

####Psudocode:
```
SET people = [{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"},  {id: 3, name: "benni"}, {id: 1, name: "karthi" }]

SET a = people.reduce((key, value)=> {
    key[value.id]= key[value.id] + 1 || 1
    return key
},{})
PRINT (a)
```

###16: Printing right angle triangle pattern:

####Algorithm:

step 1: Declare a n variable and create a empty string variable s.

step 2: And, initialize m equal to 5.

step 3: inside the for loops, when i = 0, one star will be stored in variable name s.

step 4: And once the inner for loop executed outer for loop printed newline character.

step 5: If the i equal to two, in the inner for loop two star will be stored in variable name pattern

step 6: When the i = 5 the outer for loop condition will be failed.

step 7: Finally, Print right angle triangle pattern.

####Psudocode:
```
SET n= 5
SET s= ""

FOR (SET i=1 ; i<=n; i++){
    FOR (SET j=0 ; j<i; j++){
        s += "*"
    }
        s += "\n"
}
PRINT (s)
```

###17: Printing number right angle triangle pattern:

####Algorithm:

step 1: Declare a n variable and create a empty string variable s.

step 2: And, initialize n equal to 5.

step 3: And used two for loop the outer for loop is used to print new line character. and at the same time the inner for loop will be used to print numbers.

step 4: first the i value is one and then the condition will go and check the inner for loop, in the inner for loop j value initialized with i.

step 5: So the inner for loop will run i time.

step 6: each time the inner forloop will print the numbers, when the inner for loop execute the number will be modified.

step 7: till the i equal to n, the outer and inner for loop will be executed.

####Psudocode:
```
SET n= 5
SET s= ""
SET count =1

FOR (SET i=1 ; i<n; i++){
    FOR (SET j=0 ; j<i; j++){
        s += count + " "
        count++;
    }
        s += "\n"
}
PRINT (s)
```

###18: Printing number pyramid pattern:

####Algorithm:

step 1: To print pyramid pattern, first add some white spaces in the variable.

step 2: And then add first number to the variable pattern.

step 3: First for loop used to track the pyramid length.

step 4: And the first inner for loop will used to print spaces.

step 5: Second inner for loop used to print numbers and it will be concatenate with pattern and stored in the pattern.

step 6: When the outer for loop will go to five the condition will be failed.

step 7: Then the program execution will be stoped.

####Psudocode:
```
SET count = 1 
SET n = 5
SET pattern=""
FOR (SET i=1; i< 5; i++){
    FOR (SET j=0; j<n; j++){
        pattern += ' '
    }n = n -1
    FOR (SET k=0; k<i; k++){
        pattern += count + " "
      count++
    }pattern += '\n'
}
PRINT (pattern)
```

###19: Printing diamond pattern:

####Algorithm:

step 1: declare some variable i, j, k.

step 2: declare empty string variable to stroed the dimond pattern design.

step 3: using module function for finding even or odd number. 

step 4: if the value is even, just increase the variable odd to one. 

step 5: if the value is odd, add spaces which depends upon the for loop condition. then the star is printing on the pattern variable.

step 6: the same operation will be execuite for reverse operation. 

step 7: finally, we get a diamod pattern.   

####Psudocode:
```
INIT i, j, k
SET odd = 1
SET space = 5
SET pattern = ""

FOR (i = 0; i < 9; i++) {
    IF (odd % 2 != 0) {
        FOR (j = 1; j < space; j++) {
            pattern = pattern + " "
        }
    }
    IF (odd % 2 != 0) {

        FOR (k = 0; k < odd; k++) {
            pattern += "*"
        }
        --space
        pattern += "\n"
    }
    odd++
}
// Reverse
space = 1
odd = 7

FOR (i = 0; i < 10; i++) {

    IF (odd % 2 != 0) {
        FOR (j = 0; j < space; j++) {
            pattern = pattern + " "
        }
    }
    IF (odd % 2 != 0) {

        FOR (k = 0; k < odd; k++) {
            pattern += "*"
        }
        ++space
        pattern += "\n"
    }
    odd--
}
PRINT (pattern)
```

###20: Console:

####i: Console.log:

console.log is used to print the output message in the web console.

```
SET a=[1,2,3,3,4,5,5]
console.log(a)
```

####ii: Consoe.dir:

The console.dir is used to view the objects of JavaScript. 
And the console.dir function views the object in hierarchical formate.

####iii: Console.count:

The count() method counts the number of times console.count() is called.
we can use this console.count() method to track how many time a particular statement is executed. 
By default it print the execution count with default string, we can modify the lable. 

```
FOR (SET i= 0; i<5 ;i++){
console.count("label")
}
```

####iv:Console.table():

The console.table() method displays tabular data as a table.
This function takes one mandatory argument data, which must be an array or an object, and one additional optional parameter columns.

```
SET a=[1,2,3,3,4,5,5];
console.table(a)
```

####v: Console.time and console.timeEnd:

The console object has time() and timeEnd() methods that help with analyzing performance of pieces of your code.
you first call console.time() by providing a string argument, then the code that you want to test, then call console.timeEnd() with the same string argument. 
You’ll then see the time it took to run the code in your browser console. 

```
SET b = "racecar"
SET reverse1 = ""
console.time()
FOR (SET i = 1; i <= a.length; i++) {
    SET c = b[b.length - i]
        reverse1 += c

}console.timeEnd()
```

####vi: Console.group:

The console.group() method creates a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level, until console.groupEnd() is called.

```
SET a = [1,2,3,3,4,5,5]
console.log(a)

console.group()

console.groupEnd()

FRO (SET i= 0; i<5 ;i++){
console.count("label")
}
console.groupEnd()

SET b = "racecar"
console.log(b)
```

####vii: Console.assert:

The console.assert() method writes an error message to the console if the assertion is false. 
If the assertion is true, nothing happens. 

```
SET x = 5
SET y = 2
console.assert(x + y ==8, "expression returned 'false'")
```