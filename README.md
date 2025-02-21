# TypeScript Error: Extra Properties in Object with Optional Parameter

This repository demonstrates a common TypeScript error that occurs when passing an object with extra properties to a function that defines an optional parameter. TypeScript's strict type checking prevents this, even when the extra properties are not part of the function's logic. 

The `bug.ts` file contains the code that reproduces the error. The `bugSolution.ts` file provides a solution using type assertion or an interface that allows for extra properties.  See the detailed explanation in the comments within the files.