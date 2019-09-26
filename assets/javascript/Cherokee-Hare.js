function result()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("N").value);
				num2 = Number(document.getElementById("M").value);
				num3 = Number(document.getElementById("O").value);

                 
                
                document.getElementById("demo").innerHTML = num1*(Math.pow((1+num2),num3));
            }