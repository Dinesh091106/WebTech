import java.util.Scanner;

class Scanner1{
    public static void main(String[]args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter the Size");
        int size = s.nextInt();
        int a [] = new int[size];
        for(int i=0;i<size;i++)
        {
            System.out.println("Enter the Numbers");
            a[i] = s.nextInt();
        }
        for(int i =0;i<a.length;i++)
        {
            System.out.println("Number:"+a[i]);
        }
    }
}

