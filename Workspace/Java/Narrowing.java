class Narrowing
{
    public static void main(String[]args)
    {
        double a=12;
        int b=(int) a;
        char c='A';
        int d=c;
        int e=65;
        char f=(char)e;
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(e);
        System.out.println(f);
    } 
}