class Method
{
    public static void add()
    {
        System.out.println("Addition started");
        int a=10;
        int b=20;
        System.out.println(a+b);
        System.out.println("Addition ended");
    }
    public static void main(String[]args)
    {
        System.out.println("Main started");
        add();
        System.out.println("Main ended");
    }
}