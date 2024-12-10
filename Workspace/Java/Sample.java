class Demo1
{
    static int a;
    public static void m1()
    {
        System.out.println(a);
    }
     public static void main(String[]args)
     {
         m1();                                                           
     }
}
class Sample
{
    public static void main(String[]args)
    {
        System.out.println(Demo1.a);
        Demo1.m1();
    }
}

