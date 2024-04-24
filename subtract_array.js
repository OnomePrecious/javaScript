let input = [6, 12, 24];
for (let index = 1; index <= input.length; index ++){

    if(input[0] % index == 0 && input[1] % index == 0 && input[2] % index == 0) {
      result = index;

    }
   
   console.log(result); 
}

