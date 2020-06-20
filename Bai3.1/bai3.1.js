// Write a program that asks user their height (cm) and weight (kg), and then calculate their BMI (Body Mass Index):
// BMI = mass (kg) / (height(m) x height(m) )
// Note: you must do the conversion from cm to m before calculation

// Then based on the BMI, tell them that they are:
// Severely underweight if BMI < 16
// Underweight if BMI is between 16 and 18.5
// Normal if BMI is between 18.5 and 25 
// Overweight if BMI is between 25 and 30
// Obese if BMI is more than 30

//-----------------------------------------------BL---------

//chuyển đổi cm-> m before calculation : 
// mình ko hiểu chỗ này nè. chắc kiểu chuyển cho biết thôi hả ? nên mình viết comment thôi nhé. Giả sử x là height là cm đi 
      // var BMI;
     // function(BMI){
    //     return BMI/100;
   // }


///////// 
var BMI=prompt("Nhap BMI:"); // user nhập số BMI 

// viết hàm calculation:
if(BMI<16){
    console.log("Severly underweight");
}
else if(BMI>=16 && BMI<18.5){
    console.log("Underweight");
}
else if(BMI>=18.5 && BMI<25){
    console.log("Normal");
}
else if(BMI>=25 && BMI<30){
    console.log("Overweight");
}
else{
    console.log("Obese");
}