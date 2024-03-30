package DarshanSir_programming;

public class Fibonacci {
public static void main(String[] args) {
	int a1=0;
	int a2=1;
	int a3;
	int l=5;
	System.out.print(a1+" "+a2);
	for(int i=2;i<=l-1;i++){
      a3=a1+a2;
System.out.print(" "+a3);
		a1=a2;
		a2=a3;
	}
}
}
