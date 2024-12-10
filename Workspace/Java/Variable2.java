class Variable2
{
	public static void main(String[]args)
	{
		int a=10;
		int b=a;
		int c=b;
		a=12;
		b=a;
		a=c;
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}