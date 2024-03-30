package DarshanSir_programming;

import java.util.Scanner;

public class Palindrome {
	public static void main(String[] args) {
		Scanner sc= new Scanner(System.in);
		System.out.println("enter the string");
		String org=sc.next();
		String rev="";
		int l=org.length();
		int v=0;
		int c=0;
		for(int i=(l-1);i>=0;i--) {
			rev= rev + org.charAt(i);
			char ch=org.charAt(i);
			if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') {
				v++;
			}
			else {
				c++;
			}
		}
		if(rev.equals(org)) {
			System.out.println(org+" is a palindrome");
		}
		else {
			System.out.println(org+" is not palindrome");
		}
		System.out.println("vowels"+v);
		System.out.println("consonants"+c);
		sc.close();
	}

}
