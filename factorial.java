package DarshanSir_programming;

import java.util.Scanner;

public class factorial {
	public static void main(String []args){
		Scanner sc=new Scanner(System.in);
		int f=1;
		System.out.println("enter the number");
		int l=sc.nextInt();
		for(int i=1;i<=l;i++){
		f=f*i;
		}
		System.out.println(l+"factorial number:"+f);

		}

}
