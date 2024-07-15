// 1st problem
// function patterns(num)
// {
//     if(num%3==0 && num%5==0)
//         console.log(" FizzBuzz")
//     else if(num%3==0)
//         console.log("Fizz")
//     else if(num%5==0)
//         console.log("Buzz")
//     else
//         console.log(num)
// }
// for(let i=1;i<=100;i++)
// {
//     patterns(i);
// }


// 2nd problem
// function palindrome(str){
// let res=""
// for(let i=str.length-1 ;i>=0;i--)
// {
//      res=res+str.charAt(i)
// }
// if(res==str)
//     console.log(res+" is PALINDROME")
// else
//     console.log(str+" is NOT PALINDROME")

// }
// palindrome("krishna")

//3rd problem
// function large(num){
//     let max=0;
//     for(let i=1;i<=num.length;i++)
//     {
//         if(max<=num[i])
//             max=num[i]
//     }
//     console.log(max)
// }
// large([1,2,3,9,4,15,0])

//4th problem
function count(a) {
    let hash = {};
    for (let i = 0; i < a.length; i++) {
      if (hash[a[i]] == undefined) {
        hash[a[i]] = 1;
      } else {
        hash[a[i]] += 1;
      }
    }
    return hash;
  }
  
  let a = "krishnaa";
  
  console.log(a);
  console.log(count(a));

//5th problem
// let string = "hindusthan college of engineering";
// let strarr = string.split(" ");
// let newstrarr="";
// for(let i=0;i<strarr.length;i++)
// {
//     if(strarr[i].length>newstrarr.length)
//         newstrarr=strarr[i];
// }
// console.log(newstrarr);

//6th problem
// function fact(num)
// {
//     let res=1
//     for(let i=1;i<=num;i++)
//     {
//         res=res*i
//     }
//     console.log("FACTORIAL OF " +num+" is "+res)
// }
// fact(10)

//7th problem


// function fahrenheit(value)
// {
//     let res=0
//     res+=(value*9.0/5.0)+32.0
//     console.log(res)
// }
// fahrenheit(1)

//8th problem
// function missing(num)
// {
//     for(let i=0;i<=num.length -1;i++)
//     {
//         if(num[i]!=i)
//         return (i)
   
//     }
// }

// console.log(missing([0,1,2,3,5,6,7,8]))
