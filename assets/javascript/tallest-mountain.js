function largest()
			{
				var num1, num2, num3;
				num1 = Number(document.getElementById("N").value);
				num2 = Number(document.getElementById("M").value);
				num3 = Number(document.getElementById("O").value);

				if(num1>num2 && num1>num3)
				{
					window.alert(num1+"-is greatest");
				}
				else if(num2>num1 && num2>num3)
				{
					window.alert(num2+"-is greatst");
				}
				else if(num3>num1 && num3>num1)
				{
                    window.alert(num3+"is greatest");
                }
            }