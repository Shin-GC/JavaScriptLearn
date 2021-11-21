function bmiCalculator(name, weight, tall){
    console.log(name + "님의 체질량 지수는 " + weight / (tall * tall / 10000) + "입니다.")
}

bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);